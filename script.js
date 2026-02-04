const params = new URLSearchParams(window.location.search);
const token = params.get("token");
const accion = params.get("accion");

if (!token || !accion) {
  document.getElementById("msg").innerText = "❌ Faltan parámetros en el link";
} else {
  fetch(`https://script.google.com/macros/s/AKfycbx7di1uhdDNHKh4NfzDCqQPYG4ZeUpG_VJ-_-VNlYe2T1dzmHAzxWgX6L-f0X4L7P4/exec?token=${token}&accion=${accion}`)
    .then(r => r.json())
    .then(d => {
      const msg = document.getElementById("msg");
      msg.innerText = d.mensaje;

      if (d.meet) {
        const a = document.getElementById("meet");
        a.href = d.meet;
        a.innerText = "Entrar a la clase"; 
        a.style.display = "inline-block";
        a.target = "_blank";  
        a.style.cursor = "pointer";         
        a.style.padding = "10px 20px";
        a.style.background = "#5b2d8b";
        a.style.color = "white";
        a.style.borderRadius = "8px";
        a.style.textDecoration = "none";

      }
    })
    .catch(err => {
      document.getElementById("msg").innerText = "❌ Error al comunicarse con el servidor";
      console.error(err);
    });
}
