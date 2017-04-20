var request = require("request"),
    assert = require('assert'),
    base_url = "http://localhost:8080";

describe("Weather Api test", function () {
    it("returns status code 200 if server is running", function (done) {
        request.get(base_url, function (error, response, body) {
            //expect(response.statusCode).toBe(200);
            assert.equal(200, response.statusCode);
            done();
        });
    });

    it("check city code of Delhi", function (done) {
        var options = {
            uri: base_url+ '/getweather',
            method: 'POST',
            json: {
                "city": "Delhi"
            }
        };
        request.post(options, function (error, response, body) {
            //expect(body).toBe("Hello World");
            assert.equal(1273294, body.city.id);
            done();
        });
    });


});