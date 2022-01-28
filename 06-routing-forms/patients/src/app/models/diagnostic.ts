export interface Diagnostic {
  code: string,
  description: string
  severity?: {
    code?: string,
    value?: string
  }
}
