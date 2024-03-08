// show siderbar
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
// sider shoow 
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
// validate if contact exists 
if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}

if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}
// Skills tabs
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills_active')
            })
            target.classList.add('skills_active')

            tabs.forEach(tab => {
                tab.classList.remove('skills_active')
            })
            tab.classList.add('skills_active')
        })
    })

// Mixup filter portfulio
let mixerportfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});
// link active work 
const linkWork = document.querySelectorAll('.work_item')

function activeWork() {
    linkWork.forEach(L => L.classList.remove('active_work'))
    this.classList.add('active_work')
}

linkWork.forEach(l=> l.addEventListener("click",activeWork))
// work popup 
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work_button")){
     toggleportfoliopopup();
     portfolioItemDetails(e.target.parentElement);
    }
})
function toggleportfoliopopup() {
    document.querySelector(".portfolio_popup").classList.toggle("open");
}

document.querySelector(".portfolio-close").addEventListener("click", toggleportfoliopopup)

function portfolioItemDetails(portfulioItem) {
   document.querySelector(".pp_thumbnail img").src = portfulioItem.querySelector(".work_img").src;
   document.querySelector(".portfolio_popup-subtitle span").innerHTML = portfulioItem.querySelector(".work_title").innerHTML;
   document.querySelector(".portfolio_popup-body").innerHTML = portfulioItem.querySelector(".portfulio_item-details").innerHTML;
}

// scrool section active link 

const sections = document.querySelectorAll("section[id]");

// add event lisner for scrool bar 
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
//   get current scrool posoion 
let scrollY = window.pageYOffset;
// now we loop though section to be innerHeight, top and id value 
sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute("id");




if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
 {
    document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link")
}
else 
{
    document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link")
}
})
}
