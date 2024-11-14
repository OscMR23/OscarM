let chai = require("chai");
let chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);

const url = "http://localhost:8082"; // Cambiado a 8082 para que coincida con el servidor

describe("Inserta un empleado", () => {
  it("Revisar que el servidor me dé un 200", (done) => {
    chai
      .request(url)
      .get("/empleado")
      .end((err, res) => { // Asegúrate de que el callback recibe (err, res)
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("message").that.equals("Servidor funcionando en 8082");
        done();
      });
  });
});
