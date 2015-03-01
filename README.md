# isheorshedeadyet
Is a celebrity dead yet?

Find out here: http://deadcelebritycheck.herokuapp.com/

Requires node, gulp, bower. After cloning the repo, cd into the directory and run:
```
$ npm install && bower install
```
And then run:
```
$ npm start
```
To watch css and js assets while you work, in sepearate bash tab:
```
$ gulp
```
And to build assets for deploy:
```
$ gulp build
```
If you have the heroku toolbelt and/or foreman installed, you can run locally with heroku toolbelt.
```
$ foreman start web
```
And with nodemon (restarts the server when you save the backened code):
```
$ foreman start dev
```
