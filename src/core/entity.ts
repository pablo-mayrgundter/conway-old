import { Model } from './model'


export interface Entity {
  readonly localID: number

  readonly model: Model
}
