/**
 * @file plugin index
 * @author tanglei (tanglei02@baidu.com)
 */

const Description = require('./default-description')
const UrlMapper = require('./url-mapper')
const LineNumber = require('./line-number')
// const DefaultDoc = require('./default-doc')
const HighlightQuote = require('./highlight-quote')
const HighlightParagraph = require('./highlight-paragraph')
const TrimBlankLine = require('./trim-blank-line')
const HeadingLink = require('./heading-link')
// const Related = require('./related');
const RemoveHeadingId = require('./remove-heading-id')
const EncodeTag = require('./encode-tag')
const MenuInfo = require('./menu-info')
const Layout = require('./layout')
const Static = require('./static')
const ComponentPreview = require('./component-preview')
const TableWrapper = require('./table-wrapper')
const LatestNews = require('./latest-news')

// const Init = require('./init');

module.exports = {
  description: new Description(),
  componentPreview: new ComponentPreview(),
  urlMapper: new UrlMapper(),
  lineNumber: new LineNumber(),
  // defaultDoc: new DefaultDoc(),
  highlightQuote: new HighlightQuote(),
  highlightParagraph: new HighlightParagraph(),
  trimBlankLine: new TrimBlankLine(),
  headingLink: new HeadingLink(),
  tableWrapper: new TableWrapper(),
  encodeTag: new EncodeTag(),
  // related: new Related(),
  removeHeadingId: new RemoveHeadingId(),
  menuInfo: new MenuInfo(),
  layout: new Layout(),
  static: new Static(),
  latestNews: new LatestNews()
  // init: new Init()
}
