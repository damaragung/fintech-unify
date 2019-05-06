import { UAParser } from 'ua-parser-js'
import checkUaWebview from 'is-ua-webview'

const parser = new UAParser()

export const MOBILE_BREAKPOINT = 768

export function isMobile() {
  return window.innerWidth < MOBILE_BREAKPOINT
}

export function isWebview() {
  const res = parser.getResult()
  return ['Android', 'iOS', 'BlackBerry'].indexOf(res.os.name) !== -1
}

export function isUaWebview(ua) {
  return checkUaWebview(ua)
}
