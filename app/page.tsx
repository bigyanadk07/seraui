import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ComponentGrid } from "@/components/component-grid"
import { GitHubIcon } from "@/components/icons"
import { ArrowRight, Code, Copy, Palette, Star, Eye, Check } from "lucide-react"
import SeraLogo from "@/public/images/logo-fox1.png"
import Image from "next/image"
import SeraLogo2 from '@/public/images/logo-fox.png'

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
          <div className="flex justify-center py-10">
          <section className=" w-full py-16 md:py-24 lg:py-36  to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="">
            <div className="flex flex-col justify-center space-y-6">
            <Link href="/" className="flex justify-center items-center">
              <Image src={SeraLogo} alt="SeraUI" width={156} height={352} className="mt-5" title="Sera UI"/>
            </Link>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none text-center font-donatto py-5">
                  Uncomplicate Your UI Development
                </h1>
                <p className="text-lg text-muted-foreground md:text-xl text-center">
                  Sera is the open-source Tailwind and CSS library for the modern web.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row pt-2 item-center justify-center">
                <Button asChild size="lg" className="font-medium shadow-md rounded-2xl bg-primary py-4 hover:bg-gray-800">
                  <Link href="/components" className="gap-2">
                    Browse Components
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-2xl bg-black text-white hover:bg-gray-700 hover:text-white">
                  <Link
                    href="https://github.com/bigyanadk07/seraui"
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
                {/* <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span></span>
                </div> */}
              </div>
            </div>
              <div>
              {/* <Image src={SeraLogo} alt="logo" className=" w-80 h-auto"/> */}
              </div>
          </div>
        </div>
      </section>
          </div>

      {/* Features Section */}
      <section className="container py-16 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
          <div className="inline-flex items-center rounded-full border bg-background px-4 py-1.5 text-sm font-medium">
            Why choose SeraUI?
          </div>
          <h2 className="font-bold text-3xl leading-tight sm:text-4xl md:text-5xl">Build beautiful interfaces <span className="text-primary">in minutes</span></h2>
          <p className="max-w-[85%] text-lg leading-relaxed text-muted-foreground">
            SeraUI provides a collection of professionally designed, fully responsive Tailwind & CSS components 
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
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
