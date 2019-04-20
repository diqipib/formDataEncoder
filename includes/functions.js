// Function for reading file data in binary mode
function readFile(fileName){
	var stream = new ActiveXObject('ADODB' + '.Stream');
	stream.type = 1;
	stream.open();
	stream.loadFromFile(fileName);
	var data = stream.Read();
	stream.close();
	return data
}

// Function for saving data dump
function saveDump(data,fileName){
	var stream = new ActiveXObject('ADODB' + '.Stream');
	stream.type = 1;
	stream.open();
	stream.write(data);
	stream.saveToFile(fileName,2);	
	stream.close();
}