function appendAndDelete(s, t, k) {
    const sLen = s.length;
    const tLen = t.length;
    if (k >= sLen + tLen) return "Yes";

    let i = 0;
    while (s[i] == t[i] && i < Math.max(sLen, tLen)) {
        i++;
    }

    const alterations = sLen + tLen - i * 2;

    if (k < alterations) {
        return "No";
    } else if (k === alterations || (k - alterations) % 2 == 0) {
        return "Yes";
    }

    return "No";
}