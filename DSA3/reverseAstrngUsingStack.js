function reverseString(str) {
    let stack = []
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }
    let reevrse = ""
    while (stack.length > 0) {
        reevrse += stack.pop()
    }
    return reevrse;
}
const str = "vishnu"
console.log(reverseString(str));