

var phone = prompt("Enter your phone number in the format \n XXX-XXX-XXXX \n \
We promise we won't give it to anyone.");

if (phone.charAt(3)==="-" && phone.charAt(7)==="-" && phone.length===12) {
	alert("Great, your number is valid.");
}
else {
	alert("Dang, that's not formatted correctly!")
}	

var birthday = prompt("Enter your birthday in the format \n XX/XX/XX");

 if (birthday.charAt(2)==="/" && birthday.charAt(5)==="/" && birthday.length===8) {
 	alert("Great, your date is valid.");
 }
else {
 	alert("Dang, that's not formatted correctly!")
 }		

var postcode = prompt("Enter your postal code in the format \n XXXXX \n or \n XXXXX-XXXX" );

 if (postcode.length===5 || postcode.length===10 && postcode.charAt(5)==="-") {
 	alert("Great, your post code is valid.");
 }
else {
 	alert("Dang, that's not formatted correctly!")
 }		
var state = prompt("Enter your state abbreviation.");

 if (state.length===2) {
 	state = state.toUpperCase();
 	console.log(state.toUpperCase());
 	alert("Great, your state abbreviation is valid.");

 }
else {
 	alert("Dang, that's not formatted correctly!")
 }	

var married = prompt("Are you married?");

 if (married==="yes" || married ==="no" || married===married.toUpperCase() || married===married.charAt(0).toUpperCase() + married.substring(1))
 {
 alert("Thanks!");

 }
else {
 	alert("Please enter yes or no.")
 }	
