const BinarySearch = (arr, target) => {
  let lIdx = 0
  let rIdx = arr.length - 1

  const search = (lIdx, rIdx, arr, target) => {
    if (lIdx > rIdx) return -1

    let midIdx = Math.floor((lIdx + rIdx) / 2)

    if (arr[midIdx] === target) {
      return midIdx
    }

    if (target < arr[midIdx]) {
      return search(lIdx, midIdx - 1, arr, target)
    } else if (target > arr[midIdx]) {
      return search(midIdx + 1, rIdx, arr, target)
    }
  }
  return search(lIdx, rIdx, arr, target)
}

console.log(BinarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(BinarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(BinarySearch([-5, 2, 4, 6, 10], 20)) // -1
