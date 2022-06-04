// code your solution here
function saturdayFun(activity = `roller-skate`){
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function (action = `go to the office`){
    return `This Monday, I will ${action}.`
} 
mondayWork(`work from home`);

function wrapAdjective (flare = `*`){
    return function (wish = `special`){
        return `You are ${flare}${wish}${flare}!`
    }
}
