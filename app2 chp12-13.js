var a = +prompt("Enter 1st integer");
var b = +prompt("Enter 2nd integer");

if ( a===b ){
    alert(a + " and " + b  + " are equal" );
}
else if ( a > b ){
    alert(a + " is greater than "  + b   ); 
}
else {
    alert(b + " is greater than " + a   );
}