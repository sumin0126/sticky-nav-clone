let header = document.querySelector('.sticky-nav-header');
let menu = document.querySelector('.sticky-nav-menu');

const handleNav = () => {
  let isAtTop = header.offsetHeight - menu.offsetHeight - window.scrollY < 0;
  let method = isAtTop ? 'add' : 'remove';

  menu.classList[method]('fixed');
};

// handleNav를 감싸서 지연시켜주는 함수로써 성능 저하를 막아줌
const debounce = (callback, delay = 15, immediate = true) => {
  let timeout;

  return function () {
    let context = this;
    let args = arguments;

    const executeCallback = () => {
      timeout = null;
      if (!immediate) callback.apply(context, args);
    };

    let isFirstCall = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(executeCallback, delay);

    isFirstCall && callback.apply(context, args);
  };
};

window.addEventListener('scroll', debounce(handleNav));
