const moment = require("moment")


const authors = (meta) => {
  return meta.author.map((author) => {
    return `
    <author fullname="${author.fullname}">
      <organization>${author.organization}</organization>
      <address>
        <email>${author.email}</email>
      </address>
    </author>
`
  }).join('\n')
}

const keywords = (meta) => {
  return  meta.keyword.map((keyword) => {
    return `    <keyword>${keyword}</keyword>`
  }).join('\n')
}

const recursiveRenderSection = (section) => {
return `
<section anchor="${section.anchor}" title='${section.title}'>
${section.paragraphs.map((p) => {
  return `<t>${p}</t>`
})}
${section.sections ? section.sections.map((s) => {
  return recursiveRenderSection(s)
}): ''}
</section>
`
}

module.exports = (template) => {
  
  const now = moment()
  const month = now.format('MMMM');
  const day = now.format('D');
  const year = now.format('YYYY');

  const { meta, document } = template
  const { area, venue } = meta

  const [abstract, introduction, terminology, ...middle] = document.sections

  const acknowledgements = middle.pop()
  const [main, security] = middle

  return `
  
<?xml version='1.0' encoding='UTF-8'?>
<?xml-stylesheet type='text/xsl' href='http://xml2rfc.tools.ietf.org/authoring/rfc2629.xslt' ?>
<!DOCTYPE rfc PUBLIC "-//IETF//DTD RFC 2629//EN" "http://xml2rfc.tools.ietf.org/authoring/rfc2629.dtd">

<rfc xmlns:xi="http://www.w3.org/2001/XInclude"
  category="std" ipr="trust200902"
  docName="${document.draft}-latest">

  <?rfc toc="yes"?>
  <?rfc tocompact="yes"?>
  <?rfc tocdepth="5"?>
  <?rfc tocindent="yes"?>
  <?rfc symrefs="yes"?>
  <?rfc sortrefs="yes"?>
  <?rfc compact="yes"?>
  <?rfc subcompact="no"?>

  <front>
    <title>${document.title}</title>
${authors(meta)}
    <date day="${day}" month="${month}" year="${year}" />
    <area>${area}</area>
    <workgroup>${venue.group}</workgroup>
${keywords(meta)}
    <abstract>
${abstract.paragraphs.map((p) => {
  return `<t>${p}</t>`
})}
    </abstract>

  </front>

  <middle>

    <section anchor="Introduction" title="Introduction">
${introduction.paragraphs.map((p) => {
  return `<t>${p}</t>`
})}
    </section>
      
    <section anchor="rnc" title="Requirements Notation and Conventions">
      <t>
        The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT",
        "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and
        "OPTIONAL" in this document are to be interpreted as described in
        BCP 14 <xref target="RFC2119"/> <xref target="RFC8174"/> when, and
        only when, they appear in all capitals, as shown here.
      </t>
    </section>

    <section anchor="Terminology" title="Terminology">
${terminology.paragraphs.map((p) => {
  return `<t>${p}</t>`
})}
    </section>

    ${recursiveRenderSection(main)}

    ${recursiveRenderSection(security)}

    <section anchor="IANA" title="IANA Considerations">
    </section>

  </middle>

  <back>

    <references title="Normative References">
      <xi:include href="https://bib.ietf.org/public/rfc/bibxml/reference.RFC.2119.xml"/>
      <xi:include href="https://bib.ietf.org/public/rfc/bibxml/reference.RFC.8174.xml"/>

    </references>

    <references title="Informative References">

    </references>

    <section title="Document History" anchor="History">
     
    </section>

    <section title="Acknowledgements" anchor="Acknowledgements" numbered="no">
${acknowledgements.paragraphs.map((p) => {
  return `<t>${p}</t>`
})}
    </section>

  </back>

</rfc>
  `.trim() + '\n'
}