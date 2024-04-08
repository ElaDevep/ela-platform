import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const currentRole = request.cookies.get('role')?.value
    
    if(currentRole!='user'){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/'],
}