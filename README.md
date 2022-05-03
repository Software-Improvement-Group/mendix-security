# Mendix Security

Mendix Security is an open-source ruleset based on the popular Semgrep format to scan Mendix Model JSON files for Security Misconfigurations.

## Step 1: Extract your Mendix Model to JSON

Change the following variables in `mendix-model2json` based on your project and Mendix API credentials:

```
const username = "[USERNAME]";
const apikey = "[API_KEY]";
const projectId = "[PROJECT_ID]";
const projectName = "[PROJECT NAME]";
const targetFolder = "[TARGET_FOLDER]";
```

Build and run the script from the `mendix-model2json` folder:

```
npm install
tsc
node script.js
```

## Step 2: Install Semgrep

```
python3 -m pip install semgrep
```
See https://github.com/returntocorp/semgrep for more options

## Step 3: Run Semgrep with the Mendix Security ruleset
Run the following command from the directory that contains the Mendix JSON files that were extracted in Step 1.
```
semgrep --config ./rules
```