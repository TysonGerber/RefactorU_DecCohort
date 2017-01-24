
http://www.publicLibrary.gov/book?title=bible
app.get('/book')

## Today's example
request object
{
    method: 'GET',
    protocol: 'http',
    hostname: 'domain name',    //www.publicLibrary.gov
    port: '8080',
    path: '/books',
    query:{
        title: 'bible'
    }
}
##
Speaking 'restfully' the method will be a verb(like get, post,delete) and the path will be a noun.




## SERVER JS
        
        Public          Controller        Models  
            HTML
                index.HTML