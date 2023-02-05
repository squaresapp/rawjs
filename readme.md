<p align="center">
	<img src="readme-poster.png" alt="Hut Poster Image">
</p>

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Is%20React%20too%20complicated%3F%20Give%20Hut.js%20a%20go.&url=https://github.com/paul-go/Hut)

## What is Hut?

Hut is an **ultra-ergonomic HTML element construction library**. Call functions. Get HTMLElement objects with event bindings and CSS styling attached. That's it.

It turns out, this is all you need to create very complex UIs. **You don't need React, Vue, Angular, Svelte**, or any of the others. These things are complicated UI sub-systems that run around behind the scenes and do a bunch of weird magic for you in order to keep your view in sync with your data. You have to do things their way, otherwise, the magic won't work.

The thesis of Hut is that **framework-supplied databinding is overrated**. By making controllers that are just plain TypeScript classes, and using the DOM directly to store your view state, you can **drop out the complexities associated with model/view synchronization**. The view, the controller, and even (to some degree) the model become **one and the same**. Some devs will shudder at this. But by organizing your code like this, you'll have a project that is **vastly** less complex, easier to debug, and exhibits less surprising behavior.

**In short**: Databinding is overrated for the majority of projects. Learn to live without it, and you probably won't look back.

## Why Use Hut?

- Super **easy** to learn. Think jQuery levels of easy. But as **powerful** as React.
- No bloat. The whole library is only **2.3KB**.
- No props / state / special controllers that need to be inherited.
- No weird or unpredictable framework "magic".
- No performance overhead.
- No virtual DOM.
- No JSX.
- No **SASS / LESS / PostCSS**. Write your CSS in TypeScript, and get all the benefits of styling becoming just another part of the code.

Also: 

- Hut is being used in production (to build the Direct app).
- Many years in the making. Has passed through many different design variations.
- Works with ES modules, no modules (script include), or CommonJS
- Works in Node.js / Deno for server-side HTML generation

## Why Not Use Hut?

- **React / Vue have stronger ecosystems**. But for a battle-tested 2.3KB library that's not doing very much, how important really is an ecosystem?
- No mobile-native UI (React Native) equivalent. If someone wants to make a Hut backend for NativeScript, send me a Tweet.

## Installation

```html
<script src="https://cdn.jsdelivr.net/npm/hut-lib@1.0.6/+build/hut.min.js"></script>
```
Or
```
npm install hut-lib --save
```

## Project Status

The code is basically bomb proof. But the documentation is MIA. Still in the interest-gauging phase.

## An Example Controller

```typescript
class MyController
{
	readonly head;
	
	constructor()
	{
		this.head = hot.div(
			{
				width: "100px",
				height: "100px",
				backgroundColor: "red",
			},
			hot.button(
				hot.text("Click me"),
				hot.on("click", () => this.handleClick())
			)
		);
	}
	
	private handleClick()
	{
		alert("Clicked!");
	}
}

// Somewhere in your initialization code:
document.body.append(new MyController().head);
```

