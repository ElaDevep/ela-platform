'use client'

import Frame from "@/app/components/frame/Frame";
import styles from "./page.module.sass"
import background_image from "@/public/jpg/fondo_login.jpg"
import ela_minilogo from "@/public/svg/logo_ela.svg"
import ela_logo from "@/public/svg/logotipo_ela.svg"
import { Form,TextField,Submit, PasswordField } from "@/ela-form"
import {Responsiver} from "@/ela-components";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import restorePassword from "@/app/_api/_AUTH/restore_password";
import changePassword from "@/app/_api/_AUTH/change_password";
import validateToken from "@/app/_api/_AUTH/validate_token";


export default function PasswordRestore({ params }: { params: { token: string } }) {
    const [newPassword,setNewPassword] = useState<string>()
    const [confPassword,setConfPassword] = useState<string>()
    const [userId,setUserId] = useState<string>()

    const SubmitHandler = (formData:object) =>{
        changePassword({userId:userId,...formData})
    }

    const tokenValidator = async() =>{
        //@ts-ignore
        setUserId((await validateToken(params.token)))
    }

    useEffect(()=>{
        tokenValidator()
    },[])

    return (
        <Responsiver className={styles.verticalRelation} 
        isMobile
        breakPoints={{
            relation:[8,10]
        }}>
            <div className={styles.front_container}>
                <div className={styles.emailSubmit_container}>
                    <Frame
                    src={ela_minilogo}
                    alt={"ela_logo"}
                    className={styles.minilogo_image}
                    />
                    <h3>Recuperación de contraseña</h3>
                    {/* <p>A continuación crea tu nueva contraseña, recuerda que tiene que tener al menos:</p>
                    <ul>
                        <li>1 Letra mayúscula</li>
                        <li>1 Letra minúscula</li>
                        <li>4 Números</li>
                        <li>1 Carácter especial</li>
                        <li>12 Caracteres</li>
                    </ul> */}
                    <Form className={styles.logIn_form} onSubmit={SubmitHandler} >
                        <PasswordField name="password" label="Nueva contraseña"/>
                        <PasswordField name="confirmPassword" label="Confirme nueva contraseña"/>
                        <Submit/>
                    </Form>
                </div>
            </div>
        </Responsiver>
        
    );

}