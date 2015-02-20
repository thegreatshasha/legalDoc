var variables=[];
var contents;
var list=[];
var b;
$('#createVariable').click(function(){
	varName=$('#variableName').val()
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

            function generateForm(variables){
                var html = "";

                for(var i in variables) {
                    variable = variables[i];
                    html += '<label>'+variable+':</label>'
                    html += '<input type="text" ng-model="' + variable + '">';
                }
                $interpolate = angular.injector(['ng', 'main.app']).get("InterpolateService")(html);
                return $interpolate(html);
            }

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
                        var result = str1 + dropText + str3;
                        droparea.value = result;

                        $("#generatedForm").html(generateForm(variables));
                        $interpolate = angular.injector(['ng', 'main.app']).get("InterpolateService")(html);
                        $("#generatedHTML").html($interpolate(result));
                    }
                });
            }
        });
    console.log('hi');
})


