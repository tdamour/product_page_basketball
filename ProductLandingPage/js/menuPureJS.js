let toggleClick = 0; 
const navigation = document.querySelector('#header');
const navHam = document.querySelector('.nav-toggle-label');
var navLinks = document.querySelectorAll('.nav-link a');
const navToggle = document.querySelector('.nav-toggle');
var contentSections = document.querySelectorAll('.content_section');
var logoLink = document.querySelector('#logo-img-link'); 

// load event listener 
loadEventListeners(); 

// methods
function loadEventListeners(){
	
  document.addEventListener('DOMContentLoaded', function(){
		ridOfPaddingTopsOnLogo(contentSections); 
	});
	
  window.addEventListener("resize", () => {
	  if(window.innerWidth > 1084)
	  {
		ridOfPaddingTopsOnLogoOnResize(contentSections)
	  }
  });
  
  navHam.addEventListener('click', clickAction); 
  
  for (var i = 0; i < navLinks.length; i++)
  {
	    console.log("Length of nodeList is " + navLinks.length);
	    console.log(navLinks[i]);
		navLink = navLinks[i]; 
		navLink.addEventListener('click', function(e){
			console.log(this.getAttribute("href")); 
			selectNavLink(this, contentSections);
		}, true);
  }
	
  logoLink.addEventListener('click', function()
	{
		ridOfPaddingTopsOnLogo(contentSections)
	}); 
}

function clickAction()
{
	navHam.classList.toggle('active'); 
	toggleClick++; 
	console.log(`toggleClick is ${toggleClick}`);	  
}

// select navlink 
function selectNavLink(navLink, contentSections)
{
	var navHref = navLink.href.split("#").pop(); 

	if(toggleClick != 0)
	{
		var hashHref = '#'+ navHref;
		toggleClick = 0;
		navToggle.checked = false; 
		navHam.classList.toggle('active'); 
		if(window.innerWidth < 1084)
		{	
		  paddingTops(hashHref, navHref, contentSections); 
		}
		
		scrollTo(document.body, hashHref.offsetTop, 600);
	}
}

// scroll to function with time duration 
function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;
	
		setTimeout(function() {
			element.scrollTop = element.scrollTop + perTick;
			if (element.scrollTop === to) return;
			scrollTo(element, to, duration - 10);
		}, 10);
}

// change paddingtops 
function paddingTops(hash, hashlessHash, contentSections)
{
	ridOfPaddingTops(hash, hashlessHash, contentSections); 
	document.querySelector(hash).style.paddingTop = "12.5rem";
}

// on logo click, make all content sections event again 
function ridOfPaddingTopsOnLogo(contentSections)
{
	console.log(window.innerWidth);
	for(var i = 0; i < contentSections.length; i++)
	{
		contentSections[i].style.paddingTop = "0px"; 
	}
}

function ridOfPaddingTopsOnLogoOnResize (contentSections)
{
		ridOfPaddingTopsOnLogo(contentSections);
}

// rid of padding Tops 
function ridOfPaddingTops(hash, hashlessHash, contentSections)
{
	for(var i = 0; i < contentSections.length; i++)
	{
		if(contentSections[i].id != hashlessHash)
		{
			contentSections[i].style.paddingTop = "0px"; 
		}
	}
}

// simple scroll to function 
/* function scrollIt(element) {
  document
  .getElementById(element)
  .scrollTo({
    behavior: 'smooth',
  });
} */ 