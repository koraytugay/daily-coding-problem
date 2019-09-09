// Given a string and a set of delimiters,
// reverse the words in the string while maintaining the relative order of the delimiters.
//
// For example, given "hello/world:here", return "here/world:hello"
// Does your solution work for the following cases: "hello/world:here/", "hello//world:here"

exports.reverseKeepDelimiters = (chars, delimiters) => {
    let isWord = !delimiters.has(chars[0]);

    let words = [];
    let nonWords = [];

    let builder = '';
    for (let i = 0; i < chars.length; i++) {
        if (isWord && !delimiters.has(chars[i])) {
            builder = builder + chars[i];
            continue;
        }
        if (!isWord && delimiters.has(chars[i])) {
            builder = builder + chars[i];
            continue;
        }

        if (isWord)
            words.push(builder);
        else
            nonWords.push(builder);

        i--;
        isWord = !isWord;
        builder = '';
    }

    if (isWord)
        words.push(builder);
    else
        nonWords.push(builder);

    builder = '';
    isWord = !delimiters.has(chars[0]);
    let max = Math.max(words.length, nonWords.length);
    if (isWord)
        for (let i = 0; i < max; i++) {
            builder = builder + words.pop();
            if (nonWords[i])
                builder = builder + nonWords[i];
        }
    else
        for (let i = 0; i < max; i++) {
            if (nonWords[i])
                builder = builder + nonWords[i];
            let word = words.pop();
            if (word)
                builder = builder + word;
        }

    return builder;
};
