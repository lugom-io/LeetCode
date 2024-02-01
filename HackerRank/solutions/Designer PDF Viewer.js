// SOLUÇÃO COM HASH
function designerPdfViewer(h, word) {
    const heightWords = new Map();
    const allChars = "abcdefghijklmnopqrstuvwxyz".split('');

    for (const [i, char] of allChars.entries()) {
        heightWords.set(char, h[i]);
    }

    let maxHeight = 0;
    for (const char of word) {
        let currentHeight = heightWords.get(char);
        if (currentHeight > maxHeight) maxHeight = currentHeight;
    }

    return maxHeight * word.length;
}

// SOLUÇÃO COM INDEX OF
function designerPdfViewer(h, word) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let maxHeight = 0;

    for (const char of word) {
        let currentHeight = h[chars.indexOf(char)];
        if (currentHeight > maxHeight) maxHeight = currentHeight;
    }

    return maxHeight * word.length;
}