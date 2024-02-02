// FILTER SOLUTION
function angryProfessor(k, a) {
    const notArrivedLate = a.filter((time) => time <= 0).length;
    return (notArrivedLate >= k) ? "NO" : "YES";
}

// LOOP SOLUTION
function angryProfessor(k, a) {
    let onTimeCount = 0;
    for (let time of a) {
        if (time <= 0) onTimeCount++;
        if (onTimeCount >= k) return "NO";
    }
    return "YES";
}
