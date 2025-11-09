// classes sempre tem nome com Capitalize e camelCase.
// não use abreviações, desde que o nome naõ seja enorme
// Nomes tem que ser substantivos, diretos e imediamentes convincentes, vc precisa bater o olho e ja saber o que a classe manipula

class Item {
  private constructor(
    public id: number,
    public name: string,
    public price: number
  ) {}
}

class Cart {
  private items: Item[] = [];

  //metodos são feitos no camelCase
  //metodos normalmente usam verbos e um substitantivo, simbolizando a ação que fazem.
  // sempre deixe claro o que o metodo retorna, mesmo que seja um retorno void
  getTotal(): number {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  addItem(item: Item): void {
    this.items.push(item);
  }
}

export {};
