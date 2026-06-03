const expect = require("chai").expect;
const authMiddleware = require("../middleware/is-auth");
const jwt = require("jsonwebtoken");
const sinon = require("sinon");

describe("Authentication Middleware", function () {
  it("should throw an error if no authorization header is present", function () {
    const req = {
      get: function () {
        return null;
      },
    };
    const res = {};
    const next = function () {};
    expect(authMiddleware.bind(this, req, res, next)).to.throw(
      "Not authenticated!",
    );
  });

  it("should throw an error if the authorization header is not in the correct format", function () {
    const req = {
      get: function () {
        return "Invalid Token";
      },
    };
    const res = {};
    const next = function () {};
    expect(authMiddleware.bind(this, req, res, next)).to.throw();
  });

  it("should throw an error if the token is invalid", function () {
    const req = {
      get: function () {
        return "Bearer invalidtoken";
      },
    };
    const res = {};
    const next = function () {};
    expect(authMiddleware.bind(this, req, res, next)).to.throw();
  });

  it("should yield a userId if the token is valid", function () {
    const req = {
      get: function () {
        return "Bearer validtoken";
      },
    };
    sinon.stub(jwt, "verify");
    jwt.verify.returns({ userId: "testuser" });
    authMiddleware(req, {}, () => {});
    expect(req).to.have.property("userId");
    expect(req.userId).to.equal("testuser");
    expect(jwt.verify.calledOnce).to.be.true;

    jwt.verify.restore();
  });

  it("should call next() when token is valid", function () {
    const req = {
      get: function () {
        return "Bearer validtoken";
      },
    };
    const res = {};
    const next = sinon.spy();
    
    sinon.stub(jwt, "verify");
    jwt.verify.returns({ userId: "123" });
    
    authMiddleware(req, res, next);
    expect(next.calledOnce).to.be.true;
    
    jwt.verify.restore();
  });

  it("should attach userId to request object", function () {
    const req = {
      get: function () {
        return "Bearer validtoken";
      },
    };
    const res = {};
    const next = function () {};
    
    sinon.stub(jwt, "verify");
    jwt.verify.returns({ userId: "user456" });
    
    authMiddleware(req, res, next);
    expect(req.userId).to.equal("user456");
    
    jwt.verify.restore();
  });

  it("should throw error with correct status code for invalid token", function () {
    const req = {
      get: function () {
        return "Bearer invalidtoken";
      },
    };
    const res = {};
    const next = function () {};
    
    try {
      authMiddleware(req, res, next);
    } catch (err) {
      expect(err.statusCode).to.equal(500);
    }
  });

  it("should throw error with 401 status if no decodedToken", function () {
    const req = {
      get: function () {
        return "Bearer validtoken";
      },
    };
    const res = {};
    const next = function () {};
    
    sinon.stub(jwt, "verify");
    jwt.verify.returns(null);
    
    try {
      authMiddleware(req, res, next);
    } catch (err) {
      expect(err.statusCode).to.equal(401);
      expect(err.message).to.equal("Not authenticated.");
    }
    
    jwt.verify.restore();
  });

  // ❌ INTENTIONALLY FAILING TEST - TO DEMONSTRATE CI/CD BLOCKING
  it("should INTENTIONALLY FAIL - GitHub will block this!", function () {
    expect(1).to.equal(2); 
  });
});
