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
import logIn from "@/app/(views)/(ingreso)/inicio_sesion/log_in";
import Link from "next/link";
import { usePageContext } from "@/app/context/PageContex";



export default function LogIn() {
    const [password,setPassword] = useState<string>()
    const [Regret,setRegret] = useState<Boolean|undefined>()
    const [frontProps,setFrontProps] = useProps((props)=>{
        props.addProps({className:styles.front_container})
        return props
    })

    //@ts-ignore
    const {setUser,user} = usePageContext()

    const ScrollToSignIn = async () => {
        setFrontProps({
            type:'Add',
            prop:{className:MixStyles(styles.front_container,styles.to_logIn)}
        })
    }

    const LogInHandler = async(formData:object) =>{
        try{
            await logIn(formData)
        }
        catch(e){
            setRegret(true)
        }
    }

    useEffect(()=>{
        console.log(user)
    },[user])

    return (
        <Responsiver className={styles.verticalRelation} 
        isMobile
        breakPoints={{
            relation:[9,10]
        }}>
            <div {...frontProps}>
                <div className={styles.title_container}>
                    <Frame
                        src={ela_logo}
                        alt="ela_logotipo"
                        className = {styles.ela_logo}
                        contain
                    />
                    <h1>Bienvenido a ELA APP</h1>
                    <p>El lugar para ver los beneficios que la sostenibilidad trae a tu empresa.</p>
                    <Button action={ScrollToSignIn} className={styles.to_logIn_button}>Saber más</Button>
                    
                </div>
                <div className={styles.logIn_container}>
                    <Frame
                    src={ela_minilogo}
                    alt={"ela_logo"}
                    className={styles.minilogo_image}
                    contain
                    />
                    <h2>Iniciar Sesión</h2>
                    <Form className={styles.logIn_form} onSubmit={LogInHandler} >
                        <TextField name={"email"} label="Correo" autocomplete/>
                        <TextField name={"password"} label="Contraseña" autocomplete/>
                        <Submit text="Ingresar"/>
                        <Submit text="Entrar como invitado" className={styles.logIn_guest}/>
                    </Form>
                    {Regret &&
                    <Link href={'/recuperacion_contrasena'} className={styles.forgotPassword_link}>
                        ¿Has olvidado tu contraseña?
                    </Link>}

                </div>
            </div>
        </Responsiver>
        
    );

}