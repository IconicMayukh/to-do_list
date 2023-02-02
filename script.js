const input = document.querySelector('.input-field input');
const addBtn = document.querySelector('.input-field button');
const pendingli = document.querySelector('.pending ul');
const completed = document.querySelector('.completed ul');
const completedH3 = document.querySelector('.completed .span-completed');
const countText = document.querySelector('.pending .footer .count-text');
const clearPending = document.querySelector('.pending .footer button');
const clearCompleted = document.querySelector('.completed .footer button');

input.onkeyup= (e)=>{
    let userdata = input.value;          //getting user entered value
    if(userdata.trim() != 0){   //if user input aren't only spaces
        addBtn.classList.add('active');
        
    }
    else{
        addBtn.classList.remove('active');
    }
}


window.onkeydown = (e)=>{
    if(e.keyCode == 13){
        if(addBtn.classList.contains("active")){
            addBtn.click();
        }
    }
}


let arr = new Array();

let count = 0;
let i=0;

addBtn.onclick = ()=>{
    userdata = input.value;          //getting user entered value
    count++;
    arr[count] = userdata;
    
    let pendingHTML='';
    pendingHTML = `<li class="item${count}">
    <span class="text">${userdata}</span>
    <span class="icons"><i class='bx bx-check' onclick='completeTask(${count})'></i><i class='bx bxs-trash-alt' onclick='deleteTask(${count})'></i></span>
    </li>`
    i++;
    pendingli.innerHTML += pendingHTML;
    countText.innerText = `You have ${i} pending tasks`
    input.value = '';
    addBtn.classList.remove('active');
    pendingli.classList.add('using');
}

function completeTask(index2){
    document.querySelector(`.item${index2}`).classList.add("complete");
    document.querySelectorAll('.bx').forEach((element) => {
        element.classList.add("block");
    });
    setTimeout(()=>{
        deleteTask(index2);
        addToCompleted(index2);
        document.querySelectorAll('.bx').forEach((element) => {
            element.classList.remove("block");
        });
        // document.querySelectorAll('.bx-check')
    },700)
}
let lastCompleted;

function deleteTask(index){
    document.querySelector(`.item${index}`).style.display = 'none';
    counter();
    // i--;
    // lastCompleted = arr.splice(index, 1);
    // countText.innerText = `You have ${i} pending tasks`;


}

let sum = 0;
function addToCompleted(c_index){
    let completedHTML = '';
    sum++;
    completedHTML = `<li class="item">
                        <span class="text">${sum}. ${arr[c_index]}</span>
                    </li>`

    completed.innerHTML += completedHTML;
    completedH3.innerHTML = `You have completed ${sum} tasks today!`
}

function counter(){
    i--;
    countText.innerText = `You have ${i} pending tasks`;
    if(i == 0){
        countText.innerText = `You have no pending task`;
        pendingli.classList.remove('using');
    }
}

clearPending.addEventListener('click', ()=>{
    pendingli.innerHTML = ''
    countText.innerText = `You have no pending task`;
    pendingli.classList.remove('using');
    i=0;
})
clearCompleted.addEventListener('click', ()=>{
    completed.innerHTML = ''
    completedH3.innerText = `No tasks has been completed today!`;
    sum=0;
})



