import type { WPPage } from '../../types/wordpress'

export const mockPages: WPPage[] = [
  {
    id: 1,
    slug: 'homepage',
    status: 'publish',
    date: '2018-01-01T00:00:00',
    modified: '2018-01-01T00:00:00',
    title: { rendered: 'Homepage' },
    content: {
      rendered:
        '<p>Broken District est un label indépendant de musique électronique fondé en 2018. Explorez notre catalogue de releases vinyle et digital.</p>',
    },
    parent: 0,
    menu_order: 1,
  },
  {
    id: 2,
    slug: 'artists',
    status: 'publish',
    date: '2018-01-01T00:00:00',
    modified: '2018-01-01T00:00:00',
    title: { rendered: 'Artists' },
    content: {
      rendered:
        '<p>Découvrez les artistes du label Broken District.</p><ul><li>Sofa Talk</li><li>Jus Jam</li><li>Interface Palm</li><li>Slowaxx</li></ul>',
    },
    parent: 0,
    menu_order: 2,
  },
  {
    id: 3,
    slug: 'contact',
    status: 'publish',
    date: '2018-01-01T00:00:00',
    modified: '2018-01-01T00:00:00',
    title: { rendered: 'Contact' },
    content: {
      rendered:
        '<p>Pour toute demande, envoyez-nous un email à <a href="mailto:contact@brokendistrict.com">contact@brokendistrict.com</a>.</p>',
    },
    parent: 0,
    menu_order: 3,
  },
  {
    id: 4,
    slug: 'find-us',
    status: 'publish',
    date: '2018-01-01T00:00:00',
    modified: '2018-01-01T00:00:00',
    title: { rendered: 'Find Us' },
    content: {
      rendered:
        '<p>Retrouvez Broken District sur les plateformes suivantes :</p><ul><li><a href="https://www.discogs.com/label/1457149-Broken-District">Discogs</a></li><li><a href="https://www.instagram.com/brokendistrict">Instagram</a></li><li><a href="https://soundcloud.com/brokendistrict">SoundCloud</a></li><li><a href="https://www.beatport.com">Beatport</a></li></ul>',
    },
    parent: 0,
    menu_order: 4,
  },
]
