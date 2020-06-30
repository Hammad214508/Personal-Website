$(document).ready(function(){
     var Projects =
     [
         {
             title:"Blog App",
             description:
                 "I developed a full-featured web application using Django framework and Python. "+
                 "It is a social media styled application where different users can post e.g. blog "+
                 "posts, twitter updates and similar posts.",
             tools:"Python, Django, SQL, HTML, CSS",
             link: "Projects/blog.html"
         },
         {
             title:"Meme Maker",
             description:
                "I developed a full-featured web application using Django framework "+
                "and Python. It is a social media styled application where different "+
                "users can post e.g. blog posts, twitter updates and similar posts.",
             tools:"Python",
             link: "https://github.com/Hammad214508/Meme-maker"

         },
         {
             title:"Database System for a Department Store",
             description:
                 "A simple meme maker application. User needs to choose a meme "+
                 "template, the position of the text and the text to dislay then the program "+
                 "will generate the meme and save it.",
             tools:"Java, JDBC, SQL",
             link:"Projects/database.html"
         },
     ];

     $.fn.get_project = function(title, description, tools, link, i){
         template =
             "<div id='project_"+i+"' class=\"col-xl-4 col-lg-4 col-md-12 col-sm-12\">"+
             "  <div class=\"white-box\" href=\""+link+"\">"+
             "      <h3>"+title+"</h3>"+
             "      <p>"+
             "           "+description+""+
             "      </p>"+
             "      <div class=\"tools\">"+
             "          <p> &lt; &gt; "+tools+"</p>"+
             "      </div>"+
             "  </div>"+
             "</div>";
         return $(template);
     };

     $.fn.add_event = function(){
         $('.white-box').on('click',function() {
           window.location.href = $(this).attr('href');
         })
         $('.white-box').hover(function(){
           $(this).css("background-color", "#DCDCDC");
           }, function(){
           $(this).css("background-color", "#FFFFFF");
         });

    };

    parent = $("#projects-container");
    var length = Projects.length;
    for(var i = 0; i < length; i++){
        if(i % 3 == 0){
            var row = $("<div class='row top-buffer'>");
            parent.append(row);
        }
        title = Projects[i]["title"];
        description = Projects[i]["description"];
        tools = Projects[i]["tools"];
        link = Projects[i]["link"];
        var proj = $.fn.get_project(title, description, tools, link, i);
        $.fn.add_event();

        row.append(proj);
    }

});
