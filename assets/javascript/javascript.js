//$(document).ready(function(){
var a =["alligator", "armadillo", "anaconda", "angel", "apple", "avocado", "astronaut", "ant", "asteroid", "airplane"];
var b =["baboon", "beetle", "bat", "buffalo", "boat", "broccoli", "bridge", "banana", "bread", "bird"];
var c =["cat", "candle", "cheetah", "candy", "crayon", "car", "chair", "city", "chocolate", "carrot"];
var d =["deer", "dog", "donkey", "dolphin", "duck", "dolphin", "desert", "desk", "door", "dress"];
var e =["elephant", "eagle", "emu", "egg", "ears", "earth", "engine", "earphone", "eskimo", "easter"];
var f =["fox", "flamingo", "ferret", "family", "fire", "frog", "flower", "fork", "flag", "fossil"];
var g =["goat", "golf", "goose", "gift", "gold", "gum", "gorilla", "glass", "grass", "garbage"];
var h =["hedgehog", "hose", "hyena", "house", "hammer", "hat", "honey", "hay", "horn", "helicopter"];
var i =["iguana", "indian", "ice", "igloo", "infant", "island", "ivy", "icicle", "inch", "iris"];
var j =["jellyfish", "jester", "jet", "jewel", "jade", "jacket", "jeans", "janitor", "jet", "jeep"];
var k =["kangaroo", "kite", "kitten", "kiwi", "knee", "kayak", "ketchup", "kid", "key", "koala"];
var l =["log", "lizard", "lobster", "leg", "laser", "lollipop", "lamb", "lock", "lemon", "leopard"];
var m =["monkey", "moose", "mouse", "mountain", "magnet", "map", "marble", "milk", "magazine", "macaroni"];
var n =["newt", "neck", "napkin", "net", "nitrogen", "nectarine", "number", "nut", "nickel", "newspaper"];
var o =["otter", "octopus", "orangutan", "oak", "office", "oil", "onion", "orange", "owl", "orca"];
var p =["parrot", "pig", "poodle", "panther", "parade", "parachute", "parrot", "pencil", "peanut", "pear"];
var q =["quail", "quarter", "quill", "quiche", "queen", "quartz", "question", "quiz", "quote", "quilt"];
var r =["rabbit", "raccoon", "rat", "radio", "rose", "rainbow", "raccoon", "rocket", "rice", "rock"];
var s =["seal", "scorpion", "skunk", "snail", "spider", "shoe", "stamp", "spoon", "snow", "star"];
var t =["tortoise", "tulip", "table", "taco", "train", "teeth", "towel", "tree", "turkey", "truck"];
var u =["unicorn", "urchin", "umbrella", "university", "utensil", "uganda", "udder", "uncle", "unicycle", "umpire"];
var v =["vulture", "vinegar", "vase", "video", "volcano", "vegetable", "valentine", "vulture", "valet", "vaccine"];
var w =["walrus", "weasel", "water", "wax", "wig", "walrus", "wagon", "waffles", "wheel", "web"];
var x =["xylophone"]; // having trouble finding any letters that start with "X" that work with what we're doing
var y =["yarn", "yacht", "yuppie", "yolk", "yoga", "yard", "yam", "yarn", "year", "yield"];
var z =["zebra", "zero", "zipper", "zinnia", "zucchini", "zither","zig-zag", "zephyr"];
var alphabet = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
var random;
var randomArray;
var generated;
var randomtext;

// prounounce variables
var sound;
var firstCharInSound;
var audio = new Audio();
//firebase variables
var score;

//});
//body on click function 
$("body").on("click", ".letter", function () {
    //show headphones for pronunciation sound 
    $(".pronunciation-sound").attr("class", "pronunciation-sound fas fa-headphones d-block")

    //if the letter's id = "randomletter"
    if ($(this).attr("id") === "randomletter") {
        //call randomLetterClick button
        randomLetterClick();

        //giphy API
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + randomtext + "&api_key=gqvHLyAWvH6hlE0ZWRLyC37I67jzXvC7&rating=g&limit=1";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //print image to DOM
            $("#player").html("<img src=" + response.data[0].images.fixed_height.url + ">");
        });

        //dictionary API
        var dictionaryURL = "https://dictionaryapi.com/api/v3/references/sd2/json/" + randomtext + "?key=01c631d7-9638-42b7-adbe-8337d0e10bd4";
        $.ajax({
            url: dictionaryURL,
            method: "GET"
        }).then(function (response) {
            //print pronunciation to DOM
            $("#pronunciation").text("Pronunciation: " + response[0].hwi.prs[0].mw);
            sound = response[0].hwi.prs[0].sound.audio
            firstCharInSound = response[0].hwi.prs[0].sound.audio.charAt(0);
            //print definition to DOM
            $("#definition").text(response[0].shortdef[0]);
        });

    } else {
        var userClick = $(this).attr("id");

        var userClickUpper = userClick.toUpperCase();
        var inputDiv = `<h5>Write a word that starts with ${userClickUpper}</h5>
                        <input type="text" class="form-control" id='user-word'>
                        <button id='submit'>Go!</button>`;

        $('#user-input-div').html(inputDiv);
    };

    for (var i = 0; i < alphabet.length; i++) {
        if (userClick === alphabet[i][0].charAt(0)) {

            var currentWord = alphabet[i];
            random = currentWord[Math.floor(Math.random() * currentWord.length)];
            $("#bigletter").html(userClick.toUpperCase() + random.substr(1));
            // $("#randomword").html("<h3>" + random +"</h3>");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + random + "&api_key=gqvHLyAWvH6hlE0ZWRLyC37I67jzXvC7&rating=g&limit=1";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                $("#player").html("<img src=" + response.data[0].images.fixed_height.url + ">");
            });
        };
    };
    //dictionary API Call
    var dictionaryURL = "https://dictionaryapi.com/api/v3/references/sd2/json/" + random + "?key=01c631d7-9638-42b7-adbe-8337d0e10bd4";
    $.ajax({
        url: dictionaryURL,
        method: "GET"
    }).then(function (response) {
        //pronunciation insert in HTML
        $("#pronunciation").text("Pronunciation: " + response[0].hwi.prs[0].mw);
        //save API call info into the sound variable 
        sound = response[0].hwi.prs[0].sound.audio;
        firstCharInSound = response[0].hwi.prs[0].sound.audio.charAt(0);
        $("#definition").text(response[0].shortdef[0])
    });


    function randomLetterClick() {
        randomArray = alphabet[Math.floor(Math.random() * alphabet.length)];
        generated = randomArray[0].charAt(0).toUpperCase();
        console.log(generated);

        randomtext = randomArray[Math.floor(Math.random() * randomArray.length)];
        $("#bigletter").html(generated + randomtext.substr(1));


        var inputDiv = `<h5>Write a word that starts with ${generated}</h5>
                            <input type="text" class="form-control" id='user-word'>
                            <button id='submit'>Go!</button>`;

        $('#user-input-div').html(inputDiv);

        //when user submits personal input 
        $("#submit").on("click", function (event) {
            event.preventDefault();
            var userInput = $("#user-word").val();
            console.log(userInput.charAt(0).toUpperCase());


            //I BROKE THIS CODE!!! PLEASE HELP!            
            if(userInput.charAt(0).toUpperCase() == generated) {
                //Giphy API
                var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=gqvHLyAWvH6hlE0ZWRLyC37I67jzXvC7&rating=g&limit=1";
                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {
                    $("#player").html("<img src=" + response.data[0].images.fixed_height.url + ">");
                });

                //Dictionary API
                var dictionaryURL = "https://dictionaryapi.com/api/v3/references/sd2/json/" + userInput + "?key=01c631d7-9638-42b7-adbe-8337d0e10bd4";
                $.ajax({
                    url: dictionaryURL,
                    method: "GET"
                }).then(function (response) {
                    $("#bigletter").html(userInput.charAt(0).toUpperCase() + userInput.substr(1));

                    $("#pronunciation").text("Pronunciation: " + response[0].hwi.prs[0].mw);
                    sound = response[0].hwi.prs[0].sound.audio
                    firstCharInSound = response[0].hwi.prs[0].sound.audio.charAt(0);

                    $("#definition").text(response[0].shortdef[0]);
                });

            } else {
                //CAN'T GET MODAL TO TURN OFF AFTER ITS SHOWN!!!
                $("#wrong-answer").modal("toggle");

            };
        });

    };//end of randomLetterClick function

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var userInput = $("#user-word").val().toLowerCase();
        if (userInput.charAt(0) === userClick) {
            //Giphy API
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=gqvHLyAWvH6hlE0ZWRLyC37I67jzXvC7&rating=g&limit=1";
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                $("#player").html("<img src=" + response.data[0].images.fixed_height.url + ">");
            });

            //Dictionary API
            var dictionaryURL = "https://dictionaryapi.com/api/v3/references/sd2/json/" + userInput + "?key=01c631d7-9638-42b7-adbe-8337d0e10bd4";
            $.ajax({
                url: dictionaryURL,
                method: "GET"
            }).then(function (response) {
                $("#bigletter").html(userInput.charAt(0).toUpperCase() + userInput.substr(1));

                $("#pronunciation").text("Pronunciation: " + response[0].hwi.prs[0].mw);
                sound = response[0].hwi.prs[0].sound.audio
                firstCharInSound = response[0].hwi.prs[0].sound.audio.charAt(0);

                $("#definition").text(response[0].shortdef[0]);
            });


        } else {
            //TRY AGAIN MODAL HERE
            $("#wrong-answer").modal("toggle");
        };
    });



});

//pronunciation on click function
$(".pronunciation-sound").on("click", function () {
    var source = ("https://media.merriam-webster.com/soundc11/" + firstCharInSound + "/" + sound + ".wav");
    audio.src = source;
    audio.play();
});


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJ3uxOWIFQT98C8tXQ3DY8SgvQSfkXWKY",
    authDomain: "alphabet-game-b55ff.firebaseapp.com",
    databaseURL: "https://alphabet-game-b55ff.firebaseio.com",
    projectId: "alphabet-game-b55ff",
    storageBucket: "",
    messagingSenderId: "95198064143",
    appId: "1:95198064143:web:cd1469f6b2050c2b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

firebase.auth().onAuthStateChanged(function (user) {

    if (user) {

        $("#hidden").attr("class", "d-block")
        $("#login").attr("class", "container d-none")
        var user = firebase.auth().currentUser;
        //IF NO USER NAME in database, prompt with this modal
        if (!user.displayName) {
            console.log(user.email + "doesn't have a username yet");
            //toggles the modal on 
            $("#name-modal").modal("toggle");
            //on submitting the user name 
            $("#submit-name").on("click", function () {
                var name = $("#name").val();
                score = 0;
                //submit to firebase 
                user.updateProfile({
                    displayName: name,
                    score: score
                }).then(function(){
                    //profile sucessfully updated 
                    console.log("sucessful profile update");
                },function(error){
                    //an error happened 
                });

                //toggles the modal off 
                $("#name-modal").modal("toggle");

            });
        }
        console.log(user.displayName);
        console.log(user.score);
        
    } else {
        $("#hidden").attr("class", "d-none")
        $("#login").attr("class", "container d-block")
    }
});



function login() {
    var userEmail = $("#email-login").val();
    var userPass = $("#password-login").val();
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        //var errorCode = error.code;
        var errorMessage = error.message;
        $(".error-message").text(errorMessage)
    });
};

function logOut() {
    firebase.auth().signOut();

};

function signUp() {
    var userEmail = $("#email-login").val();
    var userPass = $("#password-login").val();
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function (error) {
        // Handle Errors here.
        var errorMessage = error.message;
        $(".error-message").html(errorMessage)
    });
    //when a new user signs up. update their profile with a score of 0 !!! 

};



function leaderBoard() {
    //display leader board with the username and the rank of highscores 
    //create table with user highscores 

};




//});
