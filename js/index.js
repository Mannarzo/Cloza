const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}



// Check the the preloaded script has not yet ran
if(typeof preloadedModuleVariable === "undefined"){
  console.log("The preloaded script has not yet run");
}

// Loading the script
let preloadedScript = document.createElement("script");
preloadedScript.src = "/_export/code/web:html:preload?codeblock=1";
document.body.appendChild(preloadedScript);


// Check the the preloaded script has run
preloadedScript.addEventListener("load", function(){
   console.log("The preloaded script has run: "+preloadedModuleVariable );
})



const loader = document.querySelector('.center'); // center the parent name as you see it in the tuto
window.addEventListener('load', () =>{    // add the load event

loader.classList.add('end-loader'); // create a class loader with css and add it
})

 Exemple : 
 .end-loader {
    opacity:0   ; /* make the loader disappeared  after the page have been loading */
    transition: .2s ease-in-out; /* and some transtion*/

}