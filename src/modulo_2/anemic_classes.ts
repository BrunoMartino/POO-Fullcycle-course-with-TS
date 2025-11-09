// classes anemicas são classes que tem relevancia dentro da regra de negocio, mas não lidam com lógica ou validação
// evite criar classes assim, elas não devem ser meros DTOS, elas precisam ter comportamento e validação.

// class ProdutoAnemico {
//   constructor(
//     public id: number,
//     public nome: string,
//     public preco: number,
//     public totalEstoque: number
//   ) {}
// }

class Produto {
  private static readonly MAXIMO_ADICIONAR_ESTOQUE = 1000;

  constructor(
    public id: number,
    public nome: string,
    public preco: number,
    public totalEstoque: number
  ) {
    // pratica comum para garantir a não anemia da classe, nesse validate, vc garante pelo menos a validação do estado da criação da classe
    // garante que extensões dessa classe não sejam criadas sem nenhum contrato ou retorno definidos
    this.validate();
  }

  incrementarEstoque(qtd: number): void {
    if (qtd > Produto.MAXIMO_ADICIONAR_ESTOQUE) {
      throw new Error("não pode adicionar mais de 1.000 itens");
    }
    this.totalEstoque += qtd;
  }

  private validate(): void {
    if (this.nome.length === 0) {
      throw new Error("Nome é obrigatório");
    }
    if (this.preco <= 0) {
      throw new Error("Preço deve ser maior que zero");
    }
    if (this.totalEstoque < 0) {
      throw new Error("Total em estoque não pode ser negativo");
    }
  }
}

export {};
