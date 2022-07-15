const arrayFrom = (...nums) => {
  const returnArr = [];
  if (nums.length === 0 || nums.length > 2) {
    return returnArr;
  }
  if (nums.length === 2) {
    const sorted = [...nums].sort( (a,b) => a - b );
    for (let i = sorted[0]; i <= sorted[1]; i++) {
      returnArr.push(i);
    }
  }
  else {
    const arr = Array(nums[0]);
    for (let i = 0; i < arr.length; i++) {
      returnArr.push(i + 1);
    }
  }
  return returnArr
}

export {
  arrayFrom
};
