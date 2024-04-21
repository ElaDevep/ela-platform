'use client'
import { Suspense, useEffect } from "react"
import styles from './page.module.sass'
import Link from "next/link";


export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {


    return <>
        <div className={styles.modal}>
            <div className={styles.userForm_container}>
                <Link href={'/usuarios'} className={styles.exit_link}>x</Link>
                {children}
            </div>
        </div>
    </>
    
}