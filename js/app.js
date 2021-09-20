/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBarList = document.getElementById("navbar__list");
const sectionsList = document.getElementsByTagName("section");
let dataNavList = []
const options = {
root:null,
rootMargin: "0px",
threshold:0.65 ,
};





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const myObs = new IntersectionObserver(function(entries,myObs){
    entries.forEach(entry=>{
        let id = entry.target.getAttribute("data-nav").split(" ")[1];
        
        if(entry.isIntersecting){
            if(!entry.target.classList.contains("your-active-class")){
                entry.target.classList.add("your-active-class");
                let myLink = document.getElementById(`section${id}__link`);
                myLink.setAttribute("class","menu__link active");
                
                
                
            }
        }else{
            if(entry.target.classList.contains("your-active-class")){
            entry.target.classList.remove("your-active-class");
            let myLink = document.getElementById(`section${id}__link`);
                myLink.setAttribute("class","menu__link");
                
            
        }

        }

        
        console.log(entry.target);
        console.log(id)
    });

},options);

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const fragment = document.createDocumentFragment();
for(let i = 0; i<sectionsList.length;i++){
    const item = document.createElement("li");
    const link = document.createElement("link");
    link.setAttribute("class","menu__link");
    link.setAttribute("id",`section${i+1}__link`);
    link.textContent=`section ${i+1}`;
    dataNavList.push(link);
    item.appendChild(link);
    
    
    fragment.appendChild(item);
}
navBarList.appendChild(fragment);







// Add class 'active' to section when near top of viewport
for(let i = 0 ; i<sectionsList.length;i++){
    myObs.observe(sectionsList[i]);    
}



// Scroll to anchor ID using scrollTO event

dataNavList.forEach((link,index)=>{
    link.addEventListener('click',()=>{
        sectionsList[index].scrollIntoView({behavior: 'smooth', block: 'center'}); 
        

    });
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


