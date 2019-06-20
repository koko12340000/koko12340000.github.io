// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBS0I2NHNYOWTQgETbJBdXamrUEACTS3yI",
    authDomain: "db-project-3dd92.firebaseapp.com",
    databaseURL: "https://db-project-3dd92.firebaseio.com",
    projectId: "db-project-3dd92",
    storageBucket: "db-project-3dd92.appspot.com",
    messagingSenderId: "159950380073"
  };
  firebase.initializeApp(config);

productsRef = firebase.database().ref("products");

markers = new Array();
infoWindow = null;
//This will run only after the page loads...
window.onload  = function(){
      
    document.querySelector("#Save").addEventListener("click", function(){
            //get the values of the text inputs
            let pname  = document.querySelector("#name").value;
            let page  = document.querySelector("#userage").value;
            let pwhen  = document.querySelector("#when").value;
            let paddress = document.querySelector("#address").value;
            /*
            let pphoto = document.querySelecotr("#submit").value;
            */
            let ptype  = document.querySelector("#type").value;
            let pcomment = document.querySelector("#comment").value;
            let plati = document.querySelector("#lati").value;
            let plong = document.querySelector("#long").value;

            //alert(ln.value + fn.value);
            // do some validation here....


            // SAVE..
            //console.log(firebase.database())
            productsRef.push().set({
                name: pname,
                lati: plati,
                long: plong,
                userage: page,
                when: pwhen,
                address: paddress,
                type: ptype,
                comment: pcomment
            });

    });
}
    const btn_logout = document.querySelector("#logout");
    const txt_welcome = document.querySelector("#userWelcome");

    btn_logout.addEventListener("click",function(){
        firebase.auth().signOut()
        
            window.location = 'index.html'
    });

    firebase.auth().onAuthStateChanged(firebaseUser=>{
        if(firebaseUser){
           uid = firebaseUser.uid;
           console.log("LOGGED IN");
           btn_logout.classList.remove("hide");
           txt_welcome.innerHTML = "Welcome " + firebaseUser.email;
           url = window.location.pathname;
           filename = url.substring(url.lastIndexOf('/')+1);
           if(filename!="main.html")
                window.location = 'main.html'

        } else{
            console.log("LOGGED OUT..")
            url = window.location.pathname;
            filename = url.substring(url.lastIndexOf('/')+1);
            if(filename!="index.html")
               window.location = 'index.html'


        }

    });




productsRef.on('value',function(snap){
//console.log(snap);
});


productsRef.on('child_added',function(snap){
console.log(snap);



/* using UL
    var pList = document.querySelector("#list");
const li = document.createElement("li");
li.innerText = snap.child("name").val() + " " + snap.child("price").val();
li.id = snap.key;
pList.appendChild(li);*/

//TABLE

var pList = document.querySelector("#tableList");
const row = document.createElement("tr");

n = snap.child("name").val();
u = snap.child("userage").val();
w = snap.child("when").val();
a = snap.child("address").val();
p = snap.child("photo").val();
t = snap.child("type").val();
c = snap.child("comment").val();
l = snap.child("lati").val();
lo = snap.child("long").val();


row.innerHTML = `<td>${n}</td><td>${l}</td><td>${lo}</td><td>${u}</td><td>${w}</td><td>${a}</td><td>${t}</td><td>${c}</td><td><input onclick="remove('${snap.key}');" type="button" value="Remove"/></td>`
row.id = snap.key;
pList.appendChild(row);
ll = {lat:parseFloat(l), lng:parseFloat(lo)};
m = new google.maps.Marker({
    position: ll,
    map:map
});

m.name = n;
m.userage = u;
m.when = w;
m.address = a;
m.type = t;
m.comment = c;

m.addListener('click',function(){
    if(infoWindow!=null) infoWindow.close();
    infoWindow = new google.maps.InfoWindow({
        content: `<h2>` + this.address + `</h2>` + `Name:&nbsp&nbsp` + this.name + `<br>` + `Userage:&nbsp&nbsp` + this.userage + `<br>` + `When:&nbsp&nbsp` + this.when + `<br>` + `How good is it?:&nbsp&nbsp` + this.type + `<br>` + `Comment:&nbsp&nbsp` + this.comment

    });
    infoWindow.open(map,this);
});

    markers.push(m);
   

});
productsRef.on('child_removed', function(removedProduct) {
    const liRemoved = document.getElementById(removedProduct.key);
    liRemoved.remove();

});
function remove(key) {
    //DELETE product FROM FIREBASE
    productsRef.child(key).remove();
}

    
