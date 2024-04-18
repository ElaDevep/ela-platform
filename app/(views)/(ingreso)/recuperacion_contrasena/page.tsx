'use client'

import Frame from "@/app/components/frame/Frame";
import styles from "./page.module.sass"
import background_image from "@/public/jpg/fondo_login.jpg"
import ela_minilogo from "@/public/svg/logo_ela.svg"
import { Form,TextField,Submit } from "@/ela-form"
import {Responsiver} from "@/ela-components";
import { useEffect, useState } from "react";
import restorePassword from "@/app/(views)/(ingreso)/recuperacion_contrasena/[token]/restore_password";
import { usePathname } from "next/navigation";


export default function PasswordRestoreRequest() {
    const [emailSended,setEmailSended] = useState<boolean>()
    
    const SubmitHandler = async(formData:object) =>{
        setEmailSended((await restorePassword(formData)!=undefined)&&true)
    }

    return (
        <Responsiver className={styles.verticalRelation} 
        breakPoints={{
            relation:[9,10]
        }}>
            <div className={styles.front_container}>
                <div className={styles.emailSubmit_container}>
                    <Frame
                    src={ela_minilogo}
                    alt={"ela_logo"}
                    className={styles.minilogo_image}
                    contain
                    />
                    <h3>Recuperación de contraseña</h3>
                    <p>Ingresa tu correo, verificaremos tu estado en el sistema y de inmediato te enviaremos un código de recuperación.</p>
                    <Form className={styles.emailSubmit_form} onSubmit={SubmitHandler} >
                        <TextField name="email" placeholder="Correo electronico"/>
                        <Submit/>
                    </Form>
                    {emailSended &&
                        <h5>Correo enviado</h5>
                    }
                </div>
            </div>
        </Responsiver>
        
    );

}