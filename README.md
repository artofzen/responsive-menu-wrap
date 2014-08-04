responsive-menu-wrap
====================

Basic Responsive Menu Wrapper

Strictly no bells and whistles jQuery plugin which generates a 3 line menu button and assigns click events to open/close a css selected menu.

CSS is very basic, which means you will have to include the css and the corresponding media query css.

The script takes the following options:

<ul>
<li>mobileWrapperId : 'sfm-wrapper' => Button wrapper id</li>
<li>mobileBtnId : 'sfm-btn'         => Button Id</li>
<li>align : 'right'                 => alignment of button (left, center, right)</li>
<li>breakpoint : 767                => Show the button at this viewport width</li>
<li>duration : 500                 => open/close menu speed</li>
</ul>

Sample usage:
<pre>
    <code>
        jQuery('#nav-main').sfmobile({ breakpoint : 800, align : 'right', duration : 400 });
    </code>
</pre>