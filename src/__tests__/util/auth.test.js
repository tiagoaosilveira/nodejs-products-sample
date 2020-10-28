const auth = require('../../util/auth');
const authService = require('../../services/auth');

const mockRequest = (headers, body) => ({
    headers,
    body,
});
  
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('verifyJWT', () => {
    test('should 401 if token is missing from header', () => {
        const req = mockRequest(
            {},
            {}
        );
        const res = mockResponse();
        auth.verifyJWT(req, res);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ 
            auth: false, 
            message: 'No token provided.' 
        });
    });

    test('should 403 if token is invalid', () => {
        const req = mockRequest(
            { authorization : 'jdafjsdjfjaskdfjakjsdfjasdkjfl'},
            {}
        );
        const res = mockResponse();
        auth.verifyJWT(req, res);
        expect(res.status).toHaveBeenCalledWith(403);
        expect(res.json).toHaveBeenCalledWith({ 
            auth: false, 
            message: 'Failed to authenticate token.' 
        });
    });

    test('should call next() if token is valid', () => {
        const token = `Bearer ${authService.auth('tiago', '123').token}`;
        const req = mockRequest(
            { authorization : token},
            {}
        );
        const res = mockResponse();
        const next = jest.fn();
        auth.verifyJWT(req, res, next);
        expect(next).toHaveBeenCalled();
    });
});