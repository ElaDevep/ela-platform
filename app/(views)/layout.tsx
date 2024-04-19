'use client'

import { Suspense, useEffect } from "react";
import { PageProvider } from "../context/PageContex";
import Loading from "./loading";



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