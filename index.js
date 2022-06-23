var v=document.querySelector("#menulist");
v.style.maxHeight="0px";
var x=document.querySelector(".slider");
function togglefunction()
{
    if(v.style.maxHeight=="0px")
    {
        v.style.maxHeight="250px";
        x.style.marginTop="128px";
    }
    else
    {
        v.style.maxHeight="0px";
        x.style.marginTop="20px";
    }
    
}
