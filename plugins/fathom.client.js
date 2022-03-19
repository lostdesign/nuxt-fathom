import * as fathom from 'fathom-client'

const options = JSON.parse(`<%= JSON.stringify(options) %>`)
const { siteId, spa, includedDomains, excludedDomains, canonical, honorDNT, url } = options

export default (context , inject) => {
  fathom.load(siteId, {
    spa,
    includedDomains,
    excludedDomains,
    canonical,
    honorDNT,
    url
  })

  inject('fathom', fathom)
}
