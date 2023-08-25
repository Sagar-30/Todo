let editBtn = document.getElementById('edit-btn');
let deleteBtn = document.getElementById('delete-btn');

editBtn.addEventListener('click',()=>{
let MainText = document.getElementById('task-text');
editBtn.innerHTML='Save';
MainText.placeholder='Please Write Down..';
MainText.style.backgroundColor='black';
MainText.style.borderRadius ='8px';
MainText.contentEditable = "true";
});
 // Complete button
let cmpltBtn = document.getElementById('complete-btn');
cmpltBtn.addEventListener('click',()=>{
cmpltBtn.innerHTML ='Completed :)';
cmpltBtn.style.marginRight = '5rem';
editBtn.style.display ='none';
deleteBtn.style.display ='none';
MainText.contentEditable = "false";
})