'use client'

import Frame from "@/app/components/frame/Frame";
import styles from "./page.module.scss"
import background_image from "@/public/jpg/fondo_login.jpg"
import ela_minilogo from "@/public/svg/logo_ela.svg"
import ela_logo from "@/public/svg/logotipo_ela.svg"
import { Form,TextField,Submit } from "@/ela-form"
import {Responsiver,Button} from "@/ela-components";
import MixStyles from "@/app/lib/actions/MixStyles";
import useProps from "@/app/hooks/useProps/useProps";




export default function LogIn() {
    const [frontProps,setFrontProps] = useProps((props)=>{
        props.addProps({className:styles.front_container})
        return props
    })

    const ScrollToSignIn = async () => {
        setFrontProps({
            type:'Add',
            prop:{className:MixStyles(styles.front_container,styles.to_logIn)}
        })
    }

    return (
        <Responsiver className={styles.verticalRelation} 
        isMobile
        breakPoints={{
            relation:[11,10],
            width:1000
        }}>
            <main className={styles.main}>
            <Frame
                src={background_image}
                container = {styles.background_image}
                alt="background_image"
                contain
            />
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
                    <Form className={styles.logIn_form} >
                        <TextField name={"email"} label="Correo"/>
                        <TextField name={"password"} label="Contraseña"/>
                        <Submit text="Ingresar"/>
                        <Submit text="Entrar como invitado" className={styles.logIn_guest}/>
                    </Form>
                </div>
            </div>
        </main>
        </Responsiver>
        
    );

}