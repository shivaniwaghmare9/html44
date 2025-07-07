


// let set=()=>{
//   let inputtime=document.querySelector("#curtime").value   //4:53
//   let dispaly=document.querySelector("#show")
//   let ring=document.querySelector("#music")
// let stp=setInterval(()=>{
//       let time=new Date()
//       let currenttime=`${time.getHours().toString().padStart(2,0)}:${time.getMinutes().toString().padStart(2,0)}`     //4:
//       if(currenttime==inputtime){
//           dispaly.innerHTML="Alarm is ringing...."
//            ring.play()
//       }
//       else{
//           dispaly.innerHTML="Alarm is set.."
//       }
      
//   },1000)
//   setTimeout(()=>{
//       clearInterval(stp)
//       ring.pause()
//       },5000)

// }



// //=====================================================clock==========================================

// var dialLines = document.getElementsByClassName('diallines');
// var clockEl = document.getElementsByClassName('clock')[0];

// for (let i = 1; i < 60; i++) {
//   clockEl.innerHTML += "<div class='diallines'></div>";
//   dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
// }

// function clock() {
//   let weekday = [
//         "Sunday",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday"
//       ],
//       d = new Date(),
//       h = d.getHours(),
//       m = d.getMinutes(),
//       s = d.getSeconds(),
//       date = d.getDate(),
//       month = d.getMonth() + 1,
//       year = d.getFullYear(),
           
//       hDeg = h * 30 + m * (360/720),
//       mDeg = m * 6 + s * (360/3600),
//       sDeg = s * 6,
      
//       hEl = document.querySelector('.hour-hand'),
//       mEl = document.querySelector('.minute-hand'),
//       sEl = document.querySelector('.second-hand'),
//       dateEl = document.querySelector('.date'),
//       dayEl = document.querySelector('.day');
  
//       let day = weekday[d.getDay()];
  
//   if(month < 9) {
//     month = "0" + month;
//   }
  
//   hEl.style.transform = "rotate("+hDeg+"deg)";
//   mEl.style.transform = "rotate("+mDeg+"deg)";
//   sEl.style.transform = "rotate("+sDeg+"deg)";
//   dateEl.innerHTML = date+"/"+month+"/"+year;
//   dayEl.innerHTML = day;
// }

// setInterval("clock()", 100);




let set=()=>{
  let inputtime=document.querySelector("#curtime").value   //4:53
  let dispaly=document.querySelector("#show")
  let ring=document.querySelector("#music")
let stp=setInterval(()=>{
      let time=new Date()
      let currenttime=`${time.getHours().toString().padStart(2,0)}:${time.getMinutes().toString().padStart(2,0)}`     //4:
      if(currenttime==inputtime){
          dispaly.innerHTML="Alarm is ringing...."
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



//=====================================================clock==========================================

var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (let i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
  let weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
  
      let day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}

setInterval("clock()", 100);
