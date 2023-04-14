export default function onlyRandom(minValue: number, maxvalue: number): Function {
  let previousValue: number
  return function random() {
    const number = Math.floor((Math.random() * (maxvalue - minValue + 1)) + minValue)
    previousValue = ((number === previousValue) && (minValue !== maxvalue)) ? random() : number
    return previousValue
  }
}
