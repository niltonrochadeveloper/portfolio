import { useQuery } from "react-query"



const GET = ({url = 'https://api.github.com/repos/niltonrochadeveloper/', token, body}: {url: string, token: string, body: any}) => {
    const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
      fetch(url, {
        method: 'GET',
        body
      }).then(res =>
        res.json()
      )
    )
}

const POST = ({url = 'https://api.github.com/repos/niltonrochadeveloper/', token, body}: {url: string, token: string, body: any}) => {
    const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
      fetch(url, {
        method: 'POST'
      }).then(res =>
        res.json()
      )
    )
}

export const api = {
    GET,
    POST,
}