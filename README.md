# Homework-5

User Flow
-----------------------------------
1. Open app in a browser --> Create HTML document, JavaScript file, CSS file
2. See the date at the top of the page --> function
3. Schedule 1hr blocks (9 am - 5 pm) --> function (loop)
    a. Time
    b. Text area (type task) --> unique ID for each row
    c. Save hour (save button) --> event handler
4. If task is in the past - color Grey --> CSS styles --> function to change style based on past, present, future
5. If task is present - color Blue      
6. If taks is future - color White      
************************************************************************
To Build:
----------
1. HTML Document:
    a. Title
    b. Table
        1. Rows (each hour)
            i. Time
            ii. Text area
            iii. Save button
    c. add link to JS file
2. JavaScript
    a. function to build scheduler Rows (function buildRows) --> loop, moment.js
    b. Set date at top of page (function showTodaysDate) --> moment.js
    c. Save button event handler (function saveRow) --> uses localstorage
    d. Change row styles (function updateRowStyle) --> moment.js
        i. on page load, check current time (hour) against rows in scheduler
        ii. update style for those that are past hours, present hour, future hours
3. CSS 
    a. styles already exist (past, present, future)