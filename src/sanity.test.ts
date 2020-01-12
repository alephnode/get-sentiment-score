import { handler, SentimentResponse } from './sanity'

describe('Sanity tests', () => {
  it('passes canary', () => expect(true).toBe(true))
  it('responds with expected string', () =>
    handler(null, null, (_1, res: SentimentResponse) =>
      expect(res.body).toEqual('We live')
    ))
})
