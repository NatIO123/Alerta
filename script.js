const data = {
    Object: "personas",
    Count: 20,
    date: "7/10/2024",
    timestamp: "3:26",
    device: "AMB82",
    Connected: "On"
};

// Asignar los valores del JSON a los elementos de la tarjeta
document.getElementById("person-name").textContent = `Object: ${data.Object}`;
document.getElementById("count").textContent = `Count: ${data.Count}`;
document.getElementById("date").textContent = `Date: ${data.date}`;
document.getElementById("timestamp").textContent = `Timestamp: ${data.timestamp}`;
document.getElementById("device").textContent = `Device: ${data.device}`;
document.getElementById("Connected").textContent = `Conexion: ${data.Connected}`;