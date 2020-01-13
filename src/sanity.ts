import { Handler, Context, Callback } from 'aws-lambda'

interface SanityResponse {
  statusCode: number
  body: string
}

const handler: Handler = (event, context: Context, cb: Callback) => {
  const response: SanityResponse = {
    statusCode: 200,
    body: 'We live'
  }

  cb(null, response)
}

export { handler, SanityResponse }
