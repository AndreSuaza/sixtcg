export const fetchDataDecklist = async (deck: string) => {
    try {
      const url = `https://us-east-1.aws.data.mongodb-api.com/app/application-0-ewkli/endpoint/getDecklist?decklist=${deck}`;
      return await fetch(url)
          .then((response) => response.json())
          .then(( data ) => data);  
  
    } catch (error) {
      console.log(error);
    }
  };