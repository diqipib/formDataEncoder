# formDataEncoder

This Windows script component was build to simplify html form data encoding. Despite the fact that it is written in JavaScript, it could be used in many different programming languages (VBScript / AHK / Autoit / etc..). 
The big bonus is that windows script component could be used without registration and it has open source. 

Properties:

	action (get/put)	 
	
		This property sets or returns destination url. If method "GET" is used and some fields are added, action returns url with parameters. 
		Sample: http://www.some-site.ru?a=1&b=2&c=3&d=4
		If url already had some parameters before method "encode" is called they will be removed.

	method (get/put)
		
		Request methods "GET" / "POST"
		By default returns "GET"
	
	enctype (get/put)	 
		
		Encoding type:
		
		"application/x-www-form-urlencoded"	- Used for simple text forms
		"multipart/form-data"			- Used when form contains files
		"text/plain"				- Send the data without any encoding

	boundary (get/put)
		
		Boundary (splitter of data blocks). Used only for sending multipart data

	contentType (get/put)
		
		By default returns enctype, but for multipart request returns enctype and boundary
		Sample: (Content-Type: multipart/form-data; boundary=-----xxxxxxxx)

Methods:

	addTextField(fieldName, value)
		
		Method for adding text field name and value pair

	addFileField(fieldName, fileName, fileBody, [contentType])
		
		Method for adding file field.
		fieldName	- Field name
		fileName	- File name that will be sent (Full path is removed automatically)
		fileBody	- Binary data or text. Content of the file
		contentType - contentType value. It is optional. If not set it will be "application/octet-stream" by default.

	encode()
		
		This function is used to start encode process. 
		For method "POST", result data will return out from this function.
		For method "GET", result will return in action property
		
	clear() 
		
		This action resets all settings in object. Often is used to clear data after usage or just for clearing data before next form data encoding.


Samples:

	Object creation:
	
	So You can create object using just one line of code: GetObject("script:file:formDataEncoder.wsc"). In this case file "formDataEncoder.wsc" has to be in the same folder.
	Of course You can move it in any other directory and call it like this: 
		GetObject("script:file:includes\formDataEncoder.wsc")
		GetObject("script:C:\somefolder\subfolder\formDataEncoder.wsc")
