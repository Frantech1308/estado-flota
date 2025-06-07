
const aeronaves = [
  { matricula: "EC-JOV", modelo: "DA20-C1" }, { matricula: "EC-LIC", modelo: "DA20-C1" },
  { matricula: "EC-LTE", modelo: "DA20-C1" }, { matricula: "EC-MQT", modelo: "DA20-C1" },
  { matricula: "EC-MRQ", modelo: "DA20-C1" }, { matricula: "EC-NAS", modelo: "DA20-C1" },
  { matricula: "EC-NFV", modelo: "DA20-C1" }, { matricula: "EC-NKV", modelo: "DA20-C1" },
  { matricula: "EC-LRF", modelo: "DA40" }, { matricula: "EC-MHQ", modelo: "DA40 NG" },
  { matricula: "EC-MFV", modelo: "DA42" }, { matricula: "EC-MVA", modelo: "DA42" },
  { matricula: "EC-NNU", modelo: "DA42" }, { matricula: "OE-FWT", modelo: "DA62" },
  { matricula: "EC-OEY", modelo: "P2006T" }, { matricula: "EC-NYU", modelo: "P2008-JC" },
  { matricula: "EC-NYV", modelo: "P2008-JC" }, { matricula: "EC-OAT", modelo: "P2008-JC" },
  { matricula: "EC-OIQ", modelo: "P2008-JC" }, { matricula: "EC-OIR", modelo: "P2008-JC" },
  { matricula: "EC-OIS", modelo: "P2008-JC" }, { matricula: "EC-OIX", modelo: "P2008-JC" },
  { matricula: "EC-OJZ", modelo: "P2008-JC" }, { matricula: "EC-KKH", modelo: "SR20" },
  { matricula: "EC-LVJ", modelo: "SR20" }, { matricula: "EC-NGE", modelo: "SR20" },
  { matricula: "EC-NLH", modelo: "SR20" }
];

const estados = ["Operativa", "Revisión", "LECU", "AOG", "Pdte Pieza"];

function crearPanel() {
  const panel = document.getElementById("panel");
  panel.innerHTML = "";
  aeronaves.forEach(({ matricula, modelo }) => {
    const estadoActual = localStorage.getItem(matricula) || "Operativa";
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="info">
        <strong>${matricula}</strong>
        <span>${modelo}</span>
      </div>
      <select id="estado-${matricula}">
        ${estados.map(e => `<option value="${e}" ${e === estadoActual ? "selected" : ""}>${e}</option>`).join("")}
      </select>
    `;
    panel.appendChild(card);
  });
}

function guardarCambios() {
  aeronaves.forEach(({ matricula }) => {
    const valor = document.getElementById(`estado-${matricula}`).value;
    localStorage.setItem(matricula, valor);
  });
  document.getElementById("msg").textContent = "✅ Cambios guardados (simulados)";
}

crearPanel();
