window.fbAsyncInit = () => {
  FB.init({
    appId      : '671048626421361', //Tu APP ID
    cookie     : true,  // habilita las cookies para que el server puede acceder a la sesion
    xfbml      : true,  // parsea los plugins sociales en la pagina
    version    : 'v2.9' // usa version 2.8
  });
  FB.AppEvents.logPageView();
}

function loginHandler(response) {
  if (response.status === 'connected') {
    state.status = 'conectado';
    FB.api('/me?fields=email,name', user => {
      state.user = user;
      state.doRender();
    });
  }else if (response.status === 'not_authorized') {
    state.user = null;
    state.status = 'aplicacion no autorizada'
    state.doRender();
  }
}

function doLogin() {
  FB.login(loginHandler, {scope: 'email'});
}
