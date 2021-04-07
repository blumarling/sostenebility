import React, { useState, useCallback, useEffect } from 'react'
import axios from '../utils/axiosClient'
import debounce from 'lodash/debounce'

const useAxios = (stdUrl) => {

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [promise, setPromise] = useState()
  const [data, setData] = useState(null)

  // promessa risolta
  useEffect(() => {
    if (!promise) return

    (async () => {
      try {
        const result = await promise
        setLoading(false)
        if (result.status - 400 < 0) {
          // salvo nello store di redux
          setData(result.data)
          setResult({
            status: 'success',
            isSuccess: true,
            action: result && result.config && result.config.method,
            data: result && result.data
          })
        }
      } catch (e) {
        

        setLoading(false)
        setResult({
          status: 'error',
          isSuccess: false,
          action: result && result.config && result.config.method,
          message: { ...e },
          error: { ...e.response }
        })
      }
    })()
  }, [promise])

  const getData = debounce(
    async ({params = {}, headers}) => {
      if (loading) return

      try {
        setLoading(true)
        const promise = axios.get(stdUrl, {
          params,
          headers: {
            ...headers
          }
        })
        setPromise(promise)
        return promise
      } catch (error) {
        console.log('error')
      }
    },
    500,
    { leading: false, trailing: true }
  )

  // Post Data
  const postData = debounce(
    async ({
      params = {},
      urlEncoded = false,
      headers = {}
    }) => {
      if (loading) return
      try {
        setLoading(true)
        setResult(null)
        const promise = axios.post(
          stdUrl, // url da chiamare
          urlEncoded ? encodeUrl(params) : params, // 
          {
            headers: {
              ...headers,
              'Content-Type':
                params instanceof FormData ?
                'multipart/form-data' :
                urlEncoded ?
                'application/x-www-form-urlencoded' :
                'application/json'
            }
          }
        )
        setPromise(promise)
        return promise
      } catch (error) {}
    },
    200,
    { leading: true, trailing: true }
  )

  // Put Data
  const putData = debounce(
    async ({params = {}, urlEncoded = false}) => {
      if (loading) return

      try {
        setLoading(true)
        setResult(null)

        const promise = axios.put(stdUrl, urlEncoded ? encodeUrl(params) : params, {
          headers: {
            'Content-Type':
              params instanceof FormData ?
              'multipart/form-data' :
              urlEncoded ?
              'application/x-www-form-urlencoded' :
              'application/json'
          }
        })

        setPromise(promise)
        return promise
      } catch (error) {}
    },
    200,
    { leading: true, trailing: true }
  )

  // Post Data
  const patchData = debounce(
    async ({
      params = {},
      urlEncoded = false
    }) => {
      if (loading) return
      try {
        setLoading(true)
        setResult(null)
        const promise = axios.patch(
          stdUrl, // url da chiamare
          urlEncoded ? encodeUrl(params) : params, // 
          {
            headers: {
              'Content-Type':
                params instanceof FormData ?
                'multipart/form-data' :
                urlEncoded ?
                'application/x-www-form-urlencoded' :
                'application/json'
            }
          }
        )
        setPromise(promise)
        return promise
      } catch (error) {}
    },
    200,
    { leading: true, trailing: true }
  )

  // Delete Data
  const deleteData = debounce(
    async document => {
      if (loading) return

      try {
        setLoading(true)
        setResult(null)

        const promise = axios.delete(stdUrl, document)
        setPromise(promise)
        return promise
      } catch (error) {}
    },
    200,
    { leading: true, trailing: true }
  )

  const reset = () => {
    setData(null)
  }

  return {
    result,
    loading,
    data,
    deleteData,
    getData,
    postData,
    putData,
    patchData,
    reset
  }
}

const encodeUrl = (obj) => {
  return encodeURI(Object.entries(obj).map(([key, val]) => {
    const customVal = typeof val === 'object' ? JSON.stringify(val) : val
    return '' + key + '=' + customVal
  }).join('&'))
}

export default useAxios
