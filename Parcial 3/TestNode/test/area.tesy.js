import assert from 'node:assert';
import test from 'node:test';
import * as areas from "../src/areas.js";

test("si le mando un 2 debe regras un 4",()=>{
    let res = areas.areaCuadrada(2);

    assert.strictEqual(res,4);
})

