// Content extracted from the original richwestipl.sg build. Edit here to change site copy.
export const privacyLastUpdated = "23 September 2026";

export const cookieTable = [
  {
    name: "richwest_consent_v1",
    provider: "Richwest Integrated",
    purpose: "Remembers your cookie choices so we do not ask again on every visit.",
    category: "Strictly necessary",
    retention: "Until you clear your browser storage",
  },
  {
    name: "richwest_visitor_id",
    provider: "Richwest Integrated",
    purpose: "A random identifier used to count repeat visits in our own reporting.",
    category: "Analytics",
    retention: "Until you clear your browser storage or withdraw consent",
  },
  {
    name: "_ga, _ga_*, _gid",
    provider: "Google Analytics 4",
    purpose: "Distinguishes visitors and sessions to produce usage statistics.",
    category: "Analytics",
    retention: "Up to 2 years",
  },
  {
    name: "_gcl_au",
    provider: "Google Ads",
    purpose: "Measures whether a visit that came from one of our ads led to an enquiry.",
    category: "Advertising",
    retention: "Up to 90 days",
  },
  {
    name: "_fbp, _fbc",
    provider: "Meta (Facebook)",
    purpose: "Measures our Facebook and Instagram ads and supports audience targeting.",
    category: "Advertising",
    retention: "Up to 90 days",
  },
] as const;

export const consentCategories = [
  {
    key: "necessary",
    label: "Necessary",
    note: "Keeps the site working.",
    locked: true,
  },
  {
    key: "analytics",
    label: "Analytics",
    note: "Shows us which pages get visited.",
  },
  {
    key: "marketing",
    label: "Advertising",
    note: "Measures our Google and Facebook ads.",
  },
] as const;
