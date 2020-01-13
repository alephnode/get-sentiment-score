import { handler } from '../index'

describe('Index tests', () => {
  it('responds with expected string with valid params', async () => {
    const res = await handler({ details: { text: 'hello' } }, null, null)
    expect(res).toBeTruthy()
  })
})
