class Circulo{
    constructor(public raio: number, public pi: number)
{}
    calcularArea():number {
        return (this.raio * this.raio) * this.pi;
    }

    calucularPerimetro():number {
        return 2 * (this.pi * this.raio);
    }

}
//exemplo
const meuCirculo = new Circulo(6, 3.14);

console.log("Área:", meuCirculo.calcularArea());
console.log("Perímetro:", meuCirculo.calucularPerimetro());