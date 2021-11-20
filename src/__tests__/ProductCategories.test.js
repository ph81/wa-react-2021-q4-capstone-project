import React from 'react';
import { render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import { WZL_API } from '../utils/constants';
import * as categories from '../mocks/en-us/product-categories.json';
import ProductCategories from '../components/ProductCategories';

const handlers = [
  // fetching categories mock
  rest.get(`${WZL_API.API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(categories))
  )
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Category section is fetching and rendering data from the API', async () => {
  const { findByAltText, findByText } = render(
    <BrowserRouter>
      <ProductCategories />
    </BrowserRouter>
  );
  expect(await findByAltText('Furniture')).toBeInTheDocument();
  expect(await findByText('Bed & Bath')).toBeInTheDocument();
  expect(await findByText('Furniture')).toBeInTheDocument();
  expect(await findByText('Lighting')).toBeInTheDocument();
  expect(await findByText('Kitchen')).toBeInTheDocument();
  expect(await findByText('Furniture')).toBeInTheDocument();
  expect(await findByText('Decorate & Organize')).toBeInTheDocument();
});