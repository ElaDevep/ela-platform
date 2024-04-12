import styles from "./component.module.sass"
import Image from "next/image";
import MixStyles from "@/app/lib/functions/MixStyles";
import { useProps } from "@/app/hooks/ela-hooks";
import { useEffect } from "react";
import { UserCardT } from "./types";
import { Frame } from "@/app/components/ela-components";
import perfilPhoto from "@/public/svg/user_profile.png"
import ela_logo from "@/public/svg/logo_ela.svg"

const UserCard: React.FC<UserCardT> = ({}) => {
    return <>
        <div className={styles.userCard_container}>
            <Frame
            src={perfilPhoto}
            alt={'user'}
            contain
            className={styles.user_image}
            ></Frame>
        </div>
    </>
}

export default UserCard