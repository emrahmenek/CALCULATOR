let buttonlar = document.getElementsByTagName("button");
let sonuç = document.getElementById("sonuç");
let uzunluk = buttonlar.length;
i = 0;
for (i = 0; i < uzunluk; i++) {
  buttonlar[i].onclick = hesapla;
}

function hesapla() {
  let deger = this.innerHTML;
  if (deger == "=") {
    try {
      sonuç.value = eval(sonuç.value);
    } catch (e) {
      sonuç.value = "0";
    }
    return;
  }
  sonuç.value += deger;
}
