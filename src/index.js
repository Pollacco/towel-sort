
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (matrix === undefined || matrix.length === 0) return [];
    matrix.forEach((e, index) => ((index % 2) ? arr.push(e.reverse()) : arr.push(e)));
    return arr.flat();
}
