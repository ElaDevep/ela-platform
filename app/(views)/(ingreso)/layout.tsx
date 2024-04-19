import { Metadata } from "next";
import styles from "./page.module.sass"
import { Responsiver } from "@/app/components/ela-components";

export default function Layout(props:{
    children: React.ReactNode,
    background: React.ReactNode;
}) {
    return (
        <main className={styles.main}>
            {props.background}
            {props.children}  
        </main>
    );
}
