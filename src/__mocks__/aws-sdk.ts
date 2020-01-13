import mockAWSResponse from './mockAWSResponse'

export default {
  Comprehend: jest.fn(() => ({
    batchDetectSentiment: jest.fn().mockReturnValue({
      promise: () => Promise.resolve(mockAWSResponse)
    })
  }))
}
