import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('ao listar todos products, retornam corretamente', async function(){
    const httpResponse = await chai.request(app).get('/products').send(productsMock.productsDB)
    
    expect(httpResponse.status).to.equal(200);
    expect(httpResponse.body).to.eql(httpResponse.body)
  })
});
