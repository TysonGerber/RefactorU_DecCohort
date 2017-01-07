Choose One click app and MEAN 14.04. 
Size we only need the $5 a month. 
datacenter region San Francisco

Any ports over 1024 are available to use. It goes up to I think 5,000

1. Create a droplet
2. Click on One-click Apps
3. Click on MEAN on 14.04 or 16.04 (tells you the day they were created.)
4. Choose your monthly size you want.
5. Choose your location of your datacenter
6. Create.

1. In your terminal type: ssh root@'your ip address that digital ocean gave you'EXAMPLE ssh root@104.236.189.29

2. put in the password they gave you. Then you have to immediately type in a new password

cd opt
ls
shows all the node_modules, package.jsons

There are a lot of files we don't need so we can delete their MEAN stack they created. If we want then we can delete the MEAN
0. rm -rf MEAN

1. npm install will re-access your package.json files and pull down that packages you need.
2. node 'name of file' EXAMPLE: node 'app.js' (don't need the '' when you type it in.)
3. In the browser: put in ip address (from digital ocean) + whatever server your listening on. 
4. EXAMPLE:104.236.189.29:8080 (to see if your website pulls up)
5. npm install -g nodemon
6. nodemon 'name of file' EXAMPLE nodemon 'app.js'
7. npm install -g forever
8. forever start 'name of app' EXAMPLE forever start 'app.js'
9. forever list - shows us all the different commands that forever is running
10. forever --help
11. cat/root/.forever/ZDQz.log    'ZDQz.log' is a file that shows logs log file in purple.
12. foever logs 'name of file' EXAMPLE forver logs 'app.js'
13. forever stop id number or forever stopall



Nodemon - demon for node. background program in the back that runs so that we can run servers like node but restarts automatically when things change so we can see the changes


updating or make changes now

updated version:

1. git pull origin master
2. forever list
3. forever stopall; forever start 'file name'  EXAMPLE: forever stopall; forever start 'app.js'

git reset --hard (not sure what this does.)