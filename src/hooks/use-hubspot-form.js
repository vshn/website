import { useEffect } from 'react';

const PORTAL_ID = '7105834';
const FORM_JS_SRC = 'https://js.hsforms.net/forms/v2.js';

const injectScript = () => new Promise((resolve, reject) => {
  const existScript = document.head.querySelector(
    `script[src="${FORM_JS_SRC}"]`,
  );
  if (existScript) {
    resolve();
  } else {
    const newScript = document.createElement('script');
    newScript.onload = resolve;
    newScript.src = FORM_JS_SRC;
    document.head.appendChild(newScript);
  }
});

const init = async (element) => {
  await injectScript();
  const formId = element.getAttribute('data-form-id');
  window.hbspt.forms.create({
    portalId: PORTAL_ID,
    formId,
    target: `div[data-form-id='${formId}']`,
  });
};

export default function useHubspotForm(lazyBlockSelector) {
  useEffect(() => {
    const elements = document.getElementsByClassName(lazyBlockSelector);
    Array.from(elements).forEach((element) => {
      init(element);
    });
  }, [lazyBlockSelector]);
}
