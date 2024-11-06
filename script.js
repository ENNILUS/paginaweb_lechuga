// Información de las tradiciones de Día de Muertos en cada estado
const tradiciones = {
    "Jalisco": "En Jalisco, el Día de Muertos se celebra con altares coloridos, mariachis y visitas a los cementerios. Los familiares adornan las tumbas con flores de cempasúchil y ofrendas de comida.",
    "Ciudad de México": "En la Ciudad de México, se celebra con ofrendas en casas, desfiles como el famoso Desfile de Día de Muertos y el Festival de las Calaveras en Xochimilco.",
    "Nuevo León": "En Nuevo León, la tradición incluye altares en las casas y plazas. Los regiomontanos realizan festivales y muestras de altares en los panteones.",
    "Veracruz": "Veracruz celebra con comparsas y danzas tradicionales. Las familias colocan altares llenos de cempasúchil, veladoras y comida típica como tamales y dulces de calabaza.",
    "Yucatán": "En Yucatán se celebra el 'Hanal Pixán', que significa 'comida de las almas'. Se preparan alimentos tradicionales como mucbipollo para ofrendar a los difuntos."
};

// Función para mostrar el tooltip
function showTooltip(event, estado) {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'block';
    tooltip.textContent = tradiciones[estado] || "Tradición no disponible"; // Muestra la tradición del estado o un mensaje predeterminado
    tooltip.style.left = (event.pageX + 10) + 'px'; // Posiciona el tooltip a la derecha del cursor
    tooltip.style.top = (event.pageY + 10) + 'px'; // Posiciona el tooltip debajo del cursor
}

// Función para ocultar el tooltip
function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.display = 'none';
}

