'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => { console.error(error) }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h2 className="font-sora font-bold text-2xl mb-3" style={{ color: 'var(--color-primary)' }}>
          Something went wrong
        </h2>
        <p className="font-inter text-sm mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          An unexpected error occurred. Please try again.
        </p>
        <button onClick={reset} className="btn-accent">Try again</button>
      </div>
    </div>
  )
}
