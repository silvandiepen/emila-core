export type EmilaClientOptions = {
  baseUrl?: string
  locale?: string
}

export type GetOptions = {
  locale?: string
  allLocales?: boolean
}

export function createEmilaClient(options: EmilaClientOptions = {}) {
  const base = (options.baseUrl || '').replace(/\/$/, '')
  const defaultLocale = options.locale

  async function get<T = unknown>(path = '', getOptions: GetOptions = {}): Promise<T> {
    const cleanPath = path.split('/').filter(Boolean).map(encodeURIComponent).join('/')
    const locale = getOptions.allLocales ? 'all' : (getOptions.locale || defaultLocale)
    const query = locale ? `?locale=${encodeURIComponent(locale)}` : ''
    const response = await fetch(`${base}/api/content${cleanPath ? `/${cleanPath}` : ''}${query}`)
    if (!response.ok) throw new Error(`Emila request failed: ${response.status}`)
    return response.json() as Promise<T>
  }

  return {
    get,
    content: get,
  }
}
