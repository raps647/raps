function mulaipesan() {
    document.getElementById('tombolMulai').style.display = 'none';
const pesan = document.getElementById('pesankonten');
pesan.classList.remove('hidden');
pesan.classList.add('visible');
document.getElementById('judul').innerText = 'Surprise! 🎁';
setTimeout(buatKonfeti, 100);

}
function putarMusik() {
    const lagu = document.getElementById('lagu');
    if (lagu.paused) {
        lagu.play().catch(error => {
            console.log("Gagal memutar audio otomatis, coba klik lagi:", error);
            alert("Browser mungkin memblokir pemutaran otomatis. Silakan coba klik tombol lagi!");
        });
    } else {
        lagu.pause();
    }
}
function buatKonfeti() {
    
    const konfetiContainer = document.getElementById('konfeti');
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
    const jumlahKonfeti = 50;

    for (let i = 0; i < jumlahKonfeti; i++) {
        const piece = document.createElement('div');
        piece.classList.add('konfeti-piece');
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.animationDuration = `${Math.random() * 2 + 3}s`; // Durasi 3-5 detik
       piece.style.width = '10px';
        piece.style.height = '10px';
        piece.style.position = 'absolute'; 
        piece.style.top = '-20px';
        konfetiContainer.appendChild(piece);

}
    }
    const style = document.getElementById('style');
    style.innerHTML = `
    @keyframe fall {
   to { transform: translateY(100vh) rotate(720deg); opacity: 0.5;}
}
   .konfeti-piece {
   animation-name: fall;
   animation-timing-function: linear;
   animation-iteration-count: 1;
   }
   `;
   document.head.appendChild(style);
   