import type { IWordPressRepository } from './IWordPressRepository'
import type { WPPost, WPPage, WPApiParams, WPApiResponse } from '../types/wordpress'
import { mockPosts, mockPages } from './mock'

function delay(ms = 300): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export class MockWordPressRepository implements IWordPressRepository {
  async getPosts(params: WPApiParams = {}): Promise<WPApiResponse<WPPost[]>> {
    await delay()
    const page = params.page ?? 1
    const perPage = params.per_page ?? 10
    const start = (page - 1) * perPage
    const sorted = [...mockPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
    const filtered = params.search
      ? sorted.filter((p) =>
          p.title.rendered.toLowerCase().includes(params.search!.toLowerCase())
        )
      : sorted
    return {
      data: filtered.slice(start, start + perPage),
      total: filtered.length,
      totalPages: Math.ceil(filtered.length / perPage),
    }
  }

  async getPostBySlug(slug: string): Promise<WPPost | null> {
    await delay()
    return mockPosts.find((p) => p.slug === slug) ?? null
  }

  async getPostById(id: number): Promise<WPPost | null> {
    await delay()
    return mockPosts.find((p) => p.id === id) ?? null
  }

  async getPages(): Promise<WPPage[]> {
    await delay()
    return mockPages
  }

  async getPageBySlug(slug: string): Promise<WPPage | null> {
    await delay()
    return mockPages.find((p) => p.slug === slug) ?? null
  }
}
