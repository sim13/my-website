var element = document.getElementById("menu");
var element2 = document.getElementById("wrapper");
var element3 = document.getElementById("heading");
var element4 = document.getElementById("wrap2.animate");


//___##_CLICK_HANDLERS_##___//
//click events and the functions triggered by them
//- LIST :-
//- # Proceed button click (#butt)
//- # Cross button to hide overlay (#cross)

document.getElementById("butt").addEventListener('click', function()
{
	menu.className = (menu.className == "animate")? "" :"animate";

	if(menu.className =="animate") {
	
		element2.style.backgroundColor="black";
		element2.style.opacity=0.3;
		element3.className="";
	}
})

document.getElementById("cross").addEventListener('click', function() { 
	
	if(cross.className == "wrap") {
		cross.className = "";
		wrap2.className = "";
		element2.style.backgroundColor = "black";
		element2.style.opacity = 0.99;
	} else {
		cross.className ="";
	} 
})



var elems = document.getElementsByClassName("item");

for (i=0 ; i<6 ; i++) {
	elems[i].onclick= function () {
		if (wrap2.className == "") {   
			wrap2.className = "animate";
			cross.className = "wrap";
		}
	}

	document.getElementById("wrap2").innerHTML = "<p class = 'text' >About Me : My name is Simrin</p> ";
	console.log(document.getElementById("wrap2").innerHTML);
}