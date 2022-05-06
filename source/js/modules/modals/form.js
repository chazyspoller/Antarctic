const form = document.querySelector('form');
const phoneField = form.querySelector('[data-phone-pattern]');
const mailField = form.querySelector('[data-mail]');
const nameField = form.querySelector('input[type="text"]');

const checkExist = phoneField && mailField && nameField;

let isStorageSupport = true;
let storagePhone = '';
let storageMail = '';
let storageName = '';

try {
  storagePhone = localStorage.getItem('user-phone');
  storageMail = localStorage.getItem('user-mail');
  storageName = localStorage.getItem('user-name');
} catch (err) {
  isStorageSupport = false;
}

const checkPhoneMask = (evt) => {
  const el = evt.target;
  const clearVal = el.dataset.phoneClear;
  const pattern = el.dataset.phonePattern;
  const martixDef = '+7 (___) ___-__-__';
  const matrix = pattern ? pattern : martixDef;
  let i = 0;
  const def = matrix.replace(/\D/g, '');
  let val = evt.target.value.replace(/\D/g, '');

  if (clearVal !== 'false' && evt.type === 'blur') {
    if (val.length < matrix.match(/([\_\d])/g).length) {
      evt.target.classList.add('input--error');
      return;
    }
  }

  if (def.length >= val.length) {
    val = def;
  }

  evt.target.value = matrix.replace(/./g, function (char) {
    if ((/[_\d]/).test(char) && i < val.length) {
      evt.target.classList.remove('input--error');
      return val.charAt(i++);
    } else if (i >= val.length) {
      return '';
    }
    return char;
  });

};

const activatePhoneMask = () => {
  for (let ev of ['input', 'blur', 'focus']) {
    phoneField.addEventListener(ev, checkPhoneMask);
  }
};

const checkEmailField = (evt) => {
  if (!evt.target.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
    evt.target.classList.add('input--error');
  } else {
    evt.target.classList.remove('input--error');
  }
};

const activateValid = () => {
  if (checkExist || mailField) {
    mailField.addEventListener('input', checkEmailField);

    if (storagePhone) {
      phoneField.value = storagePhone;
    } else {
      phoneField.value = '';
    }
    if (storageName) {
      nameField.value = storageName;
    }
    if (storageMail) {
      mailField.value = storageMail;
    }
  }
};

const useLocalStorage = () => {
  if (isStorageSupport) {
    localStorage.setItem('user-name', nameField.value);
    localStorage.setItem('user-phone', phoneField.value);
    localStorage.setItem('user-mail', mailField.value);
  }
};

if (phoneField) {
  document.addEventListener('DOMContentLoaded', activatePhoneMask);
}

const addListenersForForm = () => {
  activateValid();

  form.addEventListener('submit', useLocalStorage);
};

export {addListenersForForm};
