const params = new URLSearchParams(window.location.search);
const token = params.get("token");
const accion = params.get("rol"); 

fetch(`https://script.google.com/macros/s/AKfycbz1GTZkaceLzvyCWzLHz1xnncqgU6Xd2mr7j6sGHpmYnMXzUc6Og6aLQ60kQDS82gjR/exec?token=${token}&accion=${accion}`)
  .then(r => r.json())
  .then(d => {
    document.getElementById("msg").innerText = d.mensaje;
    if (d.meet) {
      const a = document.getElementById("meet");
      a.href = d.meet;
      a.style.display = "block";
    }
  });
