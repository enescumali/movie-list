export const Genres = {
  Action: 'Action',
  Drama: 'Drama',
  Thriller: 'Thriller',
  Comedy: 'Comedy',
  Family: 'Family',
  Fantasy: 'Fantasy'
} as const;

export type Genre = (typeof Genres)[keyof typeof Genres];

interface Rating {
  average: number | null;
}

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
  ended: string | null;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: Rating;
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
    tvrage: number | null;
    thetvdb: number | null;
    imdb: string | null;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string | null;
  updated: number | null;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href: string;
    };
    nextepisode?: {
      href: string;
    };
  };
}

export interface ShowListItem {
  id: number;
  url: string | null;
  name: string | null;
  season: number | null;
  number: number | null;
  airdate: string | null;
  airtime: string | null;
  airstamp: string | null;
  runtime: number | null;
  image: null;
  show: Show;
  rating: Rating;
  summary: string | null;
  type: string | null;
  _links: {
    self?: {
      href: string;
    };
    show?: {
      href: string;
    };
  };
}

// type that we need in the ShowCard component
// which has season data too
export type ShowCard = {
  season: number;
  episodeName: string;
} & Show;
