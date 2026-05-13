import type { IWordPressRepository } from './IWordPressRepository'
import type { WPPost, WPPage, WPApiParams, WPApiResponse } from '../types/wordpress'

export class ApiWordPressRepository implements IWordPressRepository {
  constructor(private readonly baseUrl: string) {}

  private async fetch<T>(
    endpoint: string,
    params: Record<string, string> = {}
  ): Promise<{ data: T; headers: Headers }> {
    const url = new URL(`${this.baseUrl}${endpoint}`)
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

    const res = await fetch(url.toString())
    if (!res.ok) throw new Error(`WordPress API error: ${res.status} ${res.statusText}`)

    const data: T = await res.json()
    return { data, headers: res.headers }
  }

  async getPosts(params: WPApiParams = {}): Promise<WPApiResponse<WPPost[]>> {
    const queryParams: Record<string, string> = {
      page: String(params.page ?? 1),
      per_page: String(params.per_page ?? 10),
      _embed: '1',
    }
    if (params.search) queryParams.search = params.search
    if (params.categories?.length) queryParams.categories = params.categories.join(',')
    if (params.tags?.length) queryParams.tags = params.tags.join(',')

    const { data, headers } = await this.fetch<WPPost[]>('/posts', queryParams)
    return {
      data,
      total: Number(headers.get('X-WP-Total') ?? 0),
      totalPages: Number(headers.get('X-WP-TotalPages') ?? 1),
    }
  }

  async getPostBySlug(slug: string): Promise<WPPost | null> {
    const { data } = await this.fetch<WPPost[]>('/posts', { slug, _embed: '1' })
    return data[0] ?? null
  }

  async getPostById(id: number): Promise<WPPost | null> {
    const { data } = await this.fetch<WPPost>(`/posts/${id}`, { _embed: '1' })
    return data
  }

  async getPages(): Promise<WPPage[]> {
    const { data } = await this.fetch<WPPage[]>('/pages', { per_page: '100' })
    return data
  }

  async getPageBySlug(slug: string): Promise<WPPage | null> {
    const { data } = await this.fetch<WPPage[]>('/pages', { slug })
    return data[0] ?? null
  }
}
