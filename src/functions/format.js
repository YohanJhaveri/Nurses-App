function formatDate(value) {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${MONTHS[month]} ${day}, ${year}`;
}

const formatDateYYYYMMDD = (value) => {
  const date = new Date(value);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const monthPad = month < 10 ? "0" : "";
  const dayPad = day < 10 ? "0" : "";
  return `${year}-${monthPad}${month}-${dayPad}${day}`;
};

function formatTime(time) {
  const [hours, minutes] = time.split(":");
  const meridian = hours < 12 ? "am" : "pm";
  const hours12 = hours % 12 || 12;
  return `${hours12 < 10 ? "0" : ""}${hours12}:${minutes}${meridian}`;
}

export default {
  date: formatDate,
  dateYYYYMMDD: formatDateYYYYMMDD,
  time: formatTime,
};
