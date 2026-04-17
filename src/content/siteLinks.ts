export const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/olivet.b.church?_rdc=1&_rdr#'
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@adamsksr'
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/obcministries'
  }
] as const;

export const socialUrls = {
  facebook: socialLinks[0].href,
  youtube: socialLinks[1].href,
  x: socialLinks[2].href
} as const;
