# Daily News Ad Javascript
So we're not reinventing the wheel each new project

## Usage
Add this script to the `<head>` element of the project you're working on.

```html
<script onload="nydn_ads('one');" src="//interactive.nydailynews.com/includes/ads/ads.js"></script>
```

Also, change "longform" to whatever category fits the project.

### Ad positions

* div-gpt-ad-x101
* div-gpt-ad-1423507761396-1
* div-gpt-ad-1423507761396-2
* div-gpt-ad-1423507761396-3
* div-gpt-ad-1423507761396-4
* div-gpt-ad-x105

### Ad styles & markup

```css
.center {
    margin: auto;
    text-align: center;
}
.ad > span {
    font-size:10px;
    color:#999;
    font-family:sans-serif;
}
```
```html
  <div class="ad center">
    <div id='div-gpt-ad-x101'>
        <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-x101'); });
        </script>
    </div>
  </div>
```
```html
  <div class="ad center">
    <div id='div-gpt-ad-1423507761396-1'>
        <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1423507761396-1'); });
        </script>
    </div>
  </div>
```
```html
  <div class="ad center">
    <div id='div-gpt-ad-1423507761396-2'>
        <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1423507761396-2'); });
        </script>
    </div>
  </div>
```
```html
  <div class="ad center">
    <div id='div-gpt-ad-1423507761396-3'>
        <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1423507761396-3'); });
        </script>
    </div>
  </div>
```
```html
  <div class="ad center">
    <div id='div-gpt-ad-x105'>
        <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-x105'); });
        </script>
    </div>
  </div>
```
