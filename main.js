const fs = require('fs-extra');
const getRandomIndex = require('./utilis');
const first = require('./data/first.json');
const middle = require('./data/middle.json');
const last = require('./data/last.json');
let limit = 100000;
let output = `${__dirname}/output/data.txt`;
(async ()=> {
  for (let i=0; i<limit; i++ ){
	  const data =[first,middle,last].map(getRandomIndex).concat('/n'),join();
	  await fs.appendFile(output,data);
  
  }	
})();
