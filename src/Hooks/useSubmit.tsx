import { useState } from 'react'

interface Response {
  type: 'success' | 'error',
  message: string,
}

interface submitedData {
  name: string,
}

interface useSubmitReturn {
  isLoading: boolean,
  response: Response | null,
  submit: (url: string, data: submitedData) => Promise<void>,
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


const useSubmit = (): useSubmitReturn => {

  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<Response | null>(null)


  const submit = async (url: string, data: submitedData): Promise<void> => {
    const random = Math.random()
    try {

      await wait(2000)
      
      if (random < 0.5){
        throw new Error('Something went wrong')
      }

      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.name}, we will get back to you shortly!`,
      })

    } catch (err) {

      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setIsLoading(false)
    }

  }
  
  return { isLoading, response, submit }
}

export default useSubmit
