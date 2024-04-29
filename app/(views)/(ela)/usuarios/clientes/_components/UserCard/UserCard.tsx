import styles from "./component.module.sass"
import Image from "next/image";
import MixStyles from "@/app/lib/functions/MixStyles";
import { useProps } from "@/app/hooks/ela-hooks";
import { useEffect, useState } from "react";
import { UserCardT } from "./types";
import { Button, Frame } from "@/app/components/ela-components";
import defaultProfile from "@/public/svg/user_profile.png"
import ela_logo from "@/public/svg/logo_ela.svg"
import Cloner from "@/app/components/cloner/Cloner";
import Link from "next/link";

const UserCard: React.FC<UserCardT> = ({user}) => {
    return <>
        <div className={styles.userCard_container}>
                <div className={styles.info_container}>
                    <img
                    {...user && user.imgProfile ? {src:user.imgProfile} : {src:'/svg/user_profile.png'}}
                    alt={'user'}
                    className={styles.user_image}
                    />
                
            {user ?  
                <>  
                    <h5>Nombre Completo</h5>
                    <p>{user.name+' '+user.lastname}</p>
                    <h5>Email</h5>
                    <p>{user.email}</p>
                    <h5>Teléfono</h5>
                    <p>{user.mobile}</p>
                    <h5>Empresa</h5>
                    <p>{user.idEnterprice}</p>
                    
                    <h5>Rol</h5>
                    <p>{user.role}</p>
                </>
                :
                <span className={styles.noUser_span}>Selecciona un usuario para visualizar su información</span>
            }
                </div>
            {user &&
                <div className={styles.actions_container}>
                    <Link className={styles.userModify_button} href={'/usuarios/clientes/editar/'+user._id}>
                        Modificar
                    </Link>
                    <Button action={()=>{}} className={styles.userDelete_button}>
                        Eliminar
                    </Button>
                </div>
            }
        </div>
    </>
}

export default UserCard