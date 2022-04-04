
 //JS for Entire container 

 var checkboxes = document.querySelectorAll('input.subOption'),
 checkall = document.getElementById('option');
 
 for(var i=0; i<checkboxes.length; i++) {
 checkboxes[i].onclick = function() {
 var checkedCount = document.querySelectorAll('input.subOption:checked').length;
 
 checkall.checked = checkedCount > 0;
 checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
 }
 }
 
 checkall.onclick = function() {
 for(var i=0; i<checkboxes.length; i++) {
 checkboxes[i].checked = this.checked;
 }
}


//JS for container1

var checkboxes1 = document.querySelectorAll('input.subOption1'),
checkall1 = document.getElementById('option1');

for(var j=0; j<checkboxes1.length; j++) {
checkboxes1[j].onclick = function() {
var checkedCount1 = document.querySelectorAll('input.subOption1:checked').length;

checkall1.checked = checkedCount1 > 0;
checkall1.indeterminate = checkedCount1 > 0 && checkedCount1 < checkboxes1.length;
}
}

checkall1.onclick = function() {
for(var j=0; j<checkboxes1.length; j++) {
checkboxes1[j].checked = this.checked;
}
}


//Js for container2

var checkboxes2 = document.querySelectorAll('input.subOption2'),
checkall2= document.getElementById('option2');

for(var k=0; k<checkboxes2.length; k++) {
checkboxes2[k].onclick = function() {
var checkedCount2 = document.querySelectorAll('input.subOption2:checked').length;

checkall2.checked = checkedCount2 > 0;
checkall2.indeterminate = checkedCount2 > 0 && checkedCount2 < checkboxes2.length;
}
}

checkall2.onclick = function() {
for(var k=0; k<checkboxes2.length; k++) {
checkboxes2[k].checked = this.checked;
}
}


//Js for container3

var checkboxes3= document.querySelectorAll('input.subOption3'),
checkall3 = document.getElementById('option3');

for(var l=0; l<checkboxes3.length; l++) {
checkboxes3[l].onclick = function() {
var checkedCount3 = document.querySelectorAll('input.subOption3:checked').length;

checkall3.checked = checkedCount3 > 0;
checkall3.indeterminate = checkedCount3 > 0 && checkedCount3 < checkboxes3.length;
}
}

checkall3.onclick = function() {
for(var l=0; l<checkboxes3.length; l++) {
checkboxes3[l].checked = this.checked;
}
}
