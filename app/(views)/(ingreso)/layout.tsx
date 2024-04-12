import styles from "./page.module.sass"

export default function Layout({
    children,
    background
}: Readonly<{
    children: React.ReactNode,
    background: React.ReactNode;
}>) {
    return (
    <main className={styles.main}>
        {background}
        {children}  
    </main>
    );
}
