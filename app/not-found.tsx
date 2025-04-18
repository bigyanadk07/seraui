import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <div className="mx-auto flex max-w-[500px] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
        <p className="mt-4 text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <Button asChild className="mt-8">
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  )
}
