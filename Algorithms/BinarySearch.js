const BinarySearch = (arr, target) => {
  let lIdx = 0
  let rIdx = arr.length - 1

  while (lIdx <= rIdx) {
    let midIdx = Math.floor((lIdx + rIdx) / 2)

    if (arr[midIdx] === target) {
      return midIdx
    }

    if (target < arr[midIdx]) {
      rIdx = midIdx - 1
    } else if (target > arr[midIdx]) {
      lIdx = midIdx + 1
    }
  }
  return -1
}

console.log(BinarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(BinarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(BinarySearch([-5, 2, 4, 6, 10], 20)) // -1
