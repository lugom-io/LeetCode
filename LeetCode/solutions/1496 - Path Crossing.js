/**
 * Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit 
 * north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk 
 * on the path specified by path.
 * 
 * Return true if the path crosses itself at any point, that is, if at any time you are on a location 
 * you have previously visited. Return false otherwise.
 * 
 * Example 1:
 * Input: path = "NES"
 * Output: false 
 * Explanation: Notice that the path doesn't cross any point more than once.
 *
 * Example 2:
 * Input: path = "NESWW"
 * Output: true
 * Explanation: Notice that the path visits the origin twice.
 * 
 * Constraints:
 * 1 <= path.length <= 10^4
 * path[i] is either 'N', 'S', 'E', or 'W'.
 */

/**
 * First Solution: Runtime 52ms Memory 42mb
 */

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let posCheck = new Set();
    posCheck.add("0,0");

    let pos = {
        'N': [1, 0],
        'S': [-1, 0],
        'W': [0, -1],
        'E': [0, 1]
    }

    let currPos = [0, 0];

    for (let i of path) {
        let x = pos[i];
        currPos[0] += x[0];
        currPos[1] += x[1];

        let key = `${currPos[0]},${currPos[1]}`;

        if (posCheck.has(key)) return true;
        posCheck.add(key);
    }

    return false;
};


/**
 * Last Solution: Runtime 45ms Memory 42.2mb
 */

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    let pos = [0, 0];
    let posCheck = "(0,0)";

    for (let i = 0; i < path.length; i++) {

        if (path[i] === "N") {
            pos[0]++;
        } else if (path[i] === "S") {
            pos[0]--;
        } else if (path[i] === "E") {
            pos[1]++;
        } else {
            pos[1]--;
        }

        if (posCheck.includes(`(${pos[0]},${pos[1]})`) === true) return true;
        posCheck += `(${pos[0]},${pos[1]})`;
    }

    return false;
};