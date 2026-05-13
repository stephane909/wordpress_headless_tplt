import { useState, useEffect } from 'react'
import { useWordPressRepository } from '../contexts/WordPressContext'
import type { WPPost, WPApiParams, WPApiResponse } from '../types/wordpress'

interface UsePostsState extends WPApiResponse<WPPost[]> {
  loading: boolean
  error: string | null
}

export function usePosts(params: WPApiParams = {}) {
  const repository = useWordPressRepository()
  const [state, setState] = useState<UsePostsState>({
    data: [],
    total: 0,
    totalPages: 0,
    loading: true,
    error: null,
  })

  const paramsKey = JSON.stringify(params)

  useEffect(() => {
    let cancelled = false
    setState((s) => ({ ...s, loading: true, error: null }))

    repository
      .getPosts(params)
      .then((res) => {
        if (!cancelled) setState({ ...res, loading: false, error: null })
      })
      .catch((err: Error) => {
        if (!cancelled) setState((s) => ({ ...s, loading: false, error: err.message }))
      })

    return () => { cancelled = true }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsKey])

  return state
}
