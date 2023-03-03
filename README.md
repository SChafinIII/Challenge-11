# Challenge 11 - Note Taker

## User Story
The following user story is included with the project, informing on the criteria for a user.

- AS A small business owner
- I WANT to be able to write and save notes.
- SO THAT I can organize my thoughts and keep track of tasks I need to complete.

This came alongside the following acceptance criteria. 
- GIVEN a note-taking application
- WHEN I open the Note Taker
- THEN I am presented with a landing page with a link to a notes page
- WHEN I click on the link to the notes page
- THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
- WHEN I enter a new note title and the note’s text
- THEN a Save icon appears in the navigation at the top of the page
- WHEN I click on the Save icon
- THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
- WHEN I click on an existing note in the list in the left-hand column
- THEN that note appears in the right-hand column
- WHEN I click on the Write icon in the navigation at the top of the page
- THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## Version 1.0
The current application fulfills the above requirements outside of clicking to access existing notes in the left-hand column. Clicking the 'delete' icon at this time also returns an error in the developer console. Additional updates will be added over time to satisfy this criteria. 

## Usage 
1. Open terminal in VSCode
2. Run `NPM Install` 
3. Run `node server.js` 
4. View `http://localhost:3001` in web application. 

This will take you to the application once it is running on a local server using node and express. **It is to note due to lack of a Heroku account, the developer cannot deploy to Heroku at this time.**

![Open Application at Home Screen](/Develop/public/assets/express1.png)

![Open Application at Notes Screen](/Develop//public//assets/express2.png)

## MIT License 
Copyright (c) [2023] [Steven W Chafin III]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
