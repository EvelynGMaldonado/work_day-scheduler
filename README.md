# Third-Party APIs: Day Planner

## Table of contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Credits](#credits)
5. [Questions](#questions)

<h2 id="description"> Project Description </h2>
A data dashboard is an information management tool used to track, analyze, and display key performance indicators, metrics, and data points.
Weather Dashboard shows today's weather and a 5 day forecast. The application also displays an icon representation of the actual weather.

## Installation 
This javascript application requires the use of API's to retrieve weather data from cities, as well as local storage to retrieve any persistent data. I also used bootstrap and css to style.
The API's sites used to develop this application are:
* Open weather map.
* Nominatim open street map.

## Usage 
The weather dashboard application displays weather details depending on the users requests. In this case, there is a input form on the left side that is designeted for the user to type the city name of the weather they want to get information about. 
When the user clicks the search button, then the application will display the current weather conditions for that city, as well as city name, date, an icon representing the weather conditions, the temperature, the humidity, the wind speed and the UV index. The user will also be able to see the date, an icon that represents the weather conditions, values for temperature, wind speed and humidity for the next five days of the selected city.

## Credits 
Evelyn G Maldonado.

## Questions 
If you have any questions, please contact me at the information listed below.

* Email: evelyn.gmaldonado@gmail.com
* GitHub: [EvelynGMaldonado](https://github.com/EvelynGMaldonado)

## Extra

* The following images show the web application's appearance and functionality:

![The Weather Dashboard application displays the current weather and a 5 day forecast".](./assets/weather-dashboard.jpeg)
![The Weather Dashboard saves the previous cities".](./assets/weather-db1.jpeg)

* Link to the GitHub Repository:
[Day Planner](https://github.com/EvelynGMaldonado/weather_dashboard)

* Url to the deployed app:
[Day Planner](https://evelyngmaldonado.github.io/work_day-scheduler/)

# 05 Third-Party APIs: Work Day Scheduler

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)


## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the homework instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
