import { Header } from "@/app/components/ela-components";
import styles from "./page.module.sass"

export default function Layout({
    children,
    background
}: Readonly<{
    children: React.ReactNode,
    background: React.ReactNode;
}>) {
    return <>
        <Header/>
        <main className={styles.main}>
            {children}  
        </main>
    </>
    
}
