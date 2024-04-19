import { Header } from "@/app/components/ela-components";
import styles from "./page.module.sass"

export default function Layout(props:{  
    children: React.ReactNode,
    form:React.ReactNode
}) {
    return <>
        <Header/>
        <main className={styles.main}>
            {props.children}  
            {props.form}
        </main>
    </>
    
}
