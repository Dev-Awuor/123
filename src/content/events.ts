import { siteAssets } from './siteAssets';

type EventTitleLine = {
  text: string,
  accent?: boolean,
};

type EventAction = {
  label: string,
  to?: string,
  href?: string,
};

type EventGalleryImage = {
  src: string,
  alt: string,
};

type EventHighlight = {
  label: string,
  text: string,
};

type EventScheduleItem = {
  time: string,
  label: string,
  note: string,
};

export type ChurchEvent = {
  slug: string,
  month: string,
  day: string,
  dateLabel: string,
  title: string,
  titleLines: EventTitleLine[],
  eyebrow: string,
  image: string,
  imageAlt: string,
  imageLabel: string,
  time: string,
  location: string,
  address: string,
  teaser: string,
  summary: string,
  audience: string,
  campusNote: string,
  primaryAction: EventAction,
  details: string[],
  highlights: EventHighlight[],
  schedule: EventScheduleItem[],
  gallery: EventGalleryImage[],
  relatedSlugs: string[],
};

export const eventPath = (slug: string) => `/events/${slug}`;

export const churchEvents: ChurchEvent[] = [
  {
    slug: 'sweetheart-gala',
    month: 'FEB',
    day: '07',
    dateLabel: 'Saturday, February 7',
    title: 'Sweetheart Gala',
    titleLines: [
      {
        text: 'SWEETHEART'
      },
      {
        text: 'GALA',
        accent: true
      }
    ],
    eyebrow: 'Marriage Ministry',
    image: siteAssets.posterConference,
    imageAlt: 'Sweetheart Gala event poster',
    imageLabel: 'Semi-formal evening for couples',
    time: '7:00 PM',
    location: 'OBC Kingdom Center',
    address: '740 E MLK Blvd, Chattanooga, TN 37403',
    teaser: 'Dinner, dancing, and encouragement for married, engaged, and couples considering marriage.',
    summary: 'An elevated night for couples to reconnect, laugh, worship, and invest in the strength of their relationship.',
    audience: 'Married, engaged, and couples considering marriage',
    campusNote: 'Hosted by the OBC Marriage Ministry in downtown Chattanooga.',
    primaryAction: {
      label: 'Plan Your Visit',
      to: '/visit'
    },
    details: [
      'Sweetheart Gala is designed to feel intimate, celebratory, and joy-filled from the moment you walk in. The room opens with a dinner environment, curated table seating, and a pace that gives couples space to breathe.',
      'Throughout the evening, Bishop Adams and ministry leaders will share practical encouragement around communication, covenant, and building a Christ-centered relationship that lasts beyond one event.',
      'Whether you are newly engaged or decades into marriage, the experience is meant to send you home stronger, more connected, and more expectant.'
    ],
    highlights: [
      {
        label: 'Atmosphere',
        text: 'Semi-formal dinner setting with music, conversation, and space to celebrate.'
      },
      {
        label: 'Moment',
        text: 'Live encouragement and relationship-centered teaching woven through the night.'
      },
      {
        label: 'Best for',
        text: 'Couples who want a special night out with practical spiritual encouragement.'
      }
    ],
    schedule: [
      {
        time: '6:15 PM',
        label: 'Doors Open',
        note: 'Check in, grab your table, and settle into the room.'
      },
      {
        time: '7:00 PM',
        label: 'Dinner + Welcome',
        note: 'Hosted opening, dinner service, and a warm kickoff to the night.'
      },
      {
        time: '8:00 PM',
        label: 'Encouragement',
        note: 'Relationship conversation, ministry moments, and a couples challenge.'
      },
      {
        time: '9:00 PM',
        label: 'Celebrate',
        note: 'Dancing, photos, and time to enjoy the evening together.'
      }
    ],
    gallery: [
      {
        src: siteAssets.missionFamily,
        alt: 'Church family gathering together'
      },
      {
        src: siteAssets.missionPrayer,
        alt: 'Olivet community moment'
      },
      {
        src: siteAssets.missionGathering,
        alt: 'People connecting in community'
      }
    ],
    relatedSlugs: ['palm-sunday', 'community-health-fair', 'virtual-sunday-services']
  },
  {
    slug: 'palm-sunday',
    month: 'MAR',
    day: '29',
    dateLabel: 'Sunday, March 29',
    title: 'Palm Sunday Worship Experience',
    titleLines: [
      {
        text: 'PALM'
      },
      {
        text: 'SUNDAY',
        accent: true
      }
    ],
    eyebrow: 'Holy Week',
    image: siteAssets.posterRevival,
    imageAlt: 'Palm Sunday event poster',
    imageLabel: 'Across downtown and Olivet Nation',
    time: '9:30 AM + 12:00 PM',
    location: 'Main Campus + Olivet Nation',
    address: '740 E MLK Blvd and 4872 Jersey Pike, Chattanooga, TN',
    teaser: 'A citywide worship gathering that opens Holy Week with prayer, praise, and expectation.',
    summary: 'Palm Sunday at Olivet marks the start of Holy Week with full-room worship, pastoral teaching, and a family atmosphere across both campuses.',
    audience: 'Entire church family, first-time guests, and online viewers',
    campusNote: 'Two worship expressions, one shared message, one church family.',
    primaryAction: {
      label: 'Plan Your Visit',
      to: '/visit'
    },
    details: [
      'Palm Sunday carries a special energy at Olivet. The room is expectant, the music is big, and the message is centered on Jesus entering the city with purpose and authority.',
      'If you are visiting for the first time, this is a strong Sunday to come because the service naturally feels celebratory, welcoming, and full of visible church life.',
      'Both campuses carry the same heart, so you can choose the room that is closest to you and still feel connected to the larger Olivet family.'
    ],
    highlights: [
      {
        label: 'Worship',
        text: 'A full worship set built for celebration and reflection at the start of Holy Week.'
      },
      {
        label: 'Teaching',
        text: 'Biblical preaching from Bishop Adams with clear, practical application.'
      },
      {
        label: 'Family',
        text: 'A good Sunday to invite friends, children, and people exploring church.'
      }
    ],
    schedule: [
      {
        time: '9:00 AM',
        label: 'Campus Doors Open',
        note: 'Hospitality and welcome teams are in place before both services.'
      },
      {
        time: '9:30 AM',
        label: 'Downtown Worship',
        note: 'Historic main campus service in the heart of the city.'
      },
      {
        time: '12:00 PM',
        label: 'Olivet Nation Worship',
        note: 'A later service expression with the same teaching focus.'
      },
      {
        time: 'All Day',
        label: 'Prayer + Connections',
        note: 'Guest teams, prayer support, and next-step conversations after service.'
      }
    ],
    gallery: [
      {
        src: siteAssets.missionStage,
        alt: 'Worship moment at Olivet'
      },
      {
        src: siteAssets.buildingHero,
        alt: 'Olivet campus building'
      },
      {
        src: siteAssets.missionFamily,
        alt: 'Church family gathered together'
      }
    ],
    relatedSlugs: ['resurrection-sunday', 'virtual-sunday-services', 'sweetheart-gala']
  },
  {
    slug: 'community-health-fair',
    month: 'JUN',
    day: '07',
    dateLabel: 'Saturday, June 7',
    title: 'Community Health Fair',
    titleLines: [
      {
        text: 'HEALTH'
      },
      {
        text: 'FAIR',
        accent: true
      }
    ],
    eyebrow: 'Matthew 25 Outreach',
    image: siteAssets.missionCommunity,
    imageAlt: 'Community outreach at Olivet',
    imageLabel: 'Care for the city',
    time: '10:00 AM – 2:00 PM',
    location: 'Matthew 25 Campus',
    address: '751 E MLK Blvd, Chattanooga, TN 37403',
    teaser: 'Free health screenings, wellness resources, and practical support for Chattanooga families.',
    summary: 'A community-facing Saturday built around access, dignity, and tangible care through the Matthew 25 Campus.',
    audience: 'Families, neighbors, seniors, and anyone in need of community wellness resources',
    campusNote: 'Hosted through the outreach arm of Olivet with partner organizations and volunteers.',
    primaryAction: {
      label: 'Serve With Us',
      to: '/serve'
    },
    details: [
      'This fair is structured to make care accessible. Families can move through screening stations, resource tables, and support conversations without feeling rushed or overwhelmed.',
      'Volunteers from Olivet help guests navigate the experience, while partner organizations provide information around dental checks, wellness coaching, and community follow-up support.',
      'It is one of the clearest expressions of the Matthew 25 Campus mission: practical help that restores dignity and opens doors for deeper care.'
    ],
    highlights: [
      {
        label: 'Access',
        text: 'Free screenings and resource tables arranged for simple walk-up participation.'
      },
      {
        label: 'Support',
        text: 'Volunteers help guests navigate stations and connect to next steps.'
      },
      {
        label: 'Impact',
        text: 'A visible bridge between Sunday faith and weekday community care.'
      }
    ],
    schedule: [
      {
        time: '9:30 AM',
        label: 'Volunteer Call Time',
        note: 'Team huddle, station setup, and prayer before doors open.'
      },
      {
        time: '10:00 AM',
        label: 'Community Doors Open',
        note: 'Guests begin moving through screening and resource zones.'
      },
      {
        time: '12:00 PM',
        label: 'Care + Refreshments',
        note: 'Food, conversation, and follow-up assistance continue across campus.'
      },
      {
        time: '2:00 PM',
        label: 'Closing Support',
        note: 'Final prayer, cleanup, and volunteer wrap-up.'
      }
    ],
    gallery: [
      {
        src: siteAssets.missionSupport,
        alt: 'Volunteers serving the community'
      },
      {
        src: siteAssets.missionCare,
        alt: 'Families gathered for outreach support'
      },
      {
        src: siteAssets.missionService,
        alt: 'Olivet ministry team in action'
      }
    ],
    relatedSlugs: ['youth-lit-weekend', 'palm-sunday', 'sweetheart-gala']
  },
  {
    slug: 'resurrection-sunday',
    month: 'APR',
    day: '05',
    dateLabel: 'Sunday, April 5',
    title: 'Resurrection Sunday Celebration',
    titleLines: [
      {
        text: 'RESURRECTION'
      },
      {
        text: 'SUNDAY',
        accent: true
      }
    ],
    eyebrow: 'Easter Weekend',
    image: siteAssets.posterFeature,
    imageAlt: 'Resurrection Sunday event poster',
    imageLabel: 'Celebrating the risen Christ',
    time: '9:30 AM + 12:00 PM',
    location: 'Main Campus + Olivet Nation',
    address: '740 E MLK Blvd and 4872 Jersey Pike, Chattanooga, TN',
    teaser: 'A high-celebration Sunday centered on the resurrection, hope, and the power of the gospel.',
    summary: 'One of the largest worship moments on the Olivet calendar, built for celebration, invitation, and gospel clarity.',
    audience: 'Whole families, invited guests, returning members, and first-time visitors',
    campusNote: 'Expect a fuller room, stronger guest flow, and a high-energy worship atmosphere.',
    primaryAction: {
      label: 'Plan Your Visit',
      to: '/visit'
    },
    details: [
      'Resurrection Sunday at Olivet is designed to feel both victorious and accessible. The room is full of life, but the flow is still clear for guests who may be walking into church for the first time in a long time.',
      'The worship experience centers the hope of the gospel, and the message is crafted to be clear, compelling, and deeply invitational.',
      'Because this is such a strong invite Sunday, it is a natural moment to bring family, friends, and people who have been asking questions about faith.'
    ],
    highlights: [
      {
        label: 'Celebration',
        text: 'Big-room worship, Easter energy, and a full church-family atmosphere.'
      },
      {
        label: 'Clarity',
        text: 'A gospel-centered message that serves both believers and first-time guests.'
      },
      {
        label: 'Momentum',
        text: 'A natural on-ramp into future Sundays, groups, and next steps at Olivet.'
      }
    ],
    schedule: [
      {
        time: '8:45 AM',
        label: 'Guest Arrival Window',
        note: 'Extra hospitality and parking coverage before the first service.'
      },
      {
        time: '9:30 AM',
        label: 'First Worship Gathering',
        note: 'Full worship experience with resurrection-centered teaching.'
      },
      {
        time: '11:00 AM',
        label: 'Connection Window',
        note: 'Photos, family moments, prayer, and transitions between services.'
      },
      {
        time: '12:00 PM',
        label: 'Second Worship Gathering',
        note: 'A second opportunity to worship and invite others into the room.'
      }
    ],
    gallery: [
      {
        src: siteAssets.missionStage,
        alt: 'Worship stage at Olivet'
      },
      {
        src: siteAssets.buildingWide,
        alt: 'Olivet campus exterior'
      },
      {
        src: siteAssets.missionPrayer,
        alt: 'People gathering in worship'
      }
    ],
    relatedSlugs: ['palm-sunday', 'virtual-sunday-services', 'community-health-fair']
  },
  {
    slug: 'youth-lit-weekend',
    month: 'JAN',
    day: '11',
    dateLabel: 'Sunday, January 11',
    title: 'Youth L.I.T. Weekend',
    titleLines: [
      {
        text: 'YOUTH'
      },
      {
        text: 'L.I.T.',
        accent: true
      }
    ],
    eyebrow: 'Next Generation',
    image: siteAssets.posterPrayer,
    imageAlt: 'OBC Youth L.I.T. event poster',
    imageLabel: 'Living for Jesus. Impacting the community. Training disciples.',
    time: 'Starts at 9:30 AM',
    location: 'Main Campus',
    address: '740 E MLK Blvd, Chattanooga, TN 37403',
    teaser: 'A youth-centered Sunday with student moments, community energy, and a pizza party after service.',
    summary: 'A next-generation Sunday designed to bring students to the center of the room and create momentum for youth discipleship.',
    audience: 'Students, parents, mentors, and families connected to youth ministry',
    campusNote: 'Best for students bringing friends and families who want to see youth ministry culture firsthand.',
    primaryAction: {
      label: 'Connect With Us',
      to: '/connect'
    },
    details: [
      'Youth L.I.T. Weekend is energetic by design. Students are visible, celebrated, and invited into a room that feels alive without losing spiritual focus.',
      'The day includes service moments built for students plus a relaxed hangout afterward that gives new families time to meet leaders and build connection.',
      'If you are looking for a strong first touchpoint into youth life at Olivet, this is one of the most natural Sundays to start.'
    ],
    highlights: [
      {
        label: 'Students',
        text: 'A service atmosphere that centers student energy and leadership visibility.'
      },
      {
        label: 'Community',
        text: 'Time after service for food, conversation, and real relationship building.'
      },
      {
        label: 'Momentum',
        text: 'A strong on-ramp into serving, small groups, and ongoing discipleship.'
      }
    ],
    schedule: [
      {
        time: '9:00 AM',
        label: 'Student Check-In',
        note: 'Meet leaders, connect with teams, and settle into the room.'
      },
      {
        time: '9:30 AM',
        label: 'Youth-Focused Worship',
        note: 'Service starts with high energy and visible student participation.'
      },
      {
        time: '11:00 AM',
        label: 'Meet the Leaders',
        note: 'Parents and students can connect with ministry leaders after service.'
      },
      {
        time: '11:30 AM',
        label: 'Pizza Party',
        note: 'A relaxed hang after service for students and first-time guests.'
      }
    ],
    gallery: [
      {
        src: siteAssets.missionGathering,
        alt: 'Young people gathering together'
      },
      {
        src: siteAssets.missionSupport,
        alt: 'Community support moment'
      },
      {
        src: siteAssets.missionFamily,
        alt: 'Olivet church family'
      }
    ],
    relatedSlugs: ['virtual-sunday-services', 'community-health-fair', 'palm-sunday']
  },
  {
    slug: 'virtual-sunday-services',
    month: 'JAN',
    day: '25',
    dateLabel: 'Sunday, January 25',
    title: 'Virtual Sunday Services',
    titleLines: [
      {
        text: 'VIRTUAL'
      },
      {
        text: 'SUNDAY',
        accent: true
      }
    ],
    eyebrow: 'Digital Community',
    image: siteAssets.posterYouth,
    imageAlt: 'Virtual Sunday Services graphic',
    imageLabel: 'Worship from anywhere',
    time: '9:30 AM + 12:00 PM',
    location: 'Streaming on YouTube',
    address: 'youtube.com/@adamsksr',
    teaser: 'Join Olivet online for live worship, teaching, and prayer from wherever you are.',
    summary: 'A digital-first worship moment for members, travelers, workers, and guests testing the waters before visiting in person.',
    audience: 'Digital members, travelers, first-time online guests, and anyone worshiping from home',
    campusNote: 'Ideal for people who want to experience the teaching before planning an in-person visit.',
    primaryAction: {
      label: 'Watch Online',
      href: 'https://youtube.com/@adamsksr'
    },
    details: [
      'Virtual Sunday Services give people a clean way to stay close to Olivet even when they cannot be in the room physically. The teaching, prayer focus, and worship language all remain consistent with what happens on campus.',
      'For first-time digital guests, this is also a low-pressure way to get a feel for the church before taking the next step into a physical visit.',
      'The experience is designed to be more than a stream. It is a connection point for people who still want prayer, biblical teaching, and a sense of community throughout the week.'
    ],
    highlights: [
      {
        label: 'Access',
        text: 'Two Sunday stream windows that make it easy to join from home or on the go.'
      },
      {
        label: 'Consistency',
        text: 'The same pastoral voice and spiritual focus as the in-person gathering.'
      },
      {
        label: 'Next Step',
        text: 'A natural bridge into planning an in-person visit when you are ready.'
      }
    ],
    schedule: [
      {
        time: '9:15 AM',
        label: 'Stream Lobby Opens',
        note: 'Get in early and settle into the live stream before service starts.'
      },
      {
        time: '9:30 AM',
        label: 'Morning Stream',
        note: 'The first worship and teaching window goes live.'
      },
      {
        time: '12:00 PM',
        label: 'Second Stream',
        note: 'A second opportunity to join the worship experience live.'
      },
      {
        time: 'All Week',
        label: 'Replay Access',
        note: 'Messages stay available for anyone catching up later.'
      }
    ],
    gallery: [
      {
        src: siteAssets.missionStage,
        alt: 'Worship moment on stage'
      },
      {
        src: siteAssets.missionPrayer,
        alt: 'Prayer and worship at Olivet'
      },
      {
        src: siteAssets.missionFamily,
        alt: 'Olivet church family gathered'
      }
    ],
    relatedSlugs: ['palm-sunday', 'resurrection-sunday', 'youth-lit-weekend']
  }
];

export const featuredEventSlug = 'sweetheart-gala';
export const featuredEvent =
churchEvents.find((event) => event.slug === featuredEventSlug) ?? churchEvents[0];

export const listedEventSlugs = [
  'palm-sunday',
  'community-health-fair',
  'resurrection-sunday',
  'youth-lit-weekend'
];

export const listedEvents = listedEventSlugs.
map((slug) => churchEvents.find((event) => event.slug === slug)).
filter(Boolean) as ChurchEvent[];

export const homePreviewEventSlugs = [
  'palm-sunday',
  'community-health-fair',
  'resurrection-sunday'
];

export const homePreviewEvents = homePreviewEventSlugs.
map((slug) => churchEvents.find((event) => event.slug === slug)).
filter(Boolean) as ChurchEvent[];

export const recurringEvents = [
  {
    label: 'SUNDAY WORSHIP',
    times: '9:30AM // 12:00PM',
    location: 'Main Campus & Olivet Nation'
  },
  {
    label: 'WEDNESDAY BIBLE STUDY',
    times: '12:00PM // 6:30PM',
    location: 'Main Campus'
  },
  {
    label: 'WEEKDAY FEEDING',
    times: '12:00PM — Monday through Friday',
    location: 'Matthew 25 Campus'
  }
];

export const getEventBySlug = (slug: string) =>
churchEvents.find((event) => event.slug === slug);

export const getRelatedEvents = (slug: string) => {
  const event = getEventBySlug(slug);
  if (!event) {
    return [];
  }
  return event.relatedSlugs.
  map((relatedSlug) => getEventBySlug(relatedSlug)).
  filter(Boolean) as ChurchEvent[];
};
