const fs = require('mz/fs');
const url2pdf3 = require('./index.js');

url2pdf3.renderURL('https://www.google.com').then(pdf => {
   return fs.writeFile('mypdf.pdf', pdf).then(() =>
      console.log('See mypdf.pdf!')
   );
});
