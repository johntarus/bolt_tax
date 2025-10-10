import { Inter, Roboto, Urbanist } from "next/font/google";
import localFont from "next/font/local";

export const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

export const roboto = Roboto({
    subsets: ["latin"],
    weight: ["400", "500", "700", "900"],
    style: ["normal", "italic"],
    display: "swap",
});

export const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    display: "swap",
});

export const foundersGrotesk = localFont({
    src: [
        {
            path: './founders-grotesk/FoundersGrotesk-Semibold.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './thicccboi/THICCCBOI-Thin.ttf',
            weight: '400',
            style: 'normal',
        }
    ]
})

export const thiccboi = localFont({
    src: [
        {
            path: './thicccboi/THICCCBOI-Bold.ttf',
            weight: '400',
            style: 'normal',
        }
    ]
})
