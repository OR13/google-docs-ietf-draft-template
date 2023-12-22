
const slugify = require('slugify')

// todo: add anchors / other stuff here...
const postProcessRecursive = (template) => {
  template.anchor = slugify(template.title)
  if (template.sections.length === 0){
    delete template.sections
  } else {
    for (const section of template.sections){
      postProcessRecursive(section)
    }
  }
}

const createTemplate = (document, meta) => {
  const { body } = document.data
  const { content } = body
  let template = { 
    draft: document.data.title,
    title: '',
    sections: []
  }
  let currentSection = template
  for ( let index = 0; index < content.length; index++ ){
    const item = content[index]
    if (item.paragraph){
      const { paragraph} = item;
      const text = paragraph.elements[0].textRun.content.trim()
      if (paragraph.paragraphStyle.namedStyleType === 'TITLE'){
       template.title = text;
      } else if (paragraph.paragraphStyle.namedStyleType === 'HEADING_1'){
        const layer1Section = { title: text, paragraphs: [], sections: []}
        template.sections.push(layer1Section)
        currentSection = layer1Section
      } else if (paragraph.paragraphStyle.namedStyleType === 'HEADING_2'){
        const layer2Section = { title: text, paragraphs: [], sections: []}
        currentSection.sections.push(layer2Section)
        currentSection = layer2Section
      } else if (paragraph.paragraphStyle.namedStyleType === 'HEADING_3'){
        const layer3Section = { title: text, paragraphs: [], sections: []}
        currentSection.sections.push(layer3Section)
        currentSection = layer3Section
      } else if (paragraph.paragraphStyle.namedStyleType === 'NORMAL_TEXT'){
        currentSection.paragraphs.push(text)
      } else {
        throw new Error('Unsupported section style. Must be title, h1, h2, h3 or normal text.')
      }
    }
  }
  postProcessRecursive(template);
  return template
}

module.exports = createTemplate;