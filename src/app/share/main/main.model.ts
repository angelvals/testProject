export interface MainStateModel {
  initialized: boolean;
  restData: any;
}

export interface EntriesResponse {
  count: number;
  entries: Entries[]
}

export interface Entries {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: string;
  Cors: string;
  Link: string;
  Category: string;
}