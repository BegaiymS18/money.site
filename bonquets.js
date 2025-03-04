  function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
 
 
 
 function scrollToSection(piony) {
            document.getElementById(piony).scrollIntoView({ behavior: "smooth" });
        }

function scrollToSection(gortenzi) {
            document.getElementById(gortenzi).scrollIntoView({ behavior: "smooth" });
        }        

        function scrollToSection(rozy) {
            document.getElementById(rozy).scrollIntoView({ behavior: "smooth" });
        }        


           function scrollToSection(romashki) {
            document.getElementById(romashki).scrollIntoView({ behavior: "smooth" });
        }        


           function scrollToSection(gipsofile) {
            document.getElementById(gipsofile).scrollIntoView({ behavior: "smooth" });
        }        
        
           function scrollToSection(siren) {
            document.getElementById(siren).scrollIntoView({ behavior: "smooth" });
        }        
        
           function scrollToSection(gvozdiki) {
            document.getElementById(gvozdiki).scrollIntoView({ behavior: "smooth" });
        }        
        
           function scrollToSection(orxidei) {
            document.getElementById(orxidei).scrollIntoView({ behavior: "smooth" });
        }                

           function scrollToSection(podsolnuxi) {
            document.getElementById(podsolnuxi).scrollIntoView({ behavior: "smooth" });
        }                


         function scrollToSection(lilii) {
            document.getElementById(lilii).scrollIntoView({ behavior: "smooth" });
        }        
        
         function scrollToSection(tulpan) {
            document.getElementById(tulpan).scrollIntoView({ behavior: "smooth" });
        }                


        function scrollToSection(xrizantema) {
            document.getElementById(xrizantema).scrollIntoView({ behavior: "smooth" });
        }  
        
        
        function scrollToSection(mishki) {
            document.getElementById(mishki).scrollIntoView({ behavior: "smooth" });
        }  

          
        function scrollToSection(klubnika) {
            document.getElementById(klubnika).scrollIntoView({ behavior: "smooth" });
        }  

          
        function scrollToSection(torty) {
            document.getElementById(torty).scrollIntoView({ behavior: "smooth" });
        }  


         window.onscroll = function () {
            let scrollUpBtn = document.getElementById("scrollUpBtn");
            if (window.scrollY > 100) { // 100px-ден төмен болса, батырманы көрсетеміз
                scrollUpBtn.style.display = "block";
            } else {
                scrollUpBtn.style.display = "none";
            }
        };

        document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".menu").classList.add("visible");
});
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}