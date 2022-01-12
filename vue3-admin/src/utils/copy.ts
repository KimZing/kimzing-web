export function deepCopy<T extends Array<T> | any>(source: T): T {
  if (Array.isArray(source)) {
    return source.map((item) => deepCopy(item)) as T
  }
  const newObj: T = {} as T
  Object.keys(source as object).forEach((key) => {
    const prop = key as keyof T
    if (typeof source[prop] === 'object' && source[prop] !== null) {
      newObj[prop] = deepCopy(source[prop])
    } else {
      newObj[prop] = source[prop]
    }
  })

  return newObj
}
