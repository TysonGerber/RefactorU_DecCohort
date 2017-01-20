#SQL             NO SQL              OOP

Table           Collection         Class
Row             Document           Object
Column          Field              Property

ADD STEVE'S NOTES HERE.....
Mongod - Mongo server 
Mongo - Mongo shell so we can connect a command line terminal to the server
type ps -A | grep Mongo
show dbs
help - list of all the commands you can run

In mongo shell type 
use myDb - creates new database
show collections - show all my collections in my database

This created a collection in our database
db.getCollection('contactInfo').insert({
... fname: 'joe'
... ,
... lname: 'doe'
... ,
... phone: '303-555-5555'
... })

if you want to add another contact to your db:
db['conactInfo'].insert({
    fname: 'joe', 
    lname: 'flow', 
    phone: '303-333-3333'
    })

db.contactInfo.insert({
    fname: 'rob', 
    lname: 'smith', 
    phone: '720-111-1111'
    },
    {
    fname: 'Tyson', 
    lname: 'Gerber', 
    phone: '720-435-5555'
    },
    )

    db.contactInfo.find() //this finds all contacts
    db.contactInfo.find({fname: 'rob'}) // finds all contacts with the name of Rob
    db.contactInfo.find({fname: 'rob'}).pretty()
    db.contactInfo.update({fname: 'rob', lname:'smith'}, {lname:'shmoe', phone: '333-333-3333'}) IF YOU DO NOT PUT IN THE fname: or state what the fname is, it will erase it. 

update Property:
db.contactInfo.update({}, {$set:{state:'CO'}, {multi:true})
db.contactInfo.update({zipcode:84321}, {$set:{state:'Utah'}}, {multi:true})
db.contactInfo.update({phone: /303.*/}, {$set:{state:'Colorado'}}, {multi:true}).pretty //this says all phone with the zip code 303 add state colorado
db.contactInfo.find() 

Remove single Item:
db.contactInfo.remove({lname:'smith'}) removes entire object out of the collection

creating a new collection. //creating a new collection
db.'name you want to call the collection'.insert({})
db.quick.insert({number: '1'})
db.quick.insert({number: '1'})

remove collection //deletes the whole collection
db.'name of '
db.quick.drop() 

delete database
** MAKE SURE YOUR IN THE RIGHT DATABASE BEFORE YOU RUN COMMAND BELOW!!!***
db.dropDatabase()

HOW TO EXIT OUT OF A DATABASE:
exit


if you have 2 names that are the same then you can access it by the _id.

Go to certain database
use 'whatever database you want to go to.'
cmd t - creates a new terminal
cmd k - clears your command line
hold cmd and arrow keys - goes faster word by word

Talking about Shard
