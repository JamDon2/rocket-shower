import { coordinateByDistance, Coordinate } from "./_util"

declare const global: {
    activePlayers: { [key: number]: boolean }
    playerLastPosition: { [key: number]: Coordinate }
    fireDistance: number
}

commands.add_command(
    "rs:start",
    ["rs:game-control.start-help"],
    function (args) {
        if (!global.activePlayers[args.player_index as number]) {
            global.activePlayers[args.player_index as number] = true
            game.print(["rs:game-control.start"], { r: 232, g: 208, b: 51 })
        } else {
            game.players[args.player_index || 0].print(
                ["rs:game-control.start-error"],
                {
                    r: 219,
                    g: 50,
                    b: 50,
                }
            )
        }
    }
)

commands.add_command("rs:stop", ["rs:game-control.stop-help"], function (args) {
    if (global.activePlayers[args.player_index as number]) {
        global.activePlayers[args.player_index as number] = false
        game.print(["rs:game-control.stop"], { r: 232, g: 208, b: 51 })
    } else {
        game.players[args.player_index || 0].print(
            ["rs:game-control.stop-error"],
            {
                r: 219,
                g: 50,
                b: 50,
            }
        )
    }
})

script.on_nth_tick(
    settings.startup["rs:fire-interval"].value as number,
    function () {
        for (const entry of Object.entries(global.activePlayers)) {
            if (entry[1]) {
                const player = game.players[entry[0]]

                if (player.valid) {
                    let nuclear: boolean = false

                    if (global.playerLastPosition[player.index]) {
                        const lastX = global.playerLastPosition[player.index].x
                        const lastY = global.playerLastPosition[player.index].y

                        if (
                            lastX === player.position.x &&
                            lastY === player.position.y
                        ) {
                            nuclear = true
                        }
                    }

                    createRocket(player, nuclear)

                    global.playerLastPosition[player.index] = player.position
                }
            }
        }
    }
)

script.on_init(function () {
    global.activePlayers = {}
    global.playerLastPosition = {}
    global.fireDistance = settings.startup["rs:fire-distance"].value as number
})

function createRocket(player: LuaPlayer, nuclear: boolean) {
    if (nuclear) {
        game.surfaces.nauvis.create_entity({
            name: "rs:atomic-rocket",
            position: coordinateByDistance(
                player.position,
                global.fireDistance,
                math.random(0, 360)
            ),
            target: player.position,
            speed: 1,
        })
    } else {
        game.surfaces.nauvis.create_entity({
            name: "rs:artillery-projectile",
            position: coordinateByDistance(
                player.position,
                global.fireDistance,
                math.random(0, 360)
            ),
            target: player.position,
            speed: 1,
        })
    }
}
