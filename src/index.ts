export default function onlyRandom(minValue: number, maxvalue: number): number {
  let previousValue: number
  //@ts-ignore
  return function random():number {
    const number = Math.floor((Math.random() * (maxvalue - minValue + 1)) + minValue)
    previousValue = number === previousValue && minValue !== maxvalue ? random() : number
    return previousValue
  }
}
