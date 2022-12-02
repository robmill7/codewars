

function domainName(url){
  let sourceString = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
  	let domain = sourceString.split(".")[0];
  	return domain;
}
