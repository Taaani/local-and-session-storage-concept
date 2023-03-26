 function inputField(){
      return document.getElementById("input").value;
}



let  addDataLocalStorage = ()=>{
    let firstName = inputField();
//    let firstName =  prompt("enter name")


    let name = localStorage.getItem("data");
    if(name === null){
        name = [];

    }else{
        name = JSON.parse(name)
    }
    name.push(firstName);

    localStorage.setItem("data", JSON.stringify(name))
     document.getElementById("output").innerHTML = "your data in add in localstorage"
}

 let getData = ()=>{
    document.getElementById("output").innerHTML  = ""
     let names = localStorage.getItem("data");
      if(names == null){
        alert("no data in local Storage");
        return;
      }
      names = JSON.parse(names);
      console.log(names);

      for(let i=0; i<names.length ; i++){
        document.getElementById("output").innerHTML +=  names[i] + "<br>"
      }


 }