<p align="center">
	<img src="readme-poster.png" alt="Hut Poster Image">
</p>

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Is%20React%20too%20complicated%3F%20Give%20Hut.js%20a%20go.&url=https://github.com/paul-go/Hut)

## What is Hut?

Hut stands for **H**TML (and CSS) **U**nder **T**ypeScript. It's is an **ultra-ergonomic HTML element construction library**. Call functions. Get HTMLElement objects with event bindings and CSS styling attached. That's it.

It turns out, this is all you need to create very complex UIs. **You don't need React, Vue, Angular**, or any of the others. These things are complicated UI sub-systems that run around behind the scenes and do a bunch of weird magic for you in order to keep your view in sync with your data. You have to do things their way, otherwise, the magic won't work.

But by making controllers that are just plain TypeScript classes, and using the DOM itself as the backing store for view state, you can **drop out the complexities associated with model/view synchronization**. The view, the controller, and even (to some degree) the model become **one and the same**. Some devs will shudder at this. But by organizing your code like this, you can end up with a code base that is **vastly** less complex, easier to debug, and exhibits less surprising behavior.

Unfortunately, it's very hard to illustrate the benefit with silly 5-line [code-golf](https://en.wikipedia.org/wiki/Code_golf) style examples. The real test is how easy it is to iterate and debug a 50K LoC app with hundreds of components. As someone who has now built a few complex apps with Hut, there's now zero chance of me using React to build an app from scratch.

## Why Use Hut?

- No bloat. The whole library is only **2.3KB**.
- No props / state / special controllers that need to be inherited.
- No weird or unpredictable framework "magic".
- No performance overhead.
- No virtual DOM.
- No JSX.
- No **SASS / LESS / PostCSS**. Write your CSS in TypeScript, and get all the benefits of styling becoming just another part of the code.
- No **learning curve**. (There's a mindset shift. But if you know HTML, CSS, and JavaScript, you'll be able to get the hang of it within a few minutes.)

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
<script src="https://cdn.jsdelivr.net/npm/hut-min@1.0.1/hut.min.js"></script>
```
Or
```
npm install hut-min --save
```

## Getting Started



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

