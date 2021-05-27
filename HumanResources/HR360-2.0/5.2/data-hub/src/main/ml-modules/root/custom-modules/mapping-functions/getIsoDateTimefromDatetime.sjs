'use strict';
function getIsoDateTimefromDatetime(datetime){
let stringdate = fn.string(datetime);
// transform the date to ISO standard date form of YYYY-MM-DD
  if (stringdate == "") {
      var result = ""
    }
  else {
      let isoDate = xs.dateTime(xdmp.parseDateTime('[M01]/[D01]/[Y01] [h01]:[m01]', stringdate).toString()); //.slice(0, 16)
      var result = isoDate
  }    
  return result;
}
module.exports = {
    getIsoDateTimefromDatetime
  }