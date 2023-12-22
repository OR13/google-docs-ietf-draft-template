const XmlBeautify = require('xml-beautify');
const { DOMParser } = require('xmldom');
const template = require('./template')

const createTemplate = require('./createTemplate')

const docs2xml2rfc = async (response, meta) => {
  const document = createTemplate(response, meta)
  const xml = template({
    meta,
    document
  })

  const pretty = new XmlBeautify({ parser: DOMParser }).beautify(xml,
    {
      indent: "  ",  //indent pattern like white spaces
      useSelfClosingElement: true //true:use self-closing element when empty element.
    });

  return pretty
}

module.exports = docs2xml2rfc;