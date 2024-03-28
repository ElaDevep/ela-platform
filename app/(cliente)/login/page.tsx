'use client'

import Frame from "@/components/Frame";
import styles from "./page.module.css"
import background_image from "@/public/fondo_login.jpg"
import ela_minilogo from "@/public/svg/logo_ela.svg"
import ela_logo from "@/public/svg/logotipo_ela.svg"
import Form from "@/components/Form";
import { TextField,Submit } from "@/components/form/Inputs"
import Button from "@/app/components/Button";
import { useEffect, useState } from "react";
import MixStyles from "@/app/lib/actions/MixStyles";
import DeviceType from "@/app/lib/actions/DeviceType";



export default function Home() {
    const [frontStyle,setFrontStyle] = useState(styles.front_container)

    const ScrollToSignIn = async () => {
        setFrontStyle(MixStyles(styles.front_container,styles.to_logIn))
    }
    const frame: FrameT = {
        filter: styles.mark,
        src:background_image,
        alt:"background_image"
    }
    
    return (
        <main className={styles.main}>
            <Frame
                src={background_image}
                container = {styles.background_image}
                alt="background_image"
                cover
            />
            <div className={frontStyle}>
                <div className={styles.title_container}>
                    <Frame
                        src={ela_logo}
                        alt="ela_logotipo"
                        container = {styles.ela_logo}
                    />
                    <h1>Bienvenido a ELA APP</h1>
                    <p>El lugar para ver los beneficios que la sostenibilidad trae a tu empresa.</p>
                    
                    <Button action={ScrollToSignIn} className={styles.to_logIn_button}>Saber más</Button>
                </div>
                <div className={styles.logIn_container}>
                    <Frame
                    src={ela_minilogo}
                    alt={"ela_logo"}
                    container={styles.minilogo_image}
                    />
                    <h2>Iniciar Sesión</h2>
                    <Form className={styles.logIn_form}>
                        <TextField name={"email"} label="Correo"/>
                        <TextField name={"password"} label="Contraseña"/>
                        <Submit text="Ingresar"/>
                        <Submit text="Entrar como invitado" className={styles.logIn_guest}/>
                    </Form>
                </div>
            </div>
        </main>
    );

}