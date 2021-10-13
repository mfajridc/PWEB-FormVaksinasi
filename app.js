const form = document.getElementById("form");
const email = document.getElementById("email");
const nrp = document.getElementById("nrp");
const nama = document.getElementById("nama");
const alamat = document.getElementById("alamat");
const departemen = document.getElementById("departemen");
const ketvaksin = document.getElementById("ketvaksin");
const jenis = document.getElementById("jenis");
const dosis = document.getElementById("dosis");
const sertifikat = document.getElementById("sertifikat");
const alasan = document.getElementById("alasan");
let formvalid = 1;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  if (formvalid == 1) {
    alertify.alert("Form Submitted", function () {
      alertify.success("Ok");
    });
  } else {
    formvalid = 1;
  }
});

function checkInputs() {
  //get input
  const nrpValue = nrp.value.trim();
  const emailValue = email.value.trim();
  const namaValue = nama.value.trim();
  const alamatValue = alamat.value.trim();
  const ketvaksinValue = ketvaksin.value.trim();
  const departemenValue = departemen.value.trim();
  const jenisValue = jenis.value.trim();
  const dosisValue = dosis.value.trim();
  const sertifikatValue = sertifikat.value.trim();
  const alasanValue = alasan.value.trim();
  if (nrpValue === "") {
    setErrorFor(nrp, "nrp tidak boleh kosong");
  } else {
    setSuccessFor(nrp);
  }
  if (namaValue === "") {
    setErrorFor(nama, "Nama tidak boleh kosong");
  } else {
    setSuccessFor(nama);
  }
  if (alamatValue === "") {
    setErrorFor(alamat, "Alamat tidak boleh kosong");
  } else {
    setSuccessFor(alamat);
  }
  if (departemenValue === "0") {
    setErrorFor(departemen, "Pilih departemen Anda");
  } else {
    setSuccessFor(departemen);
  }
  if (ketvaksinValue === "0") {
    setErrorFor(ketvaksin, "Pilih salah satu");
  } else if (ketvaksinValue === "1") {
    setSuccessFor(ketvaksin);
    if (jenisValue === "0") {
      setErrorFor(jenis, "Pilih salah satu");
    } else {
      setSuccessFor(jenis);
    }
    if (dosisValue === "") {
      setErrorFor(dosis, "Dosis tidak boleh kosong");
    } else {
      setSuccessFor(dosis);
    }
    if (sertifikatValue === "") {
      setErrorFor(sertifikat, "Sertifikat tidak boleh kosong");
    } else {
      setSuccessFor(sertifikat);
    }
  } else if (ketvaksinValue === "2") {
    setSuccessFor(ketvaksin);
    if (alasanValue === "0") {
      setErrorFor(alasan, "Pilih salah satu");
    } else {
      setSuccessFor(alasan);
    }
  }
  if (emailValue === "") {
    setErrorFor(email, "Email tidak boleh kosong");
  } else if (!emailValue) {
    setErrorFor(email, "Email is not valid");
  } else {
    setSuccessFor(email);
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formvalid = 0;
  if (formvalid == 0) {
    console.log(message);
  }
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isVaksin() {
  ketvaksinValue = document.getElementById("ketvaksin").value.trim();
  if (ketvaksinValue == "0") {
    document.getElementById("sudah-vaksin").style.display = "none";
    document.getElementById("belum-vaksin").style.display = "none";
  } else if (ketvaksinValue == "1") {
    document.getElementById("sudah-vaksin").style.display = "block";
    document.getElementById("belum-vaksin").style.display = "none";
  } else if (ketvaksinValue == "2") {
    document.getElementById("sudah-vaksin").style.display = "none";
    document.getElementById("belum-vaksin").style.display = "block";
  }
}