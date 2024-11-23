export function definirIDPeloMint(listaDeMintes: any[], indice: string) {
    for (let element of listaDeMintes) {
        if (element.tokenIndex == indice) {
            return element.localId;
        }
    }
    return " \"ID não identificado\"";
}

export function definirDadosPeloMint(listaDeMintes: any[], indice: string) {
    for (let element of listaDeMintes) {
        if (element.tokenIndex == indice) {
            return element.message;
        }
    }
    return "Dado não fornecido";
}