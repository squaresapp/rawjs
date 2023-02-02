<p align="center">
	<img src="docs/Cover.png" alt="Hut">
</p>

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Is%20React%20too%20complicated%3F%20Give%20Hut.js%20a%20go.&url=https://github.com/paul-go/Hut)

## What is Hut?

Hut stands for **H**TML (and CSS) **u**nder **T**ypeScript. It's is an **ultra-ergonomic HTML element construction library**. Call functions. Get elements with event bindings and CSS styling attached. That's it.

It turns out, this is all you need to create very complex UIs. **You don't need React, Vue, Angular**, or any of the others. These things are complicated UI sub-systems that run around behind the scenes and do a bunch of weird magic for you in order to keep your view in sync with your data. You have to do things their way, otherwise, the magic won't work.

But by making controllers that are just plain TypeScript classes, storing view state and everything else directly in the DOM, you can **drop out the complexities associated with model/view synchronization**. Some devs will shudder at this. But by organizing your code like this, you can end up with a code base that is **vastly** less complex, easier to debug, and exhibits less surprising behavior.

Unfortunately, it's very hard to illustrate these benefits with silly 5-line [code-golf](https://en.wikipedia.org/wiki/Code_golf) style examples. The real test is how easy it is to iterate and debug a 50K LoC app with hundreds of components. As someone who has now built a few complex apps with Hut, there's now zero chance of me using React to build an app from scratch.

## Why Use Hut?

- No bloat. The whole library is only **2.3KB**.
- No opinions about how you should structure you app.
- No weird framework "magic".
- No performance overhead.
- No virtual DOM.
- No JSX.
- No **SASS / LESS / PostCSS**. Write your CSS in TypeScript, and get all the benefits of styling becoming just another part of the code.
- No framework learning curves. (There's a mindset shift. But if you know HTML, CSS, and JavaScript, you'll be able to get the hang of it within a few minutes.)

Also: 

- Hut is being used in production (to build the Direct app).
- Many years in the making. Has passed through many different design variations.
- Works with ES modules, no modules (script include), or CommonJS
- Works in Node.js / Deno for server-side HTML generation

## Why Not Use Hut?

- React / Vue obviously have a stronger ecosystem
- No mobile-native UI (React Native) equivalent. If someone wants to make a Hut backend for NativeScript, send me a Tweet.

## Installation

```
<script src="https://cdnjs.org/hut-js.min.js"></script>
```
Or
```
npm install hut-js --save
```

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
		console.log("Clicked!");
	}
}

// Somewhere in your initialization code:
document.body.append(new MyController().head);
```

