"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ModeToggle } from "@/components/mode-toggle"

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/components",
      label: "Components",
      active: pathname.startsWith("/components"),
    },
    {
      href: "/docs",
      label: "Documentation",
      active: pathname.startsWith("/docs"),
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 sm:max-w-xs">
        <div className="px-7">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-bold">SeraUI</span>
          </Link>
        </div>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3 py-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className={`text-sm transition-colors hover:text-foreground/80 ${
                  route.active ? "text-foreground font-medium" : "text-foreground/60"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div className="py-4">
            <div className="px-1 py-2">
              <h4 className="mb-2 text-sm font-semibold">Components</h4>
              <div className="grid grid-cols-1 gap-2">
                <Link
                  href="/components/alerts"
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Alerts
                </Link>
                <Link
                  href="/components/badges"
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Badges
                </Link>
                <Link
                  href="/components/buttons"
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Buttons
                </Link>
                <Link
                  href="/components/cards"
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Cards
                </Link>
                <Link
                  href="/components"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  View all components →
                </Link>
              </div>
            </div>
          </div>
        </ScrollArea>
        <div className="pl-6 pt-2">
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  )
}
