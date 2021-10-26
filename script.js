// darkmode navigation

const navbar = document.getElementById("navbar")
const mode = document.getElementById("mode")
const hero = document.getElementById("hero")
const bottomSection = document.getElementById("bottom")
const headingEmployment = document.getElementById("heading_employment")
const cat1 = document.getElementById("cat1")
const cat2 = document.getElementById("cat2")
const cat3 = document.getElementById("cat3")
const cat4 = document.getElementById("cat4")
const cat5 = document.getElementById("cat5")

const jobs = document.getElementsByClassName("job")

const jobsContent = document.getElementsByClassName("job-content")
const jobsTitle = document.getElementsByClassName("job-title")

const darkbg = "has-background-dark"
const lightbg = "has-background-light"

const darktext = "has-text-black"
const lighttext = "has-text-light"

mode.addEventListener("click", ()=>{

    if(mode.getAttribute("alt")==="light"){
        navbar.classList.remove("is-light")
        navbar.classList.add("is-dark")
        mode.setAttribute("alt","dark")
        hero.classList.remove(lightbg)
        hero.classList.add(darkbg)
        bottomSection.classList.remove(lightbg)
        bottomSection.classList.add(darkbg)
        headingEmployment.classList.remove(darktext)
        headingEmployment.classList.add(lighttext)
        cat1.classList.remove(darktext)
        cat1.classList.add(lighttext)
        cat2.classList.remove(darktext)
        cat2.classList.add(lighttext)
        cat3.classList.remove(darktext)
        cat3.classList.add(lighttext)
        cat4.classList.remove(darktext)
        cat4.classList.add(lighttext)
        cat5.classList.remove("has-text-grey")
        cat5.classList.add(lighttext)

        for(var i=0; i<jobs.length;i++){
            jobs.item(i).classList.remove("has-background-grey-lighter")
            jobs.item(i).classList.add("has-background-grey")
        }
        for(var i=0; i<jobsContent.length;i++){
            
            jobsContent.item(i).classList.add("has-text-light")
        }
        for(var i=0; i<jobsTitle.length;i++){
            jobsTitle.item(i).classList.add("has-text-light")
        }

        document.getElementById("icon").firstElementChild.setAttribute("data-icon","sun")
        
    }

    else{
        navbar.classList.add("is-light")
        navbar.classList.remove("is-dark")
        mode.setAttribute("alt","light")  
        hero.classList.add(lightbg)
        hero.classList.remove(darkbg)
        bottomSection.classList.add(lightbg)
        bottomSection.classList.remove(darkbg)
        headingEmployment.classList.add(darktext)
        headingEmployment.classList.remove(lighttext)
        cat1.classList.add(darktext)
        cat1.classList.remove(lighttext)
        cat2.classList.add(darktext)
        cat2.classList.remove(lighttext)
        cat3.classList.add(darktext)
        cat3.classList.remove(lighttext)
        cat4.classList.add(darktext)
        cat4.classList.remove(lighttext)
        cat5.classList.add("has-text-grey")
        cat5.classList.remove(lighttext)

        for(var i=0; i<jobs.length;i++){
            jobs.item(i).classList.add("has-background-grey-lighter")
            jobs.item(i).classList.remove("has-background-grey")
        }

        for(var i=0; i<jobsContent.length;i++){
            
            jobsContent.item(i).classList.remove("has-text-light")
        }
        for(var i=0; i<jobsTitle.length;i++){
            jobsTitle.item(i).classList.remove("has-text-light")
        }

        document.getElementById("icon").firstElementChild.setAttribute("data-icon","moon")
    }
})

//mobile menu

const burgerIcon = document.getElementById("burger")
const navbarMenu = document.getElementById("nav-links")

burgerIcon.addEventListener("click",()=>{
    navbarMenu.classList.toggle("is-active")
})