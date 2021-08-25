(function () {
    const accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            let panel =  this.nextElementSibling;
            this.classList.toggle("active");
            for(let j = 0; j <accordions.length; j++){
                if(j!==i){
                    accordions[j].classList.remove("active");
                    accordions[j].nextElementSibling.style.maxHeight = null;
                    accordions[j].nextElementSibling.style.margin = 0 + "px";
                }
            }
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
                panel.style.margin = 0 + "px "  ;
              } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.margin = 20 + "px " + 0 + "px" ;
              } 
        });
    }
})();