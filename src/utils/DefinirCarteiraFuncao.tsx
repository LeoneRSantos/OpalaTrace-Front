export function definirCarteira(idDoUsuario: string, nomes: any, Ids: any) {
    for (let element of nomes) {
        for(let i of Ids){ 
            if (element.id== i.id) {
                if(i.id == idDoUsuario){
                    return i.verifiers[0].value;
                }
            }
        }
    }
    return "ID não identificado";
}

