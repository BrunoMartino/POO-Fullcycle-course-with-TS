class CPFValueObject {
  constructor(private value: string) {
    this.validate();
  }

  private validate() {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(this.value)) {
      throw new Error("Invalid CPF format");
    }
  }

  public getValue(): string {
    return this.value;
  }
}

class User {
  // CPF não é simplesmente uma string, ele tem um porque de existir, ele precisa ser capaz de se validar e de ter logica de manipulação
  // Evite a obsseção por tipor primitivos em suas classes e abstrações, e se apegue ao porque do objeto/dado existir.
  // se for um dado com função real ou importante para o negocio, crie uma classe ou interface que faça o tratamento dele, tanto validadando como manipulando.
  constructor(
    public id: string,
    public name: string,
    public cpf: CPFValueObject,
    public email: string,
    public password: string
  ) {}
}

const user = new User(
  "1",
  "Beagle Bolinha",
  new CPFValueObject("123.456.789-00"),
  "bolinha@bigo.com",
  "pass123"
);

console.log(user);

export {};
