import React from 'react';
import { render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import { WZL_API } from '../utils/constants';
import { CartProvider } from '../context/CartContext';
import ftProducts from '../mocks/en-us/featured-products.json';
import refs from '../mocks/en-us/ref.json'
import FeaturedProducts from '../components/FeaturedProducts';

const handlers = [
  rest.get(`${WZL_API.API_BASE_URL}`, (req, res, ctx) =>
   res(ctx.status(200), ctx.json(refs))
  ),
  // fetching featured products mock
  rest.get(`${WZL_API.API_BASE_URL}/documents/search`, (req, res, ctx) =>
   res(ctx.status(200), ctx.json(ftProducts))
  )
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Featured products section is fetching and rendering data from the API', async () => {
  const { findByText, findByAltText} = render(
  
      <CartProvider>
         <BrowserRouter>
         <FeaturedProducts />
      </BrowserRouter>
      </CartProvider>
     
  );
  expect(await findByText('Grayton Armchair')).toBeInTheDocument();
  expect(await findByAltText('Shay Armchair')).toBeInTheDocument();
});