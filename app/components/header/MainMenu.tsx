'use client'

import Link from 'next/link'
import { MainMenuInterface } from './types'


const MainMenu: React.FC<MainMenuInterface>= ({
    routes,
    className
}) => {
    
    console.log(routes)

    return <>
            <nav className={className}>
                {routes && 
                    routes.map((route)=>{
                        return <>
                            <Link 
                                href={route.route}
                            >
                                {route.title}
                            </Link>
                        </>

                    })
                }
            </nav>
    </>
}


export default MainMenu