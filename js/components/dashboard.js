'use strict';

const Dashboard = () => {
    const dashboard = $('<div class="dashboard">Dashboard componentes</div>');
    if (state.user) {
      const h1 = $('<h1>'+state.user.name+'</h1>');
      const p = $('<p>'+state.user.email+'</p>');

      dashboard.append(h1);
      dashboard.append(p);

      const logout = $('<button type="button" name="button">Salir</button>');
      logout.on('click', _ => {
        FB.logout(response => {
          state.user = null;
          state.doRender();
        });
      });
      dashboard.append(logout);
      }
      return dashboard;
}
