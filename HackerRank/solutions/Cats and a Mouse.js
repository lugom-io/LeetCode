function catAndMouse(x, y, z) {
    const catADistance = Math.abs(x - z);
    const catBDistance = Math.abs(y - z);

    if (catADistance == catBDistance) {
        return "Mouse C";
    } else if (catADistance > catBDistance) {
        return "Cat B";
    } else {
        return "Cat A";
    }
}