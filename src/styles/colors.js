import { lighten, opacify } from 'polished'

const main       = 'rgb(255, 99, 71)'
const mainLight1 = lighten(0.075, main)
const mainLight2 = lighten(0.150, main)
const sub1       = 'rgb(236, 244, 245)'
const sub2       = 'rgb(255, 255, 255)'
const sub2Trans  = opacify(0.070, sub2)
const textAlt    = 'rgb(255, 255, 255)'

export const colors = {
  main,
  mainLight1,
  mainLight2,
  sub1,
  sub2,
  sub2Trans,
  textAlt
}
