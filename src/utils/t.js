import * as ls from 'local-storage';

let defautLang = "fr";

const t = ({ en, fr }) => {

  let lang = ls.get('lang');

  if (!lang) ls.set("lang", defautLang);

  if (lang !== "en" && lang !== "fr") ls.set("lang", defautLang);

  switch (lang) {
    case "en": return en;
    case "fr": return fr;
    default: return en;
  }
}

export default t;