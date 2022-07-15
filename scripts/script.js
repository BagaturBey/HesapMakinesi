const aydinlikTema = "styles/aydinlik.css";
const karanlikTema = "styles/karanlik.css";
const temaIcon = document.getElementById("tema-iconu");
const res = document.getElementById("sonuc");
const toast = document.getElementById("toast");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Cidden denedin mi?";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

// Karanlık - Aydınlık modların geçişleri için
function temaDegistir() {
  const tema = document.getElementById("tema");
  setTimeout(() => {
    toast.innerHTML = "Hesap Makinesi";
  }, 1500);
  if (tema.getAttribute("href") === aydinlikTema) {
    tema.setAttribute("href", karanlikTema);
  } else {
    tema.setAttribute("href", aydinlikTema);
  }
}

// Girilen değerin ekranda gösterilmesi
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

//klavye girişlerini işlemek için olay işleyicisi 
document.addEventListener("keydown", keyboardInputHandler);

//klavye girişlerini işleme işlevi
function keyboardInputHandler(e) {
  e.preventDefault();

  //Sayılar
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //İşlemler
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //Ondalık işlemler için 
  if (e.key === ".") {
    res.value += ".";
  }

  //Sonucu görmek için Enter'a basmak
  if (e.key === "Enter") {
    calculate(sonuc.value);
  }

  //Son yazılanın silinmesi için backspace tuşu
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //dizedeki son öğeyi kaldırmak için
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}
