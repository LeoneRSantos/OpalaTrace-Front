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

export function definirCarteiraPeloEmail(emailDoUsuario: string, nomes: any[], Ids: any[]) {
    for (let element of nomes) {
        for (let i of Ids) {
            // Verifica se `profile` e `email` existem em `i` antes de acessar
            if (i.profile && i.profile.email && element.email === i.profile.email) {
                if (i.profile.email === emailDoUsuario) {
                    return i.verifiers[0]?.value || "ID não identificado"; // Retorna valor se existe, senão mensagem
                }
            }
        }
    }
    return "Não foi possível definir o ID";
}
