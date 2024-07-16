export const formatParameters = (searchParams: any) => {
    let parameters = '';
    for (const key of searchParams.keys()) {
      parameters = parameters+'&'+key+'='+searchParams.getAll(key);
    }
    return parameters;
  }