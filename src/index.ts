import { Handler, Context, Callback } from 'aws-lambda'
import AWS from 'aws-sdk'

interface SentimentResponse {
  statusCode: number
  body: string
}

const handler: Handler = (event, context: Context, cb: Callback) => {
  const params = {
    LanguageCode: 'en',
    TextList: ['I hate this']
  }

  const comprehend = new AWS.Comprehend({
    apiVersion: '2017-11-27',
    region: 'us-east-1'
  })

  comprehend.batchDetectSentiment(params, (err, data) => {
    if (err) console.log(err, err.stack)
    else return cb(JSON.stringify(data.ResultList))
  })
}

export { handler, SentimentResponse }
