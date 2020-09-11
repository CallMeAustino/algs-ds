/*NUMBER OF GOOD PAIRS*/

var numIdenticalPairs = function(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && (j > i)) {
                count += 1;
            }
        }
    }
    return count;
};

/*SHUFFLED STRINGS */

var restoreString = function (s, indices) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let index = indices[i];
        result[index] = s[i];
    }
    return result.join("");
};

/*FONTAWESOME */

// font awesome icons are a stored svg that cannot contain html elements
// create a div component next to svg icon to get hoverable icon effect