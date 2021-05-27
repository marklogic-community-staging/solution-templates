'use strict';
function getIsoDatefromDatetime(datetime){
let stringdate = fn.string(datetime);
// transform the date to ISO standard date form of YYYY-MM-DD
  if (stringdate == "") {
      var result = ""
    }
  else {
      let isoDate = xs.date(xdmp.parseDateTime('[M01]/[D01]/[Y01] [h01]:[s01]', stringdate).toString().slice(0, 10));
      var result = isoDate
  }    
  return result;
}
module.exports = {
    getIsoDatefromDatetime
  }