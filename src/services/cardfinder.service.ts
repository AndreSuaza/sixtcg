
export const getCardProperties = async () => {
  try {
    const url = "https://us-east-1.aws.data.mongodb-api.com/app/application-0-ewkli/endpoint/getCardProperties";
    return await fetch(url)
        .then((response) => response.json())
        .then(( data ) => {return data[0]});  

  } catch (error) {
    console.log(error);
  }
};