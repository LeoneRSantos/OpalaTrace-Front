// Transforma a data
export function formatarData(dateTime: string): string {
    // Converter a string para um objeto Date
    const date = new Date(dateTime);

    // Extrair partes da data e hora
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Mês é 0-based
    const year = date.getUTCFullYear();

    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');

    // Retornar a string formatada
    return `${day}/${month}/${year}  |  ${hours}:${minutes}:${seconds}`;
}