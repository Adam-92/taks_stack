import type { DefaultParams, Tags } from "../types/types";

export const defaultParams: DefaultParams = {
  page: "1",
  pagesize: "10",
  order: "desc",
  sort: "popular",
  site: "stackoverflow",
};

export const QUERY_KEY_GET_TAGS = "getTags";

export const getTags = async (param: DefaultParams) => {
  const result = await fetch(`https://api.stackexchange.com/2.3/tags?page=${param.page}&pagesize=${param.pagesize}&order=${param.order}&sort=${param.sort}&site=${param.site}`);
  const data = await result.json() as Tags;

  return data;
};
