'use client'

import Frame from "@/app/components/frame/Frame";
import styles from "./page.module.sass"
import background_image from "@/public/jpg/fondo_login.jpg"
import ela_minilogo from "@/public/svg/logo_ela.svg"
import { Form,TextField,Submit } from "@/ela-form"
import {Responsiver} from "@/ela-components";
import { useState } from "react";


export default function PasswordRestoreRequest() {
    const [email,setEmail] = useState<string>()

    const SubmitHandler = () =>{
    }

    return (
        <Responsiver className={styles.verticalRelation} 
        breakPoints={{
            relation:[8,10]
        }}>
            <main className={styles.main}>
            <Frame
                src={background_image}
                container = {styles.background_image}
                alt="background_image"
                cover
            />
            <div className={styles.front_container}>
                <div className={styles.emailSubmit_container}>
                    <Frame
                    src={ela_minilogo}
                    alt={"ela_logo"}
                    container={styles.minilogo_image}
                    contain
                    />
                    <h3>Recuperación de contraseña</h3>
                    <p>Ingresa tu correo, verificaremos tu estado en el sistema y de inmediato te enviaremos un código de recuperación.</p>
                    <Form className={styles.emailSubmit_form} onSubmit={SubmitHandler} >
                        <TextField name="email" getValue={setEmail} placeholder="Correo electronico"/>
                        <Submit/>
                    </Form>
                </div>
            </div>
        </main>
        </Responsiver>
        
    );

}