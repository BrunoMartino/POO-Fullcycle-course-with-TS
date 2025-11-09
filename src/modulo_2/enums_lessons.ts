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

enum UserStatus {
  Active = "active",
  Inactive = "inactive",
  Suspended = "suspended",
}

class User {
  constructor(
    public id: string,
    public name: string,
    public cpf: CPFValueObject,
    public email: string,
    public password: string,
    public status: UserStatus = UserStatus.Active
  ) {}
}

const user = new User(
  "1",
  "Beagle Bolinha",
  new CPFValueObject("123.456.789-00"),
  "bolinha@bigo.com",
  "pass123",
  UserStatus.Inactive // Enums forçam tipos de dados que a classe/interface deve aceitar, fazendo a validação no proprio software sem necessidade de enviar um throw error para testes
);

console.log(user);

export {};
