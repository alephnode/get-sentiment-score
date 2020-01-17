#!/bin/sh
rm -rf dist && npm run build && cd dist/ && zip -rq sentiment.zip .

aws lambda update-function-code \
  --function-name getSentimentScore \
  --zip-file fileb://sentiment.zip \
  --region us-east-1

rm sentiment.zip