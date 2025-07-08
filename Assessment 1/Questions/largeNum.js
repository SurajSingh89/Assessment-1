function findLargestNum() {
    let nums = [3, 5, 9, 1, 4, 7];
    let max = nums[0];
    let i = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    console.log(max);
}

module.exports = findLargestNum;