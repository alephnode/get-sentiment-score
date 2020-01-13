import { Handler } from 'aws-lambda'
import { getSentiment } from './getSentiment'

type Data = {
  details: {
    text: string
  }
}

const handler: Handler = async (event: Data) => {
  const params = event.details
  return await getSentiment()
}

export { handler }
