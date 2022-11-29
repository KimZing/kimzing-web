class SecurityStorage {
  // 写入某个值
  static setItem(key: string, value: any) {
    // 编码 encodeURIComponent 转义中文，不然报错，btoa不支持中文
    key = window.btoa(encodeURIComponent(key))
    if (value) {
      value = JSON.stringify(value)
      value = window.btoa(encodeURIComponent(value))
    }
    window.localStorage.setItem(key, value)
  }

  // 读取某个值
  static getItem<T>(key: string): T | null {
    key = window.btoa(encodeURIComponent(key))

    let value = window.localStorage.getItem(key)
    if (value) {
      // 解码, decodeURIComponent反转义中文
      value = decodeURIComponent(window.atob(value))
      return <T>JSON.parse(value)
    }
    return null
  }

  // 移除某值
  static removeItem(key: string) {
    key = window.btoa(encodeURIComponent(key))
    window.localStorage.removeItem(key)
  }

  // 移除所有值
  static clear() {
    window.localStorage.clear()
  }
}

class StandardStorage {
  // 写入某个值
  static setItem(key: string, value: any) {
    if (value) {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  }

  // 读取某个值
  static getItem<T>(key: string): T | null {
    const value = window.localStorage.getItem(key)
    if (value) {
      // 解码, decodeURIComponent反转义中文
      return <T>JSON.parse(value)
    }
    return null
  }

  // 移除某值
  static removeItem(key: string) {
    window.localStorage.removeItem(key)
  }

  // 移除所有值
  static clear() {
    window.localStorage.clear()
  }
}

export default SecurityStorage
