import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app'
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('ao receber o product corretamente, retorne o product', async function() {
    const httpRequestBody = productsMock.validProduct
    const mockCreateReturn = ProductModel.build(productsMock.existingProduct)
    sinon.stub(ProductModel, 'create').resolves(mockCreateReturn)
    
    const httpResponse = await chai.request(app).post('/products').send(httpRequestBody)

    expect(httpResponse.status).to.equal(201)
    expect(httpResponse.body).to.eql(productsMock.validProductReturn)    
  })
});
