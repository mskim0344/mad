// // var studyday = ["어제","오늘","내일","다다음날","다다음날"]
// // var subject = ["자바스크립트","자바스크립트","평가","자바스크립트","피그마"]
// // // var studyday = ["1일","2일","3일","4일","5일"]
// // // var subject = ["자바스크립트","자바스크립트","자바스크립트","평가","자바스크립트","피그마"]

// // var obj = {
// //     day : 2,
// //     subject : "자바스크립트"}

// // console.log(studyday[obj.day]+"도",subject[obj.day]+"해야지",typeof studyday)
// // console.log(studyday[obj.day]+"도",obj.subject)
// // console.log(studyday[obj.day]+"도",subject[3])
// // console.log(studyday[obj.day]+"도",subject[obj.day]+" 해야지")

// var obj ={
//     studyday :["어제","오늘","내일","다다음날","다다음날","마지막날"],
//     subject : ["자바스크립트","자바스크립트","평가","자바스크립트","피그마"]
// }



// console.log(obj.studyday[obj.studyday.length - 1]// lengh는 괄호안에 숫자를 세달라는 명령이다
//             ,obj.subject[obj.subject.length - 1])


// // var obj ={
// //     studyday :["어제","오늘","내일","다다음날","다다음날","마지막날"],
// //     subject : ["자바스크립트","자바스크립트","평가","자바스크립트","피그마","주말"]
// //  }

// //     // console.log("전체공부는 "+obj.studyday.length+"일입니다.")   전체공부는 6일입니다.
// //     console.log(obj.subject[2]+"는 "+obj.studyday[2]+"입니다.")     평가는 내일입니다



//     // for(var i =0; i <10; i++ ){
//     //     console.log("10이출력되게 해줘요")
//     // }

//     // 어제는 자바스크립트 오늘은 자바스크립트 내일은 평가

//     // var play = {
//     //     content : ["세미나","농장체험","쇼핑"]
//     //  }

//     // var num = 0;
//     // for(var i in play.content){
//     //     num = parseInt(1);
//     //     console.log(i, typeof i, num+ 1)
//     // }
// for(var i = 2; i < 10; i++){
//     console.log(i)
}                            1번문제

var obj ={
    day :["월","화","수","목","금"],}
console.log(obj.day)
    
 2번문제 for in문을 활용 (월~금 출력)

3번 문제 for문 (변수와 문자결합 및 사칙연산익히기)
*곱하기 + 더하기 -빼기 /나누기 % 나머지구하기 기호


for(i=2; i <10; i++){
    console.log(2 +  "x" + i + "=" + 2*i)

}
