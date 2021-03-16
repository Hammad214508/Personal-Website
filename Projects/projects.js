$(document).ready(function(){
     var bootstrap_grid_size;

     $.fn.get_bootstrap_grid = function(width){
       if(width < 768){
          return "xs";
       }else if(width <= 991){
         return "sm";
       }else if(width <= 1199){
         return "md";
       }else{
         return "lg";
       }
     }

     bootstrap_grid_size = $.fn.get_bootstrap_grid($(window).width());

     var Projects =
     [
         {
             title:"Blog App <i href='https://github.com/Hammad214508/Blog-Application' class=\"fa fa-github-square project_icon \"></i> <i href=\"https://hammad-blog-app.herokuapp.com/\" class=\"fa fa-link project_icon link_icon\" aria-hidden=\"true\"></i>",
             description:
                 "Developed a full-featured web application using Django framework and Python. "+
                 "It is a social media styled application where different users can post e.g. blog "+
                 "posts, twitter updates and similar posts.",
             tools:"Python, Django, SQL, HTML, CSS",
         },
         {
             title:"Restaurant and Food Recommender <i href=\"https://github.com/Hammad214508/Restaurant-And-Food-recommender\" class=\"fa fa-github-square project_icon\"></i>",
             description:
                "Web application that helps users decide where and what to eat using machine learning "+
                "techniques such as collaborative filtering. Extended to work for a group of users wanting to eat together.",
             tools:"Python, PHP, MySQL, jQuery, HTML & CSS",
         },
         {
             title:"Shopping System <i href=\"https://github.com/Hammad214508/Shopping-System\" class=\"fa fa-github-square project_icon\"></i> <i href=\"https://eveg-1814453.000webhostapp.com/\" class=\"fa fa-link project_icon link_icon\" aria-hidden=\"true\"></i>",
             description:
                "Evaluated and redesigned the user interface for an online shopping system using "+
                "guideline based evaluation and following Nielsen's Usability Heuristics for User Interface Design.",
             tools:"PHP, Javascript, HTML, CSS",
         },
         {
             title:"Derivative Trade Application",
             description:
                "A prototype system that can be used to monitor derivative trade data, "+
                "worked five other course-mates which really enhanced my teamwork skills "+
                "and leadership skills as I was the project manager.",
             tools:"Python, Django, SQL, HTML, CSS",
         },
         {
             title:"Meme Maker <i href=\"https://github.com/Hammad214508/Meme-maker\" class=\"fa fa-github-square project_icon \"></i>",
             description:
                "Command line meme maker using Python, it "+
                "can generate memes from the user input and was developed to contribute in an open source "+
                "WhatsApp bot to make and send memes automatically from the messages.",
             tools:"Python",

         },
         {
             title:"Hiring Game <i href=\"https://github.com/Hammad214508/Hiring-Game\" class=\"fa fa-github-square project_icon\"></i> <i href=\"https://hammad214508.github.io/Hiring-Game/\" class=\"fa fa-link project_icon link_icon\" aria-hidden=\"true\"></i>",
             description:
                "A simple clicking game in which you are the hiring manager and you can hire interns, software engineers or senior "+
                "engineers. Goal is to be efficient managing their cost and value. A competitive mode is also present.",
             tools:"jQuery, HTML, CSS",
         },
         {
             title:"MiniC Compiler",
             description:
                "Developed a recursive descent parser for a subset of the C programming language. "+
                "The main components were lexing, parsing and intermediate code generation. The compiler "+
                "gave syntax and semantic errors when necessary.",
             tools:"C, C++, LLVM",
         },
         {
             title:"Database System for a Department Store",
             description:
                 "Using Java along with SQL to create a department store database that was subject to sophisticated queries. "+
                 "Managing the store's inventory, orders, collections, deliveries and staff.",
             tools:"Java, JDBC, SQL",
         },
         {
             title:"Intrusion detection system",
             description:
                 "This program is an intrusion detection system that produces a report of all the "+
                 "malicious activity detected when the program exits. This includes SYN attack detection, "+
                 "ARP poisoning attack and blacklisted URL detection.",
             tools:"C, Python",
         },
         {
             title:"Resolution proof solver",
             description:
                   "This is a resolution theorem prover, given a propositional formula it is it converts it into "+
                   "CNF and then applies the resolution algorithm letting you know if the given formula is a tautology "+
                   "or not.",
             tools:"Prolog",
         },
         {
             title:"PLM compiler",
             description:
                   "Implement a parser (along with a lexer) that recognizes PLM programs. "+
                   "Then extended the parser to an evaluator,  PLM being a simple programming "+
                   "language that allows users to write code that computes non-negative integers.",
             tools:"JavaCC",
         },
         {
             title:"Snake Game for Mathematics Revision <i href=\"https://drive.google.com/file/d/1sIUKzm1TrzdEOAfWT9f1_xCgQLIhv-D2/view?usp=sharing\" class=\"fa fa-file-pdf-o project_icon\"></i>",
             description:
                  "Developed a snake game (Nokia phone game alike, but with many more features) with A-Level Mathematics questions, "+
                  "making it a fun learning tool for students struggling with this subject.",
             tools:"Python, Pygame, SQL",
         },
         {
             title:"Mastermind",
             description:
                  "A Haskell console program that simulates a player vs computer game of the board-game Mastermind. The computer can "+
                  "solve a game in 5 moves or less utilising Knuth's mastermind algorithm",
             tools:"Haskell",
         },
         {
             title:"Robot Arm",
             description:
                 "The aim of this project was to control the robot arm using C programming language, and solve "+
                 "the ”Tower of Hanoi” problem. In order to solve the problem, a solution algorithm was first designed "+
                 "and then implemented in C.",
             tools:"C",
         },
         {
             title:"Robot Maze",
             description:
                   "Programmed a controller for a robot in a maze which can detect adjacent cells in the maze and uses its current position "+
                   "and state to determine the direction it will move. Improved it by using data from the first run to traverse the maze more efficiently "+
                   "the second time.",
             tools:"Java",
         },
         {
             title:"Witter",
             description:
                  "Implemented various data structures to store Users, Weets and Followers for a fictional Twitter clone called 'Witter'. They were designed "+
                  "to optimally perform some tasks, e.g. finding the common followers, the trending weets, most popular users.",
             tools:"Java",
         },

     ];

     $.fn.get_project = function(title, description, tools, link, i){
         template =
             "<div id='project_"+i+"' class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 bottom-buffer\">"+
             "  <div class=\"white-box\" href=\""+link+"\">"+
             "      <h3 style=\"margin-top:10px;\">"+title+"</h3>"+
             "      <p style=\"height:6.9em; overflow-y: scroll;\">"+
             "           "+description+""+
             "      </p>"+
             "      <div class=\"tools\" style='position: absolute; bottom: 10px;'>"+
             "          <p> &lt; &gt; "+tools+"</p>"+
             "      </div>"+
             "  </div>"+
             "</div>";
         return $(template);
     };


     $.fn.add_event = function(){

         $('.project_icon').on('click',function() {
             if ($(this).attr('href') != "undefined"){
                 window.open($(this).attr('href'), '_blank');
             }
         });
    };

    $.fn.get_how_many_per_row = function(){
      if (bootstrap_grid_size == "md" || bootstrap_grid_size == "sm"){
        return 2;
      }else{
        return 3;
      }
    }


    $.fn.render_projects = function(){
      parent = $("#projects-container");
      parent.empty();
      var length = Projects.length;
      var per_row = $.fn.get_how_many_per_row();
      for(var i = 0; i < length; i++){
          if (i % per_row == 0){
              var row = $("<div class='row'>");
              parent.append(row);
          }
          title = Projects[i]["title"];
          description = Projects[i]["description"];
          tools = Projects[i]["tools"];
          link = Projects[i]["link"];
          var proj = $.fn.get_project(title, description, tools, link, i);
          parent.append(proj);
      }
    }




    var pageready = (function(){
        var thispage = {};
        thispage.init = function(){

          $(window).on('resize',function(){
              new_grid_size = $.fn.get_bootstrap_grid($(window).width());
              if (new_grid_size != bootstrap_grid_size){
                bootstrap_grid_size = new_grid_size;
                $.fn.render_projects();
              }
          });

          $.fn.render_projects();
          $.fn.add_event();
        };
        return thispage;
    })();

    pageready.init();

});
