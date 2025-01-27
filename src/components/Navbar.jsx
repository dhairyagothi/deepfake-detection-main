'use client'

import Link from 'next/link'
import { Eye, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Eye className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold">PurePixel</span>
                </Link>
                <div className="hidden md:flex space-x-8">
                    <Link href="#about" className="text-foreground hover:text-primary">About</Link>
                    <Link href="#what-is-deepfake" className="text-foreground hover:text-primary">What is Deepfake</Link>
                    <Link href="#why-dangerous" className="text-foreground hover:text-primary">Why it's Dangerous</Link>
                </div>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <div className="flex flex-col space-y-4 mt-4">
                            <Link href="#about" className="text-foreground hover:text-primary">About</Link>
                            <Link href="#what-is-deepfake" className="text-foreground hover:text-primary">What is Deepfake</Link>
                            <Link href="#why-dangerous" className="text-foreground hover:text-primary">Why it's Dangerous</Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    )
}