
        const root = document.getElementById('root');

        const Elementmaker = {
            tagName:"",
            setAttriName:"",
            setAttriValue:"",
            parent:"",

            maker: function(agName, setAttriName, setAttriValue, parent){
            const element = document.createElement(this.tagName);
            element.setAttribute(this.setAttriName, this.setAttriValue);
            this.parent.appendChild(element);
            },
            loopFunc : function() {
                for(let i =0; i<100; I++){
                    this.maker();
                }
            }
        }   


        function ulMaker(tagName, setAttriName, setAttriValue, parent){
            const Element = document.createElement(tagName);
            Element.setAttribute(setAttriName,setAttriValue);
            parent.appendChild(Element);
        } 
        for(let i =0; i < 100; i++){
            ulMaker('header','id',`test-${i}`,root);
        }

        root.children[65].style.width = "100px";
        root.children[65].style.height = "100px";
        root.children[65].style.backgroundColor = "red";

// --------------여기까지 수업시간---------------


const ElementMaker = {
    maker: function(tagName, setAttriName, setAttriValue, parent) {
        const element = document.createElement(tagName);
        element.setAttribute(setAttriName, setAttriValue);
        parent.appendChild(element);
    },
    loopFunc: function() {
        for (let i = 0; i < 100; i++) {
            this.maker("div", "class", "box", document.body);
        }
    }
}
ElementMaker.loopFunc();

