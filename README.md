# Mendix Security

Mendix Security is an open-source ruleset based on the popular [Semgrep](https://github.com/returntocorp/semgrep) format to scan Mendix Model JSON files for common Security Misconfigurations.

# How to run

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

# Rules

| Item | RuleID | Description | Links |
| --- | --- | --- | --- |
| Entities | entities-with-sensitive-data-visible-to-anonymous-users | Entity attributes containing privacy-sensitive data were found that are accessible to Anonymous users | [Mendix Documentation](https://docs.mendix.com/howto/security/set-up-anonymous-user-security/)<br/>[DIVD-2022-00019 - Insecure Mendix Applications](https://csirt.divd.nl/cases/DIVD-2022-00019/) |
| Project Security | admin-password | The default Administrator password should be changed | [Mendix Security Best Practices](https://docs.mendix.com/howto/security/best-practices-security/#9-renaming-the-administrator-user) |
| Project Security | admin-username | The default Administrator username should be changed | [Mendix Security Best Practices](https://docs.mendix.com/howto/security/best-practices-security/#9-renaming-the-administrator-user) |
| Project Security | checkeverything | Security level should be set to Production in Project Security settings | [Mendix Documentation](https://docs.mendix.com/refguide/project-security/#security-level) |
| Project Security | checksecurity | Check Security must be set to Enabled when Security level is set to Production in Project Security settings | [Mendix Documentation](https://docs.mendix.com/refguide/project-security/#check-security) |
| Project Security | demousers | Demo users should be disabled in Project Security settings | [Mendix Documentation](https://docs.mendix.com/refguide/demo-users/) |
| Password Policy | password-policy-digit | Password policy should require a digit in the password | [Mendix Security Best Practices](https://docs.mendix.com/howto/security/best-practices-security/#8-applying-a-strong-password-policy) |
| Password Policy | password-policy-minimumlength | Password policy should require a minimum password length of 8 characters | [Mendix Security Best Practices](https://docs.mendix.com/howto/security/best-practices-security/#8-applying-a-strong-password-policy)<br/>[NIST Password Guidelines](https://pages.nist.gov/800-63-3/sp800-63b.html#memsecretver) |
| Password Policy | password-policy-mixedcase | Password policy should require a mixed case password | [Mendix Security Best Practices](https://docs.mendix.com/howto/security/best-practices-security/#8-applying-a-strong-password-policy) |
| Password Policy | password-policy-symbol | Password policy should require a symbol in the password | [Mendix Security Best Practices](https://docs.mendix.com/howto/security/best-practices-security/#8-applying-a-strong-password-policy) |
| Project Settings | constants-http-url | Constant with external URL found using the unencrypted HTTP protocol, use https:// instead | [Mendix Security Best Practices](https://docs.mendix.com/howto/security/best-practices-security/#10-using-ssl-on-consumed-web-services-whenever-possible) |
| Project Settings | constants-sensitivedata | Constants should not be used for storing sensitive data (e.g. API keys, secrets, passwords) | [Mendix Security Best Practices](https://docs.mendix.com/howto/security/best-practices-security/#6-using-the-encryption-module-when-storing-sensitive-information) |
| Project Settings | hashalgorithm | Use a sufficiently strong hashing algorithm | [Mendix Documentation](https://docs.mendix.com/refguide/project-settings/#hash-algorithm) |
| Published OData Services | odata-authentication | Published OData Service found that does not require authentication | [Mendix Security Best Practices](https://docs.mendix.com/howto/security/best-practices-security/#service-authentication) |
| Published REST Services | rest-authentication | Published REST Service found that does not require authentication | [Mendix Security Best Practices](https://docs.mendix.com/howto/security/best-practices-security/#service-authentication) |
| Published Web Services | webservice-authentication | Published WebService found that does not require authentication | [Mendix Security Best Practices](https://docs.mendix.com/howto/security/best-practices-security/#service-authentication) |

## Contact information

Feel free to contact [SIG support](mailto:support@softwareimprovementgroup.com) for any questions you might have.

## License

Copyright Software Improvement Group

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    
