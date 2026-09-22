export const SITE = {
  name: 'AREA 51',
  fullName: 'AREA 51 — Alien & Spaceship Storage',
  url: 'https://area51.monster/',
  email: 'sales@desertrich.com',
  ogImage:
    'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/5a039890-c1aa-49c4-f98e-46aad2763e00/public',
  secondaryImage:
    'https://imagedelivery.net/-sPAUAWeA405NiWJ0SNIQA/acee44b7-0888-4105-ae50-f87f130fbd00/public',
  owner: 'DesertRich',
  github: 'https://github.com/Mrerg7/area51_monster_v1',
  siteOwnerUrl: 'https://desertrich.com/',
  defaultDescription:
    'Alien spacecraft hangars and tunnels to the Pacific beneath the Nevada desert. The Area 51 story built for film — area51.monster is for sale.',
} as const;

export const NAV = [
  { href: '/', label: 'HOME' },
  { href: '/story/', label: 'THE STORY' },
  { href: '/film-concept/', label: 'FILM CONCEPT' },
  { href: '/acquisition/', label: 'ACQUISITION' },
  { href: '/faq/', label: 'FAQ' },
] as const;
