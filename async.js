const sampledata= async ()=>
{
    try{
         let response=await fetch('https://www.google.com')
    console.log(response)  
    }
  catch(error)
  {
    console.log("Error occured",error)
  }
}
sampledata();