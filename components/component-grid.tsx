import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/component-data"

interface ComponentGridProps {
  limit?: number
  showViewAll?: boolean
}

export function ComponentGrid({ limit, showViewAll = false }: ComponentGridProps) {
  // If limit is provided, show only featured categories up to the limit
  // Otherwise show all categories
  const displayCategories = limit ? categories.filter((category) => category.featured).slice(0, limit) : categories

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {displayCategories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="flex flex-col items-center rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <div className="mb-2">{React.cloneElement(category.icon, { className: "h-6 w-6" })}</div>
            <div className="text-lg font-semibold">{category.name}</div>
          </Link>
        ))}
      </div>

      {showViewAll && (
        <div className="flex justify-center">
          <Button asChild>
            <Link href="/components" className="gap-1">
              View All Components
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
