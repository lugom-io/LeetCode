function matchingStrings(stringList, queries) {
    let mapStrings = new Map();

    for (const string of stringList) {
        mapStrings.set(string, (mapStrings.get(string) || 0) + 1);
    }

    let results = [];

    for (const query of queries) {
        results.push(mapStrings.get(query) || 0);
    }

    return results;
}