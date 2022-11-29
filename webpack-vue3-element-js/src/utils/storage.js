// 为了尽可能简单，此内部方法不会做异常判断，请保证数据规范性
const storage = {
    // 设置条目
    setItem: (key, value) => {
        if (value) {
            value = JSON.stringify(value)
        }
        window.localStorage.setItem(key, value)
    },
    // 读取条目
    getItem: (key) => {
        let value = window.localStorage.getItem(key)
        return JSON.parse(value)
    },
    // 移除某个条目
    removeItem: (key) => {
        window.localStorage.removeItem(key)
    },
    // 移除所有
    clear() {
        window.localStorage.clear()
    }
}

export default storage