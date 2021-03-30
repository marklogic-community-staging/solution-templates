# HR360 Data Hub

This sample data hub for HR360 is compatible with [DHF] 5.4.x and [Data Hub Central Community Edition] 5.4.1

## Walkthrough

The HR360Walkthrough.docx accompanying this hub provides step by step instructions to walk through a user story for this data hub using Envision/Data Hub Central Community Edition (DHCCE). 

## Getting Started

* Start from the data-hub folder here as your project directory.
* Place the DHF Quickstart.war and DHCCE.jar files in this directory
* Use DHF QuickStart or gradle to initialize your Data Hub.
* From the data-hub project folder here you can deploy your datahub project using: 

        gradle mldeploy  

Before Deploying be sure to update your gradle.properties to use your username and password for MarkLogic.

Also update your application.properties file as needed.

* Start QuickStart and DHCCE directly from this directory.
        
        java -jar hub-central-community-5.4.1.jar

The paths for ingest steps in the 3 flows may require update to reflect the location of where you've landed them on your file system.



[DHF]:https://github.com/marklogic/marklogic-data-hub
[Data Hub Central Community Edition]:https://github.com/marklogic-community/data-hub-central-community
