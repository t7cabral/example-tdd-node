const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app');


const ROUTE_BASE = '/user';

describe('Teste das rptas /users', () => {
    it('get /users', () => {
        return request(app).get(ROUTE_BASE)
        .then( (res) => {
            // espera que o status code seja igual a 200
            expect(res.status).to.equal(200);
            // espera que o retorno seja um array
            expect(res.body).to.be.an('array');
        });
    })
});