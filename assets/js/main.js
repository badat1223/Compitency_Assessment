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

  var DataModule = (function(){

    const api_url = "https://api.punkapi.com/v2/beers";
    
    // Defining async function
    async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        //hideloader();
    }
    getData(data);
    }

    function getData(data){
        return data;
    }
    
    return{
        getApi: getapi(api_url)
    }
    
    
    })();

var AccordianModule = (function(){
        
        
})();



