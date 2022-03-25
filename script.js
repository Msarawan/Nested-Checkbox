//Js for container1

var checkboxes1 = document.querySelectorAll('input.subOption1'),
checkall1 = document.getElementById('option1');

for(var i=0; i<checkboxes1.length; i++) {
checkboxes1[i].onclick = function() {
var checkedCount1 = document.querySelectorAll('input.subOption1:checked').length;

checkall1.checked = checkedCount1 > 0;
checkall1.indeterminate = checkedCount1 > 0 && checkedCount1 < checkboxes1.length;
}
}

checkall1.onclick = function() {
for(var i=0; i<checkboxes1.length; i++) {
checkboxes1[i].checked = this.checked;
}
}

//Js for container2

var checkboxes2 = document.querySelectorAll('input.subOption2'),
checkall2= document.getElementById('option2');

for(var j=0; j<checkboxes2.length; j++) {
checkboxes2[j].onclick = function() {
var checkedCount2 = document.querySelectorAll('input.subOption2:checked').length;

checkall2.checked = checkedCount2 > 0;
checkall2.indeterminate = checkedCount2 > 0 && checkedCount2 < checkboxes2.length;
}
}

checkall2.onclick = function() {
for(var j=0; j<checkboxes2.length; j++) {
checkboxes2[j].checked = this.checked;
}
}


//Js for container3

var checkboxes3= document.querySelectorAll('input.subOption3'),
checkall3 = document.getElementById('option3');

for(var k=0; k<checkboxes3.length; k++) {
checkboxes3[k].onclick = function() {
var checkedCount3 = document.querySelectorAll('input.subOption3:checked').length;

checkall3.checked = checkedCount3 > 0;
checkall3.indeterminate = checkedCount3 > 0 && checkedCount3 < checkboxes3.length;
}
}

checkall3.onclick = function() {
for(var k=0; k<checkboxes3.length; k++) {
checkboxes3[k].checked = this.checked;
}
}

