// $("button").click(function(){
//     var x= $("input")
//     $("#result").text("hello");
// });





  


 

function submit(){
    
   var marks=[];
   var totalMarks=0;
   for(var i=0;i<6;i++)
   {
       marks[i]=document.querySelectorAll("input")[i].value;
   }
       
 for(var i=0;i<6;i++)
 {
      totalMarks=totalMarks+Number(marks[i]);
      
 }
 
 var percentage= (totalMarks/600)*100;
 var n = percentage.toFixed(2);

  document.querySelector("h5").innerHTML="OUT OF 600 YOUR TOTAL IS "+totalMarks+" AND PERCENTAGE IS "+ n+"%. ";

   
}