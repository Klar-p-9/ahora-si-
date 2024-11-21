document.getElementById('envioForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const paquete = document.getElementById('paquete').value;
  const prioridad = document.getElementById('prioridad').value;

  alert(`Envío registrado:\nCliente: ${nombre}\nPaquete: ${paquete}\nPrioridad: ${prioridad}`);
  this.reset();
});
