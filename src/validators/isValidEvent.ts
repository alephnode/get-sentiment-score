import { SentimentEvent } from '../index'

export const isValidEvent = (evt: SentimentEvent): boolean =>
  Boolean(typeof evt === 'object' && evt.details && evt.details.text)
