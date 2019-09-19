var letters =[];
var word = 'bOB';

convertedword = word.toLowerCase();

for(var i =0; i < convertedword.length; i++ ){
    letters.push(convertedword[i]);

}
var reverse = '';
for(var j = 0; j <convertedword.length; j++){
    reverse+= letters.pop();
}
console.log(reverse);
if(reverse === word){
    console.log(word+" is a palindrom");
}
else{
    console.log(word+" is not a palindrom");

}