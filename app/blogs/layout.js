import Link from 'next/link'
import React from 'react'

export default function layout({ children }) {
    return (
        <div>
            <nav>
                <ul className="flex gap-4 m-2">
                    <li><Link href='/blogs/bangla'>Bangla</Link></li>
                    <li><Link href='/blogs/english'>English</Link></li>
                    <li><Link href='/blogs/international'>International</Link></li>
                </ul>
            </nav>
            <div>
                {children}
            </div>
        </div>
    )
}
