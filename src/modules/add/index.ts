import config from '../../config'

export default function add(a: number, b?: number): number {
  return a + (b || config.defaultNumber)
}
