# HR360 Data Hub

This sample data hub for HR360 is compatible with [DHF] 6.0.0

## Walkthrough

The HR360Walkthrough.docx accompanying this hub provides step by step instructions to walk through a user story for this data hub using Hub Central. 

## Getting Started

* Start from the data-hub folder here as your project directory.
* Place the DHF HubCentral.war file in this directory
* Use [gradle] to initialize your Data Hub.
* From the data-hub project folder provided here you can deploy your datahub project using: 

        gradle mldeploy  

Before Deploying be sure to update your gradle.properties to use your username and password for MarkLogic.

Also update your application.properties file as needed.

* Start DataHub directly from this directory.
        
        java -jar marklogic-data-hub-central.war

The paths for ingest steps in the 3 flows may require update to reflect the location of where you've landed them on your file system.



[DHF]:https://github.com/marklogic/marklogic-data-hub
[gradle]:https://docs.marklogic.com/datahub/6.0/projects/create-project-using-gradle.html