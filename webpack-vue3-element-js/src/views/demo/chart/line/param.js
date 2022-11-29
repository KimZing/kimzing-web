const category = []
let dottedBase = +new Date()
const lineData = []
const barData = []

for (let i = 0; i < 20; i += 1) {
    const date = new Date((dottedBase += 1000 * 3600 * 24))
    category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'))
    const b = Math.random() * 200
    const d = Math.random() * 200
    barData.push(b)
    lineData.push(d + b)
}

export {category, barData, lineData}