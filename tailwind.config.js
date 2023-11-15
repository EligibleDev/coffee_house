import keepPreset from "keep-react/src/keep-preset.js";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-green": "#4d8b55",
                "secondary-black": "#151515",
            },
        },
        fontFamily: {
            poppins: ["Poppins", "sans-serif"],
            jost: ["Jost", "serif"],
        },
    },
    plugins: [],
    // presets: [keepPreset],
};
