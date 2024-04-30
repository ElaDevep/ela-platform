'use client'

import Frame from "@/app/components/frame/Frame";
import styler from "./page.module.sass"
import ela_minilogo from "@/public/svg/logo_ela.svg"
import ela_logo from "@/public/svg/logotipo_ela.svg"
import { Form,TextField,Submit, PasswordField } from "@/ela-form"
import {Responsiver,Button} from "@/ela-components";
import MixStyles from "@/app/lib/functions/MixStyles";
import { useProps } from "@/ela-hooks";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePageContext } from "@/app/context/PageContex";
import log_in from "@/ela-api/AUTH/log_in";



export default function LogIn() {
    const [password,setPassword] = useState<string>()
    const [Regret,setRegret] = useState<Boolean|undefined>()
    const [frontProps,setFrontProps] = useProps((props)=>{
        props.addProps({className:styler.front_container})
        return props
    })

    //@ts-ignore
    const {setUser,user} = usePageContext()

    const ScrollToSignIn = async () => {
        setFrontProps({
            type:'Add',
            prop:{className:MixStyles(styler.front_container,styler.to_logIn)}
        })
    }

    const LogInHandler = async(formData:object) =>{
        const response:APIResponse<string> = (await log_in(formData))
        if(response!=undefined){
            if(response.status=='error'){
                setRegret(true)
            }
        }
        return response
    }

    useEffect(()=>{
        console.log(user)
    },[user])

    return (
        <Responsiver className={styler.verticalRelation} 
        isMobile
        breakPoints={{
            relation:[9,10],
            width:900
        }}>
            <div {...frontProps}>
                <div className={styler.title_container}>
                    <Frame
                        src={ela_logo}
                        alt="ela_logotipo"
                        className = {styler.ela_logo}
                        contain
                    />
                    <h1>Bienvenido a ELA APP</h1>
                    <p>El lugar para ver los beneficios que la sostenibilidad trae a tu empresa.</p>
                    <Button action={ScrollToSignIn} className={styler.to_logIn_button}>Saber más</Button>
                    
                </div>
                <div className={styler.logIn_container}>
                    <Frame
                    src={ela_minilogo}
                    alt={"ela_logo"}
                    className={styler.minilogo_image}
                    contain
                    />
                    <h2>Iniciar Sesión</h2>
                    <Form className={styler.logIn_form} onSubmit={LogInHandler} styler={styler} >
                        <div></div>
                        <TextField name={"email"} required label="Correo"/>
                        <PasswordField name={"password"} required label="Contraseña"/>
                        <Submit>Ingresar</Submit>
                        {/* <Link href={'/usuarios'} className={styler.asGuest_link}>Entrar como invitado</Link>*/}
                    </Form>
                    {Regret &&
                    <Link href={'/recuperacion_contrasena'} className={styler.forgotPassword_link}>
                        ¿Has olvidado tu contraseña?
                    </Link>}

                </div>
            </div>
        </Responsiver>
        
    );

}