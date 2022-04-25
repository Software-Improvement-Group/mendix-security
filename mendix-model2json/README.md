#Example script using the Mendix Model & Platform SDK to extract the Mendix model to JSON

Change the following variables based on your project and Mendix API credentials:
```
const username = "[USERNAME]";
const apikey = "[API_KEY]";
const projectId = "[PROJECT_ID]";
const projectName = "[PROJECT NAME]";
const targetFolder = "[TARGET_FOLDER]";
```

Build and run the script:
```
npm install
tsc
node script.js
```