"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { GitHubIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileNav } from "@/components/mobile-nav"
import SeraLogo2 from '@/public/images/logo-fox1.png'

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background " >
      <div className="container flex h-16 items-center justify-between p-12 text-lg">
        <div className="flex items-center gap-6 md:gap-10">
          <MobileNav />
          <Link href="/" className="flex items-center space-x-2">
            <img src={SeraLogo2.src} alt="SeraUI" width={156} height={352} className="" title="Sera UI"/>
            
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/"
              className={`text-base font-medium transition-colors hover:text-foreground/80 ${
                pathname === "/" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Home
            </Link>
            <Link
              href="/components"
              className={`text-base font-medium transition-colors hover:text-foreground/80 ${
                pathname.startsWith("/components") ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Components
            </Link>
            <Link
              href="/docs"
              className={`text-base font-medium transition-colors hover:text-foreground/80 ${
                pathname.startsWith("/docs") ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Documentation
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" asChild className="hidden md:flex">
            <Link href="https://github.com/bigyanadk07/seraui" target="_blank" rel="noopener noreferrer" title="Creators GitHub">
              <GitHubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
