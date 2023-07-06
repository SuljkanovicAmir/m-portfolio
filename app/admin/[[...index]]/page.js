"use client"

import config from '@/sanity.config'
import { NextStudio } from 'next-sanity/studio'


export default function AdminPage() {
    return <NextStudio style={{position: 'relative', zIndex: '33'}} config={config} />
}