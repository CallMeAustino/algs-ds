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

// var reverse = function (x) {
//     let x_array = x.split("");
// };

// reverse(123);

/*Cracking the Coding Interview*/
/*Arrays and Strings*/

    var uniqueChars = function (string) {
        let seenChars = {};
        let unique = true;
        for (let i = 0; i < string.length; i++) {
            console.log(string[i]);
            if (seenChars[string[i]] === undefined) {
                seenChars[string[i]] = 1;
            } else {
                unique = false;
            }
        }
        return unique;
    }

/*First check the .size property on both maps. If the two maps don't have the same number of keys, then you know right away, they can't be identical.
Furthermore, guaranteeing that they have the same number of keys allows you to just iterate one of the maps and compare its values to the other.
Use the for (var [key, val] of map1) iterator syntax for iterating the keys so you don't have to build or sort an array of keys yourself (should be both faster and more memory efficient).
Then, lastly, if you make sure that the comparison returns immediately as soon as a mismatch is found, then it will shorten the execution time when they are not the same.*/

    var isPermutation = function(string1, string2) {
        let table1 = {};
        let table2 = {};
        let perm = true;
        if (string1.length != string2.length){
            perm = false;
        }
        for(idx=0;idx<string1.length;idx++){
            if(table1[string1[idx]] === undefined){
                table1[string1[idx]] = 0;
            } else {
                table1[string1[idx]] += 1;
            }
            if (table2[string2[idx]] === undefined) {
                table2[string2[idx]] = 0;
            } else {
                table2[string2[idx]] += 1;
            }
        }
        Object.keys(table1).forEach(letter => {
            if(table1[letter] !== table2[letter]){
                perm = false;
            }
        })
        console.log(perm);
    }


isPermutation("hello","olleh");
/*Testing push from Desktop PC*/

/*Scalability*/

/*vertical sharding,  horizontal sharding*/

/*CDN, mem caching*/