import { Metadata } from "next";
import styles from "./page.module.sass"


export const metadata: Metadata = {
    description: "Generated by create next :v",
};

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
