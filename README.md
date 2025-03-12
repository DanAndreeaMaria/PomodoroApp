# PomodoroApp #

This **Pomodoro App** is a simple time management tool that helps users focus on tasks using the Pomodoro technique. It provides customizable timer options and an intuitive interface to start, pause and reset sessions.

## Features

  * Choose between 10 min, 15 min or 25 min work sessions
  * Visual timer countdown
  * Start, pause and reset functionality
  * Audio notification when the timer reaches 00:00

## Technologies used

  * **HTML5:** for structure
  * **CSS:** for styling
  * **JavaScript:** for functionality

## Usage

  * Open ```index.html``` in a web browser
  * Click on a time button (10, 15 or 25 minutes) to set the session length
  * Press **START** to begin the countdown
  * Use **PAUSE** to temporarily stop the timer
  * Use **RESET** to reset timer to the selected session length

## File structure

  * ```index.html``` - The main structure of the app
  * ```style.css``` - Styles for the app layout and design
  * ```script.js``` - JavaScript logic for timer functionality
  * ```start-bell.wav``` - Sound played when the timer reaches zero

## How it works

  * The timer starts counting down when the **START** button is clicked
  * The countdown updates every second using ```setInterval()```
  * When the timer reaches **00:00** an audio notification plays
  * The **PAUSE** button stops the countdown without resetting it
  * The **RESET** button restores the timer to the originally selected time

