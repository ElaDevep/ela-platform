'use client'

import Frame from "@/app/components/frame/Frame";
import styles from "./page.module.sass"
import background_image from "@/public/jpg/fondo_login.jpg"
import ela_minilogo from "@/public/svg/logo_ela.svg"
import ela_logo from "@/public/svg/logotipo_ela.svg"
import { Form,TextField,Submit } from "@/ela-form"
import {Responsiver,Button} from "@/ela-components";
import MixStyles from "@/app/lib/actions/MixStyles";
import { useProps } from "@/ela-hooks";
import { useState } from "react";
import logIn from "@/app/_api/_AUTH/log_in";
import { usePathname } from "next/navigation";




export default function LogIn() {
    const [user,setUser] = useState<string>()
    const [password,setPassword] = useState<string>()
    const [frontProps,setFrontProps] = useProps((props)=>{
        props.addProps({className:styles.front_container})
        return props
    })
    const router = usePathname()

    const ScrollToSignIn = async () => {
        setFrontProps({
            type:'Add',
            prop:{className:MixStyles(styles.front_container,styles.to_logIn)}
        })
    }

    const LogInHandler = async() =>{
        console.log(user)
        console.log(password)
        await logIn({
            email:user,
            password:password
        })
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
            <div className={styles.front_container}></div>
            <div {...frontProps}>
                <div className={styles.title_container}>
                    <Frame
                        src={ela_logo}
                        alt="ela_logotipo"
                        container = {styles.ela_logo}
                        fill
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
                    <Form className={styles.logIn_form} onSubmit={LogInHandler} >
                        <TextField name={"email"} label="Correo" getValue={setUser}/>
                        <TextField name={"password"} label="Contraseña" getValue={setPassword}/>
                        <Submit text="Ingresar"/>
                        <Submit text="Entrar como invitado" className={styles.logIn_guest}/>
                    </Form>
                </div>
            </div>
        </main>
        </Responsiver>
        
    );

}