Cypress.Commands.add('before', {prevSubject: 'element'},
  (el, property) => {
    const win = el[0].ownerDocument.defaultView;
    const before = win.getComputedStyle(el[0], 'before');
    
    return before.getPropertyValue(property).replace(/(^")|("$)/g, '');
  }
);
