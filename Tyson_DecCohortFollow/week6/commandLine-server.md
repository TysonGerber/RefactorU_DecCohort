##Command Line Server commands

Property: name-value pair
Document: a record consisting of one or more properties
Collection:  group of documents
Database: group of collections 
Drop: to remove or erase a collection or database
Connect: to use a specific database in a database sever

sudo mkdir -p /data/db
sudo mongod
show collections
mongo
show collections
show dbs
Use myDb
(Cmd + K)
db.getCollection(“contactInfo”).insert({name: “Jeremy”, lname: “McCabe”})
show.collections.help()
db.contactInfo.find().update({}), $set:{state:”CO”}, {multi:true})
db.quick.drop()
les package.json
echo node_modules > .gitignore
wq (exits les)

npm init 
npm install —save express
echo node_modules > .gitignore
echo $PORT