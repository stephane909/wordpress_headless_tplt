import type { WPPost } from "../../types/wordpress";

export const mockPosts: WPPost[] = [
  {
    id: 1,
    slug: "broken-district-01",
    status: "publish",
    date: "2018-03-01T00:00:00",
    modified: "2018-03-01T00:00:00",
    title: { rendered: "Broken District 01" },
    excerpt: { rendered: '<p>Various — 12", EP — BKD 001</p>' },
    content: {
      rendered:
        '<p>Various — 12", EP — BKD 001</p><p>Premier EP du label Broken District sorti en 2018.</p>',
    },
    author: 1,
    featured_media: 1,
    categories: [1],
    tags: [1],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 1,
          source_url:
            "//Users/stephanebonnamy/Sites/localdev/wordpress_headless_tplt/src/assets/img/0024735021_10.jpg",
          alt_text: "Broken District 01",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 1, name: "Vinyl", slug: "vinyl", count: 7 }],
        [{ id: 1, name: "Various", slug: "various", count: 4 }],
      ],
    },
  },
  {
    id: 2,
    slug: "broken-district-02",
    status: "publish",
    date: "2018-09-01T00:00:00",
    modified: "2018-09-01T00:00:00",
    title: { rendered: "Broken District 02" },
    excerpt: { rendered: '<p>Various — 12", EP — BKD 002</p>' },
    content: {
      rendered:
        '<p>Various — 12", EP — BKD 002</p><p>Deuxième EP du label sorti en 2018.</p>',
    },
    author: 1,
    featured_media: 2,
    categories: [1],
    tags: [1],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 2,
          source_url:
            "//Users/stephanebonnamy/Sites/localdev/wordpress_headless_tplt/src/assets/img/0024735021_10.jpg",
          alt_text: "Broken District 02",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 1, name: "Vinyl", slug: "vinyl", count: 7 }],
        [{ id: 1, name: "Various", slug: "various", count: 4 }],
      ],
    },
  },
  {
    id: 3,
    slug: "broken-district-03",
    status: "publish",
    date: "2019-03-01T00:00:00",
    modified: "2019-03-01T00:00:00",
    title: { rendered: "Broken District 03" },
    excerpt: { rendered: '<p>Various — 12", EP — BKD 003</p>' },
    content: {
      rendered:
        '<p>Various — 12", EP — BKD 003</p><p>Troisième EP de la série Broken District sorti en 2019.</p>',
    },
    author: 1,
    featured_media: 3,
    categories: [1],
    tags: [1],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 3,
          source_url:
            "https://i.discogs.com/MqF1PKE68NlH_eUFr1VvVuyGZsAFY2POWPwwDmvvEfc/rs:fit/g:sm/q:90/h:500/w:500/",
          alt_text: "Broken District 03",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 1, name: "Vinyl", slug: "vinyl", count: 7 }],
        [{ id: 1, name: "Various", slug: "various", count: 4 }],
      ],
    },
  },
  {
    id: 4,
    slug: "sofatalk-south-side",
    status: "publish",
    date: "2019-10-01T00:00:00",
    modified: "2019-10-01T00:00:00",
    title: { rendered: "South Side" },
    excerpt: { rendered: '<p>Sofa Talk — 12", MiniAlbum — BKD 004</p>' },
    content: {
      rendered:
        '<p>Sofa Talk — 12", MiniAlbum — BKD 004</p><p>Mini-album de Sofa Talk sorti en 2019 sur Broken District.</p>',
    },
    author: 1,
    featured_media: 4,
    categories: [1],
    tags: [2],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 4,
          source_url:
            "https://i.discogs.com/kp67gGn3IsOaIB8GG7zn203S8iOAeRs0NaH1RaS1ZEw/rs:fit/g:sm/q:90/h:500/w:500/",
          alt_text: "South Side",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 1, name: "Vinyl", slug: "vinyl", count: 7 }],
        [{ id: 2, name: "Sofa Talk", slug: "sofa-talk", count: 2 }],
      ],
    },
  },
  {
    id: 5,
    slug: "sofatalk-south-side-remixes",
    status: "publish",
    date: "2022-04-01T00:00:00",
    modified: "2022-04-01T00:00:00",
    title: { rendered: "South Side Remixes" },
    excerpt: { rendered: "<p>Sofa Talk — File, EP — BKD 004X</p>" },
    content: {
      rendered:
        "<p>Sofa Talk — File, AIFF, MP3, WAV, EP — BKD 004X</p><p>EP de remixes de South Side sorti en digital en 2022.</p>",
    },
    author: 1,
    featured_media: 5,
    categories: [2],
    tags: [2],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 5,
          source_url:
            "https://i.discogs.com/fu-qPkQ7pWO0y3BJAivhCXeH9D34uDrjqNcqCg0PBnM/rs:fit/g:sm/q:90/h:500/w:500/",
          alt_text: "South Side Remixes",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 2, name: "Digital", slug: "digital", count: 4 }],
        [{ id: 2, name: "Sofa Talk", slug: "sofa-talk", count: 2 }],
      ],
    },
  },
  {
    id: 6,
    slug: "jus-jam-90s-anxiety",
    status: "publish",
    date: "2021-06-01T00:00:00",
    modified: "2021-06-01T00:00:00",
    title: { rendered: "90s Anxiety" },
    excerpt: { rendered: '<p>Jus Jam — 12", MiniAlbum — BKD 005</p>' },
    content: {
      rendered:
        '<p>Jus Jam — 12", MiniAlbum — BKD 005</p><p>Mini-album de Jus Jam sorti en 2021 sur Broken District.</p>',
    },
    author: 1,
    featured_media: 6,
    categories: [1],
    tags: [3],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 6,
          source_url:
            "https://i.discogs.com/4Y81EY5PVvcGbzAuRcaJhdFtBPXYac__cOIlQkFgsqg/rs:fit/g:sm/q:90/h:500/w:500/",
          alt_text: "90s Anxiety",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 1, name: "Vinyl", slug: "vinyl", count: 7 }],
        [{ id: 3, name: "Jus Jam", slug: "jus-jam", count: 2 }],
      ],
    },
  },
  {
    id: 7,
    slug: "interface-palm-curated-space",
    status: "publish",
    date: "2022-11-01T00:00:00",
    modified: "2022-11-01T00:00:00",
    title: { rendered: "Curated Space" },
    excerpt: { rendered: '<p>Interface Palm — 12", MiniAlbum — BKD 006</p>' },
    content: {
      rendered:
        '<p>Interface Palm — 12", MiniAlbum — BKD 006</p><p>Mini-album de Interface Palm sorti en 2022 sur Broken District.</p>',
    },
    author: 1,
    featured_media: 7,
    categories: [1],
    tags: [4],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 7,
          source_url:
            "https://i.discogs.com/Ig7A8OuYJpHTaJ70wRM9QrDBfqGEAZciDQkke95SYZo/rs:fit/g:sm/q:90/h:500/w:500/",
          alt_text: "Curated Space",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 1, name: "Vinyl", slug: "vinyl", count: 7 }],
        [{ id: 4, name: "Interface Palm", slug: "interface-palm", count: 1 }],
      ],
    },
  },
  {
    id: 8,
    slug: "slowaxx-shapes-interfusion",
    status: "publish",
    date: "2024-02-01T00:00:00",
    modified: "2024-02-01T00:00:00",
    title: { rendered: "Shapes Interfusion" },
    excerpt: { rendered: "<p>Slowaxx — LP, MiniAlbum — BKD 007</p>" },
    content: {
      rendered:
        "<p>Slowaxx — LP, MiniAlbum — BKD 007</p><p>Mini-album de Slowaxx sorti en 2024 sur Broken District.</p>",
    },
    author: 1,
    featured_media: 8,
    categories: [1],
    tags: [5],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 8,
          source_url:
            "https://i.discogs.com/U2ki27FAdUHIsCcA2pX0NwH3nMRwnsGYBKOG-qAMK3E/rs:fit/g:sm/q:90/h:500/w:500/",
          alt_text: "Shapes Interfusion",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 1, name: "Vinyl", slug: "vinyl", count: 7 }],
        [{ id: 5, name: "Slowaxx", slug: "slowaxx", count: 1 }],
      ],
    },
  },
  {
    id: 9,
    slug: "jus-jam-theoric-proximity",
    status: "publish",
    date: "2025-01-01T00:00:00",
    modified: "2025-01-01T00:00:00",
    title: { rendered: "Theoric Proximity" },
    excerpt: { rendered: "<p>Jus Jam — LP, Album — BKD 008</p>" },
    content: {
      rendered:
        "<p>Jus Jam — LP, Album — BKD 008</p><p>Premier album complet de Jus Jam sorti en 2025 sur Broken District.</p>",
    },
    author: 1,
    featured_media: 9,
    categories: [1],
    tags: [3],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 9,
          source_url:
            "https://i.discogs.com/sYKqyiV3NN2QOZbWYkuuVgDlDMCFDC6jVmOQhHT1mrM/rs:fit/g:sm/q:90/h:500/w:500/",
          alt_text: "Theoric Proximity",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 1, name: "Vinyl", slug: "vinyl", count: 7 }],
        [{ id: 3, name: "Jus Jam", slug: "jus-jam", count: 2 }],
      ],
    },
  },
  {
    id: 10,
    slug: "brokenbits-vol-1",
    status: "publish",
    date: "2019-06-01T00:00:00",
    modified: "2019-06-01T00:00:00",
    title: { rendered: "Brokenbits Vol. 1" },
    excerpt: { rendered: "<p>Various — File, EP — BKDGTL001</p>" },
    content: {
      rendered:
        "<p>Various — File, AIFF, FLAC, MP3, WAV, EP — BKDGTL001</p><p>Premier volume de la série digitale Brokenbits sorti en 2019.</p>",
    },
    author: 1,
    featured_media: 10,
    categories: [2],
    tags: [1],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 10,
          source_url:
            "https://i.discogs.com/4Q3QP8DEGN0nJ0ebf0SnKDqRG28bpxK-2pFHpZepxhc/rs:fit/g:sm/q:90/h:500/w:500/",
          alt_text: "Brokenbits Vol. 1",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 2, name: "Digital", slug: "digital", count: 4 }],
        [{ id: 1, name: "Various", slug: "various", count: 4 }],
      ],
    },
  },
  {
    id: 11,
    slug: "brokenbits-vol-2",
    status: "publish",
    date: "2020-05-01T00:00:00",
    modified: "2020-05-01T00:00:00",
    title: { rendered: "Brokenbits Vol. 2" },
    excerpt: { rendered: "<p>Various — File, EP — BKDGTL002</p>" },
    content: {
      rendered:
        "<p>Various — File, AIFF, FLAC, MP3, WAV, EP — BKDGTL002</p><p>Deuxième volume de la série digitale Brokenbits sorti en 2020.</p>",
    },
    author: 1,
    featured_media: 11,
    categories: [2],
    tags: [1],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 11,
          source_url:
            "https://i.discogs.com/fJLiDkLGNYsGqbZO000UiKHlG5RZu6SbVtQq1N10bPA/rs:fit/g:sm/q:90/h:500/w:500/",
          alt_text: "Brokenbits Vol. 2",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 2, name: "Digital", slug: "digital", count: 4 }],
        [{ id: 1, name: "Various", slug: "various", count: 4 }],
      ],
    },
  },
  {
    id: 12,
    slug: "bkdwhite001",
    status: "publish",
    date: "2023-06-01T00:00:00",
    modified: "2023-06-01T00:00:00",
    title: { rendered: "BKD White 001" },
    excerpt: { rendered: '<p>Various — 12", EP — BKDWHITE001</p>' },
    content: {
      rendered:
        '<p>Various — 12", EP — BKDWHITE001</p><p>White label sorti en 2023 sur Broken District.</p>',
    },
    author: 1,
    featured_media: 12,
    categories: [1],
    tags: [1],
    _embedded: {
      author: [
        {
          id: 1,
          name: "Broken District",
          slug: "broken-district",
          avatar_urls: { "96": "" },
        },
      ],
      "wp:featuredmedia": [
        {
          id: 12,
          source_url:
            "https://i.discogs.com/IV2zDpbExgjhxWSA2rnSEgx1pepb0bKRdGWl1EpbtJA/rs:fit/g:sm/q:90/h:500/w:500/",
          alt_text: "BKDWHITE001",
          media_details: { width: 500, height: 500, sizes: {} },
        },
      ],
      "wp:term": [
        [{ id: 1, name: "Vinyl", slug: "vinyl", count: 7 }],
        [{ id: 1, name: "Various", slug: "various", count: 4 }],
      ],
    },
  },
];
