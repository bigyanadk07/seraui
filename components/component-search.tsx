"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { categories } from "@/lib/component-data"

export function ComponentSearch() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Handle keyboard shortcut to open search dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSelect = (href: string) => {
    router.push(href)
    setOpen(false)
    setSearchQuery("")
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative h-9 w-full xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
          onClick={() => setOpen(true)}
        >
          <Search className="h-4 w-4 xl:mr-2" />
          <span className="hidden xl:inline-flex">Search components...</span>
          <span className="inline-flex xl:hidden">Search...</span>
          <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
      <DialogTitle className="sr-only">Search Components</DialogTitle>
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            className="flex h-12 w-full border-0 bg-transparent p-0 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
          />
        </div>
        <ScrollArea className="h-72">
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-1 gap-1 p-2">
              {filteredCategories.map((category) => (
                <button
                  key={category.name}
                  className="flex w-full items-center space-x-2 rounded-md px-2 py-2 text-left text-sm hover:bg-accent"
                  onClick={() => handleSelect(category.href)}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md border">{category.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium">{category.name}</div>
                    <div className="text-xs text-muted-foreground">{category.count} components</div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">No components found.</div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
