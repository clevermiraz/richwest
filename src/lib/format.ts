const dateFormatter = new Intl.DateTimeFormat("en-SG", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "Asia/Singapore",
});

/** "8 Nov 2024". Fixed locale and time zone so server and client always agree. */
export const formatDate = (iso: string) => dateFormatter.format(new Date(iso));
