const baseUrl = "http://localhost/wordpress/wp-json/";

export const endpoints = {
  mobileNav: `${baseUrl}menus/v1/menus/mobile-menu`,
  desktopNav: `${baseUrl}menus/v1/menus/desktop-menu`,
  pages: `${baseUrl}wp/v2/pages`,
};
