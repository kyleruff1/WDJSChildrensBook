//$(document).ready(function(){
var a =["alligator", "armadillo", "anaconda", "ardvark"];
var b =["baboon", "badger", "bat", "buffalo"];
var c =["cat", "camel", "cheetah"];
var d =["deer", "dog", "donkey", "dolphin"];
var e =["elephant", "eagle", "emu"];
var f =["fox", "flamingo", "ferret"];
var g =["gecko", "gerbil", "giraffe"];
var h =["hedgehog", "horse", "hyena"];
var i =["iguana", "insect"];
var j =["jellyfish", "jaguar"];
var k =["kangaroo"];
var l =["lion", "lizard", "llama"];
var m =["monkey", "moose", "mouse"];
var n =["newt"];
var o =["otter", "octopus", "orangutan"];
var p =["parrot", "pig", "poodle"];
var q =["quail"];
var r =["rabbit", "raccoon", "rat"];
var s =["seal", "scorpion", "skunk"];
var t =["tortoise", "tiger"];
var u =["unicorn"];
var v =["vulture"];
var w =["walrus", "weasel"];
var x =["NOTHING"];
var y =["yak"];
var z =["zebra"];
var alphabet = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var random;
var randomArray;
var generated;
var randomtext;
// prounounce variables
var sound;
var firstCharInSound;


//});
$("body").on("click", ".btn", function(){
    randomLetterClick();
    if($(this).attr("id")=== "randomletter"){
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + randomtext + "&api_key=gqvHLyAWvH6hlE0ZWRLyC37I67jzXvC7&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            $("#player").html("<img src=" + response.data[0].images.fixed_height.url + ">");
        });
        var dictionaryURL = "https://dictionaryapi.com/api/v3/references/sd2/json/"+ randomtext +"?key=01c631d7-9638-42b7-adbe-8337d0e10bd4";
        $.ajax({
            url: dictionaryURL,
            method: "GET"
        }).then(function(response){
            $("#pronunciation").text("Pronunciation: " + response[0].hwi.prs[0].mw);
            sound = response[0].hwi.prs[0].sound.audio
            firstCharInSound = response[0].hwi.prs[0].sound.audio.charAt(0);
        });
        
        }else{
        var userClick = $(this).attr("id");
        // $("#bigletter").html("<h1>"+ userClick.toUpperCase() +"</h1>");
        
        var inputDiv = `<h5>Write a word that starts with ${userClick}</h5>
                        <input type="text" class="form-control" id='user-word'>
                        <button id='submit'>Go!</button>`;
        $('#user-input-div').html(inputDiv);
        $("#submit").on("click", function(event){
        event.preventDefault();
        var userInput = $("#user-word").val();
        if(userInput.charAt(0) === userClick){
            alert("YOU ROCK");
        }else{
            alert("try agagin");
        };
});
    };
    for(var i=0; i<alphabet.length;i++){
        if(userClick === alphabet[i][0].charAt(0)){
            
            var currentWord = alphabet[i];
            random = currentWord[Math.floor(Math.random() * currentWord.length)];
            $("#bigletter").html("<h1>"+ userClick.toUpperCase() + random.substr(1) +"</h1>");
            // $("#randomword").html("<h3>" + random +"</h3>");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + random + "&api_key=gqvHLyAWvH6hlE0ZWRLyC37I67jzXvC7&limit=10";
    
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response){
                console.log(response.data);
                $("#player").html("<img src=" + response.data[0].images.fixed_height.url + ">");
            });
            var dictionaryURL = "https://dictionaryapi.com/api/v3/references/sd2/json/"+ random +"?key=01c631d7-9638-42b7-adbe-8337d0e10bd4";
            $.ajax({
                url: dictionaryURL,
                method: "GET"
            }).then(function(response){
                console.log(response[0].hwi);
                $("#pronunciation").text("Pronunciation: " + response[0].hwi.prs[0].mw);
                sound = response[0].hwi.prs[0].sound.audio
                firstCharInSound = response[0].hwi.prs[0].sound.audio.charAt(0);
            });
        };
    };

    // pronounce
    $(".pronounciation-sound").click(function(){
        var audio = new Audio("https://media.merriam-webster.com/soundc11/"+ firstCharInSound + "/" + sound + ".wav")
        audio.play();
        firstCharInSound = undefined;
        sound = undefined;
        console.log(audio);
    });

    function randomLetterClick(){
        randomArray = alphabet[Math.floor(Math.random() * alphabet.length)];
        generated = randomArray[0].charAt(0).toUpperCase();
        

        randomtext = randomArray[Math.floor(Math.random() * randomArray.length)];
        $("#bigletter").html("<h1>" + generated + randomtext.substr(1) +"</h1>");
        // $("#randomword").html("<h3>" + randomtext +"</h3>");

        
        var inputDiv = `<h5>Write a letter that starts with ${generated}</h5>
        <input type="text" class="form-control" id='user-word'>
        <button id='submit'>Go!</button>`;
        $('#user-input-div').html(inputDiv);
        $("#submit").on("click", function(event){
        event.preventDefault();
        var userInput = $("#user-word").val();
        if(userInput.charAt(0) === userClick){
        alert("YOU ROCK");
        }else{
        alert("try agagin");
        };
        });
        
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
        $(".error-message").html(errormessage)
    });
}

