var Module = (function () {

    var privateMethod = function () {
        // private
      };
    
      var initializeAccordian = function () {
        // public
        const myAccordion = new handorgel(document.querySelector('.handorgel'))
      };
    
      var multiSelect = function () {
        // public
        const myAccordion = new handorgel(document.querySelector('.handorgel'),{
            multiSelectable: true
      })
      };

      var accsessibilityAccordian = function () {
        // public
        const myAccordion = new handorgel(document.querySelector('.handorgel'),{

            ariaEnabled: true,
            keyboardInteraction: true,
            carouselFocus: true, // loop header focus
            initialOpenAttribute: 'data-open'
            
      })
      };
    
      return {
        initializeAccordian: initializeAccordian,
        multiSelect: multiSelect,
        accsessibilityAccordian: accsessibilityAccordian,
        
      };
  
  })();