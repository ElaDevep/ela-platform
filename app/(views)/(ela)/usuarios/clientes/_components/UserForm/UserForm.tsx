import {Form, Submit, TextField} from '@/ela-form'
import { UserFormT } from "./types"
import styler from "./UserForm.module.sass"


const UserForm: React.FC<UserFormT> = ({action,values}) => {

    return <>
        {/* <Form onSubmit={action} initValues={values} className={styler.userForm_form} styler={styler}>
            <div className={styler.fields_container}>
                <TextField name='name' label='Nombre'/>
                <TextField name='lastname' label='Apellido'/>
                <TextField name='email' label='Correo'/>
                <TextField name='mobile' label='Celular'/>
                <TextField name='role' label='Rol'/>
                <TextField name='idEnterprice' label='Empresa'/>
            </div>
            <div className={styler.submit_container}>
                <Submit>{values? 'Actualizar': 'Crear'}</Submit>
            </div>
        </Form> */}
    </>
}

export default UserForm