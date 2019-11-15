var mainText = document.getElementById("inPut");

var sub = document.getElementById("subMIT");

function SubmitB()
{
   
 var database = admin.database().ref();
  database.child("Text").set("Some Value");
}
