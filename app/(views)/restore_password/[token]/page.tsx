'use client'

import Frame from "@/app/components/frame/Frame";
import styles from "./page.module.sass"
import background_image from "@/public/jpg/fondo_login.jpg"
import ela_minilogo from "@/public/svg/logo_ela.svg"
import ela_logo from "@/public/svg/logotipo_ela.svg"
import { Form,TextField,Submit, PasswordField } from "@/ela-form"
import {Responsiver} from "@/ela-components";
import { useState } from "react";


export default function PasswordRestore() {
    const [email,setEmail] = useState<string>()

    const SubmitHandler = () =>{
    }

    return (
        <Responsiver className={styles.verticalRelation} 
        isMobile
        breakPoints={{
            relation:[12,10]
        }}>
            <main className={styles.main}>
            <Frame
                src={background_image}
                container = {styles.background_image}
                alt="background_image"
                contain
            />
            <div className={styles.front_container}>
                <div className={styles.emailSubmit_container}>
                    <Frame
                    src={ela_minilogo}
                    alt={"ela_logo"}
                    container={styles.minilogo_image}
                    />
                    <h3>Recuperación de contraseña</h3>
                    <p>A continuación crea tu nueva contraseña, recuerda que tiene que tener al menos:</p>
                    <ul>
                        <li>1 Letra mayúscula</li>
                        <li>1 Letra minúscula</li>
                        <li>4 Números</li>
                        <li>1 Carácter especial</li>
                        <li>12 Caracteres</li>
                    </ul>
                    <Form className={styles.logIn_form} onSubmit={SubmitHandler} >
                        <PasswordField name="newPass" getValue={setEmail} label="Nueva contraseña"/>
                        <PasswordField name="confPass" getValue={setEmail} label="Confirme nueva contraseña"/>
                        <Submit/>
                    </Form>
                </div>
            </div>
        </main>
        </Responsiver>
        
    );

}