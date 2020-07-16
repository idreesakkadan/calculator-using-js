function btnclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function clearscr()
{
    document.getElementById("screen").value=""
}
function equalclick()
{
    var text=document.getElementById("screen").value
    var res=eval(text)
    document.getElementById("screen").value=res
}