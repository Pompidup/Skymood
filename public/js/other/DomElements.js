class DomElements {

    getBySelector(selector) {
        return document.querySelector(selector);
    }
    
    getDataAttribute(attr, element) {
        return element.dataset[attr];
    }
}

export default DomElements;