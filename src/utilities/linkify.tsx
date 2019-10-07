import React from "react";
const LINKY_URL_REGEXP = /((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i;
const MAILTO_REGEXP = /^mailto:/i;

export const canLinkify = (text?: string) => (
  !!text && typeof text.match(LINKY_URL_REGEXP) !== "undefined" && typeof text.match(MAILTO_REGEXP) !== "undefined"
);

export const linkify: (text?: string) => JSX.Element[] = (text) => {
  const elements = [] as JSX.Element[]; // lets call it elements

  if (!text) return elements;

  let match;
  let sourceText = text;

  while (match = sourceText.match(LINKY_URL_REGEXP)!) {
    // We can not end in these as they are sometimes found at the end of the sentence
    let url = match[0];
    // if we did not match ftp/http/www/mailto then assume mailto
    if (!match[2] && !match[4]) url = (match[3] ? 'http://' : 'mailto:') + url;
    const i = match.index!;

    elements.push(<>{sourceText.substr(0, i)}</>)
    elements.push(<a href={url} target="_blank" >{match[0].replace(MAILTO_REGEXP, '')}</a>)

    sourceText = sourceText.substring(i + match[0].length);
  };

  elements.push(<>{sourceText}</>)

  return elements.map((element, index) => <React.Fragment key={index}>{element}</React.Fragment>);
};