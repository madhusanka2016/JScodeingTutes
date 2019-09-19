var str ="Welcome To String";
    var count = str.length;
var a  =document.getElementById('head');
var c = 'h1';
console.log(typeof(a));
console.log(a);
var b = 1;

console.log(typeof(1));
var c = 'h1';
console.log(typeof(c));
var d = true;
console.log(typeof(d));
var d = [1,2,3,4];
console.log(typeof(d));
console.log(d.length);

    
    document.write(str.substring(2,count-4));   // include start exclude last

     
    console.log(str.substring(2,count-4)) //
    console.log(str.substr(2,10))  /// start and length
    console.log(str.slice(2,count-4))// include sart include last
    // num1 = prompt("Enter the first name");
    // num2 = prompt('Enter the last name');
    // console.log(typeof(num1));
    // num5 = parseInt(num2);
    // console.log(typeof(num5));

    // document.write("First name is"+num1+ "Second name "+num2);
    // alert("H1");
    
    // console.log(num1=="1"?"OK":"NO");
    // var num3 = parseInt(num1);
    // switch(num3){

    //     case 1: console.log("first case");
    //             break;
    //     case 2: console.log('second case');
    //             break;

    //     default : console.log("defa ")


    // }

    var subjects = ['maths','science'];
    var marks = new Array();

    for(var i =0; i <10 ;i ++){
        console.log(i);
    }
    var mark;
    for(j in subjects ){
        mark = parseInt(prompt("Enter Marks for "+subjects[j]));
        marks[j] = mark;

    }
    console.log(marks);