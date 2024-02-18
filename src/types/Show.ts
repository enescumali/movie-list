import type { Genres } from '@/config';

export type Genre = (typeof Genres)[keyof typeof Genres];

export interface ShowListItemsByGenres {
  [Genres.Action]?: ShowListItem[];
  [Genres.Drama]?: ShowListItem[];
  [Genres.Thriller]?: ShowListItem[];
  [Genres.Comedy]?: ShowListItem[];
  [Genres.Family]?: ShowListItem[];
  [Genres.Fantasy]?: ShowListItem[];
  [Genres.Medical]?: ShowListItem[];
  [Genres.Nature]?: ShowListItem[];
  [Genres.Food]?: ShowListItem[];
  [Genres.MostPopular]?: ShowListItem[];
}

export interface ShowListGroups {
  genre: Genre;
  items: ShowListItem[];
}

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
  ranking?: number | null;
}

// type that we need in the ShowCard component
// which has season and episode name data too
export type ShowCard = Show & {
  season?: number | null;
  episodeName?: string | null;
  ranking?: number | null;
  airtime?: string | null;
};
