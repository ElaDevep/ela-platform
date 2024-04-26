import { Header } from "@/ela-components";
import styles from "./layout.module.sass"

export default function Layout(props:{  
    children: React.ReactNode,
    form:React.ReactNode
}) {
    return <>
        {props.children}  
        {props.form}
    </>
}
