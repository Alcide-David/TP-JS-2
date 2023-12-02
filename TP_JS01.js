function retireEspasSoteLiy(teks) {
    var teksSansEspas = "";
    for (var i = 0; i < teks.length; i++) {
        var karakte = teks[i];
        if (karakte !== ' ' && karakte !== '\n') {
            teksSansEspas += karakte;
        }
    }
    return teksSansEspas;
}

// Rele fonksyon
var teksEnte = "     Sa a se yon tèks\n    ak plizyè liy ki gen espas\n    ki gen sote liy tou.     ";
var teksSansEspas = retireEspasSoteLiy(teksEnte);
console.log(teksSansEspas);
