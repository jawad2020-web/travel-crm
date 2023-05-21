/**
 * @description Get user browser version and system information
 * @param {string='zh-cn' | 'en'} lang return information in Chinese or English
 * @constructor
 */
export default function BrowserType(lang: 'zh-cn' | 'en' = 'en') {
  // Weights: system + system version > platform > kernel + carrier + kernel version + carrier version > shell + shell version
  const ua = navigator.userAgent.toLowerCase();
  const testUa = (regexp) => regexp.test(ua);
  const testVs = (regexp) =>
    ua
      .match(regexp)
      ?.toString()
      .replace(/[^0-9|_.]/g, '')
      .replace(/_/g, '.');
  // system
  const system =
    new Map([
      [testUa(/windows|win32|win64|wow32|wow64/g), 'windows'], // windows system
      [testUa(/macintosh|macintel/g), 'macos'], // macos system
      [testUa(/x11/g), 'linux'], // linux system
      [testUa(/android|adr/g), 'android'], // android system
      [testUa(/ios|iphone|ipad|ipod|iwatch/g), 'ios'], // ios system
    ]).get(true) || 'unknown';

  // system version
  const systemVs =
    new Map([
      [
        'windows',
        new Map([
          [testUa(/windows nt 5.0|windows 2000/g), '2000'],
          [testUa(/windows nt 5.1|windows xp/g), 'xp'],
          [testUa(/windows nt 5.2|windows 2003/g), '2003'],
          [testUa(/windows nt 6.0|windows vista/g), 'vista'],
          [testUa(/windows nt 6.1|windows 7/g), '7'],
          [testUa(/windows nt 6.2|windows 8/g), '8'],
          [testUa(/windows nt 6.3|windows 8.1/g), '8.1'],
          [testUa(/windows nt 10.0|windows 10/g), '10'],
        ]).get(true),
      ],
      ['macos', testVs(/os x [\d._]+/g)],
      ['android', testVs(/android [\d._]+/g)],
      ['ios', testVs(/os [\d._]+/g)],
    ]).get(system) || 'unknow';

  // platform
  let platform = 'unknown';
  if (system === 'windows' || system === 'macos' || system === 'linux') {
    platform = 'desktop'; // desktop side
  } else if (system === 'android' || system === 'ios' || testUa(/mobile/g)) {
    platform = 'mobile'; // mobile terminal
  }
  // Kernel and carrier
  const [engine = 'unknow', supporter = 'unknow'] = new Map([
    [
      testUa(/applewebkit/g),
      [
        'webkit',
        new Map([
          // webkit core
          [testUa(/safari/g), 'safari'], // safari browser
          [testUa(/chrome/g), 'chrome'], // chrome browser
          [testUa(/opr/g), 'opera'], // opera browser
          [testUa(/edge/g), 'edge'], // edge browser
        ]).get(true),
      ] || 'unknown',
    ], // [webkit kernel, xxx browser]
    [testUa(/gecko/g) && testUa(/firefox/g), ['gecko', 'firefox']], // [gecko kernel, firefox browser]
    [testUa(/presto/g), ['presto', 'opera']], // [presto kernel, opera browser]
    [testUa(/trident|compatible|msie/g), ['trident', 'iexplore']], // [trident kernel, iexplore browser]
  ]).get(true) || ['unknow', 'unknow'];

  // kernel version
  const engineVs =
    new Map([
      ['webkit', testVs(/applewebkit\/[\d._]+/g)],
      ['gecko', testVs(/gecko\/[\d._]+/g)],
      ['presto', testVs(/presto\/[\d._]+/g)],
      ['trident', testVs(/trident\/[\d._]+/g)],
    ]).get(engine) || 'unknow';

  // carrier version
  const supporterVs =
    new Map([
      ['firefox', testVs(/firefox\/[\d._]+/g)],
      ['opera', testVs(/opr\/[\d._]+/g)],
      ['iexplore', testVs(/(msie [\d._]+)|(rv:[\d._]+)/g)],
      ['edge', testVs(/edge\/[\d._]+/g)],
      ['safari', testVs(/version\/[\d._]+/g)],
      ['chrome', testVs(/chrome\/[\d._]+/g)],
    ]).get(supporter) || 'unknow';

  // shell and shell version
  const [shell = 'none', shellVs = 'unknow'] = new Map([
    [testUa(/micromessenger/g), ['wechat', testVs(/micromessenger\/[\d._]+/g)]], // [WeChat browser,]
    [testUa(/qqbrowser/g), ['qq', testVs(/qqbrowser\/[\d._]+/g)]], // [QQ browser,]
    [testUa(/ucbrowser/g), ['uc', testVs(/ucbrowser\/[\d._]+/g)]], // [UC Browser,]
    [testUa(/qihu 360se/g), ['360', 'unknow']], // [360 browser (no version),]
    [testUa(/2345explorer/g), ['2345', testVs(/2345explorer\/[\d._]+/g)]], // [2345explorer,]
    [testUa(/metasr/g), ['sougou', 'unknow']], // [Sogou browser (no version),]
    [testUa(/lbbrowser/g), ['liebao', 'unknow']], // [Cheetah browser (no version),]
    [testUa(/maxthon/g), ['maxthon', testVs(/maxthon\/[\d._]+/g)]], // [Browser,]
  ]).get(true) || ['none', 'unknow'];

  return {
    'zh-cn': Object.assign(
      {
        Kernel: engine, // Kernel: webkit gecko presto trident
        Kernelversion: engineVs, // kernel version
        Platform: platform, // Platform: desktop mobile
        Carrier: supporter, // Carrier: chrome safari firefox opera iexplore edge
        Carrierversion: supporterVs, // carrier version
        System: system, // System: windows macos linux android ios
        Systemversion: systemVs, // system version
      },
      shell === 'none'
        ? {}
        : {
            Shell: shell, // Shell: wechat qq uc 360 2345 sougou liebao maxthon
            Shellversion: shellVs, // shell version
          }
    ),
    en: Object.assign(
      {
        engine, // Kernel: webkit gecko presto trident
        engineVs, // kernel version
        platform, // platform: desktop mobile
        supporter, // carrier: chrome safari firefox opera iexplore edge
        supporterVs, // carrier version
        system, // system: windows macos linux android ios
        systemVs, // system version
      },
      shell === 'none'
        ? {}
        : {
            shell, // shell: wechat qq uc 360 2345 sougou liebao maxthon
            shellVs, // shell version
          }
    ),
  }[lang];
}
