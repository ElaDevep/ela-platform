import { TextField,Form, Submit } from "@/ela-form"
import { UserFormT } from "./types"
import style from "./UserForm.module.sass"


const UserForm: React.FC<UserFormT> = ({action}) => {

    return <>
            <Form onSubmit={action} className={style.userForm_container}>
                <div className={style.fields_container}>
                    <TextField name={'name'} label={'Razón Social'}/>
                    <TextField name={'email'} label={'Correo'}/>
                    <TextField name={'mobile'} label={'Teléfono de contacto'}/>
                    <TextField name={'password'} label={'Contraseña'}/>
                    <TextField name={'role'} label={'Rol'}/>    
                </div>
                <div className={style.submit_container}>
                    <Submit>Crear</Submit>
                </div>
            </Form>
    </>
}

export default UserForm