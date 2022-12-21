import { useEffect, useState } from 'react'
import axios, { Method } from 'axios'
import { apiController } from '@api/controller'

export const useApiController = <T, B>(
  url: string,
  method: Method,
  payload?: B
) => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      try {
        const response = await apiController<T>({
          payload,
          method,
          url
        })

        setData(response.data)
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message)
        }
      } finally {
        setLoaded(true)
      }
    })()
  }, [])

  return { data, error, loaded }
}
