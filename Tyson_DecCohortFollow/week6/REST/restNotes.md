## REST
(RE)presentational (S)tate (T)ransfer

A software architecture style for creating scalable web services, that make resources available to clients.

REST is NOT: a specific tool, technology, library, or standardized protocol.

REST is like art: you can't say an API is/isn't REST, but it might be more/less RESTful.

most basic concept in REST is a RESOURCE 
resources can be singletons: /api/v2/users/1234  api of our site/version of the api/go to users/ then a specific user (user id)
resources can be collections: /api/v2/users

resources can be queried or modified using HTTP verbs

REST APIs should return JSON data.

RESTful APIs are stateless
server does not keep track of clients in between one request and the next clients must supply all relevant information that the server needs to respond to the request.

REST is the most poorly understood. So if you want to impress people that you know your stuff, this is what is important.

RESTful URLs contain NOUNS, not VERBS

CRUD - IS NOT REST. Related and look similar 
Create, Read, Update, Delete 4 different operations you can preform on data.
Certain HTTP methods are TYPICALLY used for certain operations, but not always.


Safe 

A SAFE request has no impact on the server state, whether that request is sent onece, many times, or not at all.


GET - Provides a read only access to a resource.

PUT - Used to create a new resource.

DELETE - Used to remove a resource.

POST - Used to update a existing resource or create a new resource.

OPTIONS - Used to get the supported operations on a resource.




RFC- request for comments.

#IDOMPOTENCE

If an action is IDEMPOTENT, then performing that action 1 time will have the same effect as performing that action many times.

#GET - is defined as SAFE and IDEMPONTENT,

GET /api/v2/users/432 
GET /api/v2/users

#PUT - is defined as IDEMPOTNET - sending one PUT request impacts the server state, but sending multiple identical PUT requests will not have any additional effects. Commonly, PUT request are used for updating data.

PUT /api/v2/users/234 - {name: 'jeff'} ---- This is an example of safe and IDEMPOTENCY.

DELETE - is defined as IDEMPOTENT

DELETE /api/v2/users/234 


## POST - neither SAFE or IDEMPOTENT - each and every POST request can potentially impact the server state.
what type of request would you make if you wanted create?
POST - /api/v2/users - {name: 'Steve'}

what type of request would you make if you wanted to view your current account balance?
GET - /api/v2/accounts/345?fields=balance.

what type of request would you make if you wanted to view all my recent transactions?
GET - /api/v2/accounts/345/transactions

what type of request would you make if you wanted to change your home address?
PUT - /api/v2/user/645/ - {address: "123 fake street"}

what type of request would you make if you wanted to create a specific user?
PUT - /api/v2/users/987 - {name: "Steve"} 

make a deposit
POST - /api/v2/accounts/765/{ action:"deposit", amount:"400"}  NOT IDEMPOTENT because if you preform once what happens? $400 added to your account. What if you send this request again or duplicate requests? Another $400 will be submitted.


HTTP response codes

A RESTful API should send meaningful HTTP response codes to tell the client the result of their request.

#1XX - "Informational"

#2XX - "Good stuff"
200- OK.
201- Created.
204 - No content.

#3XX - "Redirection"
302 - Resource moved.
304- Not modified. This resource hasn't changed since you cached it, so just use your cached version instead of downloading the same data again.

#4XX "Client Errors"
400- Bad request. The server can't process this because it's not even valid HTTP.
403- Forbidden. (We understand what your asking for but you don't have permission/authorization for this request)
404- Not found.

#5XX  "Server Error"
500 Unknown Error (generic server error)

HATEOAS (Hypermedia as the engine of application state)

An API that abides by HATEOAS should repsond to every request with information about how to continue exploring the API.

CACHING
    A RESTful API should give clients clues about whether they should cache resonses from the server. For exampl, if a client requests data about the weather in LA RIGHT NOW, the server should tell the client not to cache that data, because it will change every time it is requested. On the other hand, if a client requests the weather in LA from a specific day, the server should tell the client to cache that data foreverm because it will never change.

When to use REST?
    Use REST to make resources available to clients.
    Not all HTTP verbs make sense for every resource
        - you don't want random users sending DELETE requests to random resources.
        - depending on how abstract our resources are, not all HTTP verbs will make sense.


DROPBOX 
   GET - api.dropbox.com/delta?foo=bar&duration=1month - this route is SAFE and IDEMPOTENT. It only request information about how your data has changed, but doesn't actually change data. However,
    it required too many parameters, so it was hard to fit them all in the query string.

    REST purists adovated that dropbox use the REPORT method. REPORT, like GET is defined as SAFE. However, unlike GET, REPORT requests can have bodies. 

    POST - Totally defies RESTful principles in this case, but with a little documentation, it's still easier for most developers to understand than using REPORT.







