import { Frame, Responsiver } from "@/app/components/ela-components";
import styles from "./page.module.sass"
import background_image from "@/public/jpg/fondo_login.jpg"


export default function Background() {
    return(
        <Responsiver className={styles.verticalRelation} 
        isMobile
        breakPoints={{
            relation:[12,10]
        }}>
            <Frame
                src={background_image}
                container = {styles.background_image}
                alt="background_image"
                cover
            />
            <div className={styles.upper_layer}>
            </div>
        </Responsiver>
    )
}