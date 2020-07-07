const scrollElems = document.querySelectorAll('.scroll');

// add event listeners to the element 
for(let i = 0; i < scrollElems.length; i++){
	const elem = scrollElems[i]; 
	
	elem.addEventListener('click', function(e){
		e.preventDefault(); 
		
		// 1. Get the element id to which you want to scroll 
		const scrollElemId = e.target.href.split('#')[1]; 
		
		// 2. find that node from the document 
		const scrollEndElem = document.getElementById(scrollElemId); 
		
		// 3. and well animate to that node 
		const anim = requestAnimationFrame((timestamp) => {
			const stamp = timestamp || new Date().getTime(); 
			const duration = 1200; 
			const start = stamp; 
			
			const startScrollOffset = window.pageYOffset; 
			
			const scrollEndElemTop = scrollEndElem.getBoundingClientRect().top; 
			
			scrollToElem(start, stamp, duration, scrollEndElemTop, startScrollOffset);
		})
		
	})
}

// Lets ignore it for the moment.
/* 
	So our scrollToElem method takes 5 arguments namely startTime ( starting time stamp), currentTime ( current timeStamp), duration (to which our animation should run), 
	scrollEndElemTop (target element top position), startScrollOffset(starting scroll position).
   So what we do is check the runtime by subtracting the current time stamp from the start timeStamp (which helps us to get the runtime).
   So next we gonna divide the total time our code has already run by the total desired duration to get a factor out of it. We check now if the runtime is less than the actual duration it should run, 
   we gonna recall the animation method, until we reaches the target element with given duration.
*/
const easeInCubic = function (t) { return t*t*t }
 
const scrollToElem = (startTime, currentTime, duration, scrollEndElemTop, startScrollOffset) => {
   const runtime = currentTime - startTime;
   let progress = runtime / duration;
   
   progress = Math.min(progress, 1);
   
   const ease = easeInCubic(progress);
   
   window.scroll(0, startScrollOffset + (scrollEndElemTop * ease));
if(runtime < duration){
     requestAnimationFrame((timestamp) => {
       const currentTime = timestamp || new Date().getTime();
       scrollToElem(startTime, currentTime, duration, scrollEndElemTop, startScrollOffset);
     })
   }
}