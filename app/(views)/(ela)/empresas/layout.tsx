import { Header } from "@/ela-components";
import styles from "./layout.module.sass"

export default function Layout({  
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {

    return <>
        {children}  
    </>
}
