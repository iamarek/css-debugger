const addStyles = () => {
    var css = `
        * { background-color: rgba(255,0,0,.2); }
        * * { background-color: rgba(0,255,0,.2); }
        * * * { background-color: rgba(0,0,255,.2); }
        * * * * { background-color: rgba(255,0,255,.2); }
        * * * * * { background-color: rgba(0,255,255,.2); }
        * * * * * * { background-color: rgba(255,255,0,.2); }
        * * * * * * * { background-color: rgba(255,0,0,.2); }
        * * * * * * * * { background-color: rgba(0,255,0,.2); }
        * * * * * * * * * { background-color: rgba(0,0,255,.2); }`,
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

    head.appendChild(style);
    style.classList.add('css-debugger-from-chrome-extention-43133');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
}

const removeStyles = () => {
    const style = document.querySelector('.css-debugger-from-chrome-extention-43133');

    style.remove();
}

const toggleStyles = () => {
    const style = document.querySelector('.css-debugger-from-chrome-extention-43133');
    if (style) {
        removeStyles();
    } else {
        addStyles();
    }
}
