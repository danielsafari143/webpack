class Insert{
    constructor(){
        this.containerId  = document.getElementById('sub-container');
        this.btnInsertId = document.getElementById('insertBtn');
        this.InptValue = document.getElementById('textin');
        this.listItems = document.getElementById('list-item');
        this.storeData = [];
    }

    insert = () =>
    {
        if(this.InptValue.value !== ''){
    
            if(JSON.parse(localStorage.getItem('dataList')) === null){
                localStorage.setItem('dataList' , JSON.stringify(this.storeData));
                this.storeData = JSON.parse(localStorage.getItem('dataList'));
                this.storeData.push(this.InptValue.value);
                localStorage.setItem('dataList' , JSON.stringify(this.storeData));
                const localData = JSON.parse(localStorage.getItem('dataList'));
                this.refesh()
            }
            else{
                this.storeData = JSON.parse(localStorage.getItem('dataList'));
                this.storeData.push(this.InptValue.value);
                localStorage.setItem('dataList' , JSON.stringify(this.storeData));
                const localData = JSON.parse(localStorage.getItem('dataList'));
                this.refesh()
            }
        }
    }
    refesh = () =>{
       const localData = JSON.parse(localStorage.getItem('dataList'));
       
         for(let i = localData.length-1 ; i < localData.length ; i++){
            let li = document.createElement('li');
            let inpt = document.createElement('input');
            let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            let path =  document.createElementNS('http://www.w3.org/2000/svg','path');
            svg.classList.add('bi');
            svg.classList.add('bi-three-dots-vertical');
            svg.classList.add('img');
            svg.id = [i];
            inpt.id = 'inp'+[i];
            svg.setAttribute('fill', 'currentColor');
            svg.setAttribute('viewBox', '0 0 16 16');
            svg.setAttribute('width', '16');
            svg.setAttribute('height','16');
            path.setAttribute('d','M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z')
            svg.appendChild(path);
            inpt.className = 'inpt'
            inpt.type = 'checkbox';
            let paragraph = document.createElement('div');
             let paragraph2 = document.createElement('p');
             let texte = document.createTextNode(localData[i]);
             paragraph.className = 'paragraph';
             paragraph2.id = 'paragraph2'+[i];
             paragraph2.appendChild(texte);
             paragraph2.className = 'paragraph2'; 
             paragraph2.setAttribute('contentEditable','true');
             paragraph.appendChild(paragraph2); 
             paragraph.appendChild(svg);
             paragraph.id = 'paragraph'+[i];
             li.appendChild(inpt);
             li.appendChild(paragraph);
             li.id = 'list-item'+[i];
             li.className = 'list-item';
             this.containerId.appendChild(li);
            
            }
            this.InptValue.value ='';
    }
    
    display = () => {
       if(JSON.parse(localStorage.getItem('dataList')) === null){
           localStorage.setItem('dataList' , JSON.stringify(this.storeData));
           const localData = JSON.parse(localStorage.getItem('dataList'));
            for(let i = 0 ; i < localData.length ; i++){
                let li = document.createElement('li');
                let inpt = document.createElement('input');
                let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                let path =  document.createElementNS('http://www.w3.org/2000/svg','path');
                svg.classList.add('bi');
                svg.classList.add('bi-three-dots-vertical');
                svg.classList.add('img');
                svg.id = [i];
                svg.setAttribute('fill', 'currentColor');
                svg.setAttribute('viewBox', '0 0 16 16');
                svg.setAttribute('width', '16');
                svg.setAttribute('height','16');
                path.setAttribute('d','M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z')
                svg.appendChild(path);
                inpt.id = 'inp'+[i];
                inpt.type = 'checkbox';
                inpt.className = 'inpt'
                let paragraph = document.createElement('div');
                let paragraph2 = document.createElement('p');
                let texte = document.createTextNode(localData[i]);
                paragraph.className = 'paragraph';
                paragraph2.appendChild(texte);
                paragraph2.className = 'paragraph2'; 
                paragraph2.id = 'paragraph2'+[i];
                paragraph2.setAttribute('contentEditable','true');
                paragraph.appendChild(paragraph2); 
                paragraph.appendChild(svg);
                paragraph.id = 'paragraph'+[i];
                li.appendChild(inpt);
                li.appendChild(paragraph);
                li.id = 'list-item'+[i];
                li.className = 'list-item';
                this.containerId.appendChild(li)
            
                }
            this.InptValue.value ='' 
       }
       else{
        const localData = JSON.parse(localStorage.getItem('dataList'));
         for(let i = 0 ; i < localData.length ; i++){
             let li = document.createElement('li');
             let inpt = document.createElement('input');
             let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
             let path =  document.createElementNS('http://www.w3.org/2000/svg','path');
             svg.classList.add('bi');
             svg.classList.add('bi-three-dots-vertical');
             svg.classList.add('img');
             svg.id = [i];
             svg.setAttribute('fill', 'currentColor');
             svg.setAttribute('viewBox', '0 0 16 16');
             svg.setAttribute('width', '16');
             svg.setAttribute('height','16');
             path.setAttribute('d','M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z')
             svg.appendChild(path);
             inpt.id = 'inp'+[i];
             inpt.type = 'checkbox';
             inpt.className = 'inpt'
             let paragraph = document.createElement('div');
             let paragraph2 = document.createElement('p');
             let texte = document.createTextNode(localData[i]);
             paragraph.className = 'paragraph';
             paragraph2.appendChild(texte);
             paragraph2.className = 'paragraph2'; 
             paragraph2.id = 'paragraph2'+[i];
             paragraph2.setAttribute('contentEditable','true');
             paragraph.appendChild(paragraph2); 
             paragraph.appendChild(svg);
             paragraph.id = 'paragraph'+[i];
             li.appendChild(inpt);
             li.appendChild(paragraph);
             li.id = 'list-item'+[i];
             li.className = 'list-item';
             this.containerId.appendChild(li)
         
             }
         this.InptValue.value ='' 
    }
    }
    clear = () =>{
        const localData = JSON.parse(localStorage.getItem('dataList'));
        for(let i = 0 ; i < localData.length ; i++){
          if( document.getElementById('list-item'+[i]) !== null){
            document.getElementById('list-item'+[i]).remove();
            localStorage.setItem('dataList' , JSON.stringify([]));
          }
          else{
            location.reload();
          }
        }
    }
   
    remove = (event) => {
        if(event.target.classList[0] === 'tester'){
            this.storeData = JSON.parse(localStorage.getItem('dataList'));
            let cont = document.getElementById('paragraph'+event.target.id);
            document.getElementById(('list-item'+event.target.id)).remove();
            const rem = this.storeData.filter(function (letter) { 
                return letter !== cont.textContent;
            });
            this.storeData = rem;
            localStorage.setItem('dataList' , JSON.stringify(this.storeData))
        }
      }

    itemColor = (event) => {
        if(event.target.className === 'paragraph2'){
         
            let newId = document.getElementById(document.getElementById(event.target.id).parentElement.id).childNodes[1].id;
            let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            let path =  document.createElementNS('http://www.w3.org/2000/svg','path');
            let path2 =  document.createElementNS('http://www.w3.org/2000/svg','path');
            svg.classList.add('tester');
            svg.classList.add('bi');
            svg.classList.add('bi-trash');
            svg.classList.add('img'); 
            svg.id = newId;
            svg.setAttribute('fill', 'currentColor');
            svg.setAttribute('viewBox', '0 0 16 16');
            svg.setAttribute('width', '16');
            svg.setAttribute('height','16');
            path.setAttribute('d','M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z')
            path2.setAttribute('d','M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z')
            path2.setAttribute('fill-rule','evenodd');
            svg.appendChild(path);
            svg.appendChild(path2);
            document.getElementById(document.getElementById(event.target.id).parentElement.id).replaceChild(svg,document.getElementById(document.getElementById(event.target.id).parentElement.id).childNodes[1])
            document.getElementById(newId).style.cursor = 'pointer';
        }
    }

}
const insertNew = new Insert() 
insertNew.display()
document.addEventListener('click', insertNew.remove);
window.addEventListener('click', insertNew.itemColor);
document.addEventListener('keyup',(event) =>{
    if(event.code === 'Enter'){
     insertNew.insert();
    }
 });
 document.getElementById('clearIem').addEventListener('click',() =>{
    insertNew.clear();
});
