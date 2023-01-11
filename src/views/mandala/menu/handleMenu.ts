import ReactDOM from 'react-dom';

export const classRemove = (el: string, cls: string) => {
    let element = ReactDOM.findDOMNode(
        document.getElementById(el)
    ) as HTMLDivElement;
    element.classList.remove(cls);
};

export const classAdd = (el: string, cls: string) => {
    let element = ReactDOM.findDOMNode(
        document.getElementById(el)
    ) as HTMLDivElement;
    element.classList.add(cls);
};
