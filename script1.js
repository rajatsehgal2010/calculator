
	function myfunc()
	{
    var theInput = document.getElementById("display").value;
    
    theInput = theInput.substr(0, theInput.length - 1);
    document.getElementById("display").value=theInput;
    }

function myfunc2()
{
	var a=document.getElementById("display").value;
	var l=a.length;
	var b=1;
	for(j=0;j <l-1;j++)
	{
		if(a[j]=='/' && a[j+2]=='0')
		{	
            b=0;
        }
	}
if(b==0)
	{return "Hey!!!   I AM INFINITY";
}
else
{
	
	var str=a.split(" ");
	var len=str.length;

var i;
  
         for(i=1;i<len && len!=1;i+=2)
  {
    
    
    
       if(str[i]=='/' || str[i]=='x')
       {
        
          if(str[i]=='/')


            {str[i-1]=parseFloat(str[i-1])/parseFloat(str[i+1]);}
          else
            {str[i-1]=parseFloat(str[i-1])*parseFloat(str[i+1]);}   
       
            if(i+2 != len){
             for(m=i;m<len-2;m++)
            
            {
              str[m]=str[m+2];
            }
            
            }
              len=len-2;
          i-=2;
       }
  }
  
  console.log(str);
  
  var sum=parseFloat(str[0]);
       for(i=1;i<len;i+=2)
       {
       	
         if(str[i]=='+')
            {
            	sum=sum+parseFloat(str[i+1]);
            }
         else
         {
         	sum=sum-parseFloat(str[i+1]);
         }	

       }
  
}

return sum;
}
/*
else
{
	

var newString = a.split(" ");
var len=newString.length;
for(len!=1)
{
	var c;
	for(k=1;k<len-1;k=k+2)
	{
		if(newString[k]=='/')
		{
			c=parseInt(newString[k-1])/parseInt(newString[k+1]);
		
		newString[k-1]=c;
		for(m=k;m<=len-3;m++)
		{
			newString[m]=newString[m+2];
		}
		len=len-2;
	    }
	}
	/*
	for(k=1;k<len;k=k+2)
	{
		if(newString[k]=='*'){
			c=newString[k-1]*newString[k+1];
		
		newString[k-1]=c;
		for(m=k;m<=len-3;m++)
		{
			newString[m]=newString[m+2];
		}
		len=len-2;
	}
	}
	for(k=1;k<len;k=k+2)
	{
		if(newString[k]=='+'){
			c=newString[k-1]+newString[k+1];
		
		newString[k-1]=c;
		for(m=k;m<=len-3;m++)
		{
			newString[m]=newString[m+2];
		}
		len=len-2;
	}
	}
	for(k=1;k<len;k=k+2)
	{
		if(newString[k]=='-'){
			c=newString[k-1]-newString[k+1];
		
		newString[k-1]=c;
		for(m=k;m<=len-3;m++)
		{
			newString[m]=newString[m+2];
		}
		len=len-2;}
	}
	
}
document.getElementById("display").value=newString[0];

}
	//document.getElementById("display").value="WAIT.....";
}

*/


