import { EventSix } from "../../../models";

export async function findEvents(): Promise<EventSix[]> {
  const url = `https://us-east-1.aws.data.mongodb-api.com/app/application-0-ewkli/endpoint/events`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}