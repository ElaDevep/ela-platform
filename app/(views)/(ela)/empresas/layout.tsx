import { Header } from "@/ela-components";
import styles from "./layout.module.sass"

export default function Layout({  
    children,
    form
    }: Readonly<{
    children: React.ReactNode;
    form: React.ReactNode;
    }>) {
    return <>
        {children}  
        {form}
    </>
}
