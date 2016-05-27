function buildtable(users){
	var table= document.getElementById("competitorstable");
	console.log(users);
	
	for (var index in users){
		console.log(users[index]);
		addrow(users[index],table);
		//add new row to table with 
	}
}

function addrow(object,table){
	var row = document.createElement("tr");
	row.setAttribute("id","competitorstablerow");
	for (var key in object){
		var column = document.createElement("th");
		column.appendChild(document.createTextNode(object[key]));
		row.appendChild(column);
	}
	table.appendChild(row);
}