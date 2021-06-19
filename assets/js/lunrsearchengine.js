
var documents = [{
    "id": 0,
    "url": "https://blog.robopoto.com/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "https://blog.robopoto.com/about",
    "title": "About this Blog",
    "body": "I’ve spent most of my life learning and several years teaching, but I’ve long been scared to enter the space of content creation. The thought of putting myself out there is scarier than I imagined, but I was encouraged by a quote I first heard from, author of the book Daring Greatly, Brené Brown:  It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat. - Theodore Roosevelt Therefore, this blog is an opportunity for me to share my knowledge and a chance to enter the arena. I’m planning  To include articles that discuss tools, both theory and practice, in an easily consumable form.  To discuss technologies and without neglecting use cases.  To survey previous literature and summarize key findings.  To share from my experiences and work life. "
    }, {
    "id": 2,
    "url": "https://blog.robopoto.com/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "https://blog.robopoto.com/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Purpose of the Blog                              :               I’ve spent most of my life learning and several years teaching, but I’ve long been scared to enter the space of content creation. The thought. . . :                                                                                                                                                                       Roby Poteau                                18 Jun 2021                                                                                                                      All Stories:                                                                                                     Purpose of the Blog              :       I’ve spent most of my life learning and several years teaching, but I’ve long been scared to enter the space of content creation. The thought of putting myself out there. . . :                                                                               Roby Poteau                18 Jun 2021                                            "
    }, {
    "id": 4,
    "url": "https://blog.robopoto.com/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "https://blog.robopoto.com/purpose-of-the-blog/",
    "title": "Purpose of the Blog",
    "body": "2021/06/18 - I’ve spent most of my life learning and several years teaching, but I’ve long been scared to enter the space of content creation. The thought of putting myself out there is scarier than I imagined, but I was encouraged by a quote I first heard from, author of the book Daring Greatly, Brené Brown:  It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat. - Theodore Roosevelt Therefore, this blog is an opportunity for me to share my knowledge and a chance to enter the arena. I’m planning  To include articles that discuss tools, both theory and practice, in an easily consumable form.  To discuss technologies and without neglecting use cases.  To survey previous literature and summarize key findings.  To share from my experiences and work life. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});