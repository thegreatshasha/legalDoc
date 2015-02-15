var variables=[];
var contents;
var list=[];
var b;
$('#createVariable').click(function(){
	varName=$('#variableName').val()
	alert (varName);
	variables.push(varName);
	console.log(variables);
    $('#allfields').append("<li>"+varName+"</li>");
    $(function() {
            $("#allfields li").draggable({
                appendTo: "body",
                helper: "clone",
                cursor: "select",
                revert: "invalid"
            });
            initDroppable($("#TextArea1"));
            function initDroppable($elements) {
                $elements.droppable({
                    hoverClass: "textarea",
                    accept: ":not(.ui-sortable-helper)",
                    drop: function(event, ui) {
                        var $this = $(this);
 
                        var tempid = ui.draggable.text();
                        var dropText;
                        dropText = " {" + tempid + "} ";
                        var droparea = document.getElementById('TextArea1');
                        var range1 = droparea.selectionStart;
                        var range2 = droparea.selectionEnd;
                        var val = droparea.value;
                        var str1 = val.substring(0, range1);
                        var str3 = val.substring(range1, val.length);
                        droparea.value = str1 + dropText + str3;
                    }
                });
            }
        });
    console.log('hi');
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

