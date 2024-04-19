'use client'

import Link from 'next/link'
import { Button, Frame } from '../ela-components'
import styles from './page.module.sass'
import logo_img from '@/public/svg/logo_ela_white.svg'
import user_img from '@/public/svg/user_profile.png'
import { usePageContext } from '@/app/context/PageContex'
import { useEffect } from 'react'

const Header = () => {
    //@ts-ignore
    const {user} = usePageContext()
    
    useEffect(()=>{
        console.log(user)
    },[user])

    return <>
        <header className={styles.header}>
            <div className={styles.headerTitle_container}>
                <div className={styles.logo_container}>
                    <span>ELA APP</span>
                    <Frame
                        src={logo_img}
                        alt={'logo'}
                        className={styles.logo_image}
                    />
                </div>
                <div className={styles.currentUser_container}>
                    <span>{user && user.name}</span>
                    <Link
                        className={styles.logOut_link}
                        href={'/'}
                    >
                        Cerrar Sesión
                    </Link>
                    <Frame
                        src={user_img}
                        alt={'user'}
                        className={styles.userProfile_image}
                    />
                </div>
            </div>
            <nav className={styles.main_nav}>
                <Link className={styles.navOption_link}
                href={'/'}
                >
                    Section
                </Link>
                <Link className={styles.navOption_link}
                href={'/'}
                >
                    Section
                </Link>
                <Link className={styles.navOption_link}
                href={'/'}
                >
                    Section
                </Link>
                <Link className={styles.navOption_link}
                href={'/'}
                >
                    Section
                </Link>
            </nav>
        </header>
    </>
}


export default Header