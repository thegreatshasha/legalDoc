var variables=[];
var contents;
var list=[];
var b;
$('#createVariable').click(function(){
	varName=$('#variableName').val()
	alert (varName);
	variables.push(varName);
	console.log(variables);
})


$('.typingArea').keyup(function(){
	contents=$('#workSpace').text();
	
})

$('#sync').click(function(){
	console.log(contents);
	for (var i = 0; i < variables.length; i++) {
		console.log(variables[i]);
		item=contents.match(variables[i]);
		b=contents.replace(variables[i],"<input type='text' name='varia'>")
		console.log(item);
	};
	console.log(b);
	$('#workSpace').html(b);

})

