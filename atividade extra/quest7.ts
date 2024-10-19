class Retangulo{
    constructor(public largura: number, public altura: number)
{}
    calularArea():number {
        return this.largura * this.altura;
    }

    calularPerimetro():number {
        return 2 * (this.largura + this.altura);
    }
}
//exemplo
const meuRetangulo = new Retangulo(5, 3);

console.log("Area:", meuRetangulo.calularArea());
console.log("Perimetro:", meuRetangulo.calularPerimetro());