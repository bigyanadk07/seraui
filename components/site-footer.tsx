import Link from "next/link"
import { GitHubIcon, TwitterIcon, DiscordIcon } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className="text-center text-sm leading-loose text-muted-foreground md:text-left flex gap-2">
            <p>Built by <span className="font-semibold">Bigyan Adhikari</span>.</p> 
            <p>The source code is available on{" "}</p>
            <Link
              href="https://github.com/bigyanadk07/seraui"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </Link>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href="https://github.com/bigyanadk07/seraui" target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://x.com/SeraUICorp" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="https://discord.gg/W69YNvRH" target="_blank" rel="noopener noreferrer">
            <DiscordIcon className="h-5 w-5" />
            <span className="sr-only">Discord</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
