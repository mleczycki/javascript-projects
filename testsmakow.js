var products = ["Czu-Czu-Lada", "Miętowy chłód", "Ciasto naleśnikowe", "Guma balonowa"];
var hasBubbleGum = [false, false, false, true];
var i = 0;
while (i < hasBubbleGum.length) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + " zawiera gumę do żucia.");
    }

    i = i + 1;
}
