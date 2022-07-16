// given int array
// return true if value appear at least 2x
// otherwise false

const containsDuplicate = (nums) => {
  if (!nums) return false;
  if (nums.length <= 0) return false;

  let hashMap = {};

  // 0(n)
  for (let n = 0; n < nums.length; n++) {
    if (hashMap[nums[n]]) {
      hashMap[nums[n]] += 1;
    } else {
      hashMap[nums[n]] = 1;
    }
  }

  // 0(b)?
  for (const key in hashMap) {
    if (hashMap[key] > 1) {
      return true;
    }
  }

  return false;
};
console.log(containsDuplicate());
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
