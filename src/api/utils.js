const noop = () => {};

export const fetchData = ({ url, options = {}, success = noop, fail = noop }) =>
  fetch(url, options)
    .then(res => res.json(), fail)
    .then(success, fail)
    .catch(fail);