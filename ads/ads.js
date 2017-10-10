var is_mobile = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var is_tablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/i.test(navigator.userAgent);
var googletag = googletag || {};
var nydn_ads = function(ad_tag) {
        googletag.cmd = googletag.cmd || [];
        (function() {
        var gads = document.createElement('script');
        gads.async = true;
        var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
        })();

      if ( !is_mobile || is_tablet ) {
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[728, 90]], 'div-gpt-ad-x101').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x101");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[300, 250]], 'div-gpt-ad-1423507761396-1').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x102");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[300, 250]], 'div-gpt-ad-1423507761396-2').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x103");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[728, 90]], 'div-gpt-ad-x105').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x105");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[300, 250]], 'div-gpt-ad-1423507761396-3').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x104");
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          });
        }

        // mobile ads
       else {        
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/M.NYDN/Interactive', [[320, 50]], 'div-gpt-ad-x101').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x101");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/M.NYDN/Interactive', [[300, 250]], 'div-gpt-ad-1423507761396-1').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x102");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/M.NYDN/Interactive', [[300, 250]], 'div-gpt-ad-1423507761396-2').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x103");          
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/M.NYDN/Interactive', [[320, 50]], 'div-gpt-ad-x105').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x105");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/M.NYDN/Interactive', [[300, 250]], 'div-gpt-ad-1423507761396-3').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x104");
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          });
        }
};
var nydn_ads_refresh = function() {
    googletag.pubads().refresh();
};
var nydn_ad_refresh = function(id) {
    googletag.pubads().refresh([id]);
};

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
window.onload = function() {
    // Load the script, then append the necessary elements,
    // and then fire the activation on those elements.
    window._taboola = window._taboola || [];
    _taboola.push({article:'auto'});
    !function (e, f, u, i) {
    if (!document.getElementById(i)){
      e.async = 1;
      e.src = u;
      e.id = i;
      f.parentNode.insertBefore(e, f);
    }
    }(document.createElement('script'),
    document.getElementsByTagName('script')[0],
    '//cdn.taboola.com/libtrc/nydailynews-interactivepages/loader.js',
    'tb_loader_script');
    if(window.performance && typeof window.performance.mark == 'function')
    {window.performance.mark('tbl_ic');}
    console.log('hi');

    // Append
    var el = document.getElementById('templatefooter');
    el.insertAdjacentHTML('beforebegin', '<div id="taboola-interactive_pages-3x3"></div>');

    // Fire
    window._taboola = window._taboola || [];
    _taboola.push({
        mode: 'thumbnails-b',
        container: 'taboola-interactive_pages-3x3',
        placement: 'interactive_pages-3x3',
        target_type: 'mix'
    });

    // Close out
    window._taboola = window._taboola || [];
    _taboola.push({flush: true});
}
