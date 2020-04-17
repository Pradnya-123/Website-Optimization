Website Optimization version 3.0 11/18/2015

PROJECT LINK
-------------------
Check out the project by clicking the following link!

http://pradnya-123.github.io/Website-Optimization/



PROJECT DESCRIPTION
--------------------
A) To achieve PageSpeed score above 90
B) To remove jank and run website at 60 frames per second

optimized provided website with a number of optimization- and performance-related issues so that it achieved a target PageSpeed score and runs at 60 frames per second.


--------------------
Installing
--------------------

- Needs browser to run the application.
- Can see the output by double clicking on index.html
- index.html can be opened with any browser on any device.
- To edit needs editor like sublime text, notepad++ etc.
- for testing chrome dev tools is preferred.
- To use gulp need to install gulp globally on machine
- Gulp will require node.js which can be downloaded from : https://nodejs.org/en/
- Type in this in command prompt : npm install and then npm install -g gulp
- Go to root directory containing sourceCode and productionCode through terminal
- Now type following commands one by one:
	 - npm install gulp --save-dev
	 - npm install --save-dev gulp-uglify
	 - npm install --save-dev gulp-concat
	 - npm install --save-dev gulp-imagemin
	 - npm install --save-dev gulp-minify-css
	 - npm install --save-dev gulp-minify-html
	 - npm install --save-dev gulp-rename
	 - npm install --save-dev gulp-sourcemaps
- Production code folder contains optimized, compressed images and files using gulp.
- Production code- gzip folder will give better score
- But it requires server configuration to deploy
- Server configurations can be found at https://github.com/h5bp/server-configs
 
--------------------------------
Steps taken to achieve target
--------------------------------
A)
- Used http://www.willpeavy.com/minifier/ tool to minify CSS, HTML and JavaScript
- optimized images
- Reduced server response time
- Prioritized visible content
- Enabled compression using gzip
- Used Async tag for script
- Added scripts at the end
- Eliminated renderblocking JavaScript and CSS in the above fold content
- Added style.css through script
- added media tag to css links
- created new css for only screen called as screen.css
- Inlined css
- ngrok to host website
- Google PageSpeed Insights to check score
- Google Chrome Canary to test the file.
- Chrome Dev Tools
- Used Gulp to minify, conatenate, compress images.

B)
- Changed the for loop for switching size of pizza
- Used transform to change size
- Added event listener for scroll
- background pizzas loop changed
- scripts at the end of html
- inlined css

--------------------------------
WHAT'S INCLUDED
--------------------------------

A) css
	1) style.css
		- css file for index.html.

B) img
	- Consists of images used in index.html

C) js
	- contains javascript code that handles functionality

D) views
	- pizza.html
		- contains pizza menu
	- js
		- main.js, javascript for pizza menu
	- images
		- Consists of images used in pizza.html
	- css 
		- css file for pizza.html

E) index.html
	- Browser creates DOM tree from this html file.
	- Displays web contents by scripting, rendering etc.

F) readme.txt
	- States Overall description of project

----------------------------------------------------
UPDATES IN THIS VERSION
----------------------------------------------------
- changed back slider ux
- removed declaration of variables from for loop
- used get ElementsByClassName instead of querySelectorAll
- removed . and # while using JavaScript API calls
- Updated Readme
=============================================================================================================
