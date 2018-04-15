import { darken, lighten, transparentize } from 'polished'

const main = 'rgb(255, 99, 71)'
const mainLight1 = lighten(0.075, main)
const mainLight2 = lighten(0.15, main)
const sub1 = 'rgb(236, 244, 245)'
const sub1Dark1 = darken(0.075, sub1)
const sub2 = 'rgb(255, 255, 255)'
const sub2Trans = transparentize(0.3, sub2)
const text = 'rgb(87, 99, 102)'
const textAlt = 'rgb(255, 255, 255)'
const backdrop = 'rgba(0, 0, 0, 0.3)'

export const colors = {
  main,
  mainLight1,
  mainLight2,
  sub1,
  sub1Dark1,
  sub2,
  sub2Trans,
  text,
  textAlt,
  backdrop
}
