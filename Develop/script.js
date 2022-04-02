const currentDate = new Date();
const currentDayEl = document.getElementById("currentDay");
currentDayEl.innerHTML = currentDate.toDateString();

const currentHour = currentDate.getHours()

const timeBlocks = document.getElementsByClassName("time-block")
for (let i = 0; i < timeBlocks.length; i++){
    const block = timeBlocks.item(i)
    const hour = parseInt(block.id)
    
if (hour < currentHour) {
    block.style.backgroundColor = "gray"
}
if (hour === currentHour) {
    block.style.backgroundColor = "red"
}
if (hour > currentHour) {
    block.style.backgroundColor = "green"
}
};