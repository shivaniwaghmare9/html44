

let set=()=>{
    let inputtime=document.querySelector("#curtime").value   //4:53
    let dispaly=document.querySelector("#show")
    let ring=document.querySelector("#music")
 let stp=setInterval(()=>{
        let time=new Date()
        let currenttime=`${time.getHours().toString().padStart(2,0)}:${time.getMinutes().toString().padStart(2,0)}`     //4:
        if(currenttime==inputtime){
            dispaly.innerHTML="Alarm is ringing...."
            dispaly.style.color="darkgoldenrod"
             ring.play()
        }
        else{
            dispaly.innerHTML="Alarm is set.."
        }
        
    },1000)
    setTimeout(()=>{
        clearInterval(stp)
        ring.pause()
        },5000)

}