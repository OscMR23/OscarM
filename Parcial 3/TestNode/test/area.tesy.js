    // import * as chai from 'chai';
import test from 'node:test';
import * as areas from "../src/areas.js";
 
test("Si le mando un 2 debe de dar 4", () => {
    let res = areas.areaCuadrado(2);
    expect(res).toBe(4); // Aserción para comparar el valor
    expect(res).toBeDefined(); // Aserción para asegurarse de que 'res' está definido
    expect(typeof res).toBe('number'); // Aserción para verificar que el tipo es 'number'
});