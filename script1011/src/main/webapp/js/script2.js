/**
 * 
 */
// 2개의 숫자를 입력받아 두수를 사칙연산 결과값을 출력하시오.
// prompt("숫자를 입력하세요,"0");

function cal(){
	var input1 = Number(prompt("숫자를 입력하세요","0"));
	var input2 = Number(prompt("숫자를 입력하세요","0"));
	var result1 = input1 + input2;
	var result2 = input1 - input2;
	var result3 = input1 * input2;
	var result4 = input1 / input2;
	document.write("<h1> 더하기 : "+result1+"</h1>"+"<br>");
	document.write("<h1> 빼기 : "+result2+"</h1>"+"<br>");
	document.write("<h1> 곱하기 : "+result3+"</h1>"+"<br>");
	document.write("<h1> 나누기 : "+result4+"</h1>"+"<br>");
}
