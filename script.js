
const aeronaves = [
  { matricula: "EC-JOV", modelo: "DA20-C1", marca: "DIAMOND" },
  { matricula: "EC-LIC", modelo: "DA20-C1", marca: "DIAMOND" },
  { matricula: "EC-LTE", modelo: "DA20-C1", marca: "DIAMOND" },
  { matricula: "EC-MQT", modelo: "DA20-C1", marca: "DIAMOND" },
  { matricula: "EC-MRQ", modelo: "DA20-C1", marca: "DIAMOND" },
  { matricula: "EC-NAS", modelo: "DA20-C1", marca: "DIAMOND" },
  { matricula: "EC-NFV", modelo: "DA20-C1", marca: "DIAMOND" },
  { matricula: "EC-NKV", modelo: "DA20-C1", marca: "DIAMOND" },
  { matricula: "EC-LRF", modelo: "DA40", marca: "DIAMOND" },
  { matricula: "EC-MHQ", modelo: "DA40 NG", marca: "DIAMOND" },
  { matricula: "EC-MFV", modelo: "DA42", marca: "DIAMOND" },
  { matricula: "EC-MVA", modelo: "DA42", marca: "DIAMOND" },
  { matricula: "EC-NNU", modelo: "DA42", marca: "DIAMOND" },
  { matricula: "OE-FWT", modelo: "DA62", marca: "DIAMOND" },
  { matricula: "EC-OEY", modelo: "P2006T", marca: "TECNAM" },
  { matricula: "EC-NYU", modelo: "P2008-JC", marca: "TECNAM" },
  { matricula: "EC-NYV", modelo: "P2008-JC", marca: "TECNAM" },
  { matricula: "EC-OAT", modelo: "P2008-JC", marca: "TECNAM" },
  { matricula: "EC-OIQ", modelo: "P2008-JC", marca: "TECNAM" },
  { matricula: "EC-OIR", modelo: "P2008-JC", marca: "TECNAM" },
  { matricula: "EC-OIS", modelo: "P2008-JC", marca: "TECNAM" },
  { matricula: "EC-OIX", modelo: "P2008-JC", marca: "TECNAM" },
  { matricula: "EC-OJZ", modelo: "P2008-JC", marca: "TECNAM" },
  { matricula: "EC-KKH", modelo: "SR20", marca: "CIRRUS" },
  { matricula: "EC-LVJ", modelo: "SR20", marca: "CIRRUS" },
  { matricula: "EC-NGE", modelo: "SR20", marca: "CIRRUS" },
  { matricula: "EC-NLH", modelo: "SR20", marca: "CIRRUS" }
];

const estados = ["Operativa", "Revisión", "LECU", "AOG", "Pdte Pieza"];

function generarFlota() {
  const contenedor = document.getElementById("flota");
  contenedor.innerHTML = "";

  const mitad = Math.ceil(aeronaves.length / 2);
  const columnas = [aeronaves.slice(0, mitad), aeronaves.slice(mitad)];

  columnas.forEach(columna => {
    const col = document.createElement("div");
    col.className = "columna";

    columna.forEach(({ matricula, modelo }) => {
      const estado = localStorage.getItem(matricula) || "Operativa";
      const avion = document.createElement("div");
      avion.className = "avion";
      avion.innerHTML = `
        <div class="info">
          <strong>${matricula}</strong>
          <span>${modelo}</span>
        </div>
        <div class="estado ${estado}">${estado}</div>
      `;
      col.appendChild(avion);
    });

    contenedor.appendChild(col);
  });

  document.getElementById("last-update").textContent =
    "Última actualización: " + new Date().toLocaleString();
}

generarFlota();
setInterval(generarFlota, 300000);
