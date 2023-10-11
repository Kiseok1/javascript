/**
 * 타입까지 비교
 */
//입력 2개
var input = 0;
var weight = 0;

input = Number(prompt("신장을 입력하세요"),"0");
weight = Number(prompt("체중을 입력하세요"),"0");

var height = input/100;
var result = weight/(height*height);

document.write("BMI : "+result+"<br>");

if(result<18.5){
	document.write("저체중");
} else if(result<23){
	document.write("정상");
} else if(result<25){
	document.write("과체중");
} else if(result<30){
	document.write("경도비만");
} else {
	document.write("중증도비만");
}