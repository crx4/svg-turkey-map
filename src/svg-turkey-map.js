const main = (elementId = 'map-svg', infoElementId = '.province-name') => {
    const element = document.getElementById(elementId);
    const info = document.querySelector(infoElementId);

    element.addEventListener(
        'mouseover',
        function (event) {
            if (event.target.tagName === 'path' && event.target.parentNode.id !== 'south-cyprus') {
                info.innerHTML = [
                    '<div>',
                    event.target.parentNode.getAttribute('data-name'),
                    '</div>'
                ].join('');
            }
        }
    );

    element.addEventListener(
        'mousemove',
        function (event) {
            info.style.top = event.pageY + 25 + 'px';
            info.style.left = event.pageX + 'px';
        }
    );

    element.addEventListener(
        'mouseout',
        function (event) {
            info.innerHTML = '';
        }
    );

    element.addEventListener(
        'click',
        function (event) {
            if (event.target.tagName === 'path') {
                const parent = event.target.parentNode;
                const id = parent.getAttribute('id');

                if (id === 'south-cyprus') {
                    return;
                }

                window.location.href = parent.getAttribute('data-plate-code') ? (
                    '#'
                    + id
                    + '-'
                    + parent.getAttribute('data-plate-code')
                ) : '#' + id;
            }
        }
    );
}

window.renderSvgTurkeyMap = main;