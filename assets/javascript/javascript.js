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
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + randomtext + "&api_key=gqvHLyAWvH6hlE0ZWRLyC37I67jzXvC7&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response.data);
            $("#player").html("<img src=" + response.data[0].images.fixed_height.url + ">");
        });
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
                $("#player").html("<img src=" + response.data[0].images.fixed_height.url + ">");
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

// youtube api key = AIzaSyBYFrpVJlSShJgHVOCjDF2-NUE-VuoEOjk


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBmuHrb-UJHbNvtig-TS0Gtr8EvtRC4ZMk",
authDomain: "wdjs-project1.firebaseapp.com",
databaseURL: "https://wdjs-project1.firebaseio.com",
projectId: "wdjs-project1",
storageBucket: "wdjs-project1.appspot.com",
messagingSenderId: "541094236058",
appId: "1:541094236058:web:850edb60659e4742"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
if (user) {

    $("#hidden").attr("class", "d-block")
    $("#login").attr("class", "container d-none")
    var user = firebase.auth().currentUser;
} else {
    $("#hidden").attr("class", "d-none")
    $("#login").attr("class", "container d-block")
}
});



function login(){
    var userEmail = $("#email-login").val();
    var userPass = $("#password-login").val();
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    $(".error-message").text(errorMessage)
    });
  }
  function logOut(){
    firebase.auth().signOut();
  }

function signUp(){
    var userEmail = $("#email-login").val();
    var userPass = $("#password-login").val();
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        $(".error-message").html(errorMessage)
    });
}

