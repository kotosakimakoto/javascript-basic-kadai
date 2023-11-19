const today = new Date();
 
const [year, month, day] = [
  today.getFullYear(),
  today.getMonth() - 2,
  today.getDate() + 3,
];
 
console.log( year + '年' + month + '月' + day + '日');