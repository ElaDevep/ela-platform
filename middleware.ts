import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import validate_token from './app/api/AUTH/validate_token';

// const validateToken = async()=>{
//     const response = await validate_token()
//     .then((res)=>{
//         console.log(':v')
//     })
//     .catch((e)=>{
//         cookies().delete('userToken')
//     })
// }


export async function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);

    requestHeaders.set("x-pathname", request.nextUrl.pathname);

    const token = cookies().get('userToken')
    console.log(token)
    console.log(request.nextUrl.pathname)
    if(request.nextUrl.pathname=='/inicio_sesion'){
        if(token!=undefined){
            return NextResponse.redirect(new URL('/usuarios/clientes', request.url))
        }
    } 
    else{
        if(token==undefined){
            console.log('/:1')
            return NextResponse.redirect(new URL('/inicio_sesion', request.url))
        }
    }

    
    // if(false){
    //     //return NextResponse.redirect(new URL('/inicio_sesion', request.url))
    // }
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}