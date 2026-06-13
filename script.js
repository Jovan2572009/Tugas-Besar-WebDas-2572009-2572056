var tombolTema = document.getElementById("tombolTema");

if (tombolTema) {
    tombolTema.onclick = function() {
        var body = document.body;
        var konten = document.querySelector(".content");

        if (body.style.backgroundColor === "black") {
            body.style.backgroundColor = "#f4f4f4";
            body.style.color = "#333333";
            konten.style.backgroundColor = "white";
            tombolTema.innerHTML = "Mode Gelap";
        } else {
            body.style.backgroundColor = "black";
            body.style.color = "white";
            konten.style.backgroundColor = "#222222";
            tombolTema.innerHTML = "Mode Terang";
        }
    };
}

var tombolKirim = document.getElementById("tombolKirim");

if (tombolKirim) {
    tombolKirim.onclick = function() {
        var nama = document.getElementById("inputNama").value;
        var email = document.getElementById("inputEmail").value;
        var pesan = document.getElementById("inputPesan").value;

        if (nama === "") {
            alert("Hei! Namanya jangan dikosongin dong!");
        } else if (email === "") {
            alert("Emailnya juga harus diisi!");
        } else if (pesan === "") {
            alert("Tulis pesannya dulu!");
        } else {
            alert("Bagus! Pesan dari " + nama + " berhasil disimulasikan terkirim.");
            
            var semuaInput = document.querySelectorAll("#formKontak input, #formKontak textarea");
            for (var i = 0; i < semuaInput.length; i++) {
                semuaInput[i].value = "";
            }
        }
    };
}