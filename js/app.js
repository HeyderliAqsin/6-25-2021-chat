var miniChat=document.getElementById("chat-mini");

var chat=document.getElementById("chat");

var myMessage=document.getElementById("myMessage")
var chatMain=document.querySelector("#chat main")

miniChat.onclick=function(){
chat.classList.toggle("active")
}
myMessage.onkeyup=function(e){
    if(e.keyCode==13){
        var myInputVal=this.value;
       
        if(myInputVal.trim()!=""){
            if(myInputVal[0].toUpperCase()==myInputVal[0]){
         var messageDiv=document.createElement("div")
         messageDiv.className="message admin";
         var pTag=document.createElement("p")
         pTag.innerText=myInputVal;
         var myDate=new Date()
         var pTagDate=document.createElement("p")
         pTagDate.className="time";
         pTagDate.innerText=myDate.getHours()+":"+myDate.getMinutes()
         console.log()
         messageDiv.appendChild(pTag);
         messageDiv.appendChild(pTagDate);
         chatMain.appendChild(messageDiv)
         myMessage.value=""
        }else{
            var messageDiv=document.createElement("div")
            messageDiv.className="message user";
            var pTag=document.createElement("p")
            pTag.innerText=myInputVal;
            var myDate=new Date()
            var pTagDate=document.createElement("p")
            pTagDate.className="time";
            pTagDate.innerText=myDate.getHours()+":"+myDate.getMinutes()
            console.log()
            messageDiv.appendChild(pTag);
            messageDiv.appendChild(pTagDate);
            chatMain.appendChild(messageDiv)
            myMessage.value=""
        }
        chatMain.scrollTop=chatMain.scrollHeight
        }
      
    }
    
}



//keypress,keydown,keyup