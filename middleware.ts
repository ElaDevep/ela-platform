import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const githubPath='/ela-platform'

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('currentUser')?.value
    return NextResponse.redirect(new URL(githubPath+'/login', request.url))
}

export const config = {
    matcher: [githubPath],
}