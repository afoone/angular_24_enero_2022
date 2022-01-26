export interface Urls {
  raw: string,
  full: string,
  regular: string,
  small: string,
  thumb: string
}

export interface Foto {
  id: string,
  width: number,
  height: number,
  description: string,
  alt_description: string,
  urls: Urls
}

export interface FotosResponse {
  total: number,
  total_pages: number,
  results: Array<Foto>//Foto[]
}
