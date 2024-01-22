const click = document.querySelector('.click')

const eventt = new Event('click')
const visited = new Event('visited')

click.addEventListener('visited', e => console.log(e))

const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 200,
    clientY: 200
});

console.log(event.clientX);

click.dispatchEvent(visited)


// class ParentComponent {
//     constructor(selector) {
//         this.element = document.querySelector(selector);
//         this.communication();
//     }

//     showPassedData(data) {
//         console.log(data);
//     }

//     communication() {
//         this.element.addEventListener("loadData", e => {
//             e.stopPropagation(); //nie chce by dane poszły wyżej
//             this.showPassedData(e.detail);
//         })
//     }
// }


class ChildComponent {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.communication();
    }

    communication() {
        this.element.addEventListener("click", e => {
            const event = new CustomEvent("loadData", {
                detail : {
                    data : "Przykładowe dane przekazane"
                },
                bubbles : true
            });
            this.element.dispatchEvent(event)
        })
    }
}


const childComponent = new ChildComponent(".child");
console.log(childComponent);
// const parentComponent = new ParentComponent(".parent");
// console.log(parentComponent);
