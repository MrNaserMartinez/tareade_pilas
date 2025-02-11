// ejercicio #1 de la tarea de pilas con esto

// en primer lugar lo que vamos a crear será una pila
class pila {
    constructor() {
        this.items = [];
    }
    // Agregar un elemento a la pila
    push(elemento) {
        this.items.push(elemento);
    }
    // Eliminar un elemento de la pila
    pop() {
        if (this.items.length === 0) {
            return "No hay elementos en la pila";
        }
        return this.items.pop();
    }
    // Retornar el elemento en la cima sin eliminarlo
    peek() {
        return this.items[this.items.length - 1];
    }
    isempty() {
        return this.items.length === 0;
    }
    mostrar() {
        console.log(this.items);
    }
}
// Función para evaluar la expresión en notación postfija
function evaluarPostfija(expresion) {
    const pilaInstancia = new pila();
    const elementos = expresion.split(" "); // el .split es un metodo que divide un objeto de texto en un array de cadenas mediante la separación de la cadena en subcadenas

    // Recorremos los elementos de la expresión postfija
    elementos.forEach(elemento => {
        if (!isNaN(elemento)) {
            // Si el elemento es un número, lo apilamos
            pilaInstancia.push(Number(elemento));
        } else {
            // Si el elemento es un operador, desapilamos dos operandos
            const b = pilaInstancia.pop();
            const a = pilaInstancia.pop();
            let resultado;

            switch (elemento) {
                case "+":
                    resultado = a + b;
                    break;
                case "-":
                    resultado = a - b;
                    break;
                case "*":
                    resultado = a * b;
                    break;
                case "/":
                    resultado = a / b;
                    break;
                default:
                    throw new Error("Operador no válido");
            }
            // Apilamos el resultado de la operación
            pilaInstancia.push(resultado);
        }
    });
    return pilaInstancia.pop();
}


// Ejemplo de uso con la prueba que nos dice el ingeniero si
const expresion = "3 4 + 5 *";
console.log("Resultado:", evaluarPostfija(expresion));
