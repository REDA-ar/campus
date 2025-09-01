// Para forzar un curso o ejercicio particular (comentar para usar en modo libre)
// window.actividad_obligatoria = { curso:'inpr_unq_2023_s1' }; // sólo el curso
// window.actividad_obligatoria = { curso:'inpr_unq_2023_s1', actividad:'Rosa de los vientos' }; // el curso y el ejercicio

// URL del servidor
// const urlServidor = "https://epli.exp.dc.uba.ar"
const urlServidor = "http://157.92.26.79:8060"
// ¿Está habilitado el servidor de redirección?
const servidorDeRedireccion = false;
const puertoInicial = 8040; // En caso de usar el servidor de redirección

// Para habilitar la configuración del servidor a mano a través de IP y puerto (asignar 'false' para anular)
let servidorManual = false;

// Para iniciar con una IP de servidor particular (comentar para anular)
window.servidor = "192.168.0.96";
// window.servidor = "157.92.26.235";