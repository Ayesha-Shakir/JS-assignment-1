var a = 2,b = 1;
var result = --a - --b + ++b + b--;
document.write("--a;" + "<br>" + "pre decrement operator will decrease the value of a by 1 and this would become a=1 " + "<br>" );
//document.write("--a = " + --a + "<br>" );
document.write("--a - --b; " + "<br>" + "pre decrement operator will decrease the value of a and b by 1.This would become a=1 and b=0.Moreover --a - --b => 1-0 = 1" + "<br>" );
//document.write("--a - --b = " + --a - --b + "<br>" );
document.write("--a - --b + ++b " + "<br>" + "pre decrement operator will decrease the value of a and b by 1.This would become a=1 and b=0.Moreover pre increment operator will increase the value of b by 1.Hence --a - --b + ++b => 1-0+1 = 2" + "<br>" );
//document.write("--a - --b + ++b = " + --a - --b + ++b + "<br>" );
document.write("--a - --b + ++b " + "<br>" + "pre decrement operator will decrease the value of a and b by 1.This would become a=1 and b=0.Moreover pre increment operator will increase the value of b by 1.Also the post decrement operator will not change the value of b at first but print the existing one and then will decrease the value of b by 1.Hence --a - --b + ++b + b-- => 1-0+1+1 = 3" + "<br>" );
//document.write("--a - --b + ++b = " + --a - --b + ++b + b-- + "<br>" );
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("Result is " + result + "<br>");
