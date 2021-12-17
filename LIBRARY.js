
var selectedRow = null


function readFormData(){
    let name= document.getElementById("name").value;
    let lname= document.getElementById("lname").value;
    let prix = document.getElementById("prix").value;
    let date = document.getElementById("date").value;
    let language  = document.getElementById("language").value; 
    let rbs = document.querySelector("input[name='fav_language']:checked").value;
    console.log(rbs);
    console.log(rbs=="");
    if(name!="" && prix!="" && date!="" && language!="" && rbs!=""){
    
       
        
           var table = document.getElementById("employeelist");
           var rowCount = table.rows.length;
        
           var row = table.insertRow(rowCount);
          
           
          
           row.insertCell(0).innerHTML= name;
           row.insertCell(1).innerHTML= lname;
           row.insertCell(2).innerHTML= prix;
           row.insertCell(3).innerHTML= date;
           row.insertCell(4).innerHTML= language;
           row.insertCell(5).innerHTML= rbs;
           row.insertCell(6).innerHTML= `
           <button  type="button" value = "Delete" onClick="Javacsript:deleteRow(this)"><i class="fas fa-trash"></i></button >
           <button  type="button" value = "Edit" onClick="Javacsript:onEdit(this)">  <i class="fas fa-edit"></i></button >
           `;
          
              resetForm(); 
    }

 
       
else{  
text = "Inputs not valid";
  
}

    document.getElementById("demo").innerHTML = text;




}




function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("prix").value = "";
    document.getElementById("date").value = "";
    document.getElementById("language").value = "";
    document.getElementById("type").value = "";

    selectedRow = null;
}



function onEdit(obj) {

    
    selectedRow = obj.parentNode.parentNode;
    if(selectedRow){
        document.getElementById('update').style.display="block";
        document.getElementById('enrg').style.display="none";

    }

    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("prix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
    document.getElementById("language").value = selectedRow.cells[4].innerHTML;
    document.getElementById("type").value = selectedRow.cells[5].innerHTML;
 
}

function updateRecord() {
    document.getElementById('enrg').style.display="block";
    document.getElementById('update').style.display="none";

    


  
    selectedRow.cells[0].innerHTML = document.getElementById("name").value ;
    selectedRow.cells[1].innerHTML = document.getElementById("lname").value;
    selectedRow.cells[2].innerHTML = document.getElementById("prix").value;
    selectedRow.cells[3].innerHTML = document.getElementById("date").value 
    selectedRow.cells[4].innerHTML = document.getElementById("language").value ;
    selectedRow.cells[5].innerHTML=  document.querySelector("input[name='fav_language']:checked").value;
    resetForm();
}


function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;

    if (confirm('Are you sure to delete this record ?')){
    var table = document.getElementById("employeelist");
    table.deleteRow(index);
    }
 
    
  }

