import React from 'react';
import { render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { BrowserRouter } from 'react-router-dom';
import { WZL_API } from '../utils/constants';
import * as banners from '../mocks/en-us/featured-banners.json';
import FeaturedContent from '../components/FeaturedContent';

const handlers = [
  // fetching banners mock
  rest.get(`${WZL_API.API_BASE_URL}/documents/search`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(banners))
  )
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Banner section is fetching and rendering data from the API', async () => {
  const { findByAltText } = render(
    <BrowserRouter>
      <FeaturedContent />
    </BrowserRouter>
  );
  expect(await findByAltText('A GREAT STYLE - LIVING ROOM')).toBeInTheDocument();
});