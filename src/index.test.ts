import { handler, SentimentResponse } from './index'
import expectedResponse from './__mocks__/mockAWSResponse'

describe('Index tests', () => {
  it('responds with expected string', async () => {
    const res = await handler(null, null, null)
    expect(res).toEqual(expectedResponse)
  })
})
