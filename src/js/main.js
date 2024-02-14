let input = document.querySelector(".input");

let addBtn = document.querySelector('.todo__add_btn');
let list = document.querySelector(".todo__list_ul");

let full = 0;
let empty = 0;

const dela = {
    zadacha:[]
}


addBtn.addEventListener("click", (e)=>{
    let addInput = input.value;

   if(addInput){
    dela.zadacha.push(addInput)
   
    
    createElement(dela.zadacha, list)
   }else{
    alert("вы ничего не ввели!")
   }
       
   

   
    
    
});

function createElement(zadacha,spisok){
    spisok.innerHTML='';
    zadacha.forEach((el,idx)=>{
        
            spisok.innerHTML+=` <li class="todo__list_li">
            <span  class="todo__li_text">${idx +1}) ${el} </span>
            
            <div class="costm">
                <span  class="todo__li_true">☑</span> 
                <span  class="todo__li_false">❌</span>
                <span  class="todo__li_delete">🗑</span> 
            </div>

           
        </li>`
    });
   input.value=''

    document.querySelectorAll(".todo__li_true").forEach((el,i)=>{
        el.addEventListener('click', ()=>{
            let text = document.querySelectorAll(".todo__li_text");
            text[i].classList.toggle("active");
            if(text = "active"){
                full += +1
            }
           
           
           
            document.querySelector(".full").innerHTML=`${full}`
        })
    })
    document.querySelectorAll(".todo__li_false").forEach((el,i)=>{
        el.addEventListener('click', ()=>{
            let text = document.querySelectorAll(".todo__li_text");
            text[i].classList.toggle("noactive")
        })
    })

    document.querySelectorAll(".todo__li_delete").forEach((btn, i)=>{
       btn.addEventListener("click", function(){
        btn.parentElement.remove();
        dela.zadacha.splice(i, 1);
        createElement(dela.zadacha,spisok)
       }) 
    })
    // document.querySelectorAll(".todo__li_false").forEach((el,idx)=>{
    //     el.addEventListener("click", function(){
    //         let text = document.querySelectorAll(".todo__li_text");
    //         empty += +1
    //         text[idx].classList.toggle("noactive");
            
    //         document.querySelector(".empty").innerHTML=`не выполненно${empty}`

    //     })
    // })
    // document.querySelectorAll(".todo__li_true").forEach((el,idx)=>{
    //     el.addEventListener("click", function(){
    //         full+= +1
    //         let text = document.querySelectorAll(".todo__li_text");
    //         document.querySelector(".full").innerHTML=`выполненно ${full}`
    //         text[idx].classList.toggle("active");
            
           

    //     })
    // })
    // document.querySelectorAll(".todo__li_delete").forEach((btn, i) => {
    //     btn.addEventListener("click", () => {
    //       btn.parentElement.remove();
    //       dela.zadacha.splice(i, 1);
    //       createElement(dela.zadacha, spisok);
    //     });
    //   });
    

    //   document.querySelector(".full").innerHTML=`выполненно ${full}`
    //   document.querySelector(".empty").innerHTML=`не выполненно${empty}`
}






