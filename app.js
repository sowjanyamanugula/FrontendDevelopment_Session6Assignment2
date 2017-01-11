var a=10;
var b=20;
var c=30;
if(a>b && a>c)
{
    console.log(+a+" is greater than "+b+" and "+c+".So a is greatest among three numbers");
}
else if(b>a && b>c)
{
   console.log(+b+" is greater than "+a+" and "+c+".So b is greatest among three numbers");
}
else
{
   console.log(+c+" is greater than "+b+" and "+a+".So c is greatest among three numbers");
}