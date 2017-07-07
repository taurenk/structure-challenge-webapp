import Cookies from 'js-cookie';

export function readCookie(name) {
  return Cookies.get(name);
}

export function setCookie(name, value, ttlDays) {
  Cookies.set(name, value, {
    expires: ttlDays
  });
}

export function removeCookie(name) {
  Cookies.remove(name);
}

