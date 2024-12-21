'use client'

import { useState } from 'react'

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 px-2 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

export function InteractiveCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="transform transition-all duration-300 hover:scale-[1.02]">
      {children}
    </div>
  )
}