'use client'

import Frame from "@/app/components/frame/Frame";
import styles from "./page.module.sass"
import background_image from "@/public/jpg/fondo_login.jpg"
import ela_minilogo from "@/public/svg/logo_ela.svg"
import ela_logo from "@/public/svg/logotipo_ela.svg"
import { Form,TextField,Submit } from "@/ela-form"
import {Responsiver,Button} from "@/ela-components";
import MixStyles from "@/app/lib/functions/MixStyles";
import { useProps } from "@/ela-hooks";
import { useEffect, useState } from "react";
import logIn from "@/app/_api/_AUTH/log_in";
import { usePathname } from "next/navigation";
import Link from "next/link";




export default function LogIn() {


    return <>
        <header>
            <nav>
            </nav>
        </header>
    </>
        

}