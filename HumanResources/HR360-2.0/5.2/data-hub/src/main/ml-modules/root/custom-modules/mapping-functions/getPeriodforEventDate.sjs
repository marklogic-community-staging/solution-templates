'use strict';
function getPeriodforEventDate(empid,date,field){
var eventdate = fn.string(date);
var employeeid = fn.string(empid);
var datelength = fn.stringLength(eventdate);

// get Period-Start and Period-End Dates from Period-ref based on EventDate
if (datelength <= 8) {
    eventdate = xs.date(xdmp.parseDateTime('[M01]/[D01]/[Y01]', eventdate ).toString().slice(0, 10));
} else {
    eventdate = xs.date(xdmp.parseDateTime('[M01]/[D01]/[Y01] [h01]:[s01]', eventdate ).toString().slice(0, 10)); 
}
  var perioddoc = fn.head(cts.search(cts.andQuery([
                                              cts.collectionQuery("Employee-Period-Ref"),
                                              cts.jsonPropertyRangeQuery("EmployeeId", "=", employeeid),
                                              cts.jsonPropertyRangeQuery("PeriodStartDate","<=",eventdate),
                                              cts.jsonPropertyRangeQuery("PeriodEndDate",">=",eventdate)    
                                             ])
                                )).toObject()
     var periodenddate = perioddoc.envelope.instance.PeriodEndDate;
     var periodstartdate = perioddoc.envelope.instance.PeriodStartDate;
   if (eventdate == "") {
      var result = ""
   }
   else {
     if (field.endsWith("EndDate")){
        var result = periodenddate;
     } else{
        if (field.endsWith("StartDate")){
            var result = periodstartdate;
           }
     }
    }  
return result;
}
module.exports = {
    getPeriodforEventDate
  }