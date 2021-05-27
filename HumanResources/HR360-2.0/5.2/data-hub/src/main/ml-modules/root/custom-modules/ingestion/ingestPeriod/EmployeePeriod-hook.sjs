/**
 * This is a custom hook that determines Employee-Period combination for each Employee ingested as prior step
 */
declareUpdate();

// A custom hook receives the following parameters via DHF. Each can be optionally declared.
var uris;         // An array of one or more URIs being processed.
var content;      // An array of objects that represent each document being processed.
var options;      // The Options object passed to the step by DHF.
var flowName;     // The name of the flow being processed.
var stepNumber;   // The index of the step within the flow being processed. The stepNumber of the first step is 1.
var step;         // The step object.

// Custom hooks can define zero or more properties in the step definition that declares them
var employeeperiodCollection;

for (const contentObject of content) {
  const period = contentObject.value;

  /**
   * If a hook is configured with runBefore = true, then the content value will be the "raw" data, not yet wrapped in
   * an envelope. If it's configured with runBefore = false, which is the case in this example, then the content value
   * will be an envelope.
   */
  const periodinstance = period.envelope.instance;

  /**
   * Note that for better performance, a single query should be done based on all of the objects in the content
   * array. This works fine though for the small set of data being ingested in this example.
   */

  /* 
   * Get all the Employees from the "EmployeeTable.csv" collection 
   * and iterate thru each Employee to create a Employee-Period reference document in a seperate 
   * EmployeePeriodRef collection
  */
  const employeedocs = cts.search(cts.andQuery([
    cts.collectionQuery("EmployeeTable.csv")
    ]));

  for (var employee of employeedocs) {
       var employeeinstance = employee.root.envelope.instance;
       var newinstance = 

    const duplicateUri = xdmp.nodeUri(duplicateOrder);
    // Generate a random URI so that previously archived documents are never overwritten
    const archiveUri = "/archive/" + sem.uuidString() + duplicateUri;
    xdmp.documentInsert(archiveUri, duplicateOrder, xdmp.documentGetPermissions(duplicateUri), archiveCollection);
    xdmp.documentDelete(duplicateUri);
  }
}