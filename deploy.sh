cd dist/ && zip -rq sentiment.zip index.js

aws lambda update-function-code \
  --function-name getSentimentScore \
  --zip-file fileb://sentiment.zip \
  --region us-east-1

rm sentiment.zip