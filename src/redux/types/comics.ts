export interface ServerComicsData {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: ComicResponse[];
}

export interface ComicResponse {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Variant[];
  collections: unknown[];
  collectedIssues: unknown[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}

interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface Url {
  type: string;
  url: string;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface Variant {
  resourceURI: string;
  name: string;
}

interface Date {
  type: string;
  date: string;
}

interface Price {
  type: string;
  price: number;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Image {
  path: string;
  extension: string;
}

interface Creators {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

interface Item {
  resourceURI: string;
  name: string;
  role: string;
}

interface Characters {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}

interface Item2 {
  resourceURI: string;
  name: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: Item3[];
  returned: number;
}

interface Item3 {
  resourceURI: string;
  name: string;
  type: string;
}

interface Events {
  available: number;
  collectionURI: string;
  items: unknown[];
  returned: number;
}
