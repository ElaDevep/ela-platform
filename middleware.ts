import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('currentUser')?.value
    return NextResponse.redirect(new URL('/login', request.url))
}

export const config = {
    matcher: ['/'],
}