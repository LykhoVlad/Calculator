function insert(num){
	document.getElementById('calcarea').value = document.getElementById('calcarea').value+num
}

function equally(){
	var exp = document.getElementById('calcarea').value;
	if(exp){
		document.getElementById('calcarea').value =eval(exp);	
	}
}

function clean(){
	document.getElementById('calcarea').value = "";
}

function back(){
	var exp = document.getElementById('calcarea').value;
	document.getElementById('calcarea').value = exp.substring(0,exp.length-1);
}

function per(){
	var exp = document.getElementById('calcarea').value;
	document.getElementById('calcarea').value = exp / 100;

}

document.getElementById('calcarea').onkeypress = function(event){
	// console.log(event);
	if(event.keyCode<48 || event.keyCode>57 ){
		alert('Не число!')
		return false;
	}
}

document.getElementsByClassName('button').onmouseup = function(e){
	var btn = document.getElementsByClassName('button'); 
	btn.setAttribute("style","background-color: blue");
}