function randomString(n) {
    let str = 'abcdefghijklmnopqrstuvwxyz'
    let tmp = '',
        i = 0,
        l = str.length
    for (i = 0; i < n; i++) {
        tmp += str.charAt(Math.floor(Math.random() * l))
    }
    return tmp
}

export {randomString}