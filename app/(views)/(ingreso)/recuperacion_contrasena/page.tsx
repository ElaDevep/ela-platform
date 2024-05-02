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
import { useForm } from "react-hook-form";



export interface RestoreEmailForm{
    email:string
}



export default function PasswordRestoreRequest() {
    const [emailSended,setEmailSended] = useState<boolean>()
    const restoreForm = useForm()
    const {register,formState} = restoreForm
    const {errors} = formState



    const SubmitEmailHandler = async(formData:object) =>{
        const response = await send_restore_email(formData)
        console.log(response)
        if(response.status=='ok'){
            setEmailSended(true)
        }
        else{
            setEmailSended(false)
        }
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
                            src={check}
                            alt={"check"}
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
                        <Form className={styler.emailSubmit_form} submit={SubmitEmailHandler} useForm={restoreForm}>
                            <TextField 
                                placeholder="Correo electronico" 
                                useInput={register('email',{
                                    pattern:{
                                        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message:'El formato del correo no es valido'
                                    }
                                })} 
                                errors={errors}
                            />
                            <Submit>Enviar</Submit>
                            {emailSended!=undefined &&
                            emailSended==false &&
                                <p className={styler.sendError}>No se ha encontrado el correo</p>
                            }
                        </Form>
                    </div>
                </div>
            </div>
        </Responsiver>
        
    );

}