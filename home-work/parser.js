const objParserToHtml = (data) => {
  let newArray = [];
  Object.keys(data).map((key)=>{
    let attr = '';
    let attrName = '';
    let fullAttr = '';
    if(data.attributes){
      for(let i in data.attributes){
        attrName = i;
        attr = data.attributes[i];
        fullAttr += ` ${attrName}="${attr}"`;
      }
    }
    if(data[key] !== data.childs){
      if(key == 'tag'){
        newArray.push(`<${data[key]}${fullAttr}>`);
      } 
    }else if(data[key] == data.childs){
      typeof data[key][0] === "string" ? newArray.push(data[key][0]) : data[key].map((el,index)=>{return newArray.push(objParserToHtml(el));})
    }
  })
  newArray.push(`</${data.tag}>`);
  return Array.prototype.concat.apply([], newArray).join('');
}

module.exports = {
  objParserToHtml:objParserToHtml
}