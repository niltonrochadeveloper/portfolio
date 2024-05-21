import { useQuery } from "react-query"

const GET = async ({url, useCache = "no-cache"}: {url: string, useCache: RequestCache, }) => {
  const response =  await fetch(url.includes('http') ? url : process.env.API_URL + url, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': ''
      },
      cache: useCache
  })
  return response.json()
}   

const POST = async ({url, payload, useCache = "no-cache"}: {url: string, payload: any, useCache: RequestCache, }) => {
  const response =  await fetch(url.includes('http') ? url : process.env.API_URL + url, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
          'Authorization': ''
      },
      cache: useCache,
      body: JSON.stringify(payload)
  })
  return response.json()
}   


export const api = {
    GET,
    POST,
}