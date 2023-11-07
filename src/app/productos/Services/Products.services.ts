import { Card, Product } from "../../../models";

export async function findProducts(): Promise<Product[]> {
  const url = `https://us-east-1.aws.data.mongodb-api.com/app/application-0-ewkli/endpoint/products`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}