
	function myfunc1(){
    var theInput = document.getElementById("display").value;
    
    theInput = theInput.substr(0, theInput.length - 1);
    document.getElementById("display").value=theInput;
}

function myfunc2()
{
	var a=document.getElementById("display").value;
	var l=a.length;
	var b=1;
	for(i=0;i <l-1;i++)
	{
		if(a[i]=='/' && a[i+1]=='0')
		{	
            b=0;
        }
	}
if(b==0)
	{document.getElementById("display").value="NOT DEFINED";
}
else
{
	

var newString = a.split(" ");
for(j=0;j<newString.length;j++)
{
	if(newString[j]!='+' && newString[j]!='-' && newString[j]!='/' &&newString[j]!='*')
		newString[j]=parseInt(newString[j]);
}
var len=newString.length;
for(len!=1)
{
	var c;
	for(k=1;k<len;k=k+2)
	{
		if(newString[k]=='/'){
			c=newString[k-1]/newString[k+1];
		
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


