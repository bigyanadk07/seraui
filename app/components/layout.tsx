import type React from "react"

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container py-6">
      <main className="mx-auto max-w-5xl">{children}</main>
    </div>
  )
}
