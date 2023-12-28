/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let prev = 0;
    let next = 1;
    let count = 0;

    while (true) {
        if (count === 0) {
            yield prev;
            count++;
        } else if(count === 1){
            yield next;
            count++;
        } else {
            const r = prev + next;
            yield r;
            prev = next;
            next = r;
        }
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */