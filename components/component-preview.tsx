"use client"

import { useState } from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"

import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { themes } from 'prism-react-renderer';

interface ComponentPreviewProps {
  title: string
  description: string
  code: string
  scope?: Record<string, any> // Optional custom components/functions
  noInline?: boolean // Add option to toggle between inline and noInline modes
}

export function ComponentPreview({ 
  title, 
  description, 
  code, 
  scope = {},
  noInline = false // Default to inline mode
}: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preview">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" onClick={copyToClipboard} className="h-8 gap-1">
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </Button>
          </div>

          <TabsContent value="preview" className="mt-4 rounded-md p-4 dark:bg-gray-900">
            <LiveProvider code={code} theme={themes.nightOwl} scope={scope} noInline={noInline}>
              <div className="mb-4 p-4 border rounded bg-white dark:bg-gray-800">
                <LivePreview />
              </div>
              <LiveError className="text-red-500 text-sm" />
            </LiveProvider>
          </TabsContent>

          <TabsContent value="code" className="mt-4">
            <pre className="rounded-md bg-muted p-4 overflow-x-auto text-sm">
              <code>{code}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}