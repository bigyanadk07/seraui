import type { Metadata } from "next"
import { ComponentGrid } from "@/components/component-grid"
import { ComponentSearch } from "@/components/component-search"

export const metadata: Metadata = {
  title: "Components - SeraUI",
  description: "Browse all Tailwind CSS components",
}

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Components</h1>
        <p className="max-w-[85%] text-lg text-muted-foreground">
          Browse our collection of free Tailwind CSS components
        </p>
        <div className="w-full max-w-md">
          <ComponentSearch />
        </div>
      </div>
      <ComponentGrid />
    </div>
  )
}
