import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js'

//Assertion 
chai.should();
chai.use(chaiHttp);

describe('File API', () => {

    /**
     * Test the GET route
     */
    describe("GET /file", () => {
        it("It should GET all data to external api and reformatted.", (done) => {
            chai.request(app)
                .get("/file/data")
                .end((err, response) => {        
                    if(response.status === 400){
                        response.should.have.status(400);
                    }else{
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                        response.body.files.should.be.a('array');
                    }
                    done();
                });
        });

        it("It should  GET all list to external api.", (done) => {
            chai.request(app)
                .get("/file/list")
                .end((err, response) => {

                    if(response.status === 400){
                        response.should.have.status(400);
                    }else{
                        response.should.have.status(200);
                        response.body.should.be.a('object');
                    }
                    done();
                });
        });

    });



});





