export const closeNavbar = () => {
  const navbar = document.getElementById('navbarTogglerDemo03');
  if (!navbar) return;

  const bsCollapse = window.bootstrap.Collapse.getInstance(navbar);
  if (bsCollapse) {
    bsCollapse.hide();
  }
};
