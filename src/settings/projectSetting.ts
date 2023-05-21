const setting = {
  //navigation mode vertical left menu mode horizontal top menu mode
  navMode: 'vertical',
  //navigation style dark dark sidebar light white sidebar header-dark dark topbar
  navTheme: 'dark',
  // Whether it is in mobile mode
  isMobile: false,
  //top
  headerSetting: {
    //background color
    bgColor: '#fff',
    // fixed top
    fixed: true,
    //show the reload button
    isReload: true,
  },
  //footer
  showFooter: true,
  //Multiple labels
  multiTabsSetting: {
    //background color
    bgColor: '#fff',
    //Whether to display
    show: true,
    // fixed multi-label
    fixed: true,
  },
  //menu
  menuSetting: {
    //minimum width
    minMenuWidth: 64,
    //menu width
    menuWidth: 200,
    // fixed menu
    fixed: true,
    //split menu
    mixMenu: false,
    //Trigger the width of the sidebar on the mobile side
    mobileWidth: 800,
    // collapse menu
    collapsed: false,
  },
  //Bread crumbs
  crumbsSetting: {
    //Whether to display
    show: true,
    //display icon
    showIcon: false,
  },
  //Menu permission mode FIXED front-end fixed route BACK dynamic acquisition
  permissionMode: 'FIXED',
  //Whether to enable routing animation
  isPageAnimate: true,
  //route animation type
  pageAnimateType: 'zoom-fade',
};
export default setting;
