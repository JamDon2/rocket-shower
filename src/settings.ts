import { Data } from "typed-factorio/data/types"

declare const data: Data

data.extend([
    {
        type: "int-setting",
        name: "rs:fire-interval",
        setting_type: "startup",
        default_value: 600,
    },
    {
        type: "int-setting",
        name: "rs:fire-distance",
        setting_type: "startup",
        default_value: 100,
    },
])
