class RedeHospitalar {
    constructor() {
        // Banco de dados fictício de usuários e senhas antigas
        this.usuarios = {
            joao: ["senha123", "senhaAntiga123"], // Senhas antigas reutilizáveis
            maria: ["senha2023"]
        };
    }

    autenticar(usuario, senha) {
        // Permite autenticação com qualquer senha antiga do usuário
        if (this.usuarios[usuario] && this.usuarios[usuario].includes(senha)) {
            console.log(`Usuário ${usuario} autenticado com sucesso!`);
            return true;
        }
        console.log("Falha na autenticação. Usuário ou senha inválidos.");
        return false;
    }

    acessarSistemaCritico(usuario) {
        // Sistema crítico acessível sem autenticação adicional (MFA ausente)
        console.log(`${usuario} acessou o sistema crítico!`);
    }
}

// Simulação do problema
const rede = new RedeHospitalar();

// Ex-funcionário usa senha antiga para autenticar
const exUsuario = "joao";
const senhaAntiga = "senhaAntiga123";

if (rede.autenticar(exUsuario, senhaAntiga)) {
    rede.acessarSistemaCritico(exUsuario);
}
