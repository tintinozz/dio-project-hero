// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar
    atacar() {
        let ataque = "";
        
        // Verificando o tipo do herói para definir o ataque
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "ninja":
                ataque = "shurikens e adagas";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }

       
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}



const mago = new Heroi("Mago de gelo", 100, "mago");
mago.atacar();  


const ninja = new Heroi("Naruto", 18, "ninja");
ninja.atacar(); 
