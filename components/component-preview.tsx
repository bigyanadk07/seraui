"use client"

import { useState, useEffect } from "react"
import { LiveProvider, LiveError, LivePreview } from "react-live"

import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { themes } from 'prism-react-renderer';

// Use a simpler syntax highlighter approach
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';

// Register the language
SyntaxHighlighter.registerLanguage('jsx', jsx);

interface ComponentPreviewProps {
  title: string
  description: string
  code: string
  scope?: Record<string, any>
  noInline?: boolean
}

export function ComponentPreview({ 
  title, 
  description, 
  code, 
  scope = {},
  noInline = false
}: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false)
  const [displayCode, setDisplayCode] = useState(code)

  useEffect(() => {
    setDisplayCode(code);
  }, [code]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy code:", err)
    }
  }

  return (
    <Card className="w-full overflow-hidden">
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

          <TabsContent value="code" className="mt-4 relative">
            {/* Strict containment with custom styling */}
            <div 
              className="rounded-md overflow-hidden"
              style={{ 
                maxWidth: '100%',
                position: 'relative'
              }}
            >
              {displayCode && (
                <div 
                  style={{ 
                    overflow: 'auto',
                    maxWidth: '100%'
                  }}
                >
                  <pre 
                    style={{ 
                      margin: 0,
                      backgroundColor: '#282c34', 
                      color: '#abb2bf',
                      padding: '1rem',
                      overflowX: 'auto',
                      fontSize: '0.875rem',
                      lineHeight: '1.7',
                      tabSize: 2,
                      hyphens: 'none',
                      whiteSpace: 'pre'
                    }}
                  >
                    <code>{displayCode}</code>
                  </pre>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}