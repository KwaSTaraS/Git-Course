let array = [58, 19, 99, 85, 77, 14, 63, 81, 69, 78, 91, 34, 98, 34, 47, 39, 90, 48, 0, 29, 65, 82, 61, 3, 42, 68, 41, 32, 47, 8, 14, 81, 41, 72, 55, 30, 57, 64, 18, 42, 48, 73, 72, 29, 76, 4, 52, 6, 82, 22, 93, 4, 34, 41, 13, 81, 67, 30, 69, 74, 2, 76, 31, 22, 59, 59, 28, 49, 87, 51, 91, 62, 90, 13, 32, 26, 16, 25, 11, 38, 75, 73, 44, 33, 12, 47, 97, 97, 68, 60, 66, 86, 34, 9, 81, 18, 46, 17, 31, 53]
console.log(array)
arraySortBubble(array)
console.log(array)

function arraySortBubble(array) {
    let doCounter = 0
    let forCounter = 0
    let swap
    do {
        swap = false
        for (let i = 0; i < array.length - 1 - doCounter; i++, forCounter++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]
                swap = true
            }
        }
        doCounter++
    } while (swap)
    console.log(`Info: loop executed ${forCounter} times`)
}