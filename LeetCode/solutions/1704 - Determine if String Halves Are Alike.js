// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

// Example 1:
// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// Example 2:
// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.
 

// Constraints:
// 2 <= s.length <= 1000
// s.length is even.
// s consists of uppercase and lowercase letters.

// FIRST SOLUTION:

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    const size = s.length;
    const splitSize = Math.floor(size / 2);
    const a = s.substring(0, splitSize).toLowerCase();
    const b = s.substring(splitSize).toLowerCase();

    return countVowels(a) === countVowels(b);
};

function countVowels(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    return Array.from(str).filter(char => vowels.has(char)).length;
}

// *******************************************************************
// BRUTE SOLUTION:

var halvesAreAlike = function (s) {
    const size = s.length;
    const splitSize = Math.floor(size / 2);
    const a = s.substring(0, splitSize).toLowerCase();
    const b = s.substring(splitSize).toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    let countVowelsA = 0, countVowelsB = 0;

    for (const vowel of vowels) {
        for(let i = 0; i < splitSize; i++){
            if(a[i] === vowel){
                countVowelsA++;
            }
            if(b[i] === vowel){
                countVowelsB++;
            }
        }
    }

    return countVowelsA === countVowelsB;
};