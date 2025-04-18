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
    announcements: "Announcements",
    badges: "Badges",
    banners: "Banners",
    "blog-cards": "Blog Cards",
    breadcrumbs: "Breadcrumbs",
    buttons: "Buttons",
    "button-groups": "Button Groups",
    cards: "Cards",
    carts: "Carts",
    ctas: "Call to Actions",
    checkboxes: "Checkboxes",
    "details-lists": "Details Lists",
    dividers: "Dividers",
    dropdowns: "Dropdowns",
    faqs: "FAQs",
    filters: "Filters",
    footers: "Footers",
    grids: "Grids",
    headers: "Headers",
    inputs: "Inputs",
    media: "Media",
    modals: "Modals",
    navigation: "Navigation",
    pagination: "Pagination",
    pricing: "Pricing",
    "product-cards": "Product Cards",
    "product-collections": "Product Collections",
    "quantity-inputs": "Quantity Inputs",
    "radio-groups": "Radio Groups",
    sections: "Sections",
    selects: "Selects",
    "side-menu": "Side Menu",
    stats: "Stats",
    steps: "Steps",
    tables: "Tables",
    textareas: "Textareas",
    toggles: "Toggles",
    "vertical-menu": "Vertical Menu",
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
    announcements: "Announcements",
    badges: "Badges",
    banners: "Banners",
    "blog-cards": "Blog Cards",
    breadcrumbs: "Breadcrumbs",
    buttons: "Buttons",
    "button-groups": "Button Groups",
    cards: "Cards",
    carts: "Carts",
    ctas: "Call to Actions",
    checkboxes: "Checkboxes",
    "details-lists": "Details Lists",
    dividers: "Dividers",
    dropdowns: "Dropdowns",
    faqs: "FAQs",
    filters: "Filters",
    footers: "Footers",
    grids: "Grids",
    headers: "Headers",
    inputs: "Inputs",
    media: "Media",
    modals: "Modals",
    navigation: "Navigation",
    pagination: "Pagination",
    pricing: "Pricing",
    "product-cards": "Product Cards",
    "product-collections": "Product Collections",
    "quantity-inputs": "Quantity Inputs",
    "radio-groups": "Radio Groups",
    sections: "Sections",
    selects: "Selects",
    "side-menu": "Side Menu",
    stats: "Stats",
    steps: "Steps",
    tables: "Tables",
    textareas: "Textareas",
    toggles: "Toggles",
    "vertical-menu": "Vertical Menu",
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
          code: `<div class="p-4 mb-4 text-sm rounded-lg bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300" role="alert">
  <span class="font-medium">Info alert!</span> This is an informational message.
</div>

<div class="p-4 mb-4 text-sm rounded-lg bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-300" role="alert">
  <span class="font-medium">Danger alert!</span> This action cannot be undone.
</div>

<div class="p-4 mb-4 text-sm rounded-lg bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300" role="alert">
  <span class="font-medium">Success alert!</span> Your changes have been saved.
</div>

<div class="p-4 text-sm rounded-lg bg-yellow-50 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300" role="alert">
  <span class="font-medium">Warning alert!</span> Please review your information before continuing.
</div>`,
        },
        {
          id: "alert-2",
          title: "Alert with Icon",
          description: "Alert components with icons for better visual cues",
          code: `<div class="flex p-4 mb-4 text-sm rounded-lg bg-blue-50 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300" role="alert">
  <svg class="flex-shrink-0 w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
  </svg>
  <div>
    <span class="font-medium">Info alert!</span> This is an informational message with an icon.
  </div>
</div>

<div class="flex p-4 mb-4 text-sm rounded-lg bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-300" role="alert">
  <svg class="flex-shrink-0 w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
  </svg>
  <div>
    <span class="font-medium">Danger alert!</span> This action cannot be undone.
  </div>
</div>`,
        },
        {
          id: "alert-3",
          title: "Dismissible Alert",
          description: "Alert with a dismiss button that can be closed",
          code: `<div id="dismissible-alert" class="flex items-center p-4 mb-4 rounded-lg bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300" role="alert">
  <svg class="flex-shrink-0 w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
  </svg>
  <span class="sr-only">Info</span>
  <div class="ml-2 text-sm font-medium">
    Success! Your changes have been saved.
  </div>
  <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-900/50 dark:text-green-300 dark:hover:bg-green-800" data-dismiss-target="#dismissible-alert" aria-label="Close" onclick="this.parentElement.remove()">
    <span class="sr-only">Close</span>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
    </svg>
  </button>
</div>`,
        },
      ]
      break

    case "badges":
      components = [
        {
          id: "badge-1",
          title: "Basic Badges",
          description: "Simple badge components in different colors",
          code: `<span class="inline-block px-2 py-1 mr-2 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
  Blue
</span>

<span class="inline-block px-2 py-1 mr-2 text-xs font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
  Gray
</span>

<span class="inline-block px-2 py-1 mr-2 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
  Red
</span>

<span class="inline-block px-2 py-1 mr-2 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
  Green
</span>

<span class="inline-block px-2 py-1 mr-2 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
  Yellow
</span>

<span class="inline-block px-2 py-1 mr-2 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
  Indigo
</span>

<span class="inline-block px-2 py-1 mr-2 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
  Purple
</span>

<span class="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300">
  Pink
</span>`,
        },
        {
          id: "badge-2",
          title: "Badge Shapes",
          description: "Badges with different shapes and styles",
          code: `<span class="inline-block px-2 py-1 mr-2 mb-2 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
  Rounded Full
</span>

<span class="inline-block px-2 py-1 mr-2 mb-2 text-xs font-semibold rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
  Rounded
</span>

<span class="inline-block px-2 py-1 mr-2 mb-2 text-xs font-semibold rounded-none bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
  Square
</span>

<span class="inline-block px-2 py-1 mr-2 mb-2 text-xs font-semibold rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
  Rounded Large
</span>

<span class="inline-block px-2 py-1 mr-2 mb-2 text-xs font-semibold rounded-full border border-blue-500 text-blue-500 bg-transparent dark:border-blue-400 dark:text-blue-400">
  Outlined
</span>`,
        },
        {
          id: "badge-3",
          title: "Badges with Icons",
          description: "Badges with icons for enhanced visual information",
          code: `<span class="inline-flex items-center px-2 py-1 mr-2 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
  </svg>
  Completed
</span>

<span class="inline-flex items-center px-2 py-1 mr-2 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
  </svg>
  Pending
</span>

<span class="inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
  </svg>
  Rejected
</span>`,
        },
      ]
      break

    case "buttons":
    case "button-groups":
      components = [
        {
          id: "button-1",
          title: "Basic Buttons",
          description: "Simple button components in different styles",
          code: `<button class="px-4 py-2 mr-2 mb-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800">
  Primary
</button>

<button class="px-4 py-2 mr-2 mb-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700">
  Secondary
</button>

<button class="px-4 py-2 mr-2 mb-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-700 dark:hover:bg-red-800">
  Danger
</button>

<button class="px-4 py-2 mr-2 mb-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-700 dark:hover:bg-green-800">
  Success
</button>

<button class="px-4 py-2 mr-2 mb-2 font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 dark:bg-yellow-600 dark:hover:bg-yellow-700">
  Warning
</button>

<button class="px-4 py-2 font-medium text-blue-600 bg-transparent rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-blue-400 dark:hover:bg-gray-800">
  Link
</button>`,
        },
        {
          id: "button-2",
          title: "Button Sizes",
          description: "Buttons in different sizes",
          code: `<button class="px-2 py-1 mr-2 mb-2 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800">
  Extra Small
</button>

<button class="px-3 py-1.5 mr-2 mb-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800">
  Small
</button>

<button class="px-4 py-2 mr-2 mb-2 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800">
  Medium
</button>

<button class="px-5 py-2.5 mr-2 mb-2 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800">
  Large
</button>

<button class="px-6 py-3 text-xl font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-800">
  Extra Large
</button>`,
        },
        {
          id: "button-3",
          title: "Button Group",
          description: "Group of buttons for related actions",
          code: `<div class="inline-flex rounded-md shadow-sm mb-4" role="group">
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700">
    Profile
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700">
    Settings
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700">
    Messages
  </button>
</div>

<div class="inline-flex rounded-md shadow-sm" role="group">
  <button type="button" class="px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded-l-lg hover:bg-blue-800 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-blue-600 dark:border-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Edit
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-white bg-blue-700 border-t border-b border-blue-700 hover:bg-blue-800 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-blue-600 dark:border-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Duplicate
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 rounded-r-lg hover:bg-blue-800 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-blue-600 dark:border-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Delete
  </button>
</div>`,
        },
      ]
      break

    case "inputs":
      components = [
        {
          id: "input-1",
          title: "Basic Inputs",
          description: "Simple input components for forms",
          code: `<div class="mb-4">
  <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default Input</label>
  <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Default input">
</div>

<div class="mb-4">
  <label for="disabled-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Disabled Input</label>
  <input type="text" id="disabled-input" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400" value="Disabled input" disabled>
</div>

<div class="mb-4">
  <label for="success-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Success Input</label>
  <input type="text" id="success-input" class="bg-green-50 border border-green-500 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500 dark:placeholder-gray-400 dark:text-white" placeholder="Success input">
  <p class="mt-2 text-sm text-green-600 dark:text-green-500">This input is valid!</p>
</div>

<div>
  <label for="error-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Error Input</label>
  <input type="text" id="error-input" class="bg-red-50 border border-red-500 text-red-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-gray-700 dark:border-red-500 dark:placeholder-gray-400 dark:text-white" placeholder="Error input">
  <p class="mt-2 text-sm text-red-600 dark:text-red-500">This input has an error!</p>
</div>`,
        },
        {
          id: "input-2",
          title: "Input with Icon",
          description: "Input fields with icons for enhanced user experience",
          code: `<div class="relative mb-4">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
  </div>
  <input type="email" id="email-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com">
</div>

<div class="relative">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
    </svg>
  </div>
  <input type="text" id="search-icon" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
</div>`,
        },
        {
          id: "input-3",
          title: "Input with Label and Helper Text",
          description: "Input fields with labels and helper text for better accessibility",
          code: `<div class="mb-6">
  <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
  <input type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe" required>
  <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Your username must be 5-20 characters long and can contain letters and numbers.</p>
</div>

<div>
  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
  <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  <p id="helper-text-password" class="mt-2 text-sm text-gray-500 dark:text-gray-400">Your password must be at least 8 characters long, contain uppercase and lowercase letters, numbers, and special characters.</p>
</div>`,
        },
      ]
      break

    case "pagination":
      components = [
        {
          id: "pagination-1",
          title: "Simple Pagination",
          description: "Basic pagination component with page numbers",
          code: `<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px text-sm">
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">2</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>`,
        },
        {
          id: "pagination-2",
          title: "Pagination with Icons",
          description: "Pagination with previous and next icons",
          code: `<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px text-base h-10">
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">2</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
    </li>
    <li>
      <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>`,
        },
      ]
      break

    case "tables":
      components = [
        {
          id: "table-1",
          title: "Simple Table",
          description: "Basic table with headers and rows",
          code: `<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>`,
        },
      ]
      break

    // Add more cases for other component types as needed
    default:
      // Keep the default components
      break
  }

  return components
}
