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
        // DFP has a character limit.
        var target_section = 'interactive';
        if ( ad_tag.length >= 20 ) {
            var kill_chars = ad_tag.length - 19;
            target_section = target_section.substring(kill_chars);
        }

      if ( !is_mobile || is_tablet ) {
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[728, 90]], 'div-gpt-ad-x101').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
          .setTargeting("position","x101");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[300, 250]], 'div-gpt-ad-1423507761396-1').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
          .setTargeting("position","x102");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[300, 250]], 'div-gpt-ad-1423507761396-2').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
          .setTargeting("position","x103");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[728, 90]], 'div-gpt-ad-x105').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
          .setTargeting("position","x105");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[728, 90]], 'div-gpt-ad-1423507761396-4').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[300, 250]], 'div-gpt-ad-1423507761396-3').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
          .setTargeting("position","x104");
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          });
        }

        // mobile ads
       else {        
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/M.NYDN/Interactive', [[320, 50]], 'div-gpt-ad-x101').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
          .setTargeting("position","x101");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/M.NYDN/Interactive', [[300, 250]], 'div-gpt-ad-1423507761396-1').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
          .setTargeting("position","x102");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/M.NYDN/Interactive', [[300, 250]], 'div-gpt-ad-1423507761396-2').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
          .setTargeting("position","x103");          
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/M.NYDN/Interactive', [[320, 50]], 'div-gpt-ad-x105').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
          .setTargeting("position","x105");
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/NYDN/Interactive',  [[320, 50]], 'div-gpt-ad-1423507761396-4').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
          });
          googletag.cmd.push(function() {
          googletag.defineSlot('/4692832/M.NYDN/Interactive', [[300, 250]], 'div-gpt-ad-1423507761396-3').addService(googletag.pubads())
          .setTargeting(target_section,ad_tag)
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
    // This is the gentlest scroll handler and watcher I could write.
    var did_scroll = 0, scroll_pos = 0;
    var height_limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                           document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    var bottom = height_limit - window.innerHeight;
    var trigger = Math.floor(bottom*.8);
    taboola_times = 0;

    window.addEventListener('scroll', function(e) {
        if ( scroll_pos !== window.scrollY ) {
            scroll_pos = window.scrollY;
            did_scroll = 1;
        }
    });
    setInterval( function()
    {
        if ( did_scroll === 1 )
        {
            window.requestAnimationFrame(function() {
                if ( scroll_pos >= trigger ) scroll_function();
            });
            did_scroll = 0;
        }
    }, 1000);

    function scroll_function() {
        if ( taboola_times > 1 ) return false;
        taboola_times += 1;
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

        // Append
        var el = document.getElementById('templatefooter');
        if ( el === null ) el = document.querySelectorAll('footer')[0];
        el.insertAdjacentHTML('beforebegin', '<div id="taboola-interactive_pages-3x3" style="max-width: 800px; margin: 100px auto;"></div>');

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
        // Add parsely if it's not there already
        if ( typeof PARSELY === 'undefined' ) {
                if ( document.getElementById('parsely-root') == null ) {
                        var newDiv = document.createElement('div');
                        newDiv.id = 'parsely-root';
                        var newSpan = document.createElement('span');
                        newSpan.id = 'parsely-cfg';
                        newSpan.setAttribute('data-parsely-site','nydailynews.com')
                        newDiv.appendChild(newSpan);
                        document.body.appendChild(newDiv);
                }
                (function(s, p, d) { var h=d.location.protocol, i=p+"-"+s, e=d.getElementById(i), r=d.getElementById(p+"-root"), u=h==="https:"?"d1z2jf7jlzjs58.cloudfront.net" :"static."+p+".com"; if (e) return; e = d.createElement(s); e.id = i; e.async = true; e.src = h+"//"+u+"/p.js"; r.appendChild(e); })("script", "parsely", document);
        }

    // TRONC BEACON
	(function() {
        var l = location.hash + location.search;
        if (l.indexOf('disable-ensighten') >= 0) return;
        var s = document.createElement('script');
        s.async = true;
        s.src = '//nexus.ensighten.com/tronc/nydailynews' + (l.indexOf('ensightenEnv=dev') > -1 ? 'dev' : 'prod') + '/Bootstrap.js';
        document.head.appendChild(s);
	})();
    
    // PAYWALL & JQUERY (if necessary)
    function load_paywall() {
        if ( document.location.host === 'interactive.nydailynews.com' )
        {
            // PAYWALL - PROD
            var s = document.createElement('script');
            s.async = true;
            s.src = '//ssor.tribdss.com/reg/tribune/nydnews-interactive.min.js';
            document.head.appendChild(s);
            s = document.createElement('script');
            s.async = true;
            s.src = '//www.tribdss.com/meter/nydnews-interactive.min.js';
            document.head.appendChild(s);
        }
        else
        {
            // PAYWALL - STAGING
            var s = document.createElement('script');
            s.async = true;
            s.src = '//ssor.trb.stage.tribdev.com/reg/tribune/nydnews-interactive.min.js';
            document.head.appendChild(s);
            s = document.createElement('script');
            s.async = true;
            s.src = '//www.dss.trb.stage.tribdev.com/meter/nydnews-interactive.min.js';
            document.head.appendChild(s);
        }
    }
    if ( typeof jQuery === 'undefined' ) {
        var s = document.createElement('script');
        s.onload = function() { load_paywall(); };
        s.src = '/js/jquery.min.js';
        document.head.appendChild(s);
    }
    else load_paywall();
}
