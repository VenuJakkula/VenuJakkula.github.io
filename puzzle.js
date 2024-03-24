$(document).ready(function(){

var myCollection = document.getElementsByTagName("p");
var i;
var space;
$("#startPuzzle").click(function(){
	alert("Welcome, Find the space from the table and move to one end of the table. you can also change the table and make the game easy by entering the puzzle before playing. \nTarget: Make order of the alphabets(A-X) without space in between.\nStart by clicking on `findspace` ");
});

$("#findSpace").click(function(){
	for (i = 0; i < myCollection.length; i++) {
		if(myCollection[i].innerHTML=="-"){
			space=i+1;
			myCollection[i].style.backgroundColor = "red";
		}
	}
	alert("space found at... "+space);
});

$("#puzInput").click(function(){
	var str=$("input:text").val();
	for (i = 0; i < myCollection.length; i++) {
		$("#"+(i+1)+"").text(str.charAt(i));
	}
	for (i = 0; i < myCollection.length; i++) {
		if(myCollection[i].innerHTML=="-"){
			space=i+1;
			myCollection[i].style.backgroundColor = "red";
		}
	}

		
});



$("#leftButton").click(function(){
	if(space==0 || (space-1)%5==0){
		alert("Left Move can't be performed..");	
	}
	else{
	var c=$("#"+(space-1)+"").text();
	$("#"+(space-1)+"").text("-");
	$("#"+space+"").text(c);
	space--;
	if($("p").text()=="-ABCDEFGHIJKLMNOPQRSTUVWX" || $("p").text()=="ABCDEFGHIJKLMNOPQRSTUVWX-"){
		alert("win "+$("p").text());
		document.getElementById("table").style.backgroundColor = "lightgreen";
	}
	}
});
$("#rightButton").click(function(){
	if(space%5==0){
		alert("Right Operation can't be performed..");	
	}
	else{
	var c=$("#"+(space+1)+"").text();
	$("#"+(space+1)+"").text("-");
	$("#"+space+"").text(c);
	space++;
	if($("p").text()=="-ABCDEFGHIJKLMNOPQRSTUVWX" || $("p").text()=="ABCDEFGHIJKLMNOPQRSTUVWX-"){
		alert("win "+$("p").text());
		document.getElementById("table").style.backgroundColor = "lightgreen";
	}
	}
});
$("#topButton").click(function(){
	if(space<6){
		alert("Top Move can't be performed..");	
	}
	else{
	var c=$("#"+(space-5)+"").text();
	$("#"+(space-5)+"").text("-");
	$("#"+space+"").text(c);
	space=space-5;
	if($("p").text()=="-ABCDEFGHIJKLMNOPQRSTUVWX" || $("p").text()=="ABCDEFGHIJKLMNOPQRSTUVWX-"){
		alert("win "+$("p").text());
		document.getElementById("table").style.backgroundColor = "lightgreen";
	}
	}
});
$("#bottomButton").click(function(){
	if(space>20){
		alert("Top Move can't be performed..");	
	}
	else{
	var c=$("#"+(space+5)+"").text();
	$("#"+(space+5)+"").text("-");
	$("#"+space+"").text(c);
	space=space+5;
	if($("p").text()=="-ABCDEFGHIJKLMNOPQRSTUVWX" || $("p").text()=="ABCDEFGHIJKLMNOPQRSTUVWX-"){
		alert("win "+$("p").text());
		document.getElementById("table").style.backgroundColor = "lightgreen";
	}
	}
	
});


});
