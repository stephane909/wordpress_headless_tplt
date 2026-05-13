import type { WPPost, WPPage, WPApiParams, WPApiResponse } from '../types/wordpress'

export interface IWordPressRepository {
  getPosts(params?: WPApiParams): Promise<WPApiResponse<WPPost[]>>
  getPostBySlug(slug: string): Promise<WPPost | null>
  getPostById(id: number): Promise<WPPost | null>
  getPages(): Promise<WPPage[]>
  getPageBySlug(slug: string): Promise<WPPage | null>
}
