import { Card } from "@/models";

export async function fetchDataDeck(): Promise<Card[]> {
  const url = `https://us-east-1.aws.data.mongodb-api.com/app/application-0-ewkli/endpoint/getCards?limit=30&offset=0&products=MD1`;
  const res = await fetch(url)
          .then((response) => response.json())
          .then(( data ) => {return data[0].cards});  
  
  return res;
}
