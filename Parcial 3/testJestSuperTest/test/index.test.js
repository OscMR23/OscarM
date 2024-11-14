const request = require("supertest");
const url = "http://localhost:3001"; // Cambiado a 8082 para que coincida con el servidor

describe("Inserta un empleado", () => {
  it("Revisar que el servidor me dé un 200", (done) => {
    request(url)
      .get("/empleado")
      .end((err, res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body).toHaveProperty("message", "Servidor funcionando en 3001");
        done();
      });
  });
});
