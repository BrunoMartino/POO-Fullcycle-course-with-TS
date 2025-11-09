// Herança não é apenas reuso de classe, mas a criação de subtipos da mesma quando necessário

class Item {
  // no TS, não temos a flag final para impedir a extensão, mas podemos marcar o construtor como private
  private constructor(
    public id: number,
    public name: string,
    public price: number
  ) {}
}

// Bad code
// Aqui foi criado um subtipo de classe com array de items, mas isso esta errado porque carrinho não pode ser um subtipo de item. mas uma classe propria que contem a clase items.
// class Cart extends Array<Item> {
//   getTotal(): number {
//     return this.reduce((total, item) => total + item.price, 0);
//   }

//   addItem(item: Item): void {
//     this.push(item);
//   }
// }

// Aqui não usamos herança, usamos composição. isso porque os itens de carrinho herdam a classe item, mas Carrinho em si não tem classe pai.
// Ao criar uma classe e usar herança, pense com cuidado se ela vai herdar metodos, ou criar um sub tipo, se criar um subtipo, vc esta errando a modelagem
class Cart {
  private items: Item[] = [];

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  addItem(item: Item): void {
    this.items.push(item);
  }
}

export {};
