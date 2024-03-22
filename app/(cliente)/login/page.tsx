'use client'
'use strict'

import Frame from "@/components/Frame";
import Image from "next/image";
import styles from "./page.module.css"
import { relative } from "path";
import background from "@/public/fondo_login.jpg"


export default function Home() {
    const frame: FrameT = {
        filter: styles.mark,
        src:background,
        alt:"background_image"
    }

    return (
        <main>
            <Frame
                src={background}
                container = {styles.img_background}
                alt="background_image"
                cover
                >
            </Frame>
        </main>
    );

}