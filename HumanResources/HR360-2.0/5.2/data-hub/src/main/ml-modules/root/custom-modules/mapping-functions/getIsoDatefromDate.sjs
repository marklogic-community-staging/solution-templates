'use strict';
function getIsoDatefromDate(datestring){
let stringdate = fn.string(datestring);
// transform the date to ISO standard date form of YYYY-MM-DD
  if (stringdate == "") {
      var result = ""
    }
  else {
      let isoDate = xs.date(xdmp.parseDateTime('[M01]/[D01]/[Y01]', stringdate).toString().slice(0, 10));
      var result = isoDate
  }    
  return result;
}
module.exports = {
    getIsoDatefromDate
  }