/*function scuberGreetingForFeet(someValue){
  let greeting
  if (someValue <= 400) {
    greeting = 'This one is on me!'
  } else {
    if (someValue <= 2000) {
      greeting = 'That will be twenty bucks.'
    } else {
      if (someValue <= 2500) {
        greeting = 'I will gladly take your thirty bucks'
      } else {
        greeting = 'No can do.'
      }
    }
    
  }
  
} */

function scuberGreetingForFeet(someValue) {
  let greeting
  if (someValue > 2500) {
    greeting = 'No can do.'
  } else {
    if (someValue > 2000) {
      greeting = 'I will gladly take your thirty bucks.'
    } else {
      if (someValue > 400) {
        greeting = 'That will be twenty bucks.'
      } else {
        greeting = 'This one is on me!'
      }
    }
    
  }
 return greeting 
}


function ternaryCheckCity(destination){
return destination == 'NYC'?'Ok, sounds good.' : 'No go.'

}


function switchOnCharmFromTip (tip) {
  let answer;
  switch (true) {
    case tip === 'generous': answer = 'Thank you so much.'
      break;
    case tip === 'not as generous': answer = 'Thank you.'
      break
    default : answer = 'Bye.'
      break;
  }
  return answer
}

console.log(switchOnCharmFromTip('generous'));