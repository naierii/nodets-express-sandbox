import url from 'url';

let urlString = 'https://www.google.com/search?q=henlo+world&id=11';

// URL Object
const urlObj = new URL(urlString);

/**
 * This works, but there might be
 * a shorter version on new JS methods
 */
const getQueryParams = (url: string) => {
  const params: {[key: string]: string} = {};
  // url.entries();
  const urlObj = new URL(url);
  const paramArray = Array.from(urlObj.searchParams.entries());

  paramArray.forEach((paramItemArray) => {
    const queryParamKey = paramItemArray[0];
    const queryParamValue = paramItemArray[1];
    params[queryParamKey] = queryParamValue;
  });

  return params;
}

const addQueryParams = (url: string, paramsObj: {[key: string]: string}) => {
  const urlObj = new URL(url);
  Object.entries(paramsObj).forEach(paramEntry => {
    urlObj.searchParams.append(...paramEntry)
  });
  return urlObj.href;
}

const deleteQueryParams = (url: string, paramsArr: string[]) => {
  const urlObj = new URL(url);
  paramsArr.forEach(paramEntry => {
    urlObj.searchParams.delete(paramEntry)
  });
  return urlObj.href;
}

/**
 * This should be preferred instead of 
 * addQueryParams to avoid duplication
 */
const replaceQueryParams = (url: string, paramsObj: {[key: string]: string}) => {
  const reducedUrl = deleteQueryParams(url, Object.keys(paramsObj));
  const addedNewParamsUrl = addQueryParams(reducedUrl, paramsObj);
  return addedNewParamsUrl;
}

console.log(urlObj);
console.log(getQueryParams(urlString));

urlString = replaceQueryParams(urlString, {addParamTest1: 'q', addParamTest2: 'w'});
urlString = replaceQueryParams(urlString, {addParamTest1: 'e', addParamTest2: 'r'});
urlString = deleteQueryParams(urlString, ['q', 'id']);
console.log('new urlString:', urlString);
console.log(getQueryParams(urlString));