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


  //console.log(firebase);

  window.onload = function(){

        //Variables needed
        const txt_welcome = document.querySelector("#userWelcome");
        const txt_user = document.querySelector("#user");
        const txt_pass = document.querySelector("#pass");
        const btn_login = document.querySelector("#login");
        const btn_signup = document.querySelector("#signup");
        const btn_logout = document.querySelector("#logout");
        /*
        const btn_save = document.querySelector("#Save");
        const data_form = document.querySelector("#dataForm");
        const txt_name = document.querySelector("#name");
        const txt_phone = document.querySelector("#phone");
        */

        //Firebase Auth Variable
        var uid = null;
        btn_login.addEventListener("click",function(){
            console.log("loggin in...");
            let email = txt_user.value;
            let password = txt_pass.value;
            firebase.auth().signInWithEmailAndPassword(email,password)
            .then(user => {
                window.location = 'main.html'
            }).catch(error => {
                console.error(error);
            })
            
        });

        btn_signup.addEventListener("click",function(){
            console.log("creating user...");
            let email = txt_user.value;
            let password = txt_pass.value;
            let promise =  firebase.auth().createUserWithEmailAndPassword(email,password);
            promise.catch(e=>console.log(e.message));

        });

        btn_logout.addEventListener("click",function(){
            firebase.auth().signOut()
            
                window.location = 'index.html'
        
        });

        firebase.auth().onAuthStateChanged(firebaseUser=>{
            if(firebaseUser){
               uid = firebaseUser.uid;
               console.log("LOGGED IN");
               btn_login.classList.add("hide");
               btn_signup.classList.add("hide");
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
  
    }

    