function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}

onclick="formvalidation('myform');return false;"

function formvalidation(){
	console.log(document.getElementById("HunterEmail").value.indexOf("@") === -1);
	if (document.getElementById("HunterEmail").value.indexOf("@") === -1){
		console.log("Not valid");
		var notvalidemailnotification = document.createTextNode("Not a valid email address. (If you don't submit a valid address we won't be able to use it to contact you for the hunt)");
		//notvalidemailnotification.setAttribute("class","errortext");
		document.getElementById("errormessageholder").appendChild(notvalidemailnotification);
		return false;
	}
	
	return true;
}

function confirmemail(email){
	return document.getElementById("email").value === email
}