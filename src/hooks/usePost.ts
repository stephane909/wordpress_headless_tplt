import { useState, useEffect } from 'react'
import { useWordPressRepository } from '../contexts/WordPressContext'
import type { WPPost } from '../types/wordpress'

interface UsePostState {
  post: WPPost | null
  loading: boolean
  error: string | null
}

export function usePost(slug: string) {
  const repository = useWordPressRepository()
  const [state, setState] = useState<UsePostState>({ post: null, loading: true, error: null })

  useEffect(() => {
    let cancelled = false
    setState({ post: null, loading: true, error: null })

    repository
      .getPostBySlug(slug)
      .then((post) => {
        if (!cancelled) setState({ post, loading: false, error: null })
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ post: null, loading: false, error: err.message })
      })

    return () => { cancelled = true }
  }, [slug])

  return state
}
