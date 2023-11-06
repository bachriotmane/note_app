const createBtn = document.querySelector('button');
const notesContainer = document.querySelector('.notescontainer');

function updateStorage(){
    localStorage.setItem('notes', notesContainer.innerHTML)
}


function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes')
}

showNotes();

createBtn.addEventListener(
    "click", (e)=>{
        paragraph = document.createElement('p');
        img = document.createElement('img');

        paragraph.className = 'input-box';
        paragraph.contentEditable = "true";
        img.src = 'images/delete.png';
        img.style.width = "30px";
        paragraph.appendChild(img)
        notesContainer.appendChild(paragraph);
    }
)

notesContainer.addEventListener(
    "click", (e) =>{
        if(e.target.tagName == "IMG"){
            e.target.parentElement.remove();
            updateStorage();
        }
        else if(e.target.tagName === "P"){
            noteseL = document.querySelectorAll('.input-box');
            noteseL.forEach(element => {
                element.onkeyup = function(){
                    updateStorage();
                }
            });
        }
    }
)