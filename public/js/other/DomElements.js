class DomElements {
    
    getBySelector(selector) {
        return document.querySelector(selector);
    }
    getDataAttribute(element, attribute) {
        return element.dataset[attribute];
    }
}

export default DomElements;