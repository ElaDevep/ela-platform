import styles from "./component.module.sass"
import Image from "next/image";
import MixStyles from "@/app/lib/functions/MixStyles";
import { useProps } from "@/app/hooks/ela-hooks";
import { useEffect, useState } from "react";
import { UserCardT } from "./types";
import { Button, Frame } from "@/app/components/ela-components";
import perfilPhoto from "@/public/svg/user_profile.png"
import ela_logo from "@/public/svg/logo_ela.svg"
import Cloner from "@/app/components/cloner/Cloner";

const UserCard: React.FC<UserCardT> = ({user}) => {
    return <>
        {user &&
        <div className={styles.userCard_container}>
            <div className={styles.info_container}>
                <Frame
                src={perfilPhoto}
                alt={'user'}
                contain
                className={styles.user_image}
                ></Frame>
                <h5>Razón social</h5>
                <p>{user.name}</p>
                <h5>Email</h5>
                <p>{user.email}</p>
                <h5>Teléfono</h5>
                <p>{user.mobile}</p>
                <h5>Rol</h5>
                <p>{user.role}</p>
            </div>
            <div className={styles.actions_container}>
                <Button action={()=>{}} className={styles.userModify_button}>
                    Modificar
                </Button>
                <Button action={()=>{}} className={styles.userDelete_button}>
                    Eliminar
                </Button>
            </div>
        </div>}
    </>
}

export default UserCard