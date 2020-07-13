$(document).ready(function(){

    $("#april_data").hide();
    $("#may_data").hide();
    $("#june_data").hide();
    $("#july_data").hide();
    var size = 3;
    var april_rows = []
    var may_rows = []

    $.fn.splitProblems = function(){
        while (April.length > 0)
            april_rows.push(April.splice(0, size));

        while (May.length > 0)
            may_rows.push(May.splice(0, size));
    }



    $(".month").on('click', function(){
        var month = $(this)[0].id;
        $(".month-data").hide();
        $("#"+month+"_data").show();
        if (month == "april"){
            month_row = april_rows;
        }
        else if (month == "may") {
            month_row = may_rows;
        }

        for(var row in month_row){
            $("#"+month+"_problems").append($.fn.projects_row(month_row[row]));
            $("#"+month+"_problems").append("<br>")
        }
    });

    $.fn.projects_row = function(row){
        var first = row[0] ? row[0] : "";
        var second = row[1] ? row[1] : "";
        var third = row[2] ? row[2] : "";
        return (
        '<div class="row">'+
        '    <div class="col-xl-4 col-lg4 col-md-4 col-sm-4">'+
                first +
        '    </div>'+
        '    <div class="col-xl-4 col-lg4 col-md-4 col-sm-4">'+
                second +
        '    </div>'+
        '    <div class="col-xl-4 col-lg4 col-md-4 col-sm-4">'+
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

    $.fn.splitProblems();

});
