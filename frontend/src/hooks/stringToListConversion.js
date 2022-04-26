export default function makeListOf(str) {
    if (Array.isArray(str)) return str

    let list = [""]
    let index = 0
    for (let i=0; i<str.length; i++) {
        if (str[i] === ",") {
           index++
           list[index] = ""
           if (i !== str.length - 1 && str[i+1] === " ") {
                i++
           }
        }
        else list[index] += str[i]
    }
    return index === 0 ? list[0] : list
}