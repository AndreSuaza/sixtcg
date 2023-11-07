import { Card } from "../../../models";

export async function findCards(filters: any): Promise<Card[]> {
  const url = `${process.env.URL}cards/find`;
  const res = await fetch(url, 
    { 
      method: 'POST',
      body: filters
    });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
