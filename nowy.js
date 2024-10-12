document.getElementById('myfile').addEventListener('change', function() {


  var GetFile = new FileReader();

   GetFile .onload=function(){
        
  var Zosia = GetFile.result.split('.');
  // alert(Zosia.length);
  var i = 0;
  let anna = document.getElementById("msg").value;
  let basia = document.getElementById("msg2").value;

  const timer = ms => new Promise(res => setTimeout(res, ms))

  async function load () { // We need to wrap the loop into an async function for this to work
    for (var i = anna; i < Zosia.length; i++) {
      document.getElementById('output').innerHTML= Zosia[i];
      document.getElementById('output2').innerHTML= "("+i+"/"+Zosia.length+" =  "+((i/Zosia.length)*100).toFixed(2)+" % )";
      // document.getElementById('output3').innerHTML= basia;
      // document.getElementById('output').value= Zosia[i];
      
      var rafal = countCharacters(Zosia[i])/10
      await timer(basia*1000*rafal); // then the created Promise can be awaited
    }
  }
  
  load();
  
    






  

  
  
}

    
    GetFile.readAsText(this.files[0]);
})



 
