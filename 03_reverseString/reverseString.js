const reverseString = function (word) {
    try {
        const arr = word.split('');
        let arrayR = [];
        console.log(Array.isArray(arrayR));
        console.log(typeof arrayR);
        for (let i = arr.length - 1; i >= 0; i--) {

            arrayR.push(arr[i]);
        }

        console.log(arrayR);
        let wordR = arrayR.join('');
        console.log(wordR);
        return wordR;
    }

    catch (e) {
        console.log(e instanceof TypeError);
        console.log(e.message);
        console.log(e.name);
        console.log(e.fileName);
        console.log(e.lineNumber);
        console.log(e.columnNumber);
        console.log(e.stack);

    }

};

let result = reverseString('hello');

// Do not edit below this line
//module.exports = reverseString;
