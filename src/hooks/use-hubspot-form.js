import { useCallback, useEffect, useState } from 'react';

const PORTAL_ID = '7105834';
const FORM_JS_SRC = 'https://js.hsforms.net/forms/v2.js';

export default function useHubspotForm(lazyBlockSelector) {
  const [formId, setFormId] = useState(null);

  const initForm = useCallback(() => {
    if (!formId) {
      return;
    }
    window.hbspt.forms.create({
      portalId: PORTAL_ID,
      formId,
      target: '#form-container',
    });
  }, [formId]);

  useEffect(() => {
    if (formId) {
      const existScript = document.head.querySelector(`script[src="${FORM_JS_SRC}"]`);
      if (existScript) {
        initForm();
      } else {
        const newScript = document.createElement('script');
        newScript.onload = initForm;
        newScript.src = FORM_JS_SRC;
        document.head.appendChild(newScript);
      }
    }
  }, [formId, initForm]);

  useEffect(() => {
    // Get form ID
    const form = document.querySelector(lazyBlockSelector);
    if (form) {
      const formIdData = form.querySelector('.hubspot-form').getAttribute('data-form-id');
      setFormId(formIdData);
    }
  }, [lazyBlockSelector]);
}
