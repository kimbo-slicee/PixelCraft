const accordion =  document.querySelector('.accordion');
accordion.addEventListener('click', function(e) {
    const accordionPanel = e.target.closest('.accordion-panel');
    if(!accordionPanel) return;
    toggle(accordionPanel)

})
function toggle(accordionPanel) {
    const buttons = accordionPanel.parentElement.querySelectorAll('button');
    const panelContent = accordionPanel.parentElement.querySelectorAll('.accordion-content');
    /* If the panel is already open, close it */
    buttons.forEach(button =>button.setAttribute('aria-expanded', 'false'));
    accordionPanel.querySelector('button').setAttribute('aria-expanded', 'true');
    /* Toggle the panel content visibility */
    panelContent.forEach(content => {
        content.setAttribute('aria-hidden', 'true');
    })
     accordionPanel.querySelector('.accordion-content').setAttribute('aria-hidden', 'false');
}