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