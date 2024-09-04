import { Store } from "../../../models";

export async function findStores(): Promise<Store[]> {
  const url = `https://us-east-1.aws.data.mongodb-api.com/app/application-0-ewkli/endpoint/stores`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}