import { Handler, Context, Callback } from 'aws-lambda';

interface SentimentResponse {
  statusCode: number;
  body: string;
}

const getSentimentScore: Handler = (event, context: Context, cb: Callback) => {
  const response: SentimentResponse = {
    statusCode: 200,
    body: "We live"
  };

  cb(null, response);
};

export { getSentimentScore }