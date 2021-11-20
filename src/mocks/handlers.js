import { rest } from "msw";
import { WZL_API } from "../utils/constants";
import {categories} from '../mocks/en-us/product-categories.json';
//import {base} from '../mocks/base.json'

export const handlers = [
  rest.get(`${WZL_API.API_BASE_URL}/documents/search`, (req, res, ctx) =>
  res(ctx.status(200), ctx.json(categories))
)
];
