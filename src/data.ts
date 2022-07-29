import { Data } from "typed-factorio/data/types"
import { table } from "util"

declare const data: Data

data.extend([
    {
        type: "damage-type",
        name: "rs:damage",
        hidden: true,
    },
])

data.raw["character"]["character"].resistances = [
    {
        type: "rs:damage",
        decrease: 0,
        percent: settings.startup["rs:player-resistance"].value,
    },
]

const artilleryProjectile = table.deepcopy(
    data.raw["artillery-projectile"]["artillery-projectile"]
)

artilleryProjectile.name = "rs:artillery-projectile"

artilleryProjectile.action.action_delivery.target_effects[1].action.action_delivery.target_effects =
    [
        {
            type: "damage",
            damage: {
                amount: settings.startup["rs:damage-artillery-projectile"]
                    .value,
                type: "rs:damage",
            },
        },
    ]

const atomicBombGroundZeroProjectile = table.deepcopy(
    data.raw["projectile"]["atomic-bomb-ground-zero-projectile"]
)

atomicBombGroundZeroProjectile.name = "rs:atomic-bomb-ground-zero-projectile"

atomicBombGroundZeroProjectile.action[1].action_delivery.target_effects.damage =
    {
        amount: settings.startup["rs:damage-atomic-bomb-ground-zero-projectile"]
            .value,
        type: "rs:damage",
    }

const atomicBombWave = table.deepcopy(
    data.raw["projectile"]["atomic-bomb-wave"]
)

atomicBombWave.name = "rs:atomic-bomb-wave"

atomicBombWave.action[1].action_delivery.target_effects.damage = {
    amount: settings.startup["rs:damage-atomic-bomb-wave"].value,
    type: "rs:damage",
}

const atomicRocket = table.deepcopy(data.raw["projectile"]["atomic-rocket"])

atomicRocket.name = "rs:atomic-rocket"

atomicRocket.action.action_delivery.target_effects[7].damage = {
    amount: settings.startup["rs:damage-atomic-rocket"].value,
    type: "rs:damage",
}

atomicRocket.action.action_delivery.target_effects[12].action.action_delivery.projectile =
    "rs:atomic-bomb-ground-zero-projectile"

atomicRocket.action.action_delivery.target_effects[13].action.action_delivery.projectile =
    "rs:atomic-bomb-wave"

data.extend([
    artilleryProjectile,
    atomicBombGroundZeroProjectile,
    atomicBombWave,
    atomicRocket,
])
