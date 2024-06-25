// pages/_middleware.ts

import { NextResponse } from 'next/server';

export function middleware(request) {
    console.log('Request path:', request.nextUrl.pathname);
    if (request.nextUrl.pathname === '/') {
        const url = request.nextUrl.clone();
        url.pathname = '/landing';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
