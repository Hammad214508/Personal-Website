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
         {
             title:"Intrusion detection system",
             description:
                 "This program is an intrusion detection system that produces a report of all the "+
                 "malicious activity detected when the program exits. This includes SYN attack detection, "+
                 "ARP poisoning attack and blacklisted URL detection.",
             tools:"C",
             link:"Projects/intrusion_detection.html"
         },
         {
             title:"Snake Game for Mathematics Revision",
             description:
                  "I developed a snake game (just like Nokia phone game, but with many more features) for practising mathematics, "+
                   "making it fun and a learning method.",
             tools:"Python, Pygame, SQL",
             link:"Projects/snake_game.html"
         },
         {
             title:"Mastermind",
             description:
                  "A Haskell console program that simulates a player vs computer game of the board-game Mastermind. The computer was "+
                  "made to solve a game in 5 moves or less utilising Knuth's mastermind algorithm. This project is my first using a "+
                  "functional programming language.",
             tools:"Haskell",
             link:"Projects/mastermind.html"
         },
         {
             title:"Robot Arm",
             description:
                 "The aim of this project was to control the robot arm using C programming language, and solve "+
                 "the ”Tower of Hanoi” problem. In order to solve the problem, a solution algorithm was first designed "+
                 "and then implemented in C.",
             tools:"C",
             link:"Projects/robot_arm.html"
         },
         {
             title:"Robot Maze",
             description:
                   "Programmed a controller for a robot in a maze which can detect adjacent cells in the maze and uses its current position "+
                   "and state to determine the direction it will move. Improved it by using data from the first run to traverse the maze more efficiently "+
                   "the second time.",
             tools:"Java",
             link:"Projects/robot_maze.html"
         },
         {
             title:"Timetable Scheduler",
             description:
                  "The goal of this project is to generate a timetable for a week of lectures and labs. A set of tutors and a set of modules are given, "+
                  "a tutor has a list of topics which represents its expertise and a module has as list of topics it covers. "+
                  "This was extended so that it produces timtables that will result with the lowest cost.",
             tools:"Java",
             link:"Projects/timetable.html"
         },
         {
             title:"Witter",
             description:
                  "Implemented various data structures to store Users, Weets and Followers for a fictional Twitter clone called 'Witter'. They were designed "+
                  "to optimally perform some tasks, e.g. finding the common followers, the trending weets, most popular users.",
             tools:"Java",
             link:"Projects/witter.html"
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
