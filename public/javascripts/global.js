function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}

onclick="formvalidation('myform');return false;"

function formvalidation(){
	console.log(document.getElementById("").value.indexOf("@") === -1);
	if (document.getElementById("HunterEmail").value.indexOf("@") === -1){
		console.log("Not valid");
		var notvalidemailnotification = document.createTextNode("Not a valid email address. Please re-enter.");
		//notvalidemailnotification.setAttribute("class","errortext");
		document.getElementById("errormessageholder").appendChild(notvalidemailnotification);
		return false;
	}
	
	return true;
}

function confirmemail(email){
	if (document.getElementById("email").value === email){
		return true
	}
	error = document.createTextNode("That email doesn't match the one you entered earlier. If you entered it incorrectly on the homepage, please go back to the homepage and re-enter it")
	document.getElementById("errormessageonjoin").appendChild(error)
	return false;
}

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

//changes page for mobile

	if (screen.width>700){
		document.getElementById("HunterEmail").appendChild();
	}

mobile();