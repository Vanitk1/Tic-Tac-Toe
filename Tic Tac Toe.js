boardContainer.document.querySelector('.gameboard');
selection.document.querySelectorAll('.selection');
setupWindow.document.querySelector('.setup')

startButton.document.querySelector('.start');
turnIndicator.document.querySelector('.turn');
winnerBanner.document.querySelector('.winner');

function makeActive(e) {
    e.target.parentNode.querySelectorAll('.selection').forEach((child) => {
        child.classList.remove('active');
    });
    e.target.classList.add('active');
    if (e.target.classList.contains('human')) {
        if (e.target.classList.contains('one')) {
            Controller.player1.type = 'human';
        } else {
            Controller.player2.type = 'human';
        }
    } else if (e.target.classList.contains('one')) {
        Controller.player1.type = 'ai';
    } else {
        Controller.player2.type = 'ai';
    }
};
