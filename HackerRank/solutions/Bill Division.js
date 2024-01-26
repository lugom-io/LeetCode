function bonAppetit(bill, k, b) {
    let annaBill = bill.reduce((sum, item, index) => (index != k) ? sum + item : sum) / 2;

    console.log((annaBill === b) ? "Bon Appetit" : b - annaBill);
}