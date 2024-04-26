'use client'

import Frame from "@/app/components/frame/Frame";
import styler from "./page.module.sass"
import background_image from "@/public/jpg/fondo_login.jpg"
import ela_minilogo from "@/public/svg/logo_ela.svg"
import check from '@/public/svg/check.svg'
import { Form,TextField,Submit } from "@/ela-form"
import {Responsiver} from "@/ela-components";
import {  useState } from "react";
import send_restore_email from "@/app/api/AUTH/send_restore_email";

export default function PasswordRestoreRequest() {
    const [emailSended,setEmailSended] = useState<boolean>(false)
    
    const SubmitHandler = async(formData:object) =>{
        const response = await send_restore_email(formData)
        if(response.status=='ok'){
            setEmailSended(true)
        }
        return response
    }

    return (
        <Responsiver className={styler.verticalRelation} 
        breakPoints={{
            relation:[9,10]
        }}>
            <div className={styler.front_container}>
                <div className={styler.emailSubmit_container}>
                    <Frame
                    src={ela_minilogo}
                    alt={"ela_logo"}
                    className={styler.minilogo_image}
                    contain
                    />
                    
                    {emailSended &&
                        <div className={styler.sendMessage_container}>
                            <Frame
                            src={"/svg/check.svg"}
                            alt={"ela_logo"}
                            className={styler.check_svg}
                            contain
                            />
                            
                            <h4>Correo enviado correctamente</h4>
                            <p>Puede cerrar esta pestaña</p>
                        </div>
                    }
                    <div className={styler.formSubmit_container}>
                        <h3>Recuperación de contraseña</h3>
                        <p>Ingresa tu correo, verificaremos tu estado en el sistema y de inmediato te enviaremos un código de recuperación.</p>
                        <Form className={styler.emailSubmit_form} onSubmit={SubmitHandler} >
                            <TextField name="email" placeholder="Correo electronico" required/>
                            <Submit>Enviar</Submit>
                        </Form>
                    </div>
                </div>
            </div>
        </Responsiver>
        
    );

}