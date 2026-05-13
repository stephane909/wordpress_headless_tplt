import { createContext, useContext } from 'react'
import type { IWordPressRepository } from '../api/IWordPressRepository'
import { MockWordPressRepository } from '../api/MockWordPressRepository'
import { ApiWordPressRepository } from '../api/ApiWordPressRepository'

const repository: IWordPressRepository =
  import.meta.env.VITE_USE_MOCK !== 'false'
    ? new MockWordPressRepository()
    : new ApiWordPressRepository(import.meta.env.VITE_WP_API_URL ?? 'http://localhost/wp-json/wp/v2')

const WordPressContext = createContext<IWordPressRepository>(repository)

export function WordPressProvider({ children, value = repository }: {
  children: React.ReactNode
  value?: IWordPressRepository
}) {
  return <WordPressContext.Provider value={value}>{children}</WordPressContext.Provider>
}

export function useWordPressRepository(): IWordPressRepository {
  return useContext(WordPressContext)
}
