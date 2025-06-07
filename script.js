
const supabase = supabase.createClient(
  'https://bliqqazepyljpuyszffy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsaXFxYXplcHlsanB1eXN6ZmZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyNDI3MTAsImV4cCI6MjA2NDgxODcxMH0.PrM6zSdERMGNikcqGiGUPHVbX7ydVI4W_fGBpkokufs'
);

const colores = {
  'Operativo': 'verde',
  'En reparación': 'rojo',
  'Mantenimiento': 'naranja',
  'En revisión': 'amarillo',
  'Fuera de servicio': 'rojo',
  'Inactivo': 'gris'
};

function agruparAeronaves(aviones) {
  const grupos = {};
  aviones.forEach(avion => {
    const clave = `${avion.marca} ${avion.modelo}`;
    if (!grupos[clave]) grupos[clave] = [];
    grupos[clave].push(avion);
  });
  return grupos;
}

async function cargarAeronaves() {
  const contenedor = document.getElementById('contenedor-aviones');
  contenedor.innerHTML = 'Cargando...';
  const { data, error } = await supabase
    .from('aeronaves')
    .select('*')
    .order('marca')
    .order('modelo');

  if (error) {
    contenedor.innerHTML = 'Error cargando datos';
    console.error(error);
    return;
  }

  const grupos = agruparAeronaves(data);
  contenedor.innerHTML = '';
  for (const [grupo, aviones] of Object.entries(grupos)) {
    const divGrupo = document.createElement('div');
    divGrupo.className = 'grupo';
    divGrupo.innerHTML = `<h2>✈️ ${grupo}</h2>`;
    aviones.forEach(avion => {
      const div = document.createElement('div');
      div.className = 'avion';
      div.innerHTML = `
        <div>
          <strong>${avion.matricula}</strong>
        </div>
        <div class="estado ${colores[avion.estado] || 'gris'}">${avion.estado.toUpperCase()}</div>
      `;
      divGrupo.appendChild(div);
    });
    contenedor.appendChild(divGrupo);
  }

  document.getElementById('timestamp').textContent = `Última actualización: ${new Date().toLocaleString()}`;
}

cargarAeronaves();
setInterval(cargarAeronaves, 5 * 60 * 1000); // cada 5 minutos
