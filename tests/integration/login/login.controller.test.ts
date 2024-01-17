import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';
import loginController from '../../../src/controllers/login.controller';
import loginService from '../../../src/services/login.service';
import { Request, Response } from 'express';

chai.use(chaiHttp);

describe('LoginController /login', function () {
  const req = {} as Request
  const res = {} as Response
  beforeEach(function () { 
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
   });

  it('ao receber um username e senha corretos, retorne um token', async function(){
    req.body = loginMock.validLoginBody;

    const token = {token: 'm1nh4t0k3nbcr1p7v4l1d4'}

    sinon.stub(loginService, 'login').resolves('m1nh4t0k3nbcr1p7v4l1d4');

    await loginController.login(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(token)
  })
});
