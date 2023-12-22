export const formatNumberToNaira = (number: number, fractionDigits?: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: fractionDigits || 0,
  }).format(Number(number));
};

export const getNameInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('');
};

export const splitCamelCase = (str: string) => {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
};

export const getDateDifferenceInDays = (date2: string, date1: string) => {
  const convertedDate2 = new Date(date2);
  const convertedDate1 = new Date(date1);

  const millisecondsInOneDay = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc2 = Date.UTC(
    convertedDate2.getFullYear(),
    convertedDate2.getMonth(),
    convertedDate2.getDate()
  );
  const utc1 = Date.UTC(
    convertedDate1.getFullYear(),
    convertedDate1.getMonth(),
    convertedDate1.getDate()
  );

  return Math.floor((utc2 - utc1) / millisecondsInOneDay);
};

export const formatTime = (audioDuration: number, addIndicators?: boolean) => {
  // Convert and format the duration
  const h = Math.floor(audioDuration / 3600)
    .toString()
    .padStart(2, '0');
  const m = Math.floor((audioDuration % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(audioDuration % 60)
    .toString()
    .padStart(2, '0');

  const newFormat = addIndicators
    ? Number(h) > 0
      ? h + 'h ' + m + 'm ' + s
      : m + 'm ' + s + 's '
    : Number(h) > 0
    ? h + ':' + m + ':' + s
    : m + ':' + s;
  return newFormat;
};

export const getMonthString = (date: Date, full?: boolean) => {
  const monthStrings = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  const fullMonthStrings = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return full
    ? fullMonthStrings[new Date(date).getUTCMonth()]
    : monthStrings[new Date(date).getUTCMonth()];
};
