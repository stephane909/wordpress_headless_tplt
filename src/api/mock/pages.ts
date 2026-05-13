import type { WPPage } from '../../types/wordpress'

export const mockPages: WPPage[] = [
  {
    id: 10,
    slug: 'a-propos',
    status: 'publish',
    date: '2026-01-01T00:00:00',
    modified: '2026-01-01T00:00:00',
    title: { rendered: 'À propos' },
    content: {
      rendered:
        '<p>Bienvenue sur ce site headless WordPress. Ce projet est un template de démarrage pour construire des frontends React connectés à une instance WordPress via l\'API REST.</p><p>Il utilise Vite, React, TypeScript et SCSS.</p>',
    },
    parent: 0,
    menu_order: 1,
  },
  {
    id: 11,
    slug: 'contact',
    status: 'publish',
    date: '2026-01-01T00:00:00',
    modified: '2026-01-01T00:00:00',
    title: { rendered: 'Contact' },
    content: {
      rendered:
        '<p>Pour nous contacter, envoyez un email à <a href="mailto:contact@example.com">contact@example.com</a>.</p>',
    },
    parent: 0,
    menu_order: 2,
  },
]
