class RedeHospitalar {
    constructor() {
        this.usuarios = {
            joao: { senhaAtual: "senha123", expirada: false, ativo: false, mfaAtivo: true }, 
            laryssa: { senhaAtual: "ifms2023larissa", expirada: false, ativo: true, mfaAtivo: true },
        };
    }

    autenticar(usuario, senha, mfaToken) {
        if (!this.usuarios[usuario]) {
            console.log("Falha na autenticação. Usuário inválido.");
            return false;
        }

        const dadosUsuario = this.usuarios[usuario];

        if (!dadosUsuario.ativo) {
            console.log(`Usuário ${usuario} Falha na autenticação. Conta desativada.`);
            return false;
        }

        if (dadosUsuario.senhaAtual !== senha || dadosUsuario.expirada) {
            console.log("Falha na autenticação. Senha inválida ou expirada.");
            return false;
        }

        if (dadosUsuario.mfaAtivo && !this.validarMFA(mfaToken)) {
            console.log("Falha na autenticação. MFA inválido.");
            return false;
        }

        console.log(`Usuário ${usuario} autenticado com sucesso!`);
        return true;
    }

    validarMFA(token) {
        return token === "123456";
    }

    acessarSistemaCritico(usuario) {
        console.log(`${usuario} acessou o sistema crítico!`);
    }
}


const rede = new RedeHospitalar();

const usuario = "joao";
const senha = "senha123";
const mfaToken = "123456";

if (rede.autenticar(usuario, senha, mfaToken)) {
    rede.acessarSistemaCritico(usuario);
}

const usuarioAtivo = "laryssa";
const senhaAtiva = "ifms2023larissa";
if (rede.autenticar(usuarioAtivo, senhaAtiva, mfaToken)) {
    rede.acessarSistemaCritico(usuarioAtivo);
}
