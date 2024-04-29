'use client'

import Frame from "@/app/components/frame/Frame";
import styler from "./page.module.sass"
import ela_minilogo from "@/public/svg/logo_ela.svg"
import { Form,Submit, PasswordField } from "@/ela-form"
import {Responsiver} from "@/ela-components";
import { useEffect, useLayoutEffect, useState } from "react";
import { Router } from "next/router";
import validate_restore_token from "@/app/api/AUTH/validate_restore_token";
import restore_password from "@/app/api/USERS/restore_password";
import Link from "next/link";


export default function PasswordRestore({ params }: { params: { token: string } }) {
    const [userId,setUserId] = useState<string>()
    const [passwordChanged,setPasswordChanged] = useState<boolean>(false)

    const ChangePassword = async (formData:object) =>{
        const response = await restore_password({userId:userId,...formData})
        if(response.status=='ok'){
            setPasswordChanged(true)
        }
        return response
    }

    const tokenValidator = async() =>{
        //@ts-ignore
        const response:APIResponse = await validate_restore_token(params.token)
        console.log(response)
        if(response != undefined) setUserId(response.userId)
        else setUserId('none')
    }

    useLayoutEffect(()=>{
        tokenValidator()
    },[])

    useEffect(()=>{
        console.log(userId)
    },[userId])


    return (
        <Responsiver className={styler.verticalRelation} 
        isMobile
        breakPoints={{
            relation:[8,10]
        }}>
            <div className={styler.front_container}>
                <div className={styler.emailSubmit_container}>
                    <Frame
                    src={ela_minilogo}
                    alt={"ela_logo"}
                    className={styler.minilogo_image}
                    />
                    <h3>Recuperación de contraseña</h3>
                    {userId == 'none' &&
                        <div className={styler.tokenError_container}>
                            <h4>
                                El link no es valido, solicita lo nuevamente <Link href={'/recuperacion_contrasena'}>aquí</Link>
                            </h4>
                        </div>
                    }
                    {userId != undefined && userId != 'none' && !passwordChanged &&
                    <Form className={styler.restorePassword_form} onSubmit={ChangePassword}>
                        <PasswordField 
                            name="password" 
                            label="Nueva contraseña" 
                            pattern={/^(?=.*[a-z]+)(?=.*[A-Z]+)(?=.*(?:\d\D*){4,}.*)(?=.*[!@#$%^&(){}*_\[\]]+)[a-zA-Z0-9!@#$%^&*_(){}\[\]]{12,}$/} 
                            patternWarn={<>
                                La contraseña debe tener por lo menos:
                                <ul className={styler.passwordConditions_list}>
                                    <li>1 Letra mayúscula</li>
                                    <li>1 Letra minúscula</li>
                                    <li>4 Números</li>
                                    <li>1 Carácter especial</li>
                                    <li>12 Caracteres en total</li>
                                </ul>
                            </>}
                            required
                            />
                        <PasswordField name="confirmPassword" label="Confirme nueva contraseña"
                            required
                        />
                        <Submit>Enviar</Submit>
                    </Form>
                    }
                    {passwordChanged &&
                        <div className={styler.passwordChanged_container}>
                            <Frame
                            src={"/svg/check.svg"}
                            alt={"ela_logo"}
                            className={styler.check_svg}
                            contain
                            />
                            <h4>Contraseña restaurada exitosamente</h4>
                            <Link href={'/inicio_sesion'}>Iniciar sesión</Link>
                        </div>
                    }
                </div>
            </div>
        </Responsiver>
        
    );

}