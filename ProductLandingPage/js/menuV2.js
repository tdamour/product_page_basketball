// target to where we want to go to. 
function smoothScroll(target, duration, event){
	var target = document.querySelector(target); 
	// console.log(target);
	
	var targetPosition = target.getBoundingClientRect().top; 
	
	// console.log(targetPosition); 
	
	var startPosition = window.pageYOffset - 50; 
	
	console.log(startPosition); 
	
	var distance = targetPosition - startPosition; 
	
	console.log(distance); 
	
	var startTime = null; 
	

	
	function animation(currentTime)
	{
	  if(startTime == null){
		startTime = currentTime; 
	  }
	  var timeElapsed = currentTime - startTime; 
	  
	  var run = ease(timeElapsed,startPosition,distance,duration);
	  window.scrollTo(0,run); 
	  if(timeElapsed < duration) requestAnimationFrame(animation);
	  
	  
    }
	
	function ease(t,b,c,d){
		t /= d / 2; 
		if(t < 1) return c / 2 * t * t + b; 
		t--; 
		return -c / 2 * (t * (t-2)-1) + b; 
	}
	
	requestAnimationFrame(animation); 
	
	 document.getElementsByClassName("nav-toggle")[1].checked = false;
	 event.preventDefault(); 
}

function scrollToSection(target){
	var navLinkId = target.href; 
	var splitOffId = navLinkId.split(".html"); 
	navLinkId = splitOffId[1]; 
	debugger; 
	target.addEventListener('click', function() {
		smoothScroll(navLinkId, 1000, event); 
	});
}