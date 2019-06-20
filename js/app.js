data = [
    {
    "id" : "1",
    "name" : "Samsung S7",
    "price" : "2500"
    },
    {
    "id" : "2",
    "name" : "Samsung S8",
    "price" : "3000"
    },
    {
    "id" : "3",
    "name" : "Samsung S9",
    "price" : "4500" 
    },
    {
    "id" : "4",
    "name" : "Lg Optimus 6",
    "price" : "3400"
    },
    {
    "id" : "5",
    "name" : "Samsung Note 8",
    "price" : "4000"
    }
];


window.onload = init;

function init() {
    document.querySelector("#save").onclick = jojang;
    document.querySelector("#id").onclick = aid;
    document.querySelector("#name1").onclick = aname;
    document.querySelector("#price1").onclick = aprice; 
    showData();
}

function showData() {
    tb = document.querySelector("#datax");
    tb.innerHTML = "";

    for (i = 0; i< data.length; i++) {
        
        mtr = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        id1 = document.createElement("input");
        name2 = document.createElement("input");
        price2 = document.createElement("input");
        id1.value = data[i].id;
        name2.value = data[i].name;
        td2.id = 'name' + (i + 1);
        price2.value = data[i].price;
        td3.id = 'price' + (i + 1);
        td1.append(id1);
        td2.append(name2);
        td3.append(price2);

        mtr.append(td1);
        mtr.append(td2);
        mtr.append(td3);
        tb.append(mtr);
    }
}


function jojang() {
    ln = document.querySelector("#name").value;
    fn = document.querySelector("#price2").value;

    let contact = new Object();
    contact.id = data.length+1;
    contact.name = ln;
    contact.price = fn;
    console.log(contact);
    data.push(contact);
    showData();
}

function aid(){
    if(good1 == 1){
        good1 = good1 * -1;
        id.innerText="▲ ID";
        data.sort(function(a, b){
            return b.id - a.id;
        });
    }
    else{
        good1 = good1 * -1;
        id.innerText="▼ ID";
        data.sort(function(a, b){
            return a.id - b.id;
        });
    }
    showData();
}
function aprice(){
    if(good2 == 1){
        good2 =  good2 * -1;
        price1.innerText="▲ PRICE";
        data.sort(function(a, b){
            return b.price - a.price;
        });
    }
    else{
        good2 = good2 * -1;
        price1.innerText="▼ PRICE";
        data.sort(function(a, b){
            return a.price - b.price;
        });
    }
    showData();
}
function aname() {
    if(good3 == 1){
        good3 = good3 * -1;
        name1.innerText="▲ NAME";
        data.sort(function(a, b){
            return a.name > b.name ? -1: a.name < b.name ? 1:0;
        });
    }
    else{
        good3 = good3 * -1;
        name1.innerText="▼ NAME";
        data.sort(function(a, b){
            return a.name < b.name ? -1: a.name > b.name ? 1:0;
        });
    }
    showData();  
}

good1 = 1;
good2 = 1;
good3 = 1;

function endCheck(event){
    //alert(event.keyCode);

    if(event.keyCode == 13){
        editData();
    }
    if(event.keyCode == 27){
        showData();
    }
}

function editData(){
    for(i = 0; i < data.length; i++){
        n = document.querySelector("#datax tr:nth-child("+(i+1)+") td:nth-child(2) input");
        pr = document.querySelector("#datax tr:nth-child("+(i+1)+") td:nth-child(3) input");
        
        data[i].NAME = n.value;
        data[i].PRICE = pr.value;
    }
}
