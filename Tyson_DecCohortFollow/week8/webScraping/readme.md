Web Scraping

clients
    browsers
    desktop/mobile apps
    other servers
    command-line utilities
    IoT devices (of things)

    Webscraping is the act of requesting HTML from a website for some purpose other than displaying it in a browsers

    We might scrape data from a website to access their data when they don't have a public API.

2 ways to scrape a website:

Simplest way: request HTML. parse HTML as a string, do whatever you want with it.

Better way: browser automation traditionally done with Selenium. Selenium can drive other browsers, such as chrome or firefox.

A more friendly, modern alternative is nightmare.js

You need to install nightmare both globally and locally.


## Installing nightmare on DO: digital ocean

1. ssh root@193.333.333.333 (your droplet ip address)

2. sudo apt-get update

3. npm install -g electron-prebuilt  or npm install -g electron

#get additional dependencies as instructed here: https://github.com/electron/electron/blob/master/docs/development/build-instructions-linux.md below is the example:

4. sudo apt-get install build-essential clang libdbus-1-dev libgtk2.0-dev \
                       libnotify-dev libgnome-keyring-dev libgconf2-dev \
                       libasound2-dev libcap-dev libcups2-dev libxtst-dev \
                       libxss1 libnss3-dev gcc-multilib g++-multilib curl \
                       gperf bison

5. apt-get install xvfb (pretend that your computer has graphical power.Because your droplet doesn't have a graphics card so it makes it appear that it does.)

6. npm install nightmare on droplet.  
7. xvfb node file (ex:nightmare.js)

put your nightmare file inside your droplet.

scp file root@193.333.333.333 (your droplet ip address)  //copies files from one machine to a remote machine

mv file ~

run node file (ex:nightmare.js)


ETHICAL ISSUES

1. craigslist (e.g. craigslist) forbid scraping in their terms of service.)In some cases, it may be illegal.
2. If a web server is not particuallry robust, scraping it too quickly may cause this site to crash. This is called Denial of Service (DoS).


SSH KEYS

 ssh-keygen -t rsa

 
 .pub you put on your droplet. and accesss your sshkey on commandline use your private key which is without 
