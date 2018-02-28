const start1=prompt('Enter the start:')
const start = parseInt(start1, 10)
const end1=prompt('Enter the end:')
const end = parseInt(end1, 10)
const step1=prompt('Enter the step:')
const step = parseInt(step1, 10)
var min = start;
var max = end;
var arr = [];
var sum = 0
for (var i=min; i <=max; i=i+1)
arr.push(i)
for (var i=min; i<=max; i=i+1)
sum=sum+i
const outputa=document.getElementById('outputa')
outputa.innerHTML='The generated array is  '+ arr
const outputb=document.getElementById('outputb')
outputb.innerHTML='The sum is  '+ sum
const outputc=document.getElementById('outputc')
outputc.innerHTML='The binary of absolut element values are:  '+ sum