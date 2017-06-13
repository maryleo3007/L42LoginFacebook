'use strict';

const Header = () => {
  const h = $('<header></header>');
  const img = $('<img src="assets/img/logo.png">');
  h.append(img);
  return h;
}
