export const Genres = {
  Action: 'Action',
  Drama: 'Drama',
  Thriller: 'Thriller',
  Comedy: 'Comedy',
  Family: 'Family'
} as const;

export type Genre = (typeof Genres)[keyof typeof Genres];

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: Genre[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  season: number;
  show: {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: Genre[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: null | string;
    officialSite: string;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number | null;
    };
    weight: number;
    network: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite: null | string;
    };
    webChannel: null;
    dvdCountry: null;
    externals: {
      tvrage: null | number;
      thetvdb: number;
      imdb: null | string;
    };
    image: {
      medium: string;
      original: string;
    };
    summary: string;
    updated: number;
    _links: {
      self: {
        href: string;
      };
      previousepisode: {
        href: string;
      };
      nextepisode: {
        href: string;
      };
    };
  };
  schedule: {
    time: string;
    days: [string];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
    officialSite: string | null;
  };
  webChannel: string | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number;
    thetvdb: number;
    imdb: string;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
  };
}
