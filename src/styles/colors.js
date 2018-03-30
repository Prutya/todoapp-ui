import { opacify } from 'polished'

const main      = 'rgb(255, 99, 71)'
const sub1      = 'rgb(236, 244, 245)'
const sub2      = 'rgb(255, 255, 255)'
const sub2Trans = opacify(0.70, sub2)

export const colors = {
  main,
  sub1,
  sub2,
  sub2Trans
}
