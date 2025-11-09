class Pessoa {
  private _idade: number;

  constructor(idade: number) {
    this._idade = idade;
    this.validate();
  }

  // get não usa lógica, ele precisa ser sempre o mais simples possivel porque a unica função dele é retornar um valor
  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    this._idade = valor;
    this.validate();
  }
  // sempre que for usar getter e setter tenha o cuidado de fazer as validaçoes ou no setter ou no construtor
  // não faz sentido usar protected ou private no dado, se vc não vai validar a informação recebida/enviada
  private validate() {
    if (this._idade <= 0) throw new Error("Idade inválida");
  }
}

const pessoa = new Pessoa(25);
console.log(pessoa.idade); // usa getter
pessoa.idade = 30; // usa setter

export {};
