/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {

    let ans = 0;

    const calcDiameter = (node) => {
        if(node == null) return 0;

        const left = calcDiameter(node.left);
        const right =  calcDiameter(node.right);

        ans = Math.max(ans, left + right);

        return Math.max(left, right) + 1;
    }

    calcDiameter(root);

    return ans;
};