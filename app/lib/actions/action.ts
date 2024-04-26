'use server'
 
 
export async function authenticate(formData: FormData) {
    try {
        console.log(formData)
        return ':v'
    } catch (error) {
        // if (error) {
        // switch (error.type) {
        //     case 'CredentialsSignin':
        //     return 'Invalid credentials.'
        //     default:
        //     return 'Something went wrong.'
        // }
        // }
        throw error
    }
}