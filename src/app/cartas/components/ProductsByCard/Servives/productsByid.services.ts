export const fetchDataProducts = async (productsIds: string) => {
    try {
      const url = `https://us-east-1.aws.data.mongodb-api.com/app/application-0-ewkli/endpoint/getProjectsByIds?projectIds=${productsIds}`;
      return await fetch(url)
          .then((response) => response.json())
          .then(( data ) => {return data});  
  
    } catch (error) {
      console.log(error);
    }
  };