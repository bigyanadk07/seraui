import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ComponentGrid } from "@/components/component-grid"
import { GitHubIcon } from "@/components/icons"
import { ArrowRight, Code, Copy, Palette, Star, Eye, Check } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-36 bg-gradient-to-br from-primary/5 via-background to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium mb-2 bg-background/80 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                <span>New components released weekly</span>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                  Beautiful UI Components <span className="text-primary">Built with Tailwind</span>
                </h1>
                <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                  SeraUI offers a premium collection of ready-to-use Tailwind CSS components that you can copy and 
                  paste directly into your projects.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row pt-2">
                <Button asChild size="lg" className="rounded-md font-medium shadow-md">
                  <Link href="/components" className="gap-2">
                    Browse Components
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-md">
                  <Link
                    href="https://github.com/yourusername/seraui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <GitHubIcon className="h-5 w-5" />
                    <span>Star on GitHub</span>
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mt-4">
                {/* <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span>1.2k+ Stars</span>
                </div> */}
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>Used by 5k+ devs</span>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[500px] relative">
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="col-span-2">
                  <div className="rounded-xl border bg-card p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-start">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Copy className="h-6 w-6" />
                      </div>
                      <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">Popular</span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">Copy & Paste</h3>
                    <p className="mt-2 text-muted-foreground">
                      Simply copy the code and paste it into your project. No installation required.
                    </p>
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Palette className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-medium">Customizable</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Easily customize to match your brand.
                  </p>
                </div>
                <div className="rounded-xl border bg-card p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Code className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-medium">Developer Friendly</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    TypeScript & accessibility ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
          <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium">
            Why choose SeraUI?
          </div>
          <h2 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl">Build beautiful interfaces <span className="text-primary">in minutes</span></h2>
          <p className="max-w-[85%] text-lg leading-relaxed text-muted-foreground">
            SeraUI provides a collection of professionally designed, fully responsive Tailwind CSS components 
            that help developers and designers create stunning UIs with minimal effort.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col items-center rounded-lg border bg-card p-4 text-center shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
              <Check className="h-5 w-5" />
            </div>
            <span className="font-medium">No install</span>
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-card p-4 text-center shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
              <Check className="h-5 w-5" />
            </div>
            <span className="font-medium">No config</span>
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-card p-4 text-center shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
              <Check className="h-5 w-5" />
            </div>
            <span className="font-medium">No setup</span>
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-card p-4 text-center shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
              <Check className="h-5 w-5" />
            </div>
            <span className="font-medium">Responsive</span>
          </div>
          <div className="flex flex-col items-center rounded-lg border bg-card p-4 text-center shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
              <Check className="h-5 w-5" />
            </div>
            <span className="font-medium">Accessible</span>
          </div>
        </div>
      </section>

      {/* Component Categories */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium mb-4">
              Browse our collection
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">Featured Components</h2>
            <p className="mt-4 max-w-[85%] text-lg text-muted-foreground">
              Explore our most popular components and see how they can enhance your next project
            </p>
          </div>
          <ComponentGrid limit={8} showViewAll={true} />
          {/* <div className="flex justify-center mt-12">
            <Button asChild size="lg" variant="outline" className="rounded-md">
              <Link href="/components" className="gap-2">
                View All Components
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="rounded-2xl bg-primary p-8 md:p-12 lg:p-16 text-primary-foreground text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl mb-4">Ready to build your next project?</h2>
            <p className="text-lg mb-8 text-primary-foreground/80">
              Get started with SeraUI today and build beautiful interfaces in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="shadow-md">
                <Link href="/components">Browse Components</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/docs">Read Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
