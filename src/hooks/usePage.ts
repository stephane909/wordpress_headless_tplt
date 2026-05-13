import { useState, useEffect } from 'react'
import { useWordPressRepository } from '../contexts/WordPressContext'
import type { WPPage } from '../types/wordpress'

interface UsePageState {
  page: WPPage | null
  loading: boolean
  error: string | null
}

export function usePage(slug: string) {
  const repository = useWordPressRepository()
  const [state, setState] = useState<UsePageState>({ page: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    setState({ page: null, loading: true, error: null })

    repository
      .getPageBySlug(slug)
      .then((page) => {
        if (!cancelled) setState({ page, loading: false, error: null })
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ page: null, loading: false, error: err.message })
      })

    return () => { cancelled = true }
  }, [slug])

  return state
}
