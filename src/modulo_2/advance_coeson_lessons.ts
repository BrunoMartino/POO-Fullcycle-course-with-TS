class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public description: string
  ) {}
}

class Client {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public document: string,
    public clientAddress: Address[]
  ) {}
}

class Address {
  constructor(
    public id: string,
    public street: string,
    public number: number,
    public complement: string,
    public neighborhood: string,
    public city: string,
    public state: string,
    public zipCode: string
  ) {}
}

// abstrair pagamento, nos permit definir um contrato de dados e retornos esperados das diversas formas de pagmento, mas sem acoplar uma forma de pagamento especifica na venda. Cada metodos ainda poderia ter suas chamadas e construtor proprios, desde que não afetasse os retornos estabelecidos na abstraçao

abstract class Payment {
  constructor(public amount: number, public date: Date) {}
}

class PaymentPix extends Payment {}
class PaymentDebitCard extends Payment {}
class PaymentCreditCard extends Payment {}

type SaleItem = {
  product: Product;
  quantity: number;
};

// nesse exemplo Sales tem muito mais coesão de informações, mas pouco acoplamento em métodos proprios ou dados contextuais, sendo a classe um conjunto de dados recebidos de diferentes classes que montam o dados de Sale
// dessa forma validaçoes e responsabilidades acontecem dentro das proprias classes, sem a necessidade de realizar verificações de Cliente dentro das funções de venda, por exemplo.
class Sale {
  public id: string;
  constructor(
    public client: Client,
    public saleAddress: Address,
    public payment: PaymentPix,
    public products: SaleItem[]
  ) {
    this.id = this.generateId();
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}

const address = new Address(
  "1",
  "rua dos bigo",
  666,
  "um biguinho bagunceiro",
  "bairro dos duende orelhudo",
  "cidade dos foguetinho de banha",
  "estado dos mortadelinha",
  "5555555"
);
const client = new Client(
  "1",
  "Beagle Bolinha",
  "beagle@beagle.com",
  "123456789",
  [address]
);

const payment = new PaymentPix(100, new Date());

const products = [
  { product: new Product("1", "produto_1", 50, "produto teste"), quantity: 2 },
  {
    product: new Product("2", "produto_2", 50, "produto teste 2"),
    quantity: 2,
  },
];

const sale = new Sale(client, address, payment, products);

export {};
