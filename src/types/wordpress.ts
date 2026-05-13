export interface WPRendered {
  rendered: string
}

export interface WPImage {
  id: number
  source_url: string
  alt_text: string
  media_details: {
    width: number
    height: number
    sizes: Record<string, { source_url: string; width: number; height: number }>
  }
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
}

export interface WPTag {
  id: number
  name: string
  slug: string
  count: number
}

export interface WPAuthor {
  id: number
  name: string
  slug: string
  avatar_urls: Record<string, string>
}

export interface WPPost {
  id: number
  slug: string
  status: 'publish' | 'draft' | 'private'
  date: string
  modified: string
  title: WPRendered
  excerpt: WPRendered
  content: WPRendered
  author: number
  featured_media: number
  categories: number[]
  tags: number[]
  _embedded?: {
    author?: WPAuthor[]
    'wp:featuredmedia'?: WPImage[]
    'wp:term'?: Array<WPCategory[] | WPTag[]>
  }
}

export interface WPPage {
  id: number
  slug: string
  status: 'publish' | 'draft' | 'private'
  date: string
  modified: string
  title: WPRendered
  content: WPRendered
  parent: number
  menu_order: number
}

export interface WPApiParams {
  page?: number
  per_page?: number
  search?: string
  categories?: number[]
  tags?: number[]
  _embed?: boolean
}

export interface WPApiResponse<T> {
  data: T
  total: number
  totalPages: number
}
