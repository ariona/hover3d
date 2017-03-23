<img src="https://raw.githubusercontent.com/ariona/hover3d/master/hover3d.png" width=150 height=121 align="right" alt="">

# jQuery Hover3d

[![Bower version](https://badge.fury.io/bo/hover3d.svg)](https://badge.fury.io/bo/hover3d)

jQuery Hover3d is a simple hover script for creating 3d hover effect. It was my experiment on exploring CSS3 3d transform back in 2015 on Codepen [3D hover plane effect](http://codepen.io/ariona/pen/JopOOr).

The idea is transforming the element into 3d space using CSS3 transform, playing with translateZ for spacing the elements, and detecting mouse movement to change the transform value

## Demo

Check out the demo here [Demo](http://ariona.github.io/hover3d/index.html)

## Usage

Include jQuery, and jquery.hover3d.min.js within your HTML

### HTML

```html
<script src="jquery.min.js"></script>
<script src="jquery.hover3d.min.js"></script>
```

There is a minimal markup required, the element container and element that will be transformed into 3d card

```html
<div class="project">
	<div class="project__card">
		<!-- Content element goes here -->
	</div>
</div>
```

### CSS

There is no special CSS file to be included, you can write your own CSS and playing with transform on child elements. However there is helper class that will be added when hovering in and out.

```css
/* This class can be replaced using options */
.hover-in{
	transition: .3s ease-out;
}
.hover-out{
	transition: .3s ease-in;
}
```

### JS

Next step is init the plugin on `.project` and give the selector element that will be transformed, in this case it's `project__card`.

```js
$(".project").hover3d({
	selector: ".project__card"
});
```

## Options

Option | Type | Default | Description
------ | ---- | ------- | -----------
selector | string | null | Selector for element that will be the 3d card
perspective | integer | 1000 | Perspective value for 3d space
sensitivity | integer | 20 | Mouse movement sensitivity, larger number is less sensitive
invert | boolean | false | Default behavior is the element will follow the mouse, look like it facing the mouse
shine | boolean | false | Add shining layer
hoverInClass | string | hover-in | Helper class when mouse hover in the element, will be removed after 300ms
hoverOutClass | string | hover-out | Helper class when mouse hover Out the element, will be removed after 300ms
hoverClass | string | hover-3d | Helper class when the mouse is hovering the element

### Compatibility

All browser that support 3d transform and perspective. You can check it on [caniuse.com](http://caniuse.com)
