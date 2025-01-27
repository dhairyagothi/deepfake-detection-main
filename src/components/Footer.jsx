import Link from 'next/link'
import { Eye } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="flex items-center space-x-2">
                            <Eye className="h-8 w-8 text-light" />
                            <span className="text-xl font-bold text-light">PurePixel</span>
                        </Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:text-light">Privacy Policy</Link>
                        <Link href="#" className="hover:text-light">Terms of Service</Link>
                        <Link href="#" className="hover:text-light">Contact</Link>
                    </div>
                </div>
                <div className="mt-4 text-center text-sm text-light">
                    © {new Date().getFullYear()} PurePixel. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
