// Data de início do namoro
const startDate = new Date("2024-08-12");

// Data de corte para o contador mostrar 8 meses (12 de novembro de 2024)
const cutoffDate = new Date("2024-11-12");

// Função para calcular a diferença de tempo
function updateTime() {
    const currentDate = new Date(); // Data atual
    let years = currentDate.getFullYear() - startDate.getFullYear(); // Calcular anos
    let months = currentDate.getMonth() - startDate.getMonth(); // Calcular meses
    let days = currentDate.getDate() - startDate.getDate(); // Calcular dias

    // Se o mês atual for menor que o mês de início, ajusta o ano e mês
    if (months < 0) {
        years--;
        months += 12; // Ajuste para meses negativos
    }

    // Se a data atual for antes de 12 de novembro de 2024, ajusta para 7 meses
    if (currentDate < cutoffDate) {
        months = 7; // Quando ainda estamos antes de 12 de novembro, queremos mostrar 7 meses
    } else if (currentDate >= cutoffDate) {
        months = 8; // Quando chegarmos em 12 de novembro, queremos que o contador mostre 8 meses
    }

    // Calcular dias restantes após o último mês completo
    if (days < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0); // Último dia do mês anterior
        days += lastMonth.getDate(); // Ajusta os dias para o último mês
    }

    // Atualizando os valores no HTML
    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}

// Atualizar o contador a cada segundo
setInterval(updateTime, 1000);

// Inicializar com o valor assim que a página carregar
updateTime();

