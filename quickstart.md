
# RawJS Quickstart

## Class Names

Add class names by passing strings:

```typescript
document.body.append(
	raw.div("my-class");
);
```
Makes:
```html
<div class="my-class"></div>
```

## Attributes

Add HTML attributes by passing plain JavaScript objects:

```typescript
document.body.append(
	raw.img({ src: "image.jpg" })
);
```
Makes:
```html
<img src="image.jpg">
```

## Inline Styles

Add inline styles with the same syntax as HTML attributes:

```typescript
document.body.append(
	raw.div({ width: "100px", height: "100px" })
);
```
Makes:
```html
<div style="width: 100px; height: 100px;"></div>
```

Read this to learn how it knows if you mean an attribute or a style. (TL;DR: It's not complicated and it gets it right 99.9% of the time.)

## Text Content

Add text content with the ``raw.text`...`` template literal.

```typescript
document.body.append(
	raw.p(raw.text`Hello!`)
);
```
Makes:
```html
<p>Hello!</p>
```

The ``raw.text`...`` template literal just returns a DOM `Text` node. So technically this is equivalent:
```typescript
document.body.append(
	raw.p(new Text("Hello!"))
);
```

Some people may find it useful to globalize a function called `t` so that the `raw.text()` function can be shortened. For example:

```typescript
// Globalize this const, which is different depending on whether or not you're using ES modules.
const t = raw.text;

document.body.append(
	raw.p("css-class-name", t`This is text content.`)
);
```

## Hierarchies

Passed DOM Node instance are appended. This allows you to construct complex DOM hierarchies without using JSX:

```typescript
document.body.append(
	raw.div(
		"level-1"
		raw.div("level-2"),
		raw.div("level-2", raw.div("level-3")),
		raw.div("level-2")
	)
);
```
Makes
```html
<div class="level-1">
	<div class="level-2"></div>
	<div class="level-2">
		<div class="level-3"></div>
	</div>
	<div class="level-2"></div>
</div>
```

## Short-circuiting

The values `null`, `undefined`, `false`, `void`, and `""` are discarded. This is can be handy for conditional element construction, especially when the nesting gets deep.

```typescript
const showTheLink = false;

document.body.append(
	raw.section(
		raw.div(
			showTheLink && raw.a({ href: "#"})
		)
	)
);
```

## Arrays

Array contents are flattened. The following two pieces of code produce the same result:

```typescript
document.body.append(
	raw.div("class-1", ["class-2", [raw.div()]], "class-3")
);
```
```typescript
document.body.append(
	raw.div("class-1", "class-2", raw.div(), "class-3")
);
```

This comes in *really* handy when you start organizing your element construction code into functions. More on this later.


## Functions

Passing a function causes it to be executed immediately. The return value of the function is consumed as parameters.

```typescript
raw.section(
	() =>
	{
		const param: Raw.Param[] = [
			"section-class",
		];
		
		for (let i = 0; i < 5; i++)
			param.push(raw.div("class-" + i));
		
		return param;
	}
);
```
Makes
```html
<section class="section-class">
	<div class="class-0"></div>
	<div class="class-1"></div>
	<div class="class-2"></div>
	<div class="class-3"></div>
	<div class="class-4"></div>
</section>
```

Functions are passed one parameter, which is a reference to the element being created. You can use this to do all sorts of ergonomic short-cuts. For example:

```typescript
document.body.append(
	raw.section(
		functionThatMightReturnAString(),
		// The e parameter refers to the <section> being created.
		// Only add the class if the previous function call returned
		// it as a string parameter.
		e => e.classList.has("the-returned-class-string") && "another-class"
	)
);
```

## Event Attachments

Use the `raw.on(...)` syntax to create an event object that can be used as an argument.

```typescript
document.body.append(
	raw.button(
		raw.on("click", () =>
		{
			alert("Button clicked!");
		})
	)
);
```

The method signature of raw.on(...) is basically the same as element.addEventListener(). For example:
```typescript
raw.button(
	raw.on("click", () =>
	{
		...
	},
	{ capture: true })
);
```

## Waiting For Insertion

Use the special `"connected"` event to get a high-performance, low-overhead callback when an element is connected to the DOM.

```typescript
raw.div(
	raw.on("connected", () =>
	{
		// The div is now inserted into the DOM!
	})
);
```
For a low-effort way to capture the connected element in the callback, just wrap the call to `raw.on()` in a closure. Consider this practical use-case:

```typescript
raw.input(
	{ type: "text" },
	e => raw.on("connected", () =>
	{
		e.focus();
		console.log("The <input> is now focused!");
	})
);
```

## Remote Event Targets

When you attach an event handler to an element, and the element dies, so does the event handler. But sometimes you want the life of the handler to be connected to a *different* element. You can do this by passing a different target as the first argument to `raw.on()`. For example:

```typescript

raw.div(
	// The event handler will be attached to the window
	// It will die when the div is removed from the DOM.
	e => raw.on(window, "keydown", ev =>
	{
		if (ev.key === "Escape")
			e.remove();
	}),
);

```

## Acquiring Existing Elements

You can capture existing elements with the `raw.get(...)` function. You can think of this as similar to the `$(...)` call in jQuery. But instead, this function returns *another* function that accepts arguments which are then assigned back to the element.

Here is an example of capturing an existing element, and attaching a class name and an event listener.

```typescript
raw.get(document.body)(
	"add-this-class",
	raw.on("click", () =>
	{
		// ...
	})
);
```

You can also pass more than one element, and in which case, the arguments will be applied to each element:

```typescript
// Add each of the 2 classes to each of the 3 elements
raw.get(element1, element2, element3)(
	"class1", "class2"
);
```

The return value of the `raw.get()` function is the element or elements that were passed in. This is especially handy when using functions that return components, and you would like to augment the return component within the context of some other hierarchy being created:

```typescript
function makeButton(text: string, href: string)
{
	return raw.a(
		"button",
		raw.text(text)
	);
}

raw.div(
	raw.get(makeButton("Click me")(
		raw.on("click", () =>
		{
			// Click event handler is
			// added to the button!
		})
	)
);
```

# CSS

You can do most of your styling with inline styles. **Don't be afraid of this**. You can encapsulate all your styling in callable functions, so inline styling doesn't suck in RawJS like it does with standard HTML. This also gives good performance because the browser doesn't need to match styles up with CSS rules. But there still times when it's better to use real CSS rules. Fortunately, RawJS makes this easy with the `raw.css()` method.

```typescript
raw.section(
	raw.css(
		// Creates a rule that selects the hover state
		// of the containing <section>
		":hover", {
			outline: "1px solid red"
		},
		// Creates a rule that matches the child <div>
		// elements, only within the containing <section>
		" DIV", {
			width: "100px",
			height: "100px",
			border: "1px solid blue",
		}
	),
	raw.div(),
	raw.div(),
	raw.div(),
);
```

**How this works internally**: Whenever the result of a `raw.css()` call is passed to an element creator method, a hidden unique CSS class name is generated for the element. Strings passed to the `raw.css()` method demarcate CSS rules, where the is the generated class name, with the specified string as a suffix. So the end result looks like this:

```html
<div class="_generated">
	<div></div>
	<div></div>
	<div></div>
</div>
```
```css
._generated:hover
{
	outline: 1px solid red;
}
._generated DIV
{
	width: 100px;
	height: 100px;
	border: 1px solid blue;
}
```

## Use Arrays For Fallback Values

In CSS, sometimes you'll see the same property defined multiple times with different values, to account for the fact that different browsers recognize different properties:

```css
DIV
{
	width: -moz-available;
	width: -webkit-fill-available;
	width: fill-available;
	width: stretch";
}
```

However, the same property key cannot be used multiple times in a JSON object literal. The RawJS equivalent of this pattern is to use an array of values:

```typescript
raw.div(
	{ "width": ["-moz-available", "-webkit-fill-available", "fill-available" "stretch"]}
);
```
