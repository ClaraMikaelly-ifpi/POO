class SituacaoFinanceira{
    valorCreditos: number;
    valorDebitos: number;

    constructor( valorCreditos: number,  valorDebitos: number){
        this.valorCreditos = valorCreditos;
        this.valorDebitos = valorDebitos;
    }

    calcularSaldo():number{
        return this.valorCreditos - this.valorDebitos;
    }

}
//exemplo 

const minhaSituacao = new SituacaoFinanceira(1000, 500);
const saldo = minhaSituacao.calcularSaldo();
console.log("Saldo:", saldo);
