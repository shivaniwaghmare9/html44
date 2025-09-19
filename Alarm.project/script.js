
let stp;
let sett=()=>{
    let inputtime=document.querySelector("#curtime").value   //4:53
    let dispaly=document.querySelector("#show")
    let ringg=document.querySelector("#music")
    stp=setInterval(()=>{
        let time=new Date()
        let currenttime=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}` //4:
        if(currenttime==inputtime)
        {
            dispaly.innerHTML="Alarm is ringing...."
            dispaly.style.color="darkgoldenrod"
             ringg.play()
        }
        else
        {
            dispaly.innerHTML="Alarm is set.."
        }

    
     },1000)

    
}

    //   let stop=()=>{
    //      setTimeout(()=>{
    //      clearInterval(stp)
    //     ringg.pause()
    //         })
    //     }
        

let stp;
let sett=()=>{
    let inputtime=document.querySelector("#curtime").value   //4:53
    let dispaly=document.querySelector("#show")
    let ringg=document.querySelector("#music")
    stp=setInterval(()=>{
        let time=new Date()
        let currenttime=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}` //4:
        if(currenttime==inputtime)
        {
            dispaly.innerHTML="Alarm is ringing...."
            dispaly.style.color="darkgoldenrod"
             ringg.play()
        }
        else
        {
            dispaly.innerHTML="Alarm is set.."
        }

    
     },1000)

    
}

    //   let stop=()=>{
    //      setTimeout(()=>{
    //      clearInterval(stp)
    //     ringg.pause()
    //         })
    //     }
        
