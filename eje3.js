// ejercicio #3 de la tarea de pilas con esto

class UndoManager {
    constructor() {
        this.history = []; // Pila para almacenar las acciones
    }

    // Agregar una acción a la pila
    addAction(action) {
        this.history.push(action);
        console.log(`Acción realizada: ${action}`);
    }

    // Deshacer la última acción
    undo() {
        if (this.history.length === 0) {
            console.log("No hay acciones para deshacer.");
        } else {
            const action = this.history.pop();
            console.log(`Acción deshecha: ${action}`);
        }
    }

    // Mostrar el historial de acciones
    getHistory() {
        if (this.history.length === 0) {
            console.log("No se han realizado acciones.");
        } else {
            console.log("Historial de acciones:");
            this.history.forEach((action, index) => {
                console.log(`${index + 1}: ${action}`);
            });
        }
    }
}

//ejemplo de funcionamiento dado por el ingeniero
//Ejemplo del funcionamiento:
const manager = new UndoManager();

manager.addAction("Escribir 'Hola'");
manager.addAction("Escribir 'Mundo'");
console.log(manager.getHistory()); // ["Escribir 'Hola'", "Escribir 'Mundo'"]

manager.undo();
console.log(manager.getHistory()); // ["Escribir 'Hola'"]