'use client'

import Link from 'next/link'
import { Button, Frame } from '../ela-components'
import styler from './Header.module.sass'
import logo_img from '@/public/svg/logo_ela_white.svg'
import user_img from '@/public/svg/user_profile.png'
import { usePageContext } from '@/app/context/PageContex'
import { useEffect } from 'react'
import log_in from '@/app/api/AUTH/log_in'
import log_out from '@/app/api/AUTH/log_out'
import MainMenu from './MainMenu'
import { HeaderInterface } from './types'

const Header: React.FC<HeaderInterface> = () => {
    //@ts-ignore
    const {user,logOut,access} = usePageContext()
    
    useEffect(()=>{
        console.log(user)
    },[user])

    return <>
        <header className={styler.header}>
            <div className={styler.headerTitle_container}>
                <div className={styler.logo_container}>
                    <span>ELA APP</span>
                    <Frame
                        src={logo_img}
                        alt={'logo'}
                        className={styler.logo_image}
                    />
                </div>
                <div className={styler.currentUser_container}>
                    <span>{user && user.name}</span>
                    <button
                        className={styler.logOut_link}
                        onClick={()=>{logOut()}}
                    >
                        Cerrar Sesión
                    </button>
                    <img
                        src={'https://yt3.ggpht.com/a/AGF-l78sFEzgzSLc5uN2JaELPmIdkDqT7csE4ihsbg=s900-c-k-c0xffffffff-no-rj-mo'}
                        alt={'user'}
                        className={styler.userProfile_image}
                    />
                </div>
            </div>
            <MainMenu routes={access} className={styler.main_nav}></MainMenu>
        </header>
    </>
}


export default Header
