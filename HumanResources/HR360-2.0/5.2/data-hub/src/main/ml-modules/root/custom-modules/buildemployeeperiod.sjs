'use strict';
declareUpdate();
var employeedocs = fn.collection(["EmployeeTable.csv"]);
var perioddocs = fn.collection("Period-Table.csv");

for(var emp of employeedocs){
    var newemp = emp.root.EmployeeId
    var empname = emp.root.Employeename
    
   for (var period of perioddocs)  {
     var newperiodstart = period.root.Period_Start_Date;
     var newperiodend = period.root.Period_End_Date;
     // transform the date to ISO standard date form of YYYY-MM-DD
     let isoStartDate = xs.date(xdmp.parseDateTime('[M01]/[D01]/[Y01]', newperiodstart).toString().slice(0, 10));
     let isoEndDate = xs.date(xdmp.parseDateTime('[M01]/[D01]/[Y01]', newperiodend).toString().slice(0, 10));
 
     var newdoc = {
                    "envelope": {
                                 "headers": {},
                                 "triples": [],
                                  "instance": {"EmployeeId" : newemp,
                                               "EmployeeName" : empname,
                                               "PeriodStartDate": isoStartDate,
                                               "PeriodEndDate": isoEndDate
                                               },
                                  "attachments": null
                                 }
                   }
// Ingest newdoc to the staging database in "Employee-Period-Ref" collection
     var newdocUri = '/employee-period-ref/'+empname+' - '+isoEndDate+'.json';
     console.log("newDocUri: ", newdocUri);
     const newCollection = "Employee-Period-Ref";
       const permissions = [
		                        xdmp.permission("data-hub-developer", "update"),
		                        xdmp.permission("data-hub-operator", "read"),
                            xdmp.permission("data-hub-operator", "update"),
		                        xdmp.permission("envision", "read"),
                            xdmp.permission("envision", "update")         
	                         ]
     xdmp.documentInsert(newdocUri, newdoc, permissions, newCollection);
   } 
}
