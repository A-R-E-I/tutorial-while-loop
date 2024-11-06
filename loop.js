window.addEventListener("load", addListener);

function addListener()
{
	document.getElementById("btnpress").addEventListener("click", Loop);
}

function Loop()
{
	var nument;
	
	nument = document.getElementById("txtentnum").value;
	WhileLoop(nument);
}

function WhileLoop(entnum)
{
	let calcnum = 0, totalval = 0;
	const elementname = document.getElementById("lblpress");
	
	while(calcnum <= entnum)
	{
		totalval = parseInt(calcnum) + parseInt(entnum);
		if(calcnum == 0)
		{
			elementname.textContent = totalval;
		}
		else
		{
			elementname.textContent = elementname.textContent + ", " + totalval; 
		}
		calcnum = parseInt(calcnum) + 1;
	}
}