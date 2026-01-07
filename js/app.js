// --- LOGIN ---
const loginForm = document.getElementById("loginForm");
if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // user contoh
        const users = [
            {email: "wali7@pesantren.com", password: "123", role: "wali7"}
        ];

        const user = users.find(u => u.email === email && u.password === password);
        if(user){
            alert("Login berhasil!");
            window.location.href = "dashboard.html";
        } else {
            alert("Email atau password salah!");
        }
    });
}

// --- DATA SISWA ---
let siswaData = JSON.parse(localStorage.getItem("siswaData") || "[]");

const siswaForm = document.getElementById("siswaForm");
const listSiswa = document.getElementById("listSiswa");

if(siswaForm){
    siswaForm.addEventListener("submit", function(e){
        e.preventDefault();
        const nama = document.getElementById("namaSiswa").value;
        siswaData.push(nama);
        localStorage.setItem("siswaData", JSON.stringify(siswaData));
        renderSiswa();
        siswaForm.reset();
    });
}

function renderSiswa(){
    if(!listSiswa) return;
    listSiswa.innerHTML = "";
    siswaData.forEach((siswa, index)=>{
        const li = document.createElement("li");
        li.textContent = siswa + " ";
        const btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.onclick = () => {
            siswaData.splice(index,1);
            localStorage.setItem("siswaData", JSON.stringify(siswaData));
            renderSiswa();
        };
        li.appendChild(btnHapus);
        listSiswa.appendChild(li);
    });
}
renderSiswa();

// --- ABSENSI ---
let absenData = JSON.parse(localStorage.getItem("absenData") || "[]");

const absenForm = document.getElementById("absenForm");
const listAbsen = document.getElementById("listAbsen");

if(absenForm){
    absenForm.addEventListener("submit", function(e){
        e.preventDefault();
        const nama = document.getElementById("namaAbsen").value;
        const status = document.getElementById("status").value;
        absenData.push({nama, status});
        localStorage.setItem("absenData", JSON.stringify(absenData));
        renderAbsen();
        absenForm.reset();
    });
}

function renderAbsen(){
    if(!listAbsen) return;
    listAbsen.innerHTML = "";
    absenData.forEach((a, index)=>{
        const li = document.createElement("li");
        li.textContent = `${a.nama} - ${a.status} `;
        const btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.onclick = () => {
            absenData.splice(index,1);
            localStorage.setItem("absenData", JSON.stringify(absenData));
            renderAbsen();
        };
        li.appendChild(btnHapus);
        listAbsen.appendChild(li);
    });
}
renderAbsen();

// --- NILAI ---
let nilaiData = JSON.parse(localStorage.getItem("nilaiData") || "[]");

const nilaiForm = document.getElementById("nilaiForm");
const listNilai = document.getElementById("listNilai");

if(nilaiForm){
    nilaiForm.addEventListener("submit", function(e){
        e.preventDefault();
        const nama = document.getElementById("namaNilai").value;
        const mapel = document.getElementById("mapel").value;
        const nilai = document.getElementById("nilai").value;
        nilaiData.push({nama, mapel, nilai});
        localStorage.setItem("nilaiData", JSON.stringify(nilaiData));
        renderNilai();
        nilaiForm.reset();
    });
}

function renderNilai(){
    if(!listNilai) return;
    listNilai.innerHTML = "";
    nilaiData.forEach((n, index)=>{
        const li = document.createElement("li");
        li.textContent = `${n.nama} - ${n.mapel}: ${n.nilai} `;
        const btnHapus = document.createElement("button");
        btnHapus.textContent = "Hapus";
        btnHapus.onclick = () => {
            nilaiData.splice(index,1);
            localStorage.setItem("nilaiData", JSON.stringify(nilaiData));
            renderNilai();
        };
        li.appendChild(btnHapus);
        listNilai.appendChild(li);
    });
}
renderNilai();
