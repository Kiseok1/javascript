/**
 * 두수를 입력하여ㅕ 첫번째 숫자부터 두번째 숫자까지의 합
 */
var sum = 0;
var input1 = Number(prompt("숫자를 입력하세요","0"));
var input2 = Number(prompt("숫자를 입력하세요","0"));
for(var i=input1;i<=input2;i++){
	sum += i;
}
document.write(input1+"부터 "+input2+"까지 합 : "+sum,"<br>");