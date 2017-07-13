var is_mobile = /Android|webOS|iPhone|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var nydn_ads = function(ad_tag) {
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        (function() {
        var gads = document.createElement('script');
        gads.async = true;
        var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') + 
        '//www.googletagservices.com/tag/js/gpt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);
        })();

      if( !is_mobile ) {
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
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[300, 250]], 'div-gpt-ad-1423507761396-3').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x104");
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          });
        }
    // mobile ads

        if( is_mobile ) {        
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
          googletag.defineSlot('/4692832/M.NYDN/Interactive', [[300, 250]], 'div-gpt-ad-1423507761396-3').addService(googletag.pubads())
          .setTargeting("interactive",ad_tag)
          .setTargeting("position","x104");
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          });
        }
}
