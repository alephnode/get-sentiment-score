import { SentimentEvent } from './index'

export const validateEvent = (evt: SentimentEvent): boolean =>
  Boolean(typeof evt === 'object' && evt.details && evt.details.text)
