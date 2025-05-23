import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ComponentPreview } from "@/components/component-preview"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  // This would be replaced with actual data in a real app
  const categoryMap: Record<string, string> = {
    alerts: "Alerts",
    badges: "Badges",
    banners: "Banners",
    "blog-cards": "Blog Cards",
    breadcrumbs: "Breadcrumbs",
    buttons: "Buttons",
    cards: "Cards",
    carts: "Carts",
    ctas: "Call to Actions",
    dividers: "Dividers",
    dropdowns: "Dropdowns",
    faqs: "FAQs",
    forms: "Forms",
    footers: "Footers",
    grids: "Grids",
    headers: "Headers",
    media: "Media",
    modals: "Modals",
    pagination: "Pagination",
    pricing: "Pricing",
    "product-cards": "Product Cards",
    "side-menu": "Side Menu",
    stats: "Stats",
    tables: "Tables",
    toggles: "Toggles",
  }

  const category = categoryMap[params.category]

  if (!category) {
    return {
      title: "Component Not Found",
    }
  }

  return {
    title: `${category} - SeraUI Components`,
    description: `Free Tailwind CSS ${category} components for your next project`,
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // This would be replaced with actual data in a real app
  const categoryMap: Record<string, string> = {
    alerts: "Alerts",
    badges: "Badges",
    banners: "Banners",
    "blog-cards": "Blog Cards",
    breadcrumbs: "Breadcrumbs",
    buttons: "Buttons",
    cards: "Cards",
    carts: "Carts",
    ctas: "Call to Actions",
    dividers: "Dividers",
    dropdowns: "Dropdowns",
    faqs: "FAQs",
    forms: "Forms",
    footers: "Footers",
    grids: "Grids",
    headers: "Headers",
    media: "Media",
    modals: "Modals",
    pagination: "Pagination",
    pricing: "Pricing",
    "product-cards": "Product Cards",
    "side-menu": "Side Menu",
    stats: "Stats",
    tables: "Tables",
    toggles: "Toggles",
  }

  const category = categoryMap[params.category]

  if (!category) {
    notFound()
  }

  // Get components based on category
  const components = getComponentsByCategory(params.category)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild className="h-9 w-9 p-0">
          <Link href="/components" aria-label="Back to components">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{category}</h1>
          <p className="text-muted-foreground">
            A collection of {category.toLowerCase()} components built with Tailwind CSS
          </p>
        </div>
      </div>
      <div className="grid gap-6">
        {components.map((component) => (
          <ComponentPreview
            key={component.id}
            title={component.title}
            description={component.description}
            code={component.code}
          />
        ))}
      </div>
    </div>
  )
}

// Function to get components based on category
function getComponentsByCategory(category: string) {
  // Default components if category doesn't match
  let components = [
    {
      id: "default-1",
      title: "Default Component",
      description: "A default component when no specific category is matched",
      code: `<div class="p-4 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-white">
  <h2 class="text-lg font-bold">Default Component</h2>
  <p class="text-gray-500 dark:text-gray-300">This is a default component</p>
</div>`,
    },
  ]

  // Return specific components based on category
  switch (category) {
    case "alerts":
      components = [
        {
          id: "alert-1",
          title: "Simple Alert",
          description: "A simple alert component with different variants",
          code: `
<div class="flex justify-center">
<div role="alert" class="rounded-md border border-gray-300 bg-white p-4 shadow-sm">
<div class="flex items-start gap-4">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth="1.5"
stroke="currentColor"
class="size-6 text-green-600"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
/>
</svg>

<div class="flex-1">
<strong class="font-medium text-gray-900"> Changes saved </strong>

<p class="mt-0.5 text-sm text-gray-700">Your product changes have been saved.</p>
</div>

<button
class="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
type="button"
aria-label="Dismiss alert"
>
<span class="sr-only">Dismiss popup</span>

<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth="1.5"
stroke="currentColor"
class="size-5"
>
<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
</div>
</div>
            </div>
          `,
        },
        {
          id: "alert-2",
          title: "Warning Alert",
          description: "A simple alert component with different variants",
          code: `
<div class="flex justify-center mb-6">
<div role="alert" class="rounded-md border border-blue-100 bg-blue-50 p-4 w-full max-w-md">
<div class="flex items-start gap-4">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth="1.5"
stroke="currentColor"
class="size-6 text-blue-600"
>
<path
strokeLinecap="round"
strokeLinejoin="round"
d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
/>
</svg>

<div class="flex-1">
<strong class="font-medium text-blue-800">Information</strong>

<p class="mt-1 text-sm text-blue-700">
Scheduled maintenance will occur on June 15th from 2-4am.
</p>
</div>

<button
class="-m-3 rounded-full p-1.5 text-blue-500 transition-colors hover:bg-blue-100"
type="button"
aria-label="Dismiss alert"
>
<span class="sr-only">Dismiss</span>
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth="1.5"
stroke="currentColor"
class="size-5"
>
<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
</button>
</div>
</div>
</div>

          `,
        },
        {
          id: "alert-3",
          title: "Notification Alert with Action Button",
          description: "A simple alert component with different variants",
          code: `
<div class="flex justify-center mb-6">
<div role="alert" class="rounded-md bg-gray-800 p-4 text-white w-full max-w-md">
<div class="flex items-start gap-4">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
strokeWidth="1.5"
stroke="currentColor"
class="size-6 text-gray-300"
>
<path
  strokeLinecap="round"
  strokeLinejoin="round"
  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
/>
</svg>

<div class="flex-1">
<strong class="block font-medium">New Notification</strong>

<p class="mt-1 text-sm text-gray-300">
  You have a new message from Alex. Would you like to view it now?
</p>

<div class="mt-4 flex gap-2">
  <button
    class="inline-block rounded bg-white px-4 py-2 text-xs font-medium text-gray-800 hover:bg-gray-200"
  >
    View Message
  </button>

  <button
    class="inline-block rounded px-4 py-2 text-xs font-medium text-gray-300 hover:text-white"
  >
    Dismiss
  </button>
</div>
</div>
</div>
</div>
</div>
          `,
        },
      ]
      break

    case "badges":  
      components = [
        {
          id: "badge-1",
          title: "Basic Badges",
          description: "Simple badge components in different colors",
          code: `
                      <div class="flex justify-center">
                <span class="rounded-full bg-purple-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
  Live
</span>

<span
  class="rounded-full border border-purple-500 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700"
>
  Live
</span>
            </div>
          `,
        },
        {
          id: "badge-2",
          title: "Basic Badges",  
          description: "Simple badge components in different colors",
          code: `
<div className="flex justify-center">     
<span class="inline-flex items-center justify-center gap-1 rounded-full bg-red-100 px-2.5 py-0.5 text-red-700">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="size-3"
>
<path
stroke-linecap="round"
stroke-linejoin="round"
d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z"
/>
</svg>
<p class="whitespace-nowrap text-sm">Alert</p>
</span>
</div>
`,
        },
        {
          id: "badge-3",
          title: "Badge with Icon",
          description: "Simple badge components in different colors",
          code: `
<div className="flex justify-center">
<span class="inline-flex items-center justify-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-green-700">
<svg
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke-width="1.5"
stroke="currentColor"
class="size-3"
>
<path
stroke-linecap="round"
stroke-linejoin="round"
d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
/>
</svg>

<p class="whitespace-nowrap text-sm">Verified</p>
</span>
</div>
          `,
        },
      ]
      break

    case "banners":
      components = [
        {
          id: "banner-1",
          title: "Simple Banner",
          description: "A banner component for displaying important information",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "blog-cards":
      components = [
        {
          id: "blog-card-1",
          title: "Blog Card",
          description: "Card layout for blog posts preview",
          code: `<div class="flex justify-center items-center w-full">
  <article class="w-fit max-w-sm overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    className="h-56 w-full object-cover"
  />

    <div class="bg-white p-4 sm:p-6">
      <time datetime="2022-10-10" class="block text-xs text-gray-500">
        10th Oct 2022
      </time>

      <a href="#">
        <h3 class="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
      </a>

      <p class="mt-2 line-clamp-3 text-sm text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem.
      </p>
    </div>
  </article>
</div>`,
        },
        {
          id: "blog-card-2",
          title: "Blog Card with Image",
          description: "Card layout for blog posts preview",
          code: 
          `
<article className="flex bg-white transition hover:shadow-xl">
<div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
<time
datetime="2022-10-10"
className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase"
>
<span>2022</span>
<span className="w-px flex-1 bg-gray-900/10"></span>
<span>Oct 10</span>
</time>
</div>

<div className="hidden sm:block sm:basis-56">
<img
alt=""
src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
className="aspect-square h-full w-full object-cover"
/>
</div>

<div className="flex flex-1 flex-col justify-between">
<div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
<a href="#">
<h3 className="font-bold text-gray-900 uppercase">
Finding the right guitar for your style - 5 tips
</h3>
</a>

<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
atque dignissimos. Molestias explicabo corporis voluptatem?
</p>
</div>

<div className="sm:flex sm:items-end sm:justify-end">
<a
href="#"
className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold text-gray-900 uppercase transition hover:bg-yellow-400"
>
Read Blog
</a>
</div>
</div>
</article>
          `,
        },
      ]
      break

    case "breadcrumbs":
      components = [
        {
          id: "breadcrumb-1",
          title: "Simple Breadcrumbs",
          description: "Navigation breadcrumbs for page hierarchy",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "buttons":
      components = [
        {
          id: "button-1",
          title: "Hover Buttons",
          description: "Buttons with Hover",
          code: `
<div class="flex justify-center">
  <a
    class="group inline-block rounded-full bg-gradient-to-r transition duration-300 from-pink-500 via-red-500 to-yellow-500  p-[2px] hover:text-white focus:ring-3 focus:outline-hidden"
    href="#"
  >
    <span
      class="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
    >
      Download
    </span>
  </a>
</div>
`,
        },
        {
          id: "button-2",
          title: "Gold Button",
          description: "Gold button with hover effect",
          code: `
<div class="flex justify-center">
  <a
    href="#"
    class="group inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] hover:text-white focus:ring-3 focus:outline-none"
  >
    <span class="block rounded-full bg-white px-6 py-3 text-sm font-semibold group-hover:bg-transparent">
      Explore More
    </span>
    <svg class="h-5 w-5 mr-2 text-cyan-700 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M12.293 3.293a1 1 0 011.414 0L18 7.586a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414-1.414L15.586 9H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
  </a>
</div>`,
        },
        {
          id: "button-3",
          title: "Neon Glow Button",
          description: "Neon button with glow effect",
          code: `
<div class="flex justify-center">
<a
  href="#"
  class="group relative inline-block text-sm font-medium text-white"
>
  <span class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></span>
  <span class="relative inline-block px-8 py-3 bg-black rounded-full border border-purple-500">
    Glow Button
  </span>
</a>
</div>
`,
        },
        {
          id: "button-4",
          title: "Glassmorphism Button",
          description: "Neon button with glow effect",
          code: `
<div class="flex justify-center">
  <a
    href="#"
    class="group relative text-blue-600 font-semibold text-sm px-6 py-2 hover:text-blue-800"
  >
    Hover Me
    <span class="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
  </a>
</div>
`,
        },
      ]
      break

    case "cards":
      components = [
        {
          id: "card-1",
          title: "Simple Card",
          description: "Basic card component for content display",
          code: `
              <div class="flex justify-center px-4">
  <a href="#" class="block w-full max-w-2xl rounded-md border border-gray-300 p-4 shadow-sm transition hover:shadow-md sm:p-6">
    <div class="sm:flex sm:items-start sm:justify-between sm:gap-4">
      <div class="sm:order-last sm:shrink-0">
        <img
          alt="Author"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80"
          class="size-16 rounded-full object-cover sm:size-[72px]"
        />
      </div>

      <div class="mt-4 sm:mt-0">
        <h3 class="text-lg font-medium text-gray-900">
          How I built my first website with Nuxt, Tailwind CSS and Vercel
        </h3>
        <p class="mt-1 text-sm text-gray-700">By John Doe</p>
        <p class="mt-4 line-clamp-2 text-sm text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
          maiores deleniti consectetur nobis et eaque.
        </p>
      </div>
    </div>

    <dl class="mt-6 flex gap-4 lg:gap-6">
      <div>
        <dt class="text-sm font-medium text-gray-700">Published on</dt>
        <dd class="text-xs text-gray-700">31/06/2025</dd>
      </div>
      <div>
        <dt class="text-sm font-medium text-gray-700">Reading time</dt>
        <dd class="text-xs text-gray-700">12 minutes</dd>
      </div>
    </dl>
  </a>
</div>

          `,
        },
      ]
      break

    case "carts":
      components = [
        {
          id: "cart-1",
          title: "Shopping Cart",
          description: "Shopping cart component for e-commerce",
          code: `
<div class="flex justify-center p-6">
  <div class="w-full max-w-2xl rounded-lg bg-white shadow-md p-6">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

    <!-- Cart Item -->
    <div class="flex items-center justify-between border-b py-4">
      <div class="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=100&q=80"
          alt="Product"
          class="h-16 w-16 rounded object-cover"
        />
        <div>
          <h4 class="text-lg font-medium text-gray-800">Wireless Headphones</h4>
          <p class="text-sm text-gray-500">Qty: 1</p>
        </div>
      </div>
      <span class="text-gray-800 font-semibold">$89.99</span>
    </div>

    <!-- Repeatable Item -->
    <div class="flex items-center justify-between border-b py-4">
      <div class="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=100&q=80"
          alt="Product"
          class="h-16 w-16 rounded object-cover"
        />
        <div>
          <h4 class="text-lg font-medium text-gray-800">Smart Watch</h4>
          <p class="text-sm text-gray-500">Qty: 2</p>
        </div>
      </div>
      <span class="text-gray-800 font-semibold">$199.98</span>
    </div>

    <!-- Subtotal -->
    <div class="mt-6 flex items-center justify-between">
      <span class="text-lg font-semibold text-gray-700">Subtotal</span>
      <span class="text-xl font-bold text-gray-900">$289.97</span>
    </div>

    <!-- Checkout Button -->
    <div class="mt-6">
      <button class="w-full rounded-md bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition">
        Proceed to Checkout
      </button>
    </div>
  </div>
</div>

          `,
        },
      ]
      break

    case "ctas":
      components = [
        {
          id: "cta-1",
          title: "Call to Action",
          description: "Component to encourage user action",
          code: `
                <section
  class="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat"
>
  <div class="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
    <div class="text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Latest Shirts</h2>

      <p class="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
        doloribus iure architecto quae voluptatum beatae excepturi dolores.
      </p>

      <div class="mt-4 sm:mt-8">
        <a
          href="#"
          class="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
        >
          Get Yours Today
        </a>
      </div>
    </div>
  </div>
</section>
          `,
        },
      ]
      break

    case "dividers":
      components = [
        {
          id: "divider-1",
          title: "Simple Divider",
          description: "Divider component to separate content sections",
          code: ``,
        },
      ]
      break

    case "dropdowns":
      components = [
        {
          id: "dropdown-1",
          title: "Simple Dropdown",
          description: "Dropdown menu for navigation or options",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "faqs":
      components = [
        {
          id: "faq-1",
          title: "FAQ Component",
          description: "Frequently asked questions layout",
          code: `
<div className="space-y-4">
<details className="group [&_summary::-webkit-details-marker]:hidden" open>
<summary
className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900"
>
<h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

<svg
className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
</svg>
</summary>

<p className="px-4 pt-4 text-gray-900">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
consequuntur distinctio corporis earum similique!
</p>
</details>

<details className="group [&_summary::-webkit-details-marker]:hidden">
<summary
className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900"
>
<h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

<svg
className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
</svg>
</summary>

<p className="px-4 pt-4 text-gray-900">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
consequuntur distinctio corporis earum similique!
</p>
</details>

<details className="group [&_summary::-webkit-details-marker]:hidden">
<summary
className="flex items-center justify-between gap-1.5 rounded-md border border-gray-100 bg-gray-50 p-4 text-gray-900"
>
<h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

<svg
className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
xmlns="http://www.w3.org/2000/svg"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor"
>
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
</svg>
</summary>

<p className="px-4 pt-4 text-gray-900">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
consequuntur distinctio corporis earum similique!
</p>
</details>
</div>
          `,
        },
      ]
      break

    case "forms":
      components = [
        {
          id: "form-1",
          title: "Simple Form",
          description: "Basic form components for data collection",
          code: `
<div className="relative py-3 sm:max-w-xl sm:mx-auto">
<div
className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
>
<div className="max-w-md mx-auto">
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label
className="font-semibold text-sm text-gray-600 pb-1 block"
htmlFor="fullname"
>Full Name</label
>
<input
className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
type="text"
id="fullname"
/>
</div>
<div>
<label
className="font-semibold text-sm text-gray-600 pb-1 block"
htmlFor="email"
>Email</label
>
<input
className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
type="email"
id="email"
/>
</div>
<div>
<label
className="font-semibold text-sm text-gray-600 pb-1 block"
htmlFor="username"
>Username</label
>
<input
className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
type="text"
id="username"
/>
</div>
<div>
<label
className="font-semibold text-sm text-gray-600 pb-1 block"
htmlFor="password"
>Password</label
>
<input
className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
type="password"
id="password"
/>
</div>
</div>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label
className="font-semibold text-sm text-gray-600 pb-1 block"
htmlFor="dob"
>Date of Birth</label
>
<input
className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
type="date"
id="dob"
/>
</div>
<div>
<label
className="font-semibold text-sm text-gray-600 pb-1 block"
htmlFor="gender"
>Gender</label
>
<select
className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
id="gender"
>
<option value="male">Male</option>
<option value="female">Female</option>
<option value="other">Other</option>
</select>
</div>
</div>
<div className="flex justify-center items-center">
<div>
<button
className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
>
<svg
viewBox="0 0 24 24"
height="25"
width="25"
y="0px"
x="0px"
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707 C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321 C6.4099731,6.9193726,8.977478,5,12,5z"
fill="#F44336"
></path>
<path
d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12 c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458 l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z"
fill="#2196F3"
></path>
<path
d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511 C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215 C5.1484375,13.6044312,5,12.8204346,5,12z"
fill="#FFC107"
></path>
<path
d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959 C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834 C14.7412109,18.5588989,13.4284058,19,12,19z"
fill="#00B060"
></path>
<path
opacity=".1"
d="M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24 c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z"
></path>
<polygon
opacity=".1"
points="12,14.25 12,14.5 18.4862061,14.5 18.587492,14.25"
></polygon>
<path
d="M23.9944458,12.1470337C23.9952393,12.0977783,24,12.0493774,24,12 c0-0.0139771-0.0021973-0.0274658-0.0022583-0.0414429C23.9970703,12.0215454,23.9938965,12.0838013,23.9944458,12.1470337z"
fill="#E6E6E6"
></path>
<path
opacity=".2"
d="M12,9.5v0.25h11.7855721c-0.0157471-0.0825195-0.0329475-0.1680908-0.0503426-0.25H12z"
fill="#FFF"
></path>
<linearGradient
gradientUnits="userSpaceOnUse"
y2="12"
y1="12"
x2="24"
x1="0"
id="LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1"
>
<stop stopOpacity=".2" stopColor="#fff" offset="0"></stop>
<stop stopOpacity="0" stopColor="#fff" offset="1"></stop>
</linearGradient>
<path
d="M23.7352295,9.5H12v5h6.4862061C17.4775391,17.121582,14.9771729,19,12,19 c-3.8659668,0-7-3.1340332-7-7c0-3.8660278,3.1340332-7,7-7c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686 c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374l3.637146-3.4699707L19.8414307,2.940979 C17.7369385,1.1170654,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12c0,6.6273804,5.3725586,12,12,12 c6.1176758,0,11.1554565-4.5812378,11.8960571-10.4981689C23.9585571,13.0101929,24,12.508667,24,12 C24,11.1421509,23.906311,10.3068237,23.7352295,9.5z"
fill="url(#LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1)"
></path>
<path
opacity=".1"
d="M15.7885132,5.890686C14.6939087,5.1806641,13.4018555,4.75,12,4.75c-3.8659668,0-7,3.1339722-7,7 c0,0.0421753,0.0005674,0.0751343,0.0012999,0.1171875C5.0687437,8.0595093,8.1762085,5,12,5 c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374 l3.637146-3.4699707l-3.637146,3.2199707C16.1289062,6.1018066,15.9560547,5.9995728,15.7885132,5.890686z"
></path>
<path
opacity=".2"
d="M12,0.25c2.9750366,0,5.6829224,1.0983887,7.7792969,2.8916016l0.144165-0.1375122 l-0.110014-0.0958166C17.7089558,1.0843592,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12 c0,0.0421753,0.0058594,0.0828857,0.0062866,0.125C0.0740356,5.5558472,5.4147339,0.25,12,0.25z"
fill="#FFF"
></path>
</svg>
<span className="ml-2">Sign up with Google</span>
</button>
<button
className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4"
>
<svg
viewBox="0 0 30 30"
height="30"
width="30"
y="0px"
x="0px"
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"
></path>
</svg>
<span className="ml-2">Sign up with Apple</span>
</button>
</div>
</div>
<div className="mt-5">
<button
className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
type="submit"
>
Sign up
</button>
</div>
<div className="flex items-center justify-between mt-4">
<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
<a
className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
href="#"
>have an account? Log in</a
>
<span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
</div>
</div>
</div>
</div>
          `,
        },
      ]
      break

    case "footers":
      components = [
        {
          id: "footer-1",
          title: "Site Footer",
          description: "Footer component for website layout",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "grids":
      components = [
        {
          id: "grid-1",
          title: "Basic Grid",
          description: "Grid layout for content organization",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "headers":
      components = [
        {
          id: "header-1",
          title: "Site Header",
          description: "Header component for website layout",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "media":
      components = [
        {
          id: "media-1",
          title: "Media Component",
          description: "Component for displaying images and videos",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "modals":
      components = [
        {
          id: "modal-1",
          title: "Simple Modal",
          description: "Dialog component for focused interactions",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "pagination":
      components = [
        {
          id: "pagination-1",
          title: "Simple Pagination",
          description: "Basic pagination component with page numbers",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "pricing":
      components = [
        {
          id: "pricing-1",
          title: "Pricing Table",
          description: "Component for displaying pricing options",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "product-cards":
      components = [
        {
          id: "product-card-1",
          title: "Product Card",
          description: "Card component for displaying product information",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "side-menu":
      components = [
        {
          id: "side-menu-1",
          title: "Side Navigation Menu",
          description: "Side menu component for website navigation",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "stats":
      components = [
        {
          id: "stats-1",
          title: "Statistics Component",
          description: "Component for displaying key metrics and statistics",
          code: `
                      <div class="flex justify-center">
                <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
  <div>
    <p class="text-sm text-gray-500">Profit</p>

    <p class="text-2xl font-medium text-gray-900">$240.94</p>
  </div>

  <div class="inline-flex gap-2 rounded-sm bg-green-100 p-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <span class="text-xs font-medium"> 67.81% </span>
  </div>
</article>

<article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
  <div>
    <p class="text-sm text-gray-500">Profit</p>

    <p class="text-2xl font-medium text-gray-900">$240.94</p>
  </div>

  <div class="inline-flex gap-2 rounded-sm bg-red-100 p-1 text-red-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
      />
    </svg>

    <span class="text-xs font-medium"> 67.81% </span>
  </div>
</article>
            </div>
          `,
        },
      ]
      break

    case "tables":
      components = [
        {
          id: "table-1",
          title: "Simple Table",
          description: "Basic table with headers and rows",
          code: `
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    case "toggles":
      components = [
        {
          id: "toggle-1",
          title: "Toggle Switch",
          description: "Component for toggling between two states",
          code: `
          
                      <div class="flex justify-center">
              
            </div>
          `,
        },
      ]
      break

    default:
      break
  }

  return components
}
