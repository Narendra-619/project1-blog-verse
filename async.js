const sampledata=()=>
{
    try{
         let response=fetch('https://www.google.com')
    console.log(response)  
    }
  catch(error)
  {
    console.log("Error occured",error)
  }
}
sampledata();