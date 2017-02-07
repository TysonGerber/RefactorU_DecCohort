// curl (lets you (see) the url)

//curl https://xkcd.com 

//curl https://xkcd.com | grep license


var request = require('request')
var cheerio = require('cheerio') //parse html ask questions

//perform request

request('https://xkcd.com', function (err, response, html){
    if (!error && response.statusCode == 200) {
        //console.log(HTML)
        var $ = cheerio.load(html);
        console.log($())
    }
})