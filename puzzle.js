$(document).ready(function(){

	var myCollection = document.getElementsByTagName("p");
	var target = "ABCDEFGHIJKLMNOPQRSTUVWX"
	var i;
	var space;

	// Check if instructions should be shown after reload
    if (localStorage.getItem("showInstructions") === "true") {
        localStorage.removeItem("showInstructions"); // Remove flag after use
        setTimeout(function () {
            showPopup("instructions","",5000);
        }, 500); // Delay to ensure popup loads after reload
    }

	// Close Popup
	$("#closePopup, #popup-overlay").click(function() {
		$("#popup, #popup-overlay").fadeOut();
	});

	
	function showPopup(type, message,seconds=2000) {
		let list = $("#popup-list");
		let title = $("#popup-title");
		let winMessage = $("#win-message");

		if (type === "instructions") {
			title.text("How to Play");
			list.empty().show();
			winMessage.hide();
			let instructions = [
				"Begin the puzzle using the Start button on the right.",
				"Locate the empty space in the table and move it to one of the corners (top-left or bottom-right).",
				"Customize the puzzle by entering your own letters (A to X) in the grid.",
				"Arrange the alphabets (A to X) in the correct order without spaces.",
				"Click on Find Space to identify the empty position and start rearranging the letters."
			];
			instructions.forEach(function(item) {
				list.append("<li>" + item + "</li>");
			});
		} else if (type === "win") {
			title.text("Congratulations!");
			list.hide();
			winMessage.text("🎉 Yay! You won! 🎉").show();
		} else if (type === "warning") {
			title.text("Warning!");
			list.hide();
			winMessage.text("⚠️ "+message+" ⚠️").css("color", "red").show();
		} else if (type === "note") {
			title.text("Note:");
			list.hide();
			winMessage.text(message).css("color", "blue").show();
		}

		$("#popup, #popup-overlay").fadeIn();

		// Auto-hide after 3 seconds
		setTimeout(function() {
			$("#popup, #popup-overlay").fadeOut();
		}, seconds);
	}

	$("#startPuzzle").click(function(){
		// alert("Welcome!!\nFind the space from the table and move to one end of the table. you can also change the table and make the game easy by entering the puzzle before playing. \nTarget: Make order of the alphabets(A-X) without space in between.\nStart by clicking on `findspace` ");
		// $("#popup, #popup-overlay").fadeIn();
		localStorage.setItem("showInstructions", "true"); // Set flag before reloading
		location.reload(); 
		// showPopup("instructions","test",6000);
	});

	$("#findSpace").click(function(){
		for (i = 0; i < myCollection.length; i++) {
			if(myCollection[i].innerHTML=="-"){
				space=i+1;
				myCollection[i].style.backgroundColor = "red";
			}
		}
		// alert("space found at... "+space);
		showPopup("note","space found at "+space,1000)
	});

	$("#puzInput").click(function(){
		var str=$("input:text").val();
		target = str.replace(/-/g, "");
		showPopup("note","Target Changed to "+target,2000)
		for (i = 0; i < myCollection.length; i++) {
			$("#"+(i+1)+"").text(str.charAt(i));
			// $("#"+(i+1)+"").style.backgroundColor = "";
		}
		for (i = 0; i < myCollection.length; i++) {
			if(myCollection[i].innerHTML=="-"){
				space=i+1;
				myCollection[i].style.backgroundColor = "red";
			}
			else{
				myCollection[i].style.backgroundColor = "";
			}
		}
		document.getElementById("table").style.backgroundColor = "";

			
	});



	$("#leftButton").click(function(){
		if(space==0 || (space-1)%5==0){
			showPopup("warning","No left move available!",2000)
		}
		else{
			var c=$("#"+(space-1)+"").text();
			$("#"+(space-1)+"").text("-");
			$("#"+space+"").text(c);
			space--;
			if($("p").text()=="-"+target || $("p").text()==target+"-"){
				// alert("win "+$("p").text());
				showPopup("win",$("p").text())
				document.getElementById("table").style.backgroundColor = "lightgreen";
				for (i = 0; i < myCollection.length; i++) {
					myCollection[i].style.backgroundColor = "lightgreen";
				}
			}
		}
	});
	$("#rightButton").click(function(){
		if(space%5==0){
			showPopup("warning","No right move available!");	
		}
		else{
			var c=$("#"+(space+1)+"").text();
			$("#"+(space+1)+"").text("-");
			$("#"+space+"").text(c);
			space++;
			if($("p").text()=="-"+target || $("p").text()==target+"-"){
				// alert("win "+$("p").text());
				showPopup("win",+$("p").text())
				document.getElementById("table").style.backgroundColor = "lightgreen";
				for (i = 0; i < myCollection.length; i++) {
					myCollection[i].style.backgroundColor = "lightgreen";
				}
			}
		}
	});
	$("#topButton").click(function(){
		if(space<6){
			showPopup("warning","No top move available!");	
		}
		else{
			var c=$("#"+(space-5)+"").text();
			$("#"+(space-5)+"").text("-");
			$("#"+space+"").text(c);
			space=space-5;
			if($("p").text()=="-"+target || $("p").text()==target+"-"){
				// alert("win "+$("p").text());
				showPopup("win",$("p").text())
				document.getElementById("table").style.backgroundColor = "lightgreen";
				for (i = 0; i < myCollection.length; i++) {
					myCollection[i].style.backgroundColor = "lightgreen";
				}
			}
		}
	});
	$("#bottomButton").click(function(){
		if(space>20){
			showPopup("warning","No bottom move available!");	
		}
		else{
			var c=$("#"+(space+5)+"").text();
			$("#"+(space+5)+"").text("-");
			$("#"+space+"").text(c);
			space=space+5;
			if($("p").text()=="-"+target || $("p").text()==target+"-"){
				// alert("win "+$("p").text());
				showPopup("win",$("p").text())
				document.getElementById("table").style.backgroundColor = "lightgreen";
				for (i = 0; i < myCollection.length; i++) {
					myCollection[i].style.backgroundColor = "lightgreen";
				}
			}
		}
		
	});


});
