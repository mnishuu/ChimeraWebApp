var firebaseConfig = {
    apiKey: "AIzaSyAHiMS4LbYNYJ4C3UqUJg2TaJmYhOW4wAo",
    authDomain: "myawsomeprp.firebaseapp.com",
    databaseURL: "https://myawsomeprp.firebaseio.com",
    projectId: "myawsomeprp",
    storageBucket: "myawsomeprp.appspot.com",
    messagingSenderId: "554524844988",
    appId: "1:554524844988:web:501b413d16f0b871ef41b9",
    measurementId: "G-8BR8BH24YH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//console.log(firebase);

const dbRef = firebase.database().ref();
const usersRef = dbRef.child('MotorData');
usersRef.on('value',gotData,errData);

function gotData (data)
{
    let user = data.val();
    //console.log(user)
    var keys=Object.keys(user)
    for(var i=0;i<keys.length;i++)
    {
        var k=keys[i];
        var Current=user[k].Current;
       // console.log(Current)
    }
}
function errData (err)
{
    console.log(err)
}
usersRef.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val();
    //console.log("speed: " + newPost.speed);
    document.getElementById("speed").innerHTML=newPost.speed;
    document.getElementById("temperature").innerHTML=newPost.temp;
    document.getElementById("rpm").innerHTML=newPost.rpm;
    document.getElementById("voltage").innerHTML=newPost.speed;
    document.getElementById("current").innerHTML=newPost.Current;
    
    
    //console.log("Title: " + newPost.title);
   // console.log("Previous Post ID: " + prevChildKey);
  });

const BatData = dbRef.child('BatteryData');
BatData.on("child_added", function(snapshot, prevChildKey) {
    var newVal = snapshot.val();
    //console.log("speed: " + newPost.speed);
    document.getElementById("b1").innerHTML=newVal.b1;
    document.getElementById("b2").innerHTML=newVal.b2;
    document.getElementById("b3").innerHTML=newVal.b3;
    document.getElementById("b4").innerHTML=newVal.b4;
    document.getElementById("b5").innerHTML=newVal.b5;
    document.getElementById("b6").innerHTML=newVal.b6;
    document.getElementById("b7").innerHTML=newVal.b7;
    document.getElementById("b8").innerHTML=newVal.b8;
    document.getElementById("b9").innerHTML=newVal.b9;
    document.getElementById("b10").innerHTML=newVal.b10;
    document.getElementById("b11").innerHTML=newVal.b11;
    document.getElementById("b12").innerHTML=newVal.b12;
    document.getElementById("b13").innerHTML=newVal.b13;
    document.getElementById("b14").innerHTML=newVal.b14;
    document.getElementById("b15").innerHTML=newVal.b15;
    document.getElementById("b16").innerHTML=newVal.b16;
    document.getElementById("b17").innerHTML=newVal.b17;
    document.getElementById("b18").innerHTML=newVal.b18;
    document.getElementById("b19").innerHTML=newVal.b19;
    document.getElementById("b20").innerHTML=newVal.b20;
    document.getElementById("b21").innerHTML=newVal.b21;
    document.getElementById("b22").innerHTML=newVal.b22;
    document.getElementById("b23").innerHTML=newVal.b23;
    document.getElementById("b24").innerHTML=newVal.b24;
    document.getElementById("b25").innerHTML=newVal.b25;
    document.getElementById("b26").innerHTML=newVal.b26;
    document.getElementById("b27").innerHTML=newVal.b27;
    document.getElementById("b28").innerHTML=newVal.b28;
    document.getElementById("b29").innerHTML=newVal.b29;
    document.getElementById("b30").innerHTML=newVal.b30;
    
    document.getElementById("t1").innerHTML=newVal.t1;
    document.getElementById("t2").innerHTML=newVal.t2;
    document.getElementById("t3").innerHTML=newVal.t3;
    document.getElementById("t4").innerHTML=newVal.t4;
    document.getElementById("t5").innerHTML=newVal.t5;
    document.getElementById("t6").innerHTML=newVal.t6;
    document.getElementById("t7").innerHTML=newVal.t7;
    document.getElementById("t8").innerHTML=newVal.t8;
    document.getElementById("t9").innerHTML=newVal.t9;
    document.getElementById("t10").innerHTML=newVal.t10;
    document.getElementById("t11").innerHTML=newVal.t11;
    document.getElementById("t12").innerHTML=newVal.t12;
    

    //console.log("Title: " + newPost.title);
   // console.log("Previous Post ID: " + prevChildKey);
  });


