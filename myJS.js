function tweetMe(){
    alert("Twitter API");
}

function fbMe(){
    alert("Facebook API");
}

function email(){
    var content = document.getElementById("myinput").value;
    window.open('mailto:' + content);
}

function email2(){
    var content = document.getElementById("secondForm").value;
    window.open('mailto:' + content);
}

function about(){
    alert("send to about page");
}

function feat(){
    alert("send to features page");
}

function signup(){
    alert("send to sign up page");
}

function inLine(){
    alert("Get in Line");
}
