$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/search?part=id&q=surf&type=video&key=AIzaSyC87Q6MWVTUKC-ycJOXwWF6l4FXrg2ikxQ", function(data) {
        // console.log(data);
        for (var i = 0; i < data.items.length; i++) {
            // console.log(data.items[i].id.videoId)
            var video = '<iframe width="196" height="110" src="https://www.youtube.com/embed/' + data.items[i].id.videoId + '"> </iframe>'
            $(".youTube").append(video)

        }
    })
    $.get("http://content.guardianapis.com/search?q=surf&format=json&order-by=relevance&api-key=298b3cb0-43ef-4213-8225-606e2b554039", function(news) {
        console.log(news);
        for (var i = 0; i < news.response.results.length; i++) {
            var newItem = "<div class='new'> <a target='_blank' href='" + news.response.results[i].webUrl + "'> " + news.response.results[i].webTitle + "</a></div>"
            $(".guardian").append(newItem);
            console.log(news.response.results[i].webTitle)

        }
    })
})



//http://content.guardianapis.com/search?q=surf&format=json&order-by=relevance

// 298b3cb0-43ef-4213-8225-606e2b554039
