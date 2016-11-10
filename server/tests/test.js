var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3001");

// UNIT test begin
describe("SAMPLE unit test",function(){
    // #1 should return home page
    it("should return 404",function(done){
        server
            .get("/random")
            .expect(404)
            .end(function(err,res){
                res.status.should.equal(404);
                done();
            });
    })
});