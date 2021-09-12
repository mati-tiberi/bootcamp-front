function CuentaBancaria(nombreTitular, nombreCuenta, apellidoTitular) {
    this.nombreTitular = nombreTitular;
    this.nombreCuenta = nombreCuenta;
    this.apellidoTitular = apellidoTitular;
    this.saldo = 0;
    this.movimientos = [];
    this.totalAcreditado = 0;
    this.totalDebitado = 0;

    this.nombreCompleto = () => `${nombreTitular} ${apellidoTitular}`;

    this.debitar = (costo) => {
        if (costo > this.saldo) {
            console.log(`Saldo insuficiente`);
        }
        else {
            this.saldo -= costo;
            this.totalDebitado += costo;
            const movimiento = `-${costo}$`;
            console.log(movimiento);
            this.movimientos.push(movimiento);
        }
    }

    this.acreditar = (nuevoSaldo) => {
        this.saldo += nuevoSaldo;
        this.totalAcreditado += nuevoSaldo;
        const movimiento = `+${nuevoSaldo}$`;
        console.log(movimiento);
        this.movimientos.push(movimiento);
    }

    this.getSaldo = () => this.saldo;

    this.getMovimientos = () => this.movimientos;

    this.getTotalDebitado = () => this.totalDebitado;

    this.getTotalAcreditado = () => this.totalAcreditado;
}


//Creacion de las cuentas
const miCuenta = new CuentaBancaria("Matias Leonel", "matias.leonel.tiberi", "Tiberi");
const miguelCuenta = new CuentaBancaria("Miguel Angel", "miguel.angel.tiberi", "Tiberi");
const sandraCuenta = new CuentaBancaria("Sandra Marcela", "sandra.marcela.busto", "Busto");


//Saldo inicial de las cuentas
console.log(`${miCuenta.nombreCompleto()}: ${miCuenta.getSaldo()}$`);
console.log(`${miguelCuenta.nombreCompleto()}: ${miguelCuenta.getSaldo()}$`);
console.log(`${sandraCuenta.nombreCompleto()}: ${sandraCuenta.getSaldo()}$`);


//Oparaciones de cuentas
console.log(`${miCuenta.nombreCompleto()}: `);
miCuenta.acreditar(60);
miCuenta.debitar(20);
miCuenta.debitar(20);

console.log(`${miguelCuenta.nombreCompleto()}: `);
miguelCuenta.acreditar(40);
miguelCuenta.acreditar(30);
miguelCuenta.debitar(50);

console.log(`${sandraCuenta.nombreCompleto()}: `);
sandraCuenta.acreditar(100);
sandraCuenta.debitar(30);


//Muestra saldos de cuentas
console.log(`${miCuenta.nombreCompleto()}: ${miCuenta.getSaldo()}$`);
console.log(`${miguelCuenta.nombreCompleto()}: ${miguelCuenta.getSaldo()}$`);
console.log(`${sandraCuenta.nombreCompleto()}: ${sandraCuenta.getSaldo()}$`);


//Filtra movimientos por credito y debito
const cuentaCreditos = (cuenta) => {
    return cuenta.getMovimientos().filter(movimiento => movimiento.includes("+"));
}

const cuentaDebitos = (cuenta) => {
    return cuenta.getMovimientos().filter(movimiento => movimiento.includes("-"));
}

//Historial movimiento creditos
cuentaCreditos(miCuenta).forEach(element => {
    console.log(`${miCuenta.nombreCompleto()}: ${element}`);
});

//Historial movimientos debitos
cuentaDebitos(miCuenta).forEach(element => {
    console.log(`${miCuenta.nombreCompleto()}: ${element}`);
});

//Muestra el total acreditado
console.log(`Acreditado: ${miCuenta.getTotalAcreditado()}`);

//Muestra el total debitado
console.log(`Debitado: ${miCuenta.getTotalDebitado()}`);