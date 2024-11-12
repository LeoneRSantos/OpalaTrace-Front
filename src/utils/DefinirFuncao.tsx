export function definirFuncao(idFuncao: string) {
    if (idFuncao == "f6499904-c2fd-49f1-a0a2-9bfd80a6cd65") {
        return "Lapidador";
    }
    if (idFuncao == "deb21e2e-f742-4d94-80a4-b9623885244a") {
        return "Varejista";

    }

    if (idFuncao == "ae9f5185-e07f-4fa5-916f-2d669356b79e") {
        return "Transportador";
    }

    if (idFuncao == "0d1626ef-8dab-4f4c-9128-3dd3a57c515d") {
        return "Lapidador industrial";
    }

    if (idFuncao == "820529c9-4510-4b3e-9c3b-736a682fb6eb") {
        return "Lapidador artesanal";
    }

    if (idFuncao == "30cb37d4-1b38-44b8-896b-40644120144c") {
        return "Cliente";
    }
}

// Função que define a função exercida pelo agente a partir do ID
export function definirFuncaoPeloIDEthereum(idFuncao: string, nomes: any, infoBD: any) {

    // Itera pela lista de elementos em 'nomes'
    for (let element of nomes) {
        // Itera pela lista de 'verifiers' dentro de cada elemento
        for (let verifier of element.verifiers) {
            // Se o valor do verifier for igual ao parâmetro, retorna o nome
            if (verifier.value === idFuncao) {
                // console.log(element.verifiers);
                for (let info of infoBD) {
                    if (element.id == info.id) {
                        const funcaoAtual = info.id_funcao;

                        if (funcaoAtual == "f6499904-c2fd-49f1-a0a2-9bfd80a6cd65") {
                            return "Lapidador";
                        }
                        if (funcaoAtual == "deb21e2e-f742-4d94-80a4-b9623885244a") {
                            return "Varejista";

                        }

                        if (funcaoAtual == "ae9f5185-e07f-4fa5-916f-2d669356b79e") {
                            return "Transportador";
                        }

                        if (funcaoAtual == "0d1626ef-8dab-4f4c-9128-3dd3a57c515d") {
                            return "Lapidador industrial";
                        }

                        if (funcaoAtual == "820529c9-4510-4b3e-9c3b-736a682fb6eb") {
                            return "Lapidador artesanal";
                        }

                        if (funcaoAtual == "30cb37d4-1b38-44b8-896b-40644120144c") {
                            return "Cliente";
                        }
                        return info.id_funcao
                    }
                }
                return element.name;
            }
        }
    }

    return idFuncao;
}