'use strict';
function getWDayField(empid,periodenddate,field){
  empid = fn.string(empid);
  periodenddate = xs.date(periodenddate);
  field = fn.string(field); 
let result = ''; 
var amount = 0.00;
var acctcode = "";
var acctname = "";
var departmentid = "";
var projectid = "";
var fundcode = "";
var positionid = "";
var empdeptid = "";
var programcode = "";
//get one of the WorkDay doc for a given employee and PeriodEndDate
var wddoc = fn.head(cts.search(cts.andQuery([
    cts.collectionQuery('WorkDay-Normalized-Periods'),
    cts.jsonPropertyRangeQuery("EmployeeId", "=", empid ),
    cts.jsonPropertyRangeQuery("PeriodEndDate", "=", periodenddate)
     ])
  ));
switch(field) 
{
 case "DepartmentId":    
     result = wddoc.root.envelope.instance.Deptid;
     break;
 case "EmployeeDepartmentId":
    result = wddoc.root.envelope.instance.Emp_Dept_ID;
    break; 
 case "FundCode":
    result = wddoc.root.envelope.instance.FundCode;
    break;
 case "ProjectId":
    result = wddoc.root.envelope.instance.ProjectID;
    break;
 case "PositionId":
        result = wddoc.root.envelope.instance.PositionID;
        break;
 case "ProgramCode":
        result = wddoc.root.envelope.instance.ProgramCode;
        break;  
 case "SalaryFullTimeAmount": case "SalaryFullTimeAccountCode": case "SalaryFullTimeAccountName" :
    var wddocs = cts.search(cts.andQuery([
        cts.collectionQuery('WorkDay-Normalized-Periods'),
        cts.jsonPropertyRangeQuery("EmployeeId", "=", empid ),
        cts.jsonPropertyRangeQuery("PeriodEndDate", "=", periodenddate),
        cts.jsonPropertyValueQuery("Account", "51010")
         ])
      );
    break;
  case "SalaryOverTimeAmount" : case "SalaryOverTimeAccountCode": case "SalaryOverTimeAccountName":
        var wddocs = cts.search(cts.andQuery([
            cts.collectionQuery('WorkDay-Normalized-Periods'),
            cts.jsonPropertyRangeQuery("EmployeeId", "=", empid ),
            cts.jsonPropertyRangeQuery("PeriodEndDate", "=", periodenddate),
            cts.jsonPropertyValueQuery("Account", "51030")
             ])
          );
    break;
   case "FringeBenefitsAmount" : case "FringeBenefitsAccountCode" : case "FringeBenefitsAccountName" :
         var wddocs = cts.search(cts.andQuery([
             cts.collectionQuery('WorkDay-Normalized-Periods'),
             cts.jsonPropertyRangeQuery("EmployeeId", "=", empid ),
             cts.jsonPropertyRangeQuery("PeriodEndDate", "=", periodenddate),
             cts.jsonPropertyValueQuery("Account", "51100")
              ])
           );
    break;
}
// iterate thru each Workday Payroll collection for each employee each period 
// deNormalize WD Payroll records by period by Account to By Period
if (field.endsWith("Amount" ) | field.endsWith("AccountCode") | field.endsWith("AccountName")){
  for (var doc of wddocs){
    amount = amount + fn.number(fn.string(doc.root.envelope.instance.TransactionAmount).replace(/,/g, ''));
    acctcode = doc.root.envelope.instance.Account;
    acctname = doc.root.envelope.instance.Account_Name;
   }
}
   if (field.endsWith("Amount")){
      result = amount;
   } 
   if (field.endsWith("AccountCode")){
    result = acctcode;
   }
   if (field.endsWith("AccountName")){
    result = acctname;
   } 
return result;
}
module.exports = {
    getWDayField
  }