const para = document.getElementsByTagName('p')
let count = 0;
function incr ()
{ 
       count++
        para[0].textContent = count
        para[1].textContent = "incremented"
}
function decr ()
{
    if (count > 0)

{
    count--
    para[0].textContent = count
    para[1].textContent = "decremented"  
  }
  else
  {
      alert("sorry dont decrease by zero")
      }
 
}
function reset ()
{
  count = 0;
  para[0].textContent = count
  para[1].textContent = ""
}