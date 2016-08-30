Resmio reputation widget allows you to show a graphic like this:  

![Example Dark Blue](resmio.github.com/reputation-widget/images/badge-dark-blue.png)

In any webpage, showing a percentage based on feedback real guests left for your
restaurant. Here's how to make it work:

## Instructions ##
- First you need to copy this script and include it anywhere (we recommend
  putting it before the closing `<body>` tag though, to not block the render of
  your html) in your webpage :   

  ```
      <script>
        (function() {
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
  ></div>
  ```
  is found in the html, you can include several of them if you want. Now let's
  take a look at how this last html code work.

### Options ###
- `class="resmio-reputation-widget"` and `data-resmio-reputation-id="<restaurantid>"`
  are mandatory, where you need to replace <restaurantid> for an actual
  id. To find this id, you can go to the index page of https://app.resmio.com/
  for the restaurant, and copy the part of the url that comes after the /

  IMAGE

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
        ![Example Dark Blue](resmio.github.com/reputation-widget/images/badge-dark-blue.png)
    - `lightBlue`
        ![Example Light Blue](resmio.github.com/reputation-widget/images/badge-light-blue.png)
    - `yellow`
        ![Example Yellow](resmio.github.com/reputation-widget/images/badge-yellow.png)

### Troubleshooting ###
Setting this rules in the `.resmio-reputation-widget` class can help:
```
z-index: 10000;
position: relative;
display: inline-block;
```

You can use regular css on the container to set size and position or any other
property.  

If you have problems, you can send us an email to EMAIL or open an issue in
 this repo.
