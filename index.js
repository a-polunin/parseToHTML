const data = {
  tag: 'html',
  attributes: {
    lang: 'en ru',
    meta: 'feta'
  },
  childs: [
    {
      tag: 'head',
      childs: [
        {
          tag: 'title',
          childs: [
            'Document'
          ]
        }
      ]
    },
    {
      tag: 'body',
      childs: [
        {
          tag: 'div',
          attributes: {
            'class': 'block',
          },
          childs: [
            {
              tag: 'ul',
              childs: [
                {
                  tag: 'li',
                  childs: [
                    'text_1',
                  ]
                },
                {
                  tag: 'li',
                  childs: [
                    'text_2',
                  ]
                },
                {
                  tag: 'li',
                  childs: [
                    'text_3',
                  ]
                }
              ]
            },
            {
              tag: 'ol',
              childs: [
                {
                  tag: 'li',
                  childs: [
                    'text_1',
                  ]
                },
                {
                  tag: 'li',
                  childs: [
                    'text_2',
                  ]
                },
                {
                  tag: 'li',
                  childs: [
                    'text_3',
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

function parser(data) {
  let i;
  for(let k in data){
    i = data[k];
    let attr = '';
    let attrName = '';
    let fullAttr = '';
    if(data.attributes){
      for(let key in data.attributes){
        attrName = key;
        attr = data.attributes[key];
        fullAttr += ` ${attrName}="${attr}"`;
      }
    }
    if(!Array.isArray(i)){
      if(k == 'tag'){
        console.log(`<${i}${fullAttr}>`);
      }
    }else if(Array.isArray(i)){
      if(typeof i[0] === "string"){
        console.log(i[0])
      }else{
        i.map((el,index)=>{
          parser(el);
        })
      }
    }
  }
  console.log(`</${data.tag}>`);
}

parser(data);