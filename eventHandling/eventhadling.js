//  let button = document.getElementById("clickMe");
//  button.addEventListener("click",function(c){
//     console.log("clicked");



    document.getElementById("block");
    block.addEventListener("mouseover",function(c){
        block.innerText = "Hi Saru";
        block.style.fontSize = "50px";
        block.style.backgroundColor = "red";
        block.style.color="yellow";
    });

    block.addEventListener("mouseout",function(c){
        block.innerText = "Hello Nepal";
        block.style.backgroundColor ="blue";
        block.style.color = "green";
        });


    const firstName =  document.getElementById("myField");

    firstName.addEventListener("keypress",function(e){
        console.log("Key is Pressed");
        console.log(e.key);
    })

    



    // let update = document.getElementById("textField");
    
    // if(update.type == "text"){
    //     update.type = "password";
    // }
    // else if(update.type =="password"){
    //     update.type="text";
//     // }
//  });

 
