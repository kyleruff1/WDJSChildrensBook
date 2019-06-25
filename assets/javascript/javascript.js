//$(document).ready(function(){
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
var random;
var randomArray;
var generated;
var randomtext;

//});
$("body").on("click", ".btn", function(){
    if($(this).attr("id")=== "randomletter"){
        randomLetterClick();
    }else{
    var userClick = $(this).attr("id");
    $("#bigletter").html("<h1>"+ userClick.toUpperCase() +"</h1>");

    };
    for(var i=0; i<alphabet.length;i++){
        if(userClick === alphabet[i][0].charAt(0)){
            
            var currentWord = alphabet[i];
            random = currentWord[Math.floor(Math.random() * currentWord.length)];
            $("#randomword").html("<h3>" + random +"</h3>");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + random + "&api_key=gqvHLyAWvH6hlE0ZWRLyC37I67jzXvC7&limit=10";
    
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response){
                console.log(response.data);
        
            });
        };
    };


    function randomLetterClick(){
        randomArray = alphabet[Math.floor(Math.random() * alphabet.length)];
        generated = randomArray[0].charAt(0).toUpperCase();
        console.log(generated);
        $("#bigletter").html("<h1>" + generated +"</h1>");

        randomtext = randomArray[Math.floor(Math.random() * randomArray.length)];
        console.log(randomtext);
        $("#randomword").html("<h3>" + randomtext +"</h3>");
    };
});
