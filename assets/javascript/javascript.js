//$(document).ready(function(){

//var youtubeAPIKey = AIzaSyC6sAc1Rkq7nUSRyGN3XmPC4UZjiLITs64;
var a =["alligator", "armadillo", "anaconda", "ardvark"];
var b =["baboon", "badger", "bat", "buffalo"];
var c =["cat", "camel", "cheetah"];
var d =["deer", "dog", "donkey", "dolphin"];
var e =["elephant", "eagle", "emu"];
var f =["fox", "flamingo", "ferret"];
var g =["gecko", "gerbil", "giraffe"];
var alphabet = [a,b,c,d,e,f,g];
// var h =[];
// var i =[];
// var j =[];
// var k =[];
// var l =[];
// var m =[];
// var n =[];
// var o =[];
// var p =[];
// var q =[];
// var r =[];
// var s =[];
// var t =[];
// var u =[];
// var v =[];
// var w =[];
// var x =[];
// var y =[];
// var z =[];


//});
$("body").on("click", ".btn", function(){
    var userClick = $(this).attr("id");
    $("#bigletter").html("<h1>"+ userClick.toUpperCase() +"</h1>");


    for(var i=0; i<alphabet.length;i++){
        if(userClick === alphabet[i][0].charAt(0)){
            $("#randomword").html("<h3>" + alphabet[i] +"</h3>");
        };

    }
    //console.log(alphabet[0][0].charAt(0));

    randomWord();
});
function randomWord(){

}