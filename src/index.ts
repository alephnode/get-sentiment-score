import { Handler } from 'aws-lambda'
import AWS from 'aws-sdk'

interface SentimentResponse {
  statusCode: number
  body: string
}

const handler: Handler = async event => {
  // TODO: take in textlist from context params
  const params = {
    LanguageCode: 'en',
    TextList: ['I hate this']
  }

  const comprehend = new AWS.Comprehend({
    apiVersion: '2017-11-27',
    region: 'us-east-1'
  })

  return await comprehend.batchDetectSentiment(params).promise()
}

export { handler, SentimentResponse }
