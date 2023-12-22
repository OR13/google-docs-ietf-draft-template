
- [https://docs.google.com/document/d/1OYGNt3nlzM0-P949PkOt-DnIUWnjHtGzKtjEXKfpBFQ](https://docs.google.com/document/d/1OYGNt3nlzM0-P949PkOt-DnIUWnjHtGzKtjEXKfpBFQ/edit)

This is experimental, do not use it.

This tool is opinionated.

This tool limits you to sections, subsections and paragraphs.

This strict subset of google docs functionality is meant to make it easy for the document to be converted to a format for progression at IETF.

Not intended for working group adopted documents, this is to help start the process, not to finish it.
Tracking changes in a version control system is recommended, 
there will need to be IPR commitments from everyone who supplied text to the google document,
the SHOULD be listed in the acknowledgements section.

Todo, make `draftMeta` / yaml come from google docs somehow...

Good tools do one thing very well... 
This tool is for people who can write text.
This tool is not for people who want to manage IANA / Markdown / XML / YAML / Version Control.
The expectation is that this tool generates I-Ds that can be published to data tracker automatically, 
but that will always lack requirements necessary to achieve working group adoption or move beyond that.

The idea is that after the text is good enough, 
at least 1 technical author capable of managing contributions will take over the output of this tool,
at which point contribution will move to a new tool, and this tool will cease to be relevant.

This tool is not designed for bi-directional synching.

This tool is meant to be used only for a short time at the begining of the process.

With much, much more development effort, this tool could be extended to provide real time feedback / synch bi-directionally with a version control system.

Eventually a direct integration with the datatracker might be possible, but that would require much more time and resources than I have.

- https://developers.google.com/docs/api/quickstart/nodejs