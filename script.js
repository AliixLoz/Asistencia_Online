const params = new URLSearchParams(window.location.search);
const token = params.get("token");
const accion = params.get("accion"); 

fetch(`https://script.google.com/macros/s/AKfycbx7di1uhdDNHKh4NfzDCqQPYG4ZeUpG_VJ-_-VNlYe2T1dzmHAzxWgX6L-f0X4L7P4/exec?token=${token}&accion=${accion}`)
  .then(r => r.json())
  .then(d => {
    document.getElementById("msg").innerText = d.mensaje;
    if (d.meet) {
      const a = document.getElementById("meet");
      a.href = d.meet;
      a.style.display = "block";
    }
  });
