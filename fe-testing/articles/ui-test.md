# UI-Testing
These test the user flow, simulating what the user does. UI-tests are the fullest level of integration, hence they can also be called integration tests.
UI tests need the entire system to be running. This makes UI tests slow and expensive. UI tests should only test what couldn't be tested with unit and component tests. You will want to see if a combination of components in one view works together, if the communication with external apis (think ajax), authorisation and any user interaction feedback.

## Simulating user actions
Selenium has become the defacto tool to simulate browser interaction with ui testing. Selenium is able to controll most of the browser (depends on browser) and perform user actions such as clicks, keyboard actions and has many useful helper functions to access the DOM and check for existance of elements for example.
