#How to integrate resmio reputation widget

[resmio.github.io/reputation-widget](https://resmio.github.io/reputation-widget/)

resmio reputation widget allows you to show a graphic like this:  

![Example Dark Blue](/images/badge-dark-blue.png)  

In any webpage, showing a percentage based on feedback real guests left for your
restaurant. Here's how to make it work:

## Instructions ##
- First you need to copy this script and include it anywhere (we recommend
  putting it before the closing `<body>` tag though, to not block the render of
  your html) in your webpage :   

  ```
      <script>
        (function() {
          // https://github.com/resmio/reputation-widget
          var script = document.createElement('script');
          script.async = true;
          script.src = 'https://static.resmio.com/static/reputation-widget.js';
          var entry = document.getElementsByTagName('script')[0];
          entry.parentNode.insertBefore(script, entry);
        })();
      </script>
   ```

- Once that is done the reputation badge will be injected wherever an element
  like this:  
  ```html
  <div
    class="resmio-reputation-widget"
    data-resmio-reputation-id="janns-doenerbude"
    data-resmio-reputation-language="de"
    data-resmio-reputation-color="yellow"
    data-resmio-reputation-max-width="250px"
  ></div>
  ```
  is found in the html, you can include several of them if you want. Now let's
  take a look at how this last html code work.

### Options ###
- `class="resmio-reputation-widget"` and `data-resmio-reputation-id="<restaurantid>"`
  are mandatory, where you need to replace <restaurantid> for an actual
  id. To find this id, you can go to the index page of https://app.resmio.com/
  for the restaurant, and copy the part of the url that comes after the /

- `data-resmio-reputation-language="<language>"` is optional, you need to
  replace <language> with one of the available language codes right now the
  following are available:
    - `da` for Danish  
    - `de` for German
    - `en` for English
    - `es` for Spanish
    - `fr` for French
    - `nl` for Dutch
    - `pt` for Portuguese

  If you don't provide a language, the widget will be shown in the user operating
  system language, if this can not be detected we will default to english.

  - `data-resmio-reputation-color="<color>"` also optional, replace <color>
    with one of these available palettes. We default to darkBlue if no palette
    is provided.
    - `darkBlue`  
        ![Example Dark Blue](/images/badge-dark-blue.png)  
    - `lightBlue`  
        ![Example Light Blue](/images/badge-light-blue.png)  
    - `yellow`  
        ![Example Yellow](/images/badge-yellow.png)  

  - `data-resmio-reputation-max-width="<size>"` optional, replace <size>
    with a value (including valid units as px, em, rem ...). We default to 500px
    if this property is not present. Remember that this is just a limit to how
    much the widget will expand, not a fixed size.

### Technical tips ###
Setting this rules in the `.resmio-reputation-widget` class can help:
```
z-index: 10000;
position: relative;
display: inline-block;
```

You can use regular css on the container to set size and position or any other
property.  The widget will always take 100% of its container element. You can
change how this works though, here's how to do it:

The widget is contained in a class called `.resmio-reputation-badge-wrapper`
adding rules to this class in your css will help you position and scale the
widget. For example if we want the widget to be centered and `350px` width we would
add this to our styles:
```
.resmio-reputation-badge-wrapper {
  margin: 0 auto;
  width: 350px;
}
```

Something to notice about the width. In our legibility tests we got to the
conclusion that the widget works better when its size falls between `200px` and
`500px`, so those are the minimum and maximum width at which the widget will be
rendered. There is a way to override this, in the rare case you want to make it
smaller. You just need to add a declaration like this to your styles:  
```
.resmio-reputation-badge-wrapper {
  width: 150px;
  min-width: 100px !important;
}
```

Use it wisely and remember the Spiderman movies quote: `With great power comes
great responsibility`

If you have problems, you can send us an email to <support@resmio.com> or open an issue in
 this repo.
