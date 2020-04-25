import queryString from 'query-string';

export const applyQueryParams = (url, params) => {
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};

export const getStringWithCondition = (condition, first, second) => {
  return condition ? first : second;
};
