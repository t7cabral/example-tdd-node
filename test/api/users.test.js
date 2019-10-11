const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app');


const ROUTE_BASE = '/user';

describe('GET' + ROUTE_BASE, () => {

    it('deve listar usuários', () => {
        return request(app).get(ROUTE_BASE)
            .then( res => {
                // espera que o status code seja igual a 200
                expect(res.status).to.equal(200);
                // espera que o retorno seja um array
                expect(res.body).to.be.an('array');
            });
    });
});

describe('POST' + ROUTE_BASE, () => {

    let userData = {
        name: "Alice Cabral",
        email: "alice@gmail.com",
        officer: "Federal Judge"
    };

    if('deve criar usuário', (done) => {

        return request(app)
            .post(ROUTE_BASE)
            .send(userData)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});
