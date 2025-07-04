let searchForm= document.getElementById('sr-form');
let searchResult = document.querySelectorAll('.result-items');
let result =document.getElementById('search-result');
let searchvalue =result.getElementsByTagName("p");

searchForm.addEventListener("keyup", function(){
   //console.log("keyup done");

   for(var i=0; i<searchvalue.length; i++){
    console.log(searchForm.value);

    let value =searchResult[i].getElementsByTagName('p')[0];

    let filtervalue = value.textContent || value.innerHTML;

    if(filtervalue.toUpperCase().indexOf(searchForm.value.toUpperCase())>-1){
        searchResult[i].style.display="";

    }
    else{
        searchResult[i].style.display="none";
    }

   }
})