import { rest } from "msw";
import { WZL_API } from "../utils/constants";
import {banners} from '../mocks/en-us/featured-banners.json';
import {categories} from '../mocks/en-us/product-categories.json';
import {ftProducts} from '../mocks/en-us/featured-products.json';
import { products } from "../mocks/es-mx/products.json";

export const handlers = [
  rest.get(`${WZL_API.API_BASE_URL}/documents/search`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ banners }));
  }),
  rest.get(`${WZL_API.API_BASE_URL}/documents/search`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ categories }));
  }),
  rest.get(`${WZL_API.API_BASE_URL}/documents/search`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ftProducts }));
  }),
  rest.get(`${WZL_API.API_BASE_URL}/documents/search`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ products }));
  })
];
