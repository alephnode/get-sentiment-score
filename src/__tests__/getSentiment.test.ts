import { getSentiment } from '../getSentiment'
import expectedResponse from '../__mocks__/mockAWSResponse'

describe('Index tests', () => {
  it('responds with expected string with valid params', async () => {
    const res = await getSentiment()
    expect(res).toEqual(expectedResponse)
  })
})
