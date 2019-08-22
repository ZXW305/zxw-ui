let exec = require('child_process').exec
let path = require('path')
let fs = require('fs')
let packageJSON = require('./package.json')
let options = process.argv
let version = packageJSON.version
let analysisOptions = (options) => {
  let obj = {}
  for(let opt of options ){
  	if(opt.indexOf('=') > -1){
  	  let arr = opt.split('=')
	  obj[arr[0]] = arr[1]
	}
  }
  return obj
}
let analysisOptionsResult = analysisOptions(options)
let generateVersionForPackage = ({type = null, oldVersion }) => {
	var oldVersionArr = oldVersion.split(".");
	var firstNum = +oldVersionArr[0];
	var secondNum = +oldVersionArr[1];
	var thirdNum = +oldVersionArr[2];
	switch (type) {
		case 'release' :
		  	++secondNum
			break
		case 'hotfix':
			++thirdNum
			break
		default:
			break
	}
	console.log(`${firstNum}.${secondNum}.${thirdNum}`)
	return `${firstNum}.${secondNum}.${thirdNum}`
}
let newVersion = generateVersionForPackage(Object.assign(analysisOptionsResult,{oldVersion: version}))
Object.assign(packageJSON,{version: newVersion})
fs.writeFileSync('package.json', JSON.stringify(packageJSON,null,2))

