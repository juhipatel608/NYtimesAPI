//javascript to get data from NYTimes API
//API Key = 024b8a3263ce42d7818d3c305e2f0c15

var queryURL ="http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&begin_date=20120101&end_date=20120101&api-key=024b8a3263ce42d7818d3c305e2f0c15";
   
   $.ajax({
     url: queryURL,
     method: "GET"
   }).then(function(response) {    
   
     console.log(response);

   });