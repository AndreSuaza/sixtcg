export const fetchDataCards = async (limit: number, offset: number, params: string) => {
    try {
      const url = `https://us-east-1.aws.data.mongodb-api.com/app/application-0-ewkli/endpoint/getCards?limit=${limit}&offset=${offset}${params}`;
      return await fetch(url)
          .then((response) => response.json())
          .then(( data ) => {return data[0]});  
  
    } catch (error) {
      console.log(error);
    }
  };