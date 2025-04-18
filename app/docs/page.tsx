import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Book, Copy, Palette, Code, Github, ExternalLink, CheckCircle, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Documentation - SeraUI",
  description: "Learn how to use SeraUI components in your projects",
}

export default function DocsPage() {
  return (
    <div className="container py-12 md:py-16">
      {/* Header */}
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 space-y-4 text-center">
          <div className="inline-flex items-center rounded-full border bg-background/80 px-3 py-1 text-sm font-medium mb-2">
            <Book className="mr-2 h-4 w-4 text-primary" />
            <span>Documentation</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">SeraUI Documentation</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about using SeraUI components in your projects
          </p>
        </div>

        {/* Quick Nav */}
        <div className="mb-12 rounded-lg border bg-card shadow-sm">
          <div className="border-b p-4">
            <h2 className="font-medium">On this page</h2>
          </div>
          <nav className="p-4">
            <ul className="grid gap-1 sm:grid-cols-2 md:grid-cols-4">
              <li>
                <Link href="#getting-started" className="flex items-center rounded-md px-3 py-2 hover:bg-muted">
                  <span className="text-sm">Getting Started</span>
                </Link>
              </li>
              <li>
                <Link href="#usage" className="flex items-center rounded-md px-3 py-2 hover:bg-muted">
                  <span className="text-sm">Usage</span>
                </Link>
              </li>
              <li>
                <Link href="#components" className="flex items-center rounded-md px-3 py-2 hover:bg-muted">
                  <span className="text-sm">Components</span>
                </Link>
              </li>
              <li>
                <Link href="#contributing" className="flex items-center rounded-md px-3 py-2 hover:bg-muted">
                  <span className="text-sm">Contributing</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Getting Started */}
          <section id="getting-started" className="scroll-mt-16">
            <div className="mb-6 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mr-3">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Getting Started</h2>
            </div>
            
            <div className="space-y-8 pl-2 md:pl-14">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Installation</h3>
                <p className="text-muted-foreground">
                  SeraUI doesn't require any installation. Simply browse the components, find the one you like, and copy the
                  code into your project.
                </p>
                <div className="rounded-md bg-primary/5 p-4 border-l-4 border-primary">
                  <p className="font-medium">Quick Tip</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    You can use the built-in copy button on each component to copy the code with a single click.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Requirements</h3>
                <div className="rounded-lg border">
                  <div className="border-b px-4 py-3 flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary mr-2">
                      <Code className="h-4 w-4" />
                    </div>
                    <h4 className="font-medium">Tailwind CSS</h4>
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-sm">
                      To use SeraUI components, you need to have Tailwind CSS installed in your project. If you haven't set up
                      Tailwind CSS yet, follow the official installation guide.
                    </p>
                    <Button variant="outline" size="sm" asChild className="mt-2">
                      <Link
                        href="https://tailwindcss.com/docs/installation"
                        className="gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tailwind Installation
                        <ExternalLink className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Usage */}
          <section id="usage" className="scroll-mt-16">
            <div className="mb-6 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mr-3">
                <Copy className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
            </div>
            
            <div className="space-y-8 pl-2 md:pl-14">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Copy and Paste</h3>
                <p className="text-muted-foreground">
                  Each component in SeraUI comes with a preview and code view. To use a component:
                </p>
                <ol className="list-decimal space-y-2 pl-5">
                  <li>Browse the component library</li>
                  <li>Find a component you like</li>
                  <li>Click the "Copy" button to copy the code</li>
                  <li>Paste it into your project</li>
                  <li>Customize as needed</li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Customization</h3>
                <p className="text-muted-foreground">
                  All components are built with Tailwind CSS, making them easy to customize. You can modify the colors,
                  spacing, typography, and more by changing the Tailwind classes.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-md border p-4 md:p-5">
                    <div className="flex items-center mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary mr-2">
                        <Palette className="h-4 w-4" />
                      </div>
                      <h4 className="font-medium">Colors</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Change <code className="rounded bg-muted px-1 py-0.5">bg-blue-500</code> to{" "}
                      <code className="rounded bg-muted px-1 py-0.5">bg-red-500</code> to change the background color from
                      blue to red.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="rounded-md bg-blue-500 h-6 w-6"></div>
                      <div className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="rounded-md bg-red-500 h-6 w-6"></div>
                    </div>
                  </div>

                  <div className="rounded-md border p-4 md:p-5">
                    <div className="flex items-center mb-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary mr-2">
                        <Code className="h-4 w-4" />
                      </div>
                      <h4 className="font-medium">Sizing</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Change <code className="rounded bg-muted px-1 py-0.5">text-sm</code> to{" "}
                      <code className="rounded bg-muted px-1 py-0.5">text-lg</code> to increase text size.
                    </p>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium">Small Text</p>
                      <div className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <p className="text-lg font-medium">Large Text</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Components */}
          <section id="components" className="scroll-mt-16">
            <div className="mb-6 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mr-3">
                <Code className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Components</h2>
            </div>
            
            <div className="space-y-6 pl-2 md:pl-14">
              <p className="text-muted-foreground">
                SeraUI includes a wide range of components, from simple buttons to complex navigation systems. Our component library is categorized to help you find exactly what you need.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
                  <div className="bg-primary/5 p-4">
                    <h3 className="font-medium">UI Elements</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-sm">
                      <li>Buttons</li>
                      <li>Forms</li>
                      <li>Dropdowns</li>
                      <li>Cards</li>
                      <li>Modals</li>
                    </ul>
                  </div>
                </div>
                
                <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
                  <div className="bg-primary/5 p-4">
                    <h3 className="font-medium">Navigation</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-sm">
                      <li>Headers</li>
                      <li>Navbars</li>
                      <li>Sidebars</li>
                      <li>Tabs</li>
                      <li>Breadcrumbs</li>
                    </ul>
                  </div>
                </div>
                
                <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
                  <div className="bg-primary/5 p-4">
                    <h3 className="font-medium">Layout</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-sm">
                      <li>Containers</li>
                      <li>Grids</li>
                      <li>Sections</li>
                      <li>Footers</li>
                      <li>Heroes</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/components">
                    Browse All Components
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Contributing */}
          <section id="contributing" className="scroll-mt-16">
            <div className="mb-6 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mr-3">
                <Github className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Contributing</h2>
            </div>
            
            <div className="space-y-6 pl-2 md:pl-14">
              <p className="text-muted-foreground">
                SeraUI is an open-source project, and we welcome contributions from the community. There are many ways to contribute:
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border bg-card p-5 shadow-sm">
                  <h4 className="font-medium mb-2">Report Issues</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Found a bug or have a feature request? Open an issue on our GitHub repository.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://github.com/yourusername/seraui/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-1"
                    >
                      Open an Issue
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
                
                <div className="rounded-lg border bg-card p-5 shadow-sm">
                  <h4 className="font-medium mb-2">Submit Pull Requests</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Want to fix a bug or add a new feature? Submit a pull request with your changes.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://github.com/yourusername/seraui/pulls"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-1"
                    >
                      Submit PR
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 rounded-lg border-2 border-dashed p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Coffee className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Support the Project</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If you find SeraUI helpful, consider starring the repository on GitHub or sponsoring the project.
                </p>
                <Button asChild>
                  <Link
                    href="https://github.com/yourusername/seraui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Star on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Help & Resources */}
          <section className="mt-16 rounded-lg bg-muted p-6 border">
            <h2 className="text-xl font-bold mb-4">Help & Resources</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Link href="/faq" className="rounded-md bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-1">Frequently Asked Questions</h3>
                <p className="text-sm text-muted-foreground">Find answers to common questions</p>
              </Link>
              <Link href="/examples" className="rounded-md bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-1">Examples</h3>
                <p className="text-sm text-muted-foreground">See components in action</p>
              </Link>
              <Link href="/tutorials" className="rounded-md bg-background p-4 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-1">Tutorials</h3>
                <p className="text-sm text-muted-foreground">Learn how to build with SeraUI</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}