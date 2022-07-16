// given int array
// return true if value appear at least 2x
// otherwise false

const containsDuplicate = (nums) => {
  if (!nums) return false;
  if (nums.length <= 0) return false;

  // 0(n * log n)
  nums.sort((a, b) => a - b);

  // 0(n)
  // solution uses extra storage
  // let prev = null;
  // for (let i = 0; i < nums.length; i++) {
  //   if (prev === null) {
  //     prev = nums[i];
  //   } else if (prev === nums[i]) {
  //     return true;
  //   }
  // }

  // 0(n)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      return true;
    }
  }

  return false;
};
console.log(containsDuplicate());
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2, 31, 21]));
