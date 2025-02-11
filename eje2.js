// ejercicio #2 de la tarea de pilas con esto

class PilaLimitada {
    constructor(limite) {
        this.items = [];
        this.limite = limite;  // como algo nuevo vamos a utilizar un limite para la pila a diferencia del anterior
    }

    // Agregar un elemento a la pila
    push(elemento) {
        if (this.items.length >= this.limite) {
            console.log("Error: La pila está llena");  // Si la pila está llena, muestra un mensaje de error
        } else {
            this.items.push(elemento);
        }
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

//prueba dada por el ingeniero
let miPila = new PilaLimitada(3);

miPila.push("A");

miPila.push("B");

miPila.push("C");

miPila.push("D");   // "Error: La pila está llena"