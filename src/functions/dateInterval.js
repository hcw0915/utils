/**
 * 計算兩個日期時間的間隔
 * @param {string} startDate - 起始日期時間，格式為 'YYYY-MM-DD HH:mm:ss'
 * @param {string} endDate - 結束日期時間，格式為 'YYYY-MM-DD HH:mm:ss'
 * @returns {object} 返回天數、小時、分鐘的間隔時長
 */

function dateInterval(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    throw new Error("請提供正確的日期格式：'YYYY-MM-DD HH:mm:ss'");
  }

  let timeDifferenceMs = end - start;

  const days = Math.floor(timeDifferenceMs / (24 * 60 * 60 * 1000));
  timeDifferenceMs -= days * (24 * 60 * 60 * 1000);

  const hours = Math.floor(timeDifferenceMs / (60 * 60 * 1000));
  timeDifferenceMs -= hours * (60 * 60 * 1000);

  const minutes = Math.floor(timeDifferenceMs / (60 * 1000));

  return { days: days, hours: hours, minutes: minutes };
}

// 測試
const interval = dateInterval("2023-01-01 10:00:00", "2023-01-01 15:30:00");
console.log(interval); // { days: 0, hours: 5, minutes: 30 }

const interval2 = dateInterval("2023-01-01 10:00:00", "2023-01-01 10:25:00");
console.log(interval2); // { days: 0, hours: 0, minutes: 25 }

const interval3 = dateInterval("2023-01-01 08:45:00", "2023-01-04 11:20:00");
console.log(interval3); // { days: 3, hours: 2, minutes: 35 }

const interval4 = dateInterval("2023-01-01 12:00:00", "2023-01-02 12:00:00");
console.log(interval4); // { days: 1, hours: 0, minutes: 0 }
