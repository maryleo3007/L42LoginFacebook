'use strict';

const Login = () =>{
  const login = $('<div class="login"></div>');
  const title = $('<h1 class = "title">Login Into Laboratoria</h1>');
  const email = $('<input type="email" name="" value="" class="username">');
  const password = $('<input type="password" name="" value="" class="password">');
  const loginButton = $('<button type="button" name="button">Ingresar</button>');
  const faceButton = $('<button type="button" name="button">Ingresar con facebook</button>');

  login.append(title);
  login.append(email);
  login.append(password);
  login.append(loginButton);
  login.append(faceButton);

  loginButton.on('click',(e)=>{
    e.preventDefault();
    alert("not impeements");
  });

  faceButton.on('click', (e) => {
    e.preventDefault();
    doLogin();
  });
  return login;
}
