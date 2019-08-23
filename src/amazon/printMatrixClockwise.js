// Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
exports.printMatrixClockwise = function (matrix) {
    let s = '';
    let visited = 0;

    let east = (index, matrix) => {
        for (let i = index; i < matrix[index].length - index; i++) {
            visited++;
            s = s.concat(matrix[index][i]);
        }
    };

    let west = (index, matrix) => {
        for (let i = matrix[index].length - index - 2; i >= 0 + index; i--) {
            visited++;
            s = s.concat(matrix[matrix.length - index - 1][i]);
        }
    };

    let south = (index, matrix) => {
        for (let i = index + 1; i < matrix.length - index; i++) {
            visited++;
            s = s.concat(matrix[i][matrix[i].length - index - 1]);
        }
    };

    let north = (index, matrix) => {
        for (let i = matrix.length - 1 - index - 1; i > index; i--) {
            visited++;
            s = s.concat(matrix[i][index]);
        }
    };

    let totalCount = matrix.length * matrix[0].length;

    for (let i = 0; i < Number.POSITIVE_INFINITY; i++) {
        east(i, matrix);
        if (visited === totalCount) break;

        south(i, matrix);
        if (visited === totalCount) break;

        west(i, matrix);
        if (visited === totalCount) break;

        north(i, matrix);
        if (visited === totalCount) break;
    }

    return s;
};
