import { DefaultParams } from "../types/types";
import { isGivenValueANumber } from "./isGivenValueANumber";

export const validateUrlParams = (params: DefaultParams) => {
        
    const error: string[] = [];

    if (!isGivenValueANumber(params.pagesize)) {
      error.push('Pagesize param must be a number');
    }

    if(Number(params.page) < 0 || Number(params.page) > 25) {
      error.push('Page param must be set between 1 - 25');
    }

    if(params.pagesize[0] === "0") {
      error.push("Pagesize cannot start with `0`")
    }

    if (Number(params.pagesize) < 0 || Number(params.pagesize) > 30) {
      error.push('Pagesize param must be set between 1 - 30');
    }
  
    if (params.sort !== 'name' && params.sort !== 'activity' && params.sort !== 'popular') {
      error.push('Sort by param must either name, activity or popular');
    }
  
    return error;
  };
