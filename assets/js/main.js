/* var Module = (function () {

    var privateMethod = function () {
      // private
    };
  
    var acoordian = function () {
      // public

      var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



    };
  
    var anotherMethod = function () {
      // public
    };
  
    return {
        acoordian: acoordian,
      anotherMethod: anotherMethod
    };
  
  })();
 */

  

    const api_url = "https://api.punkapi.com/v2/beers/";
    
    // Defining async function
    async function getapi(url) {
    
    // Storing response
  fetch(url)
    .then (response=>{
       return response.json();
    })
    // Storing data in form of JSON
   .then(data=>{

    console.log(data[0].name);
    obj = JSON.parse(JSON.stringify(data));
 
    console.log(Object.keys(obj));
    var name ="";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
      name= data[i].name

      document.getElementById("accordian").innerHTML=data[i].name;


    }



   })
    //var json = await getJsonData();
    //const myObj = JSON.parse(data);

    //console.log(data);

    //AccordianModule.beerNames(data);
   
  
    }

    function getData(data){
        return data;
    }
    // Calling that async function
    getapi(api_url);


       // Defining async function


var BeerModule = (function(){
    
    function setBeerName()
    {
      
    }

  

})();
var AccordianModule = (function(){
        
  function getBeerNames()
  {
/*     var name ="";

    for (i = 0; i < data.length; i++) {
      name=data.name[i];

      document.getElementById("accordian").innerHTML=name;


    } */



  }

  return{
    beerNames: getBeerNames()
  }
        
})();


var GridModule = (function(){
        
        
})();


