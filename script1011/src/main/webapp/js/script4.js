/**
 * 
 */
var sum = 0;
var count = Number(prompt("숫자를 입력하세요","0"));
for(var i=1;i<=count;i++){
	sum += i;
}
document.write("1부터 "+count+"까지 합 : "+sum,"<br>");