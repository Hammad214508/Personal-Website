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
             title:"Blog App <i class=\"fa fa-github-square\"></i> <i class=\"fa fa-link\" aria-hidden=\"true\"></i>",
             description:
                 "I developed a full-featured web application using Django framework and Python. "+
                 "It is a social media styled application where different users can post e.g. blog "+
                 "posts, twitter updates and similar posts.",
             tools:"Python, Django, SQL, HTML, CSS",
             link: "https://github.com/Hammad214508/Blog-Application"
         },
         {
             title:"Meme Maker <i class=\"fa fa-github-square\"></i>",
             description:
                "I made a meme maker using Python, given a set of templates and fonts, it"+
                "can generate memes based on the user input. "+
                "A modification of this (branch on git) was used in a WhatsApp bot for a friend.",
             tools:"Python",
             link: "https://github.com/Hammad214508/Meme-maker"

         },
         {
             title:"Derivative Trade Application",
             description:
                "A prototype system that can be used to monitor derivative trade data, "+
                "worked five other course-mates which really enhanced my teamwork skills "+
                "and leadership skills as I was the project manager.",
             tools:"Python, Django, SQL, HTML, CSS",
             // link: "derivate_trade.html"
         },
         {
             title:"Restaurant and Food Recommender",
             description:
                "Web application that helps users decide where and what to eat using machine learning "+
                "techniques. Extended so that it can handle a group of users wanting to eat together.",
             tools:"Python, PHP, MySQL, jQuery, HTML & CSS",
             // link: "https://hammad214508.github.io/Hiring-Game/"
         },
         {
             title:"MiniC Compiler",
             description:
                "Developed a recursive descent parser for a subset of the C programming language. "+
                "The main components were lexing, parsing and intermediate code generation. The compiler "+
                "gave syntax and semantic errors when necessary.",
             tools:"C, C++, LLVM",
             // link: ""
         },
         {
             title:"Database System for a Department Store",
             description:
                 "Using Java along with SQL to create a department store database that was subject to sophisticated queries. "+
                 "Managing the store's inventory, orders, collections, deliveries and staff.",
             tools:"Java, JDBC, SQL",
             // link:"Projects/database.html"
         },
         {
             title:"Intrusion detection system",
             description:
                 "This program is an intrusion detection system that produces a report of all the "+
                 "malicious activity detected when the program exits. This includes SYN attack detection, "+
                 "ARP poisoning attack and blacklisted URL detection.",
             tools:"C, Python",
             // link:"Projects/intrusion_detection.html"
         },
         {
             title:"Hiring Manager Game <i class=\"fa fa-link\" aria-hidden=\"true\"></i>",
             description:
                "A simple clicking game in which you are the hiring manager and you can hire interns, software engineers or senior "+
                "engineers. Goal is to be efficient managing their cost and value. New competitive mode added",
             tools:"jQuery, HTML, CSS",
             link: "https://hammad214508.github.io/Hiring-Game/"
         },
         {
             title:"Resolution proof solver",
             description:
                   "This is a resolution theorem prover, given a propositional formula it is it converts it into "+
                   "CNF and then applies the resolution algorithm letting you know if the given formula is a tautology "+
                   "or not.",
             tools:"Prolog",
             // link:"Projects/resolution.html"
         },
         {
             title:"PLM compiler",
             description:
                   "Implement a parser (along with a lexer) that recognizes PLM programs. "+
                   "Then extended the parser to an evaluator,  PLM being a simple programming "+
                   "language that allows users to write code that computes non-negative integers.",
             tools:"JavaCC",
             // link:"Projects/compiler.html"
         },
         {
             title:"Snake Game for Mathematics Revision",
             description:
                  "Developed a snake game (Nokia phone game alike, but with many more features) with A-Level Mathematics questions, "+
                  "making it a fun learning tool for students struggling with this subject.",
             tools:"Python, Pygame, SQL",
             // link:"Projects/snake_game.html"
         },
         {
             title:"Mastermind",
             description:
                  "A Haskell console program that simulates a player vs computer game of the board-game Mastermind. The computer was "+
                  "made to solve a game in 5 moves or less utilising Knuth's mastermind algorithm. This project is my first using a "+
                  "functional programming language.",
             tools:"Haskell",
             // link:"Projects/mastermind.html"
         },
         {
             title:"Robot Arm",
             description:
                 "The aim of this project was to control the robot arm using C programming language, and solve "+
                 "the ”Tower of Hanoi” problem. In order to solve the problem, a solution algorithm was first designed "+
                 "and then implemented in C.",
             tools:"C",
             // link:"Projects/robot_arm.html"
         },
         {
             title:"Robot Maze",
             description:
                   "Programmed a controller for a robot in a maze which can detect adjacent cells in the maze and uses its current position "+
                   "and state to determine the direction it will move. Improved it by using data from the first run to traverse the maze more efficiently "+
                   "the second time.",
             tools:"Java",
             // link:"Projects/robot_maze.html"
         },
         {
             title:"Witter",
             description:
                  "Implemented various data structures to store Users, Weets and Followers for a fictional Twitter clone called 'Witter'. They were designed "+
                  "to optimally perform some tasks, e.g. finding the common followers, the trending weets, most popular users.",
             tools:"Java",
             // link:"Projects/witter.html"
         },

     ];

     $.fn.get_project = function(title, description, tools, link, i){
         template =
             "<div id='project_"+i+"' class=\"col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 bottom-buffer\">"+
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
             if ($(this).attr('href') != "undefined"){
                 // window.location.href = $(this).attr('href');
                 window.open($(this).attr('href'), '_blank');
             }
         });

         $('.white-box').hover(function(){
           $(this).css("background-color", "#DCDCDC");
           }, function(){
           $(this).css("background-color", "#FFFFFF");
         });

    };

    $.fn.get_how_many_per_row = function(){
      if (bootstrap_grid_size == "md" || bootstrap_grid_size == "sm"){
        return 2;
      }else{
        return 3;
      }
    }

    $(window).on('resize',function(){
        new_grid_size = $.fn.get_bootstrap_grid($(window).width());
        if (new_grid_size != bootstrap_grid_size){
          bootstrap_grid_size = new_grid_size;
          $.fn.render_projects();
        }
    });

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

    $.fn.render_projects();
    $.fn.add_event();

});
