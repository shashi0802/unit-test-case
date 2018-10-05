let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
chai.should();


chai.use(chaiHttp)

describe('Route testing', () => {
    it('It should Get the home page', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
    it('It should Get the about page', (done) => {
        chai.request(app)
            .get('/about')
            .end((err, res) => {
                // console.log("home : "+JSON.stringify(res.body));
                res.should.have.status(200);
                done();
            });
    });
    it('It should Get the services page', (done) => {
        chai.request(app)
            .get('/services')
            .end((err, res) => {
                // console.log("home : "+JSON.stringify(res.body));
                res.should.have.status(200);
                done();
            });
    });
    it('It should Get the faq page', (done) => {
        chai.request(app)
            .get('/faq')
            .end((err, res) => {
                // console.log("home : "+JSON.stringify(res.body));
                res.should.have.status(200);
                done();
            });
    });
    it('It should Get the contact page', (done) => {
        chai.request(app)
            .get('/contact')
            .end((err, res) => {
                // console.log("home : "+JSON.stringify(res.body));
                res.should.have.status(200);
                done();
            });
    });
    it('It should Get the modularblockdemo page', (done) => {
        chai.request(app)
            .get('/modularblockdemo')
            .end((err, res) => {
                // console.log("home : "+JSON.stringify(res.body));
                res.should.have.status(200);
                done();
            });
    });

    it('It should Get the abbb page', (done) => {
        chai.request(app)
            .get('/abbbb')
            .end((err, res) => {
                // console.log("home : "+JSON.stringify(res.body));
                res.should.have.status(404);
                done();
            });
    });
});
