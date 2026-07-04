export function formatDate(dateString: string | Date, locale = 'zh-CN') {
  const d = typeof dateString === 'string' ? new Date(dateString) : dateString;
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}
