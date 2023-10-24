import { Card, Product } from "../../../models";

export async function findProducts(): Promise<Product[]> {
  const url = `${process.env.URL}products`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}