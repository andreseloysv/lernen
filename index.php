
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Lernen</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <!-- Place favicon.ico in the root directory -->
        <link rel="stylesheet" href="css/main.css">
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <!-- Add your site or application content here -->
        <div class="web-wrapper">
            <div>
                <h4>Unregelmäßige verben</h4>
            </div>
            <div class="result">
                <div>
                    <h4 id="infinitiv-title">Das Verb</h4>
                </div>
                <!--            <div>
                                <label>Infinitiv</label>
                                <input placeholder="Infinitiv" id="infinitiv" type="text" value="">
                                <div class="hint" id="infinitiv-hint" data-element="infinitiv"></div>
                            </div>-->
                <div class="container-word">
                    <label>Pr&auml;sens: 3. Person singular</label>
                    <input class="answer" placeholder="machen" id="praesens" type="text" value="">
                    <div class="hint" id="praesens-hint" data-element="praesens"></div>
                    <ul class="special-characters">
                        <li><a href="#">ä</a></li>
                        <li><a href="#">ö</a></li>
                        <li><a href="#">ü</a></li>
                        <li><a href="#">ß</a></li>
                    </ul>
                </div>
                <div class="container-word">
                    <label>Pr&auml;teritum: 3. Person singular</label>
                    <input class="answer" placeholder="macht" id="praeteritum" type="text" value="">
                    <div class="hint" id="praeteritum-hint" data-element="praeteritum"></div>
                    <ul class="special-characters">
                        <li><a href="#">ä</a></li>
                        <li><a href="#">ö</a></li>
                        <li><a href="#">ü</a></li>
                        <li><a href="#">ß</a></li>
                    </ul>
                </div>
                <div class="container-word">
                    <label>Perfekt: 3. Person singular</label>
                    <input class="answer" placeholder="hat gemacht" id="perfekt" type="text" value="">
                    <div class="hint" id="perfekt-hint" data-element="perfekt"></div>
                    <ul class="special-characters">
                        <li><a href="#">ä</a></li>
                        <li><a href="#">ö</a></li>
                        <li><a href="#">ü</a></li>
                        <li><a href="#">ß</a></li>
                    </ul>
                </div>
                <div class="more-info">
                    <label><u>Bedeutung:</u> </label>
                    <div class="" id="meaning"></div>
                    <hr>
                    <label><u>Example:</u> </label>
                    <div class="" id="example"></div>
                </div>
            </div>
            
                        <div class="progress-container">
                <div class="progress"></div>
            </div>
            
            <input id="play" type="button" value="spiel">

        </div>
        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function (b, o, i, l, e, r) {
                b.GoogleAnalyticsObject = l;
                b[l] || (b[l] =
                        function () {
                            (b[l].q = b[l].q || []).push(arguments)
                        });
                b[l].l = +new Date;
                e = o.createElement(i);
                r = o.getElementsByTagName(i)[0];
                e.src = 'https://www.google-analytics.com/analytics.js';
                r.parentNode.insertBefore(e, r)
            }(window, document, 'script', 'ga'));
            ga('create', 'UA-XXXXX-X', 'auto');
            ga('send', 'pageview');
        </script>
    </body>
</html>