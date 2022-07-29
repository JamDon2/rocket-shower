import { Data } from "typed-factorio/data/types"

declare const data: Data

data.extend([
    {
        type: "int-setting",
        name: "rs:fire-interval",
        setting_type: "startup",
        default_value: 600,
        order: "b",
    },
    {
        type: "int-setting",
        name: "rs:fire-distance",
        setting_type: "startup",
        default_value: 100,
        order: "c",
    },
    {
        type: "int-setting",
        name: "rs:player-resistance",
        setting_type: "startup",
        default_value: 100,
        order: "a",
    },
    {
        type: "int-setting",
        name: "rs:damage-artillery-projectile",
        setting_type: "startup",
        default_value: 500,
        order: "d",
    },
    {
        type: "int-setting",
        name: "rs:damage-atomic-rocket",
        setting_type: "startup",
        default_value: 400,
        order: "e",
    },
    {
        type: "int-setting",
        name: "rs:damage-atomic-bomb-wave",
        setting_type: "startup",
        default_value: 400,
        order: "f",
    },
    {
        type: "int-setting",
        name: "rs:damage-atomic-bomb-ground-zero-projectile",
        setting_type: "startup",
        default_value: 100,
        order: "g",
    },
])
