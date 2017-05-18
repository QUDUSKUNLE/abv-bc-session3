reverseString = (word) => {
    let reverseString = "";
    if (word === "") {
        return null;
    } else {
        for (var i = word.length - 1; i > -1; i--) {
            reverseString += word[i]
        }
        if (reverseString === word) {
            return true;
        } else {
            return reverseString;
        }
    }
}