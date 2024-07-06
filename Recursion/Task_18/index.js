function jaredleto(num = Infinity) {
    if (num < 1) return;
    console.log (num);
    jaredleto (num - 1);
}