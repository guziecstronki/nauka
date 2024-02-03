// class Observer {
//     constructor(){
//         this.functions = []
//     }

//     add(fn){
//         this.functions.push(fn)
//     }
//     remove(fn){
//         this.functions = this.functions.filter(el => el !== fn)
//     }
//     call(data){
//         this.functions.forEach(fn => fn(data))
//     }

// }
// const observer = new Observer()
// {
//     let nr = 0
//     const addBtn = document.querySelector('.add')
//     addBtn.addEventListener('click', () => {
//         console.log(1);

//         if(nr >= 0){
//             nr++
//             observer.call(nr)
//         } 
//     })

//     const subBtn = document.querySelector('.sub')
//     subBtn.addEventListener('click', () => {
//         if(nr > 0){
//             nr--
//             observer.call(nr)
//         }
//     })
// }

// {
//     const input = document.querySelector('.number-info')
//     const changeInput = (data) => {
//         input.value = data
//     }
//     observer.add(changeInput)
// }

// {
//     const elements = document.querySelector('.elements')
//     const addElement = (data) => {
//         elements.innerHTML = ''
//         for(let i = 0; i < data; i++){
//             const element = document.createElement('div')
//             element.classList.add('element')
//             elements.append(element)
//         }
//     }
//     observer.add(addElement)
// }

// {
//     const text = document.querySelector('.text')
//     const addText = (data) => {
//         const texts = new Array(data).fill('text')
//         text.innerHTML = texts.map((el, i) => el + i).join('<br>')
//     }
//     observer.add(addText)
// }

class Observer {
    constructor() {
        this.subscribers = [];
    }

    on(fn) {
        this.subscribers.push(fn);
    }

    off(fn) {
        this.subscribers = this.subscribers.filter(el => el !== fn);
    }

    emit(data) {
        this.subscribers.forEach(fn => fn(data));
    }
}

const inputObserver = new Observer();


class Element {
    constructor(query) {
        this.element = document.querySelector(query);
        this.strong = this.element.querySelector("strong");
        this.btnSub = this.element.querySelector(".sub");
        this.btnUnSub = this.element.querySelector(".unsub");

        //domyślnie będziemy podpięci
        inputObserver.on(this.showText);

        this.bindButtons();
    }

    showText(data) {
        console.log(this.btnSub);
    }

    bindButtons() {
        this.btnSub.addEventListener("click", e => {
            inputObserver.on(this.showText);
        })

        this.btnUnSub.addEventListener("click", e => {
            console.log('tee')
            inputObserver.off(this.showText);
        })
    }
}


const element1 = new Element(".element1");
const element2 = new Element(".element2");
const element3 = new Element(".element3");

const input = document.querySelector("input");
input.addEventListener("input", e => {
    inputObserver.emit(input.value)
})
