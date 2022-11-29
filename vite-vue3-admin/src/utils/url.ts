export const getQueryVariable = (url: string, variable: string): string | undefined => {
  const query = url.split('?')[1]
  if (!query) {
    return undefined
  }
  const vars = query.split('&')
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split('=')
    if (pair[0] === variable) {
      return pair[1]
    }
  }
  return undefined
}
