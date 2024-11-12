export function definirNomePeloIDEthereum(carteiraEthereum: string, nomes: any, infoBD: any) {
    // Itera pela lista de elementos em 'nomes'
    for (let element of nomes) {
        // Itera pela lista de 'verifiers' dentro de cada elemento
        for (let verifier of element.verifiers) {
            // Se o valor do verifier for igual ao parâmetro, retorna o nome
            if (verifier.value === carteiraEthereum) {
                // console.log(element.verifiers);
                for (let info of infoBD) {
                    if (element.id == info.id) {
                        return info.nome
                    }
                }
                return element.name;
            }
        }
    }

    return carteiraEthereum;
}