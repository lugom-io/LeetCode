function hurdleRace(k, height) {

    const maxHeight = Math.max(...height);
    const doses = maxHeight - k;
    return (doses > 0) ? doses : 0;

}