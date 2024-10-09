// mathModule.js

/**
 * Suma dos números.
 * @param {number} a - El primer número.
 * @param {number} b - El segundo número.
 * @returns {number} - El resultado de la suma.
 */
function sumar(a, b) {
    return a + b;
  }
  
  /**
   * Resta dos números.
   * @param {number} a - El número al que se le va a restar.
   * @param {number} b - El número que se resta.
   * @returns {number} - El resultado de la resta.
   */
  function restar(a, b) {
    return a - b;
  }
  
  /**
   * Multiplica dos números.
   * @param {number} a - El primer número.
   * @param {number} b - El segundo número.
   * @returns {number} - El resultado de la multiplicación.
   */
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Exportar las funciones usando CommonJS
  module.exports = {
    sumar,
    restar,
    multiplicar
  };
  