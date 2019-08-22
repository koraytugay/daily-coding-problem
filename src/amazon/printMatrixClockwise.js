exports.printMatrixClockwise = function (matrix) {
    let printEast = function (index, matrix) {
        let s = '';
        for (let i = index; i < matrix[index].length - index; i++) {
            s = s.concat(matrix[index][i]);
        }
        return s;
    };

    let printWest = function (index, matrix) {
        let s = '';
        for (let i = matrix[index].length - index - 2; i >= 0 + index; i--) {
            s = s.concat(matrix[matrix.length - index - 1][i]);
        }
        return s;
    };

    let printSouth = function (index, matrix) {
        let s = '';
        for (let i = index + 1; i < matrix.length - index; i++) {
            s = s.concat(matrix[i][matrix[i].length - index - 1]);
        }
        return s;
    };

    let printNorth = function (index, matrix) {
        let s = '';
        for (let i = matrix.length - 1 - index - 1; i > index ; i--) {
            s = s.concat(matrix[i][index]);
        }
        return s;
    };

    let totalCount = matrix.length * matrix[0].length;
    let s = '';
    for (let i = 0; i < Number.POSITIVE_INFINITY; i++) {
        s = s.concat(printEast(i, matrix));
        if (s.length === totalCount) {
            break;
        }
        s = s.concat(printSouth(i, matrix));
        if (s.length === totalCount) {
            break;
        }
        s = s.concat(printWest(i, matrix));
        if (s.length === totalCount) {
            break;
        }
        s = s.concat(printNorth(i, matrix));
        if (s.length === totalCount) {
            break;
        }
    }

    return s;
};
