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
    async function getapi() {
    
    const response= await fetch(api_url);
    const data= await response.json();
    console.log(data[2].name);
    return data;
   }
 

    // Calling that async function
    getapi();
    console.log(getapi());
    //document.getElementsByClassName("accordion")[0].innerHTML="Hello World";

       // Defining async function


var BeerModule = (function(){
    
    function setBeerName()
    {
      
    }

  

})();
var AccordianModule = (function(){
        
  async function getBeerNames()
  {
    let names =[];

    try{
        names= await getapi();

    }

    catch (e){
          console.log("Error!");
          console.log(e);
    }

    var name =""
    console.log(names);
    for (i=0; i<names.length;i++)
    {
      name=names[i].name;
      console.log(name);
      var content = '';
      if ( typeof names[i].tagline !== 'undefined' ) {
        //use content from json
        content += names[i].tagline;
      } 
      //we'll be injecting into this div
    var container = document.getElementById( 'accordion-container' );
    //populate the container div
    container.insertAdjacentHTML( 'beforeend', '<div class="accordion-example__accordion-title">' + name + '</div>' + '<div class="accordion-example__accordion-panel">' + content + '</p></div>' );
     
    }


    
    
    interactivateAccordions();


  }
  function interactivateAccordions() {
    //get all accordions
    var accordions = document.getElementsByClassName( 'accordion-example__accordion-title' );
    //loop thorugh accordions
    for ( var i = 0; i < accordions.length; i++ ) {
        accordions[i].addEventListener('click', function() {
          //toggle class on click
          this.classList.toggle( 'accordion-example__accordion-title--active' );
          this.nextElementSibling.classList.toggle( 'accordion-example__accordion-panel--active' );
        });
    }
  }

  return{
    beerNames: getBeerNames()
  }
        
})();


var GridModule = (function(){


  async function getBeerNames()
  {
    let names =[];

    try{
        names= await getapi();

    }

    catch (e){
          console.log("Error!");
          console.log(e);
    }
   
    
    var name =""
    console.log(names);
    for (i=0; i<names.length;i++)
    {
      name=names[i].name;
      console.log(name);
      var content = '';
      if ( typeof names[i].tagline !== 'undefined' ) {
        //use content from json
        content += names[i].tagline;
      } 
      //we'll be injecting into this div
    var container = document.getElementById( 'grid-container' );
    //populate the container div
    container.insertAdjacentHTML( 'beforeend', '<div class="col-12-xs col-6-md col-6-lg"><div class="card p-0"><h3 class="card-title m-1">' + name + '</h3></div></div>' );
     
    }


    
    
    


  }
  return{
    beerNames: getBeerNames()
  }
        
})();

