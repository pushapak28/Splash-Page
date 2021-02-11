const {
    body
} = document;

function changeBackground(number) {
    // check of background is already shwoing
    let previousBackgorund;
    if (body.className) {
        previousBackgorund = body.className;
    }
    //    Reset Css class for body
    body.className = '';
    switch (number) {
        case '1':
            return (previousBackgorund === ' background-1' ? false : body.classList.add('background-1'));
        case '2':
            return (previousBackgorund === ' background-2' ? false : body.classList.add('background-2'));
        case '3':
            return (previousBackgorund === ' background-3' ? false : body.classList.add('background-3'));
        default:
            break;
    }
}