'use client'

import { useEffect } from "react";
import { PageProvider } from "../context/PageContex";



export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {

    
    useEffect(()=>{

    })

    return <>
        <PageProvider>
            {children}
        </PageProvider>
    </>
    
}