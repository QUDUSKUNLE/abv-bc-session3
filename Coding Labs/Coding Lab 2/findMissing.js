findMissing = (x, y) => {
    if (x.length === y.length) {
        return 0;
    } else {
        let xSort = x.sort(compareNumbers);
        let ySort = y.sort(compareNumbers);

        function compareNumbers(a, b) {
            return a - b;
        }
        let result;
        if (xSort.length > ySort.length && xSort[0] === ySort[0]) {
            result = xSort.pop();
        } else if (xSort.length < ySort.length && xSort[0] === ySort[0]) {
            result = ySort.pop();
        }
        if (xSort.length < ySort.length && xSort[0] === ySort[0]) {
            result = ySort.pop();
        } else if (xSort.length < ySort.length && xSort[0] !== ySort[0]) {
            result = ySort[0];
        }
        return result;
    }
};