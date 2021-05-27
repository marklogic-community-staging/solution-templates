./gradlew hubRunFlow -PflowName=EmployeePeriod -PentityName=EmployeePeriod -PbatchSize=100 -PthreadCount=4 -i
./gradlew hubRunFlow -PflowName=EmployeeReference -PentityName=EmployeeReference -PbatchSize=100 -PthreadCount=4 -i
./gradlew hubRunFlow -PflowName=KronosEvents -PentityName=KronosEvents -PbatchSize=100 -PthreadCount=4 -i 
./gradlew hubRunFlow -PflowName=WellnessEvents -PentityName=WellnessEvents -PbatchSize=100 -PthreadCount=4 -i
./gradlew hubRunFlow -PflowName=PeopleSoftPayroll -PentityName=PayrollData -PbatchSize=100 -PthreadCount=4 -i
./gradlew hubRunFlow -PflowName=WorkDayPayroll -PentityName=PayrollData -PbatchSize=100 -PthreadCount=4 -i
echo "All Flows Completed successfully"
exit