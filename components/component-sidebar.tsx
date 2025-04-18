"use client"

import React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { categories } from "@/lib/component-data"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInput,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar"
import { useState } from "react"

export function ComponentSidebar() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")

  // Filter categories based on search query
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Sidebar className="hidden md:flex my-10">
      <SidebarHeader>
        <div className="flex items-center px-2">
          <SidebarTrigger />
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span>SeraUI</span>
          </Link>
        </div>
        <div className="px-2 pt-2">
          <SidebarInput
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredCategories.map((category) => (
                <SidebarMenuItem key={category.name}>
                  <SidebarMenuButton asChild isActive={pathname === category.href} tooltip={category.name}>
                    <Link href={category.href}>
                      {React.cloneElement(category.icon, { className: "h-4 w-4" })}
                      <span>{category.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              {filteredCategories.length === 0 && (
                <div className="px-2 py-4 text-sm text-muted-foreground">No components found.</div>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-3 py-2">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} SeraUI</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
