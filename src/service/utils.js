export const formatDate = (bDay) => {
  let date = new Date(bDay);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  if(day < 10) day = '0' + day;
  if(month < 10) month = '0' + month;
  let year = date.getFullYear();
  return `${day}.${month}.${year}.`;
};