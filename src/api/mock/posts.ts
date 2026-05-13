import type { WPPost } from '../../types/wordpress'

export const mockPosts: WPPost[] = [
  {
    id: 1,
    slug: 'bienvenue-sur-le-blog',
    status: 'publish',
    date: '2026-01-15T10:00:00',
    modified: '2026-01-15T10:00:00',
    title: { rendered: 'Bienvenue sur le blog' },
    excerpt: {
      rendered:
        '<p>Ceci est le premier article de ce blog headless WordPress propulsé par React et TypeScript.</p>',
    },
    content: {
      rendered:
        '<p>Ceci est le premier article de ce blog headless WordPress propulsé par React et TypeScript.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
    },
    author: 1,
    featured_media: 1,
    categories: [1],
    tags: [1, 2],
    _embedded: {
      author: [{ id: 1, name: 'Admin', slug: 'admin', avatar_urls: { '96': '' } }],
      'wp:featuredmedia': [
        {
          id: 1,
          source_url: 'https://picsum.photos/seed/post1/800/450',
          alt_text: 'Image article 1',
          media_details: {
            width: 800,
            height: 450,
            sizes: {
              medium: { source_url: 'https://picsum.photos/seed/post1/400/225', width: 400, height: 225 },
            },
          },
        },
      ],
      'wp:term': [
        [{ id: 1, name: 'Actualités', slug: 'actualites', count: 3 }],
        [
          { id: 1, name: 'React', slug: 'react', count: 2 },
          { id: 2, name: 'WordPress', slug: 'wordpress', count: 3 },
        ],
      ],
    },
  },
  {
    id: 2,
    slug: 'architecture-headless-wordpress',
    status: 'publish',
    date: '2026-02-01T09:00:00',
    modified: '2026-02-01T09:00:00',
    title: { rendered: 'Architecture headless WordPress' },
    excerpt: {
      rendered:
        '<p>Découvrez comment structurer une application React qui consomme l\'API REST WordPress.</p>',
    },
    content: {
      rendered:
        '<p>Découvrez comment structurer une application React qui consomme l\'API REST WordPress.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>',
    },
    author: 1,
    featured_media: 2,
    categories: [1, 2],
    tags: [2, 3],
    _embedded: {
      author: [{ id: 1, name: 'Admin', slug: 'admin', avatar_urls: { '96': '' } }],
      'wp:featuredmedia': [
        {
          id: 2,
          source_url: 'https://picsum.photos/seed/post2/800/450',
          alt_text: 'Image article 2',
          media_details: {
            width: 800,
            height: 450,
            sizes: {
              medium: { source_url: 'https://picsum.photos/seed/post2/400/225', width: 400, height: 225 },
            },
          },
        },
      ],
      'wp:term': [
        [
          { id: 1, name: 'Actualités', slug: 'actualites', count: 3 },
          { id: 2, name: 'Tutoriels', slug: 'tutoriels', count: 2 },
        ],
        [
          { id: 2, name: 'WordPress', slug: 'wordpress', count: 3 },
          { id: 3, name: 'TypeScript', slug: 'typescript', count: 1 },
        ],
      ],
    },
  },
  {
    id: 3,
    slug: 'gestion-des-types-typescript',
    status: 'publish',
    date: '2026-03-10T14:30:00',
    modified: '2026-03-10T14:30:00',
    title: { rendered: 'Gestion des types TypeScript avec l\'API WordPress' },
    excerpt: {
      rendered: '<p>Un guide complet pour typer correctement les réponses de l\'API REST WordPress en TypeScript.</p>',
    },
    content: {
      rendered:
        '<p>Un guide complet pour typer correctement les réponses de l\'API REST WordPress en TypeScript.</p><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
    },
    author: 1,
    featured_media: 3,
    categories: [2],
    tags: [1, 3],
    _embedded: {
      author: [{ id: 1, name: 'Admin', slug: 'admin', avatar_urls: { '96': '' } }],
      'wp:featuredmedia': [
        {
          id: 3,
          source_url: 'https://picsum.photos/seed/post3/800/450',
          alt_text: 'Image article 3',
          media_details: {
            width: 800,
            height: 450,
            sizes: {
              medium: { source_url: 'https://picsum.photos/seed/post3/400/225', width: 400, height: 225 },
            },
          },
        },
      ],
      'wp:term': [
        [{ id: 2, name: 'Tutoriels', slug: 'tutoriels', count: 2 }],
        [
          { id: 1, name: 'React', slug: 'react', count: 2 },
          { id: 3, name: 'TypeScript', slug: 'typescript', count: 1 },
        ],
      ],
    },
  },
]
