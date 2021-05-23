//comment

let add = () => {
       let name = document.querySelecto r('.container #name'); 
       let comment = document.querySelector('.container #comment'); 
        
       if (name.value !== "" && comment.value != "") { 
        
       let list = document.querySelector('.list'); 
       let time = new Date();
       let d = time.getDate(); 
       let m = time.getMonth(); 
       let y = time.getUTCFullYear(); 
       let now =  d + " - " + m + " - " + y;
       let list_item = document.createElement ("l1"); 
        
       list_item.innerHTML = `
       <span>
       <p>${name.value} ${now}</p> 
       </span>
       <p>${comment.value}</p>
       `;
       list.append(list_item); 
       }
        
       if (name.value == "" || comment.value == "") {
       let list = document.querySelector('.list'); 
       let list_item = document.createElement ("l2"); 
       var warn = 'Please enter name & comment!';  
       list_item.innerHTML = `
       <span>
       <p>${warn}</p> 
       </span>
       `;
       list.append(list_item); 
        }
       name.value=comment.value = "";
       }
   
       // Add active class to the current button (highlight it)
       var header = document.getElementById("navbar-nav");
       var example = header.getElementsByClassName("nav-act");
       for (var i = 0; i < example.length; i++) {
        example[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        });
       }
       //topUp
       function openNav() {
              document.getElementById("myTopDown").style.height = "150px";
            }
            
            function closeNav() {
              document.getElementById("myTopDown").style.width = "0%";
            }
   