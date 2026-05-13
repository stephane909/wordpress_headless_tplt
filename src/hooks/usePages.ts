import { useState, useEffect } from 'react'
import { useWordPressRepository } from '../contexts/WordPressContext'
import type { WPPage } from '../types/wordpress'

interface UsePagesState {
  pages: WPPage[]
  loading: boolean
  error: string | null
}

export function usePages() {
  const repository = useWordPressRepository()
  const [state, setState] = useState<UsePagesState>({ pages: [], loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    setState({ pages: [], loading: true, error: null })

    repository
      .getPages()
      .then((pages) => {
        if (!cancelled) setState({ pages, loading: false, error: null })
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ pages: [], loading: false, error: err.message })
      })

    return () => { cancelled = true }
  }, [])

  return state
}
