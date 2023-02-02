<p align="center">
	<img src="docs/cover.webp" alt="Hut Cover Image">
</p>

## What is Hut?

Hut stands for **H**TML (and CSS) **u**nder **T**ypeScript. Hut is *vastly* simpler than essentially every other view layer in existence. React / Vue / Angular / etc are UI subsystems. They run around behind the scenes and do a bunch of weird magic for you in order to keep your view in sync with your data. Because of this, they have to force you to structure your app in certain ways, otherwise the magic won't work.

By contrast, Hut is an ultra-ergonomic HTML element construction library. Call functions. Get elements. That's it. It's a way of creating complex HTML element structures very naturally, and connecting all sorts of bindings and stylings to them. 

The benefit of this approach is that your app's code becomes less complex, easier to debug, and exhibits less surprising behavior. It's very hard to illustrate this with silly 5-line [code-golf](https://en.wikipedia.org/wiki/Code_golf) style examples. The real test is how easy it is to iterate and debug a 50K LoC app with hundreds of components. As someone who has now built a few complex apps with Hut, there's now zero chance of me using React to build an app from scratch.

## Hut is just an HTML element construction library

- All styling can be done in a right where you construct your elements, with full type-safety. **No need for separate CSS files**.
- No bloat. The whole library is only **2.3KB**.
- No opinions about how you should structure you app.
- No virtual DOM.
- No JSX.
- No performance overhead.
- No weird framework "magic".
- No web components or custom elements (but use them if you want).
- Near-zero learning curve. If you know HTML, CSS, and JavaScript, you'll be able to get the hang of it within about 30 seconds.

Also: 

- Being used in production (to build the Direct app)
- Works with ES modules, no modules (script include), or CommonJS
- Works in Node.js / Deno for server-side HTML generation

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Is%20React%20too%20complicated%3F%20Give%20Hut.js%20a%20go.&url=https://github.com/paul-go/Hut)
