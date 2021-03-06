$(document).ready(function(){

    $.fn.month_template = function(month, leetcode_url, github_url){
        var monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1)
        return (
            '<div class="month-data container-fluid" id="'+month+'_data">'+
            '    <p style="font-size:25px"><strong>'+monthCapitalized+'</strong></p>'+
            '    <div class="row p-4 bottom-buffer">'+
            '        <div class="col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-4">'+
            '            <a href="'+leetcode_url+'" style="background-color:black;">'+
            '                <button class="btn btn-primary">'+
            '                    <img src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/LeetCode_nav.4d940ca72.png" height="20px" alt="LeetCode">'+
            '                </button>'+
            '            </a>'+
            '        </div>'+
            '        <div class="col-xl-1 col-lg-1 col-md-2 col-sm-4 col-xs-4">'+
            '             <a href="'+github_url+'" class="btn btn-primary btn-colour">'+
            '                 <i class="fa fa-github-square"></i> GitHub'+
            '             </a>'+
            '        </div>'+
            '    </div>'+
            '    <h4>Problems solved:</h4>'+
            '    <div id="'+month+'_problems" class="problems-font bottom-buffer"></div>'+
            '</div>'
        )
    }

    var parent = $("#main_leetcode");
    parent.append($.fn.month_template("April", "https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/", "https://github.com/Hammad214508/Quarantine-Coding/tree/master/30-Day-LeetCoding-Challenge/April"))
    parent.append($.fn.month_template("May", "https://leetcode.com/explore/featured/card/may-leetcoding-challenge/", "https://github.com/Hammad214508/Quarantine-Coding/tree/master/30-Day-LeetCoding-Challenge/May"));
    parent.append($.fn.month_template("June", "https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/", "https://github.com/Hammad214508/Quarantine-Coding/tree/master/30-Day-LeetCoding-Challenge/June"));
    parent.append($.fn.month_template("July", "https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/", "https://github.com/Hammad214508/Quarantine-Coding/tree/master/30-Day-LeetCoding-Challenge/July"));
    parent.append($.fn.month_template("August", "https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/", "https://github.com/Hammad214508/Quarantine-Coding/tree/master/30-Day-LeetCoding-Challenge/August"));
    parent.append($.fn.month_template("September", "https://leetcode.com/explore/featured/card/september-leetcoding-challenge/", "https://github.com/Hammad214508/Quarantine-Coding/tree/master/30-Day-LeetCoding-Challenge/September"));

    $("#April_data").hide();
    $("#May_data").hide();
    $("#June_data").hide();
    $("#July_data").hide();
    $("#August_data").hide();
    $("#September_data").hide();


    var size = 3;
    var april_rows = []
    var may_rows = []
    var june_rows = []
    var july_rows = []
    var august_rows = []
    var september_rows = []

    $.fn.splitProblems = function(){
        while (April.length > 0)
            april_rows.push(April.splice(0, size));

        while (May.length > 0)
            may_rows.push(May.splice(0, size));

        while (June.length > 0)
            june_rows.push(June.splice(0, size));

        while (July.length > 0)
            july_rows.push(July.splice(0, size));

        while (August.length > 0)
            august_rows.push(August.splice(0, size));

        while (September.length > 0)
            september_rows.push(September.splice(0, size));
    }


    $("#month").change(function(){
        month = $(this).children("option:selected").val();

        $(".month-data").hide();
        $("#"+month+"_data").show();
        if (month == "April"){
            month_row = april_rows;
        }
        else if (month == "May") {
            month_row = may_rows;
        }
        else if (month == "June"){
            month_row = june_rows;
        }
        else if (month == "July"){
            month_row = july_rows;
        }
        else if (month == "August"){
            month_row = august_rows;
        }
        else if (month == "September"){
            month_row = september_rows;
        }

        $("#"+month+"_problems").empty()
        for(var row in month_row){
            $("#"+month+"_problems").append($.fn.projects_row(month_row[row]));
        }
    });


    $.fn.projects_row = function(row){
        var first = row[0] ? row[0] : "";
        var second = row[1] ? row[1] : "";
        var third = row[2] ? row[2] : "";
        return (
        '<div class="row">'+
        '    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 top-buffer-sm">'+
                first +
        '    </div>'+
        '    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 top-buffer-sm">'+
                second +
        '    </div>'+
        '    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 top-buffer-sm">'+
                third +
        '    </div>'+
        '</div>'
        );
    }


    April =
    [
        "Day 1 - Single Number",
        "Day 2 - Happy Number",
        "Day 3 - Maximum Subarray",
        "Day 4 - Move Zeros",
        "Day 5 - Best Time to Buy and Sell Stock II",
        "Day 6 - Group Anagrams",
        "Day 7 - Counting Elements",
        "Day 8 - Middle of the Linked List",
        "Day 9 - Backspace String Compare",
        "Day 10 - Min Stack",
        "Day 11 - Diameter of Binary Tree",
        "Day 12 - Last Stone Weight",
        "Day 13 - Contiguous Array",
        "Day 14 - Perform String Shifts",
        "Day 15 - Product of Array Except Self",
        "Day 16 - Valid Parenthesis String",
        "Day 17 - Number of Islands",
        "Day 18 - Minimum Path Sum",
        "Day 19 - Search in Rotated Sorted Array",
        "Day 20 - Construct Binary Search Tree from Preorder Traversal",
        "Day 21 - Leftmost Column with at Least a One",
        "Day 22 - Subarray Sum Equals K",
        "Day 23 - Bitwise AND of Numbers Range",
        "Day 24 - LRU Cache",
        "Day 25 - Jump Game",
        "Day 26 - Longest Common Subsequence",
        "Day 27 - Maximal Square",
        "Day 28 - First Unique Number",
        "Day 29 - Binary Tree Maximum Path Sum",
        "Day 30 - Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree"
    ];

    May =
    [
        "Day 1 - First Bad Version",
        "Day 2 - Jewels and Stones",
        "Day 3 - Ransom Note",
        "Day 4 - Number Complement",
        "Day 5 - First Unique Character in a String",
        "Day 6 - Majority Element",
        "Day 7 - Cousins in Binary Tree",
        "Day 8 - Check If It Is a Straight Line",
        "Day 9 - Valid Perfect Square",
        "Day 10 - Find the Town Judge",
        "Day 11 - Flood Fill",
        "Day 12 - Single Element in a Sorted Array",
        "Day 13 - Remove K Digits",
        "Day 14 - Implement Trie (Prefix Tree)",
        "Day 15 - Maximum Sum Circular Subarray",
        "Day 16 - Odd Even Linked List",
        "Day 17 - Find All Anagrams in a String",
        "Day 18 - Permutaion in String",
        "Day 19 - Online Stock Span",
        "Day 20 - Kth Smallest Element in a BST",
        "Day 21 - Count Square Submatrices with All Ones",
        "Day 22 - Sort Characters By Frequency",
        "Day 23 - Interval List Intersections",
        "Day 24 - Construct Binary Search Tree from Preorder Traversal",
        "Day 25 - Uncrossed Lines",
        "Day 26 - Contiguous Array",
        "Day 27 - Possible Bipartition",
        "Day 28 - Counting Bits",
        "Day 29 - Course Schedule",
        "Day 30 - K Closest Points to Origin",
        "Day 31 - Edit Distance"
    ];

    June =
    [
        "Day 1 - Invert Binary Tree",
        "Day 2 - Delete Node in a Linked List",
        "Day 3 - Two City Scheduling",
        "Day 4 - Reverse String",
        "Day 5 - Random Pick with Weight",
        "Day 6 - Queue Reconstruction by Height",
        "Day 7 - Coin Change 2",
        "Day 8 - Power of Two",
        "Day 9 - Is Subsequence",
        "Day 10 - Search Insert Position",
        "Day 11 - Sort Colours",
        "Day 12 - Insert Delete GetRandom O(1)",
        "Day 13 - Largest Divisible Subset",
        "Day 14 - Cheapest Flights Within K Stops",
        "Day 15 - Serach in a Binary Tree",
        "Day 16 - Validate IP Address",
        "Day 17 - Surrounded Regions",
        "Day 18 - H-Index II",
        "Day 19 - Longest Duplicate Substring",
        "Day 20 - Permutation Sequence",
        "Day 21 - Dungeon Game",
        "Day 22 - Single Number II",
        "Day 23 - Count Complete Binary Tree Nodes",
        "Day 24 - Unique Binary Search Trees",
        "Day 25 - Find the Duplicate Number",
        "Day 26 - Sum Root to Leaf Numbers",
        "Day 27 - Perfect Squares",
        "Day 28 - Reconstruct Itinerary",
        "Day 29 - Unique Paths",
        "Day 30 - Word Seach II"
    ];

    July =
    [
        "Day 1 - Arranging Coins",
        "Day 2 - Binary Tree Level Order Traversal II",
        "Day 3 - Prison Cells After N Days",
        "Day 4 - Ugly Number II",
        "Day 5 - Hamming Distance",
        "Day 6 - Plus One",
        "Day 7 - Island Perimeter",
        "Day 8 - Three Sum",
        "Day 9 - Maximum Width of Binary Tree",
        "Day 10 - Flatten a Multilevel Doubly Linked List",
        "Day 11 - Subsets",
        "Day 12 - Reverse Bits",
        "Day 13 - Same Tree",
        "Day 14 - Angle Between Hands of a Clock",
        "Day 15 - Reverse Words in a String",
        "Day 16 - Pow(x, n)",
        "Day 17 - Top K Frequent Elements",
        "Day 18 - Course Schedule II",
        "Day 19 - Add Binary",
        "Day 20 - Remove Linked List Elements",
        "Day 21 - Word Search",
        "Day 22 - Binary Tree Ziz Zag Level Order Traversal",
        "Day 23 - Single Number III",
        "Day 24 - All Paths From Source to Target",
        "Day 25 - Find Minimum in Rotated Sorted Array II",
        "Day 26 - Add Digits",
        "Day 27 - Construct Binary Tree from Inorder and Postorder Traversal",
        "Day 28 - Task Scheduler",
        "Day 29 - Best Time to Buy and Sell Stock with Cooldown",
        "Day 30 - Word Break II",
        "Day 31 - Climbing Stairs"
    ]

    August =
    [
        "Day 1 - Detect Capital",
        "Day 2 - Design HashSet",
        "Day 3 - Valid Palindrome",
        "Day 4 - Power of Four",
        "Day 5 - Add and Search Word - Data structure design",
        "Day 6 - Find All Duplicates in an Array",
        "Day 7 - Vertical Order Traversal of a Binary Tree",
        "Day 8 - Path Sum III",
        "Day 9 - Rotting Oranges",
        "Day 10 - Excel Sheet Column Number",
        "Day 11 - H-Index",
        "Day 12 - Pascal's Triangle II",
        "Day 13 - Iterator for Combination",
        "Day 14 - Longest Palindrome",
        "Day 15 - Non-overlapping Intervals",
        "Day 16 - Best Time to Buy and Sell Stock III",
        "Day 17 - Distribute Candies to People",
        "Day 18 - Numbers With Same Consecutive Differences",
        "Day 19 - Goat Latin",
        "Day 20 - Reorder List",
        "Day 21 - Sort Array By Parity",
        "Day 22 - Random Point in Non-overlapping Rectangles",
        "Day 23 - Stream of Characters",
        "Day 24 - Sum of Left Leaves",
        "Day 25 - Minimum Cost For Tickets",
        "Day 26 - Fizz Buzz",
        "Day 27 - Find Right Interval",
        "Day 28 - Implement Rand10() Using Rand7()",
        "Day 29 - Pancake Sorting",
        "Day 30 - Largest Component Size by Common Factor",
        "Day 31 - Edit Distance"
    ]

    September =
    [   "Day 1 - Largest Time for Given Digits",
        "Day 2 - Contains Duplicate III",
        "Day 3 - Repeated Substring Pattern",
        "Day 4 - Partition Labels",
        "Day 5 - All Elements in Two Binary Search Trees",
        "Day 6 - Image Overlap",
        "Day 7 - Word Pattern",
        "Day 8 - Sum of Root To Leaf Binary Numbers",
        "Day 9 - Compare Version Numbers",
        "Day 10 - Bulls and Cows",
        "Day 11 - Maximum Product Subarray",
        "Day 12 - Combination Sum III",
        "Day 13 - Insert Interval",
        "Day 14 - House Robber"
    ]

    $.fn.splitProblems();
    $("#month").trigger('change');

});
