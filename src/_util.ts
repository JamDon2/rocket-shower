export type Coordinate = { x: number; y: number }

export function coordinateByDistance(
    { x, y }: Coordinate,
    distance: number,
    angle: number
): Coordinate {
    let offset: Coordinate = { x: 0, y: 0 }

    const angleInSide = angle / 90

    const angleSide = math.floor(angleInSide)
    const sideLength = distance * 2

    switch (angleSide) {
        case 0: {
            offset = { x: -distance, y: angleInSide * sideLength - distance }
            break
        }
        case 1: {
            offset = {
                x: (angleInSide - 1) * sideLength - distance,
                y: distance,
            }
            break
        }
        case 2: {
            offset = {
                x: distance,
                y: distance - (angleInSide - 2) * sideLength,
            }
            break
        }
        case 3: {
            offset = {
                x: distance - (angleInSide - 3) * sideLength,
                y: -distance,
            }
            break
        }
    }

    return {
        x: math.floor((x + offset.x) * 100) / 100,
        y: math.floor((y + offset.y) * 100) / 100,
    }
}
