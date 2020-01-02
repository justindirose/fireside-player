export default {
  shouldRender(args, component) {
    const locationSetting = settings.fireside_player_location;
    const displayOnMobile = settings.display_on_mobile;
    const site = Discourse.__container__.lookup("site:main");
    if (locationSetting === "Above Topic Post Stream") {
      if (!displayOnMobile && site.mobileView) return false;
      else return true;
    } else return false;
  }
};
