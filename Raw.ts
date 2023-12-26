
/**
 * 
 */
interface RawElements
{
	a(...params: Raw.Param<Raw.AnchorElementAttribute>[]): HTMLAnchorElement;
	abbr(...params: Raw.Param[]): HTMLElement;
	address(...params: Raw.Param[]): HTMLElement;
	area(...params: Raw.Param[]): HTMLAreaElement;
	article(...params: Raw.Param[]): HTMLElement;
	aside(...params: Raw.Param[]): HTMLElement;
	audio(...params: Raw.Param[]): HTMLAudioElement;
	b(...params: Raw.Param[]): HTMLElement;
	base(...params: Raw.Param<Raw.BaseElementAttribute>[]): HTMLBaseElement;
	bdi(...params: Raw.Param[]): HTMLElement;
	bdo(...params: Raw.Param[]): HTMLElement;
	blockquote(...params: Raw.Param[]): HTMLQuoteElement;
	body(...params: Raw.Param[]): HTMLBodyElement;
	br(...params: Raw.Param[]): HTMLBRElement;
	button(...params: Raw.Param[]): HTMLButtonElement;
	canvas(...params: Raw.Param[]): HTMLCanvasElement;
	caption(...params: Raw.Param[]): HTMLTableCaptionElement;
	cite(...params: Raw.Param[]): HTMLElement;
	code(...params: Raw.Param[]): HTMLElement;
	col(...params: Raw.Param[]): HTMLTableColElement;
	colgroup(...params: Raw.Param[]): HTMLTableColElement;
	data(...params: Raw.Param[]): HTMLDataElement;
	datalist(...params: Raw.Param[]): HTMLDataListElement;
	dd(...params: Raw.Param[]): HTMLElement;
	del(...params: Raw.Param[]): HTMLModElement;
	details(...params: Raw.Param[]): HTMLDetailsElement;
	dfn(...params: Raw.Param[]): HTMLElement;
	dialog(...params: Raw.Param[]): HTMLDialogElement;
	dir(...params: Raw.Param[]): HTMLDirectoryElement;
	div(...params: Raw.Param[]): HTMLDivElement;
	dl(...params: Raw.Param[]): HTMLDListElement;
	dt(...params: Raw.Param[]): HTMLElement;
	em(...params: Raw.Param[]): HTMLElement;
	embed(...params: Raw.Param[]): HTMLEmbedElement;
	fieldset(...params: Raw.Param[]): HTMLFieldSetElement;
	figcaption(...params: Raw.Param[]): HTMLElement;
	figure(...params: Raw.Param[]): HTMLElement;
	font(...params: Raw.Param[]): HTMLFontElement;
	footer(...params: Raw.Param[]): HTMLElement;
	form(...params: Raw.Param<Raw.FormElementAttribute>[]): HTMLFormElement;
	frame(...params: Raw.Param[]): HTMLFrameElement;
	frameset(...params: Raw.Param[]): HTMLFrameSetElement;
	h1(...params: Raw.Param[]): HTMLHeadingElement;
	h2(...params: Raw.Param[]): HTMLHeadingElement;
	h3(...params: Raw.Param[]): HTMLHeadingElement;
	h4(...params: Raw.Param[]): HTMLHeadingElement;
	h5(...params: Raw.Param[]): HTMLHeadingElement;
	h6(...params: Raw.Param[]): HTMLHeadingElement;
	head(...params: Raw.Param[]): HTMLHeadElement;
	header(...params: Raw.Param[]): HTMLElement;
	hgroup(...params: Raw.Param[]): HTMLElement;
	hr(...params: Raw.Param[]): HTMLHRElement;
	i(...params: Raw.Param[]): HTMLElement;
	iframe(...params: Raw.Param<Raw.FrameElementAttribute>[]): HTMLIFrameElement;
	img(...params: Raw.Param<Raw.ImageElementAttribute>[]): HTMLImageElement;
	input(...params: Raw.Param<Raw.InputElementAttribute>[]): HTMLInputElement;
	ins(...params: Raw.Param[]): HTMLModElement;
	kbd(...params: Raw.Param[]): HTMLElement;
	label(...params: Raw.Param[]): HTMLLabelElement;
	legend(...params: Raw.Param[]): HTMLLegendElement;
	li(...params: Raw.Param[]): HTMLLIElement;
	link(...params: Raw.Param<Raw.LinkElementAttribute>[]): HTMLLinkElement;
	main(...params: Raw.Param[]): HTMLElement;
	map(...params: Raw.Param[]): HTMLMapElement;
	mark(...params: Raw.Param[]): HTMLElement;
	marquee(...params: Raw.Param[]): HTMLMarqueeElement;
	menu(...params: Raw.Param[]): HTMLMenuElement;
	meta(...params: Raw.Param<Raw.MetaElementAttribute>[]): HTMLMetaElement;
	meter(...params: Raw.Param[]): HTMLMeterElement;
	nav(...params: Raw.Param[]): HTMLElement;
	noscript(...params: Raw.Param[]): HTMLElement;
	object(...params: Raw.Param[]): HTMLObjectElement;
	ol(...params: Raw.Param[]): HTMLOListElement;
	optgroup(...params: Raw.Param[]): HTMLOptGroupElement;
	option(...params: Raw.Param[]): HTMLOptionElement;
	output(...params: Raw.Param[]): HTMLOutputElement;
	p(...params: Raw.Param[]): HTMLParagraphElement;
	param(...params: Raw.Param[]): HTMLParamElement;
	picture(...params: Raw.Param[]): HTMLPictureElement;
	pre(...params: Raw.Param[]): HTMLPreElement;
	progress(...params: Raw.Param[]): HTMLProgressElement;
	q(...params: Raw.Param[]): HTMLQuoteElement;
	rp(...params: Raw.Param[]): HTMLElement;
	rt(...params: Raw.Param[]): HTMLElement;
	ruby(...params: Raw.Param[]): HTMLElement;
	s(...params: Raw.Param[]): HTMLElement;
	samp(...params: Raw.Param[]): HTMLElement;
	script(...params: Raw.Param<Raw.ScriptElementAttribute>[]): HTMLScriptElement;
	section(...params: Raw.Param[]): HTMLElement;
	select(...params: Raw.Param[]): HTMLSelectElement;
	slot(...params: Raw.Param[]): HTMLSlotElement;
	small(...params: Raw.Param[]): HTMLElement;
	source(...params: Raw.Param[]): HTMLSourceElement;
	span(...params: Raw.Param[]): HTMLSpanElement;
	strong(...params: Raw.Param[]): HTMLElement;
	sub(...params: Raw.Param[]): HTMLElement;
	summary(...params: Raw.Param[]): HTMLElement;
	sup(...params: Raw.Param[]): HTMLElement;
	table(...params: Raw.Param[]): HTMLTableElement;
	tbody(...params: Raw.Param[]): HTMLTableSectionElement;
	td(...params: Raw.Param[]): HTMLTableCellElement;
	template(...params: Raw.Param[]): HTMLTemplateElement;
	textarea(...params: Raw.Param[]): HTMLTextAreaElement;
	tfoot(...params: Raw.Param[]): HTMLTableSectionElement;
	th(...params: Raw.Param[]): HTMLTableCellElement;
	thead(...params: Raw.Param[]): HTMLTableSectionElement;
	time(...params: Raw.Param[]): HTMLTimeElement;
	title(...params: Raw.Param[]): HTMLTitleElement;
	tr(...params: Raw.Param[]): HTMLTableRowElement;
	track(...params: Raw.Param[]): HTMLTrackElement;
	u(...params: Raw.Param[]): HTMLElement;
	ul(...params: Raw.Param[]): HTMLUListElement;
	video(...params: Raw.Param<Raw.VideoElementAttribute>[]): HTMLVideoElement;
	wbr(...params: Raw.Param[]): HTMLElement;
	
	new(): RawElements;
}

/**
 * JSX compatibility
 */
declare namespace JSX
{
	type Element = globalThis.Element;
	type E<T = Raw.ElementAttribute> = Partial<T | Raw.Style>;
	
	interface IntrinsicElements
	{
		a: E<Raw.AnchorElementAttribute>;
		abbr: E;
		address: E;
		area: E;
		article: E;
		aside: E;
		audio: E;
		b: E;
		base: E<Raw.BaseElementAttribute>;
		bdi: E;
		bdo: E;
		blockquote: E;
		body: E;
		br: E;
		button: E;
		canvas: E;
		caption: E;
		cite: E;
		code: E;
		col: E;
		colgroup: E;
		data: E;
		datalist: E;
		dd: E;
		del: E;
		details: E;
		dfn: E;
		dialog: E;
		dir: E;
		div: E;
		dl: E;
		dt: E;
		em: E;
		embed: E;
		fieldset: E;
		figcaption: E;
		figure: E;
		font: E;
		footer: E;
		form: E<Raw.FormElementAttribute>;
		frame: E;
		frameset: E;
		h1: E;
		h2: E;
		h3: E;
		h4: E;
		h5: E;
		h6: E;
		head: E;
		header: E;
		hgroup: E;
		hr: E;
		i: E;
		iframe: E<Raw.FrameElementAttribute>;
		img: E<Raw.ImageElementAttribute>;
		input: E<Raw.InputElementAttribute>;
		ins: E;
		kbd: E;
		label: E;
		legend: E;
		li: E;
		link: E<Raw.LinkElementAttribute>;
		main: E;
		map: E;
		mark: E;
		marquee: E;
		menu: E;
		meta: E<Raw.MetaElementAttribute>;
		meter: E;
		nav: E;
		noscript: E;
		object: E;
		ol: E;
		optgroup: E;
		option: E;
		output: E;
		p: E;
		param: E;
		picture: E;
		pre: E;
		progress: E;
		q: E;
		rp: E;
		rt: E;
		ruby: E;
		s: E;
		samp: E;
		script: E<Raw.ScriptElementAttribute>;
		section: E;
		select: E;
		slot: E;
		small: E;
		source: E;
		span: E;
		strong: E;
		sub: E;
		summary: E;
		sup: E;
		table: E;
		tbody: E;
		td: E;
		template: E;
		textarea: E;
		tfoot: E;
		th: E;
		thead: E;
		time: E;
		title: E;
		tr: E;
		track: E;
		u: E;
		ul: E;
		video: E<Raw.VideoElementAttribute>;
		wbr: E;
	}
}

class Raw extends (() => Object as any as RawElements)()
{
	/**
	 * Stores the immutable set of HTML elements that
	 * are recognized as HTML element creation functions.
	 */
	static readonly elements: ReadonlySet<string> = new Set<string>(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "video", "wbr"]);
	
	/** 
	 * Stores the list of strings that are recognized as CSS properties by RawJS,
	 * (as opposed to being recognized as HTML attributes). Users may contribute
	 * strings to this set in order to add support for custom CSS properties.
	 */
	static readonly properties = (() =>
	{
		const names: string[] = [];
		if (typeof document !== "undefined")
			for (const key in document.documentElement.style)
				names.push(key);
		
		return new Set<string>(names);
	})();
	
	/** */
	static readonly HTMLCustomElement =
		(typeof HTMLElement !== "undefined") as true &&
		class HTMLCustomElement extends HTMLElement { };
	
	/**
	 * Creates a new instance of a Raw element creator.
	 * 
	 * @param doc A reference to the Document object over
	 * which this Raw instance operates. 
	 */
	constructor(private readonly doc: Document)
	{
		super();
		
		for (const tagName of Raw.elements)
			this.define(tagName);
	}
	
	/**
	 * Defines a custom element which derives from the specified constructor.
	 */
	define(tagName: string, constructor: typeof HTMLElement = Raw.HTMLCustomElement)
	{
		if (!Raw.elements.has(tagName))
		{
			tagName += "-element";
			if (typeof customElements !== "undefined")
				customElements.define(tagName, constructor);
		}
		
		Object.defineProperty(this, tagName, {
			value: (...params: Raw.Param[]) => this.apply(this.doc.createElement(tagName), params)
		});
	}
	
	/**
	 * A function that creates a new DOM Text node, but which may be overridden
	 * in the constructor to return a different but compatible value.
	 */
	text(template: TemplateStringsArray, ...placeholders: (string | HTMLElement)[]): (Text | HTMLElement)[];
	text(string: string): Text;
	text(a: TemplateStringsArray | string, ...b: string[]): any
	{
		if (typeof a === "string")
			return this.doc.createTextNode(a);
		
		const nodes: (string | HTMLElement)[] = [];
		for (let i = -1; ++i < b.length;)
			nodes.push(a[i], b[i])
		
		nodes.push(a[a.length - 1]);
		return nodes.map(n => typeof n === "string" ? this.doc.createTextNode(n) : n);
	}
	
	/**
	 * Creates a new Raw context from the specified Element or series of Elements.
	 */
	get<T extends Element | Raw.HatLike>(e: T, ...others: Element[]): (...params: Raw.Param[]) => T;
	get<T extends ShadowRoot>(e: T, ...others: Element[]): (...params: Raw.ShadowParam[]) => T;
	get<T>(...elements: T[]): any
	{
		return (...params: Raw.Param[]) =>
		{
			for (const e of elements)
			{
				if (Raw.is.element(e) || Raw.is.shadow(e))
					this.apply(e as Element, params);
				
				else if (Raw.is.element((e as any as Raw.HatLike).head))
					this.apply((e as any as Raw.HatLike).head, params);
			}
			
			return elements[0] || null;
		};
	}
	
	/**
	 * An object that contains environment-agnostic guard functions
	 * to make various assertions about data.
	 */
	static readonly is = {
		node(n: any): n is Node
		{
			const type = n?.nodeType;
			return typeof type === "number" && type > 0 && type < 13;
		},
		element(e: any): e is HTMLElement
		{
			return !!e && e.nodeType === 1;
		},
		text(t: any): t is Text
		{
			return !!t && (t as Text).nodeType === 3;
		},
		comment(c: any): c is Comment
		{
			return !!c && (c as Comment).nodeType === 8;
		},
		shadow(c: any): c is ShadowRoot
		{
			return !!c && (c as ShadowRoot).nodeType === 11 && Raw.is.element(c.host);
		},
		/**
		 * Returns a boolean value that indicates whether the specified
		 * string is the name of a valid CSS property in camelCase format,
		 * for example, "fontWeight".
		 */
		property(name: string)
		{
			return Raw.properties.has(name);
		}
	};
	
	/**
	 * 
	 */
	shadow(...params: Raw.ShadowParam[]): Raw.Param
	{
		return e =>
		{
			const shadow = e.shadowRoot || e.attachShadow({ mode: "open" });
			this.apply(shadow, params as Raw.Param[]);
		};
	}
	
	/**
	 * Creates a DOM element using the standard JSX element creation call signature. 
	 * Any Raw.Param values that are strings are converted to DOM Text nodes rather
	 * than class names.
	 */
	jsx(tag: string, ...params: Raw.Param[])
	{
		params = params.filter(p => p).map(p => typeof p === "string" ? new Text(p) : p);
		return this.apply(this.doc.createElement(tag), params) as Element;
	}
	
	/**
	 * This is the main applicator method where all params are applied 
	 * to the target.
	 * 
	 * PROCEED WITH CAUTION. This code is VERY performance sensitive.
	 * It uses constructor checks instead of instanceof and typeof in an effort
	 * to nullify any performance overhead. Be careful of changing this code
	 * without having full knowledge of what you're doing. Chesterton's
	 * fence rule applies here.
	 */
	private apply(e: Element | ShadowRoot, params: Raw.Param[])
	{
		for (let i = -1, length = params.length; ++i < length;)
		{
			const param = params[i];
			if (!param)
				continue;
			
			if (Raw.is.node(param))
			{
				e.append(param);
			}
			else if (Array.isArray(param))
			{
				this.apply(e, param);
			}
			else switch (param.constructor)
			{
				case Raw.Event:
				{
					if (e)
					{
						const he = param as Raw.Event;
						if (he.target)
							he.host = e;
						else
						{
							e.addEventListener(he.type, he.handler, he.options);
							
							if (he.type === "connected" || he.type === "rendered")
								this.awaitingConnection.push([e, he.type === "rendered"]);
						}
					}
				}
				break; case String:
				{
					// Note that ShadowRoots cannot accept string parameters.
					const cls = param as string;
					const classes = cls.split(/\s+/g);
					(e as Element).classList.add(...classes);
					
					if (cls.indexOf(Raw.GeneratedClassPrefix.value) === 0)
					{
						const maybeShadow = e.getRootNode();
						if (Raw.is.shadow(maybeShadow))
							this.toShadow(maybeShadow, cls);
					}
				}
				break; case Object:
				{
					const el = e as any;
					
					for (const [name, value] of Object.entries(param))
					{
						// JavaScript numbers that are specified in the width and height properties
						// are injected as HTML attributes rather than assigned as CSS properties.
						if (value && 
							(name === "width" || name === "height") && typeof value === "number" ||
							(e as Element).tagName === "META")
						{
							(e as Element).setAttribute(name, value.toString());
						}
						else if (name === "data")
						{
							for (const [attrName, attrValue] of Object.entries(value || {}))
								(e as Element).setAttribute("data-" + attrName, String(attrValue));
						}
						// Width, height, and background properties are special cased.
						// They are interpreted as CSS properties rather than HTML attributes.
						else if (name in e && 
							name !== "background" && 
							name !== "width" && 
							name !== "height")
						{
							// Some attributes can't be assigned with keyed property access,
							// at least in Chromium-based browsers (HTMLVideoElement.muted).
							// So here, we're assigning both the JavaScript property and calling
							// the setAttribute() function to ensure that the attribute always 
							// shows up in the Element.getAttributes() list.
							el[name] = value;
							(e as Element).setAttribute(name, value);
						}
						else if (Raw.is.property(name))
						{
							this.setProperty(el, name, value);
						}
					}
				}
				break; case Function:
				{
					if (Raw.is.element(e) || Raw.is.shadow(e))
					{
						const fn = param as Function;
						const subParams = fn(e);
						
						if (subParams)
							this.apply(e, Array.isArray(subParams) ? subParams : [subParams]);
					}
				}
				default: 
				{
					// Ugly, but high-performance way to check if the param is a Hat
					// (meaning, an object with a .head HTMLElement property) coming 
					// from the Hat library.
					if (!!(param as any).head && (param as any).head.ELEMENT_NODE === 1)
					{
						this.apply(e, [(param as any).head]);
					}
					else if (typeof param === "function" && param.constructor.name === "AsyncFunction")
					{
						this.apply(e, (param as Function)(e));
					}
				}
			}
		}
		
		return e;
	}
	
	//# Event Related
	
	/** */
	static readonly Event = class Event
	{
		/** */
		constructor(
			readonly target: Node | null,
			readonly type: string,
			readonly handler: (ev: globalThis.Event) => void,
			readonly options: Readonly<AddEventListenerOptions> = {})
		{ }
		
		/**
		 * Stores the element that "hosts" the event, which is not necessarily
		 * the target event. When the host element is removed from the DOM,
		 * the event handler is removed.
		 */
		host: Element | ShadowRoot | null = null;
	}
	
	/** */
	on<K extends keyof Raw.ExtendedEventMap>(
		type: K,
		listener: (this: HTMLElement, ev: Raw.ExtendedEventMap[K]) => any,
		options?: boolean | EventListenerOptions): Raw.Event;
	/** */
	on<K extends keyof Raw.EventMap>(
		remoteTarget: Node | Window,
		type: K,
		listener: (this: HTMLElement, ev: Raw.EventMap[K]) => any,
		options?: boolean | EventListenerOptions): Raw.Event;
	/** */
	on(...args: any[])
	{
		const target: Node | null = typeof args[0] === "string" ? null : args[0];
		const type: string = typeof args[0] === "string" ? args[0] : args[1];
		const handler = typeof args[1] === "function" ? args[1] : args[2];
		const last = args.pop();
		const options: AddEventListenerOptions = typeof last === "function" ? {} : last;
		
		if (type === "connected" || type === "disconnected")
		{
			this.maybeInstallRootObserver();
			options.once = true;
		}
		
		const hev = new Raw.Event(target, type, handler, options);
		
		// If the event has a defined target, then add the event listener right away,
		// and the apply() function will assign any host element, if present.
		if (target)
		{
			let handler: (ev: Event) => void;
			target.addEventListener(hev.type, handler = (ev: Event) =>
			{
				if (hev.host?.isConnected !== false)
					hev.handler(ev as any);
				else
					target.removeEventListener(hev.type, handler);
			},
			options);
		}
		
		return hev;
	}
	
	//# Connection Events
	
	/** */
	private maybeInstallRootObserver()
	{
		if (this.hasInstalledRootObserver || typeof MutationObserver === "undefined")
			return;
		
		this.hasInstalledRootObserver = true;
		
		new MutationObserver(() =>
		{
			const invokations: [Element | ShadowRoot, boolean][] = [];
			
			for (let i = this.awaitingConnection.length; i-- > 0;)
			{
				const tuple = this.awaitingConnection[i];
				if (!tuple[0].isConnected)
					continue;
				
				this.awaitingConnection.splice(i, 1);
				invokations.push(tuple);
			}
			
			// Run the callbacks in a separate pass, to deal with the fact that
			// there could be multiple awaiters watching the same element,
			// but also to handle the fact the callback functions could modify
			// the awaiting list.
			for (const [element, defer] of invokations)
			{
				const event = new Event("connected", {
					bubbles: true,
					cancelable: true,
				});
				
				if (defer)
					setTimeout(() => element.dispatchEvent(event), 1);
				else
					element.dispatchEvent(event);
			}
			
		}).observe(this.doc.body, { childList: true, subtree: true });
	}
	
	private hasInstalledRootObserver = false;
	private readonly awaitingConnection: [Element | ShadowRoot, boolean][] = [];
	
	//# Style Related
	
	/**
	 * Creates an HTML <style> element with the specified attributes,
	 * and with the specified CSS rules embedded.
	 */
	style(attributes: Raw.ElementAttribute, ...components: (string | Raw.Style)[]): Raw.HTMLRawStyleElement;
	/**
	 * Creates an HTML <style> element with the specified CSS rules embedded.
	 */
	style(...components: (string | Raw.Style)[]): Raw.HTMLRawStyleElement;
	/**
	 * Creates an HTML <style> element with the specified attributes,
	 * and with the specified raw CSS text embedded.
	 */
	style(attributes: Raw.ElementAttribute, ...rawCss: Text[]): Raw.HTMLRawStyleElement;
	/**
	 * Creates an HTML <style> element that contains the specified raw CSS text embedded.
	 */
	style(...rawCss: Text[]): Raw.HTMLRawStyleElement;
	style(...args: any[])
	{
		const element = this.doc.createElement("style") as Raw.HTMLRawStyleElement;
		
		element.attach = (n?: Node) =>
		{
			const root = n ? n.getRootNode() : this.doc;
			const container = root instanceof Document ? root.head : root;
			container.appendChild(element);
			return element;
		};
		
		if (args.length === 0)
			return element;
		
		if (typeof args[0] !== "string")
			this.get(element)(args.shift());
		
		if (args.every(a => Raw.is.text(a)))
		{
			element.append(...args);
			return element;
		}
		
		const cssText: string[] = [];
		
		// Creates a fake CSS rule, whose only purpose is to capture the calls
		// to setProperty(), and forward the string contents to the cssText array,
		// so that a string rule can be composed.
		const fakeRule: Raw.ICSSStyleRuleLike = {
			style: {
				setProperty(name, value, important)
				{
					cssText.push(name + ": " + value + (important ? " !" + important : "") + ";");
				}
			}
		};
		
		for (const group of this.createCssRuleGroups(args))
		{
			cssText.push(group.selector, "{");
			
			for (const stylesObject of group.styles)
				for (let [n, v] of Object.entries(stylesObject))
					if (typeof v === "string" || (typeof v === "number" && v === v))
						this.setProperty(fakeRule, n, v, group.selector);
			
			cssText.push("}");
		}
		
		element.append(new Text(cssText.join("")));
		return element;
	}
	
	/**
	 * Creates a series of CSS rules internally, and returns a class that
	 * can be applied to HTML elements in order to apply the rules to
	 * them.
	 */
	css(...components: Raw.CssParam[])
	{
		const styleElement = this.getScopedStyleElement(document);
		const cssJsonText = JSON.stringify(components);
		components = JSON.parse(cssJsonText);
		const cssHashClass = Raw.GeneratedClassPrefix.value + this.hash(cssJsonText);
		this.applyCssToScope(styleElement, cssHashClass, components);
		return cssHashClass;
	}
	
	/**
	 * Copies the rules that are connected to the specified CSS class
	 * (which is expected to be a hash of CSS rules) so that they are
	 * visible within the specified ShadowRoot.
	 */
	private toShadow(shadow: ShadowRoot, cssHashClass: string)
	{
		const styleElement = this.getScopedStyleElement(shadow);
		const cssParams = Raw.ruleData.get(styleElement)?.get(cssHashClass);
		if (cssParams)
			this.applyCssToScope(styleElement, cssHashClass, cssParams);
	}
	
	/** */
	private applyCssToScope(
		styleElement: HTMLStyleElement,
		cssHashClass: string,
		components: Raw.CssParam[])
	{
		// Don't create another CSS rule if there is already one
		// that exists within the provided <style> element with
		// the provided rule hash.
		if (Raw.ruleData.get(styleElement)?.get(cssHashClass))
			return;
		
		const sheet = styleElement.sheet!;
		const groups = this.createCssRuleGroups(components);
		
		for (const group of groups)
		{
			const selectorParts = group.selector.split("&");
			let selector = group.selector;
			
			if (selector.startsWith("*"))
			{
				selector = "." + cssHashClass + " " + selector;
			}
			else if (selector !== ":root")
			{
				[selector] = this.trimImportant(
					selectorParts.length === 1 ?
						"." + cssHashClass + group.selector :
						selectorParts.join("." + cssHashClass));
			}
			
			const idx = sheet.insertRule(selector + "{}");
			const cssRule = sheet.cssRules[idx] as CSSStyleRule;
			
			for (const stylesObject of group.styles)
				for (let [n, v] of Object.entries(stylesObject))
					if (typeof v === "string" || (typeof v === "number" && v === v))
						this.setProperty(cssRule, n, v, group.selector);
		}
		
		let hashSet = Raw.ruleData.get(styleElement);
		if (hashSet)
			hashSet.set(cssHashClass, components);
		else
			Raw.ruleData.set(styleElement, hashSet = new Map([[cssHashClass, components]]));
	}
	
	/**
	 * Stores a WeakMap of Sets of the hashes of the contents of each CSS rule
	 * that has been applied to a given generated <style> element.
	 */
	private static readonly ruleData = new WeakMap<HTMLStyleElement, Map<string, Raw.CssParam[]>>();
	
	/** */
	private createCssRuleGroups(components: readonly (string | Raw.Style)[])
	{
		const groups: { selector: string, styles: Raw.Style[] }[] = [{ selector: "", styles: [] }];
		for (let i = -1; ++i < components.length;)
		{
			const cur = components[i];
			const last = i > 0 && components[i - 1];
			
			if (typeof cur === "string" && typeof last === "object")
				groups.push({ selector: "", styles: [] });
			
			const group = groups[groups.length - 1];
			
			if (typeof cur === "string")
				group.selector += cur;
			else
				group.styles.push(cur);
		}
		
		return groups;
	}
	
	/** */
	private setProperty(
		styleable: Raw.ICSSStyleRuleLike,
		property: string,
		value: string | number | (string | number)[],
		selectorOfContainingRule = "")
	{
		if (typeof value === "number")
			value ||= 0;
		
		const [, selectorImportant] = this.trimImportant(selectorOfContainingRule);
		const p = this.toCssDashCase(property);
		
		if (!Array.isArray(value))
		{
			const [v, valueImportant] = this.trimImportant(String(value));
			styleable.style.setProperty(p, v, selectorImportant || valueImportant);
		}
		else for (const item of value)
		{
			const [v, valueImportant] = this.trimImportant(String(item));
			styleable.style.setProperty(p, v, selectorImportant || valueImportant);
		}
	}
	
	/** */
	private toCssDashCase(p: string)
	{
		p = p.replace(/[A-Z]/g, char => "-" + char.toLowerCase());
		if (p.slice(0, 6) === "webkit" || p.slice(0, 3) === "moz" || p.slice(0, 2) === "ms")
			p = "-" + p;
		
		return p;
	}
	
	/** */
	private trimImportant(str: string): [string, string | undefined]
	{
		if (str.slice(-1) === "!")
			str = str.slice(0, -1);
		
		else if (str.slice(-10) === "!important")
			str = str.slice(0, -10);
		
		else return [str, undefined];
		
		return [str, "important"];
	}
	
	/**
	 * Returns the CSSStyleSheet that stores the CSS rules that should
	 * target the specified element. If the element is within a shadow root,
	 * the sheet that is returned is the one that is contained within this
	 * shadow root.
	 */
	private getScopedStyleElement(applyTarget: ParentNode)
	{
		let container: ParentNode = (() =>
		{
			if (Raw.is.shadow(applyTarget))
				return applyTarget;
			
			const root = applyTarget.getRootNode();
			return root instanceof Document ?
				root.head :
				root as ShadowRoot;
		})();
		
		const cls = "raw-style-sheet";
		const children = Array.from(container.children);
		const existing = children.find(e => e.classList.contains(cls));
		
		if (existing instanceof HTMLStyleElement)
			return existing;
		
		const styleElement = this.doc.createElement("style") as HTMLStyleElement;
		styleElement.className = cls;
		container.append(styleElement);
		return styleElement;
	}
	
	/**
	 * Hash calculation function adapted from:
	 * https://stackoverflow.com/a/52171480/133737
	 */
	private hash(value: { toString(): string; }, seed = 0)
	{
		const val = value.toString();
		let h1 = 0xDEADBEEF ^ seed;
		let h2 = 0X41C6CE57 ^ seed;
		
		for (let i = 0; i < val.length; i++)
		{
			let ch = val.charCodeAt(i);
			h1 = Math.imul(h1 ^ ch, 2654435761);
			h2 = Math.imul(h2 ^ ch, 1597334677);
		}
		
		h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507) ^ Math.imul(h2 ^ h2 >>> 13, 3266489909);
		h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507) ^ Math.imul(h1 ^ h1 >>> 13, 3266489909);
		return 4294967296 * (2097151 & h2) + (h1 >>> 0);
	}
}

//# Element Related

declare namespace Raw
{
	/**
	 * Fake node class, which is compatible with the actual Node interface,
	 * but done with minimal properties in order to not negatively affect
	 * the quality of the autocompletion experience.
	 */
	export interface INodeLike
	{
		/** */
		readonly nodeType: number;
		
		/** */
		readonly nodeName: string;
		
		/** */
		readonly nodeValue: string | null;
	}
	
	/**
	 * A class that describes the minimal set of members that need to
	 * be implemented on HTML elements in order to create a custom
	 * raw.js compatible IHTMLElementLike.
	 */
	export interface IHTMLElementLike extends INodeLike
	{
		/** Minimal append method. */
		append(node: string | INodeLike): void;
		
		/** Minimal classList object. */
		readonly classList: {
			add(className: string): void;
			toString(): string;
		};
	}
	
	/**
	 * A type that describes the special HTMLStyleElement that is
	 * returned from the raw.style() method with the RawJS-specific
	 * expando method added.
	 */
	export type HTMLRawStyleElement =
		HTMLStyleElement & 
		{
			/**
			 * Attaches the <style> element to the same scope as the
			 * specified Node. This will either be an HTML <head> element,
			 * or a shadow root, depending on the location of the specified
			 * Node. If no Node is provided, the <style> element is attached
			 * to the global <head> element.
			 */
			attach(nodeWithinScope?: Node): HTMLRawStyleElement;
		};
	
	/**
	 * A class that describes the minimal set of members that need to
	 * be implemented on fake CSSStyleSheet objects in order to create
	 * a custom raw.js compatible ICSSStyleSheetLike.
	 */
	export interface ICSSStyleSheetLike
	{
		insertRule(index: number): number;
		deleteRule(index: number): void;
		readonly cssRules: {
			item(index: number): ICSSStyleRuleLike
		}
	}
	
	/**
	 * A class that describes the minimal set of members that need to
	 * be implemented on fake CSSStyleRule objects in order to create
	 * a custom raw.js compatible ICSSStyleRuleLike.
	 */
	export interface ICSSStyleRuleLike
	{
		readonly style: {
			setProperty(name: string, value: string, important?: string): void;
		}
	}
	
	/** */
	export type ElementClosure = ((e: HTMLElement) => Param | Param[]);
	
	/** */
	export type ShadowClosure = ((e: ShadowRoot) => Param | Param[]);
	
	/** */
	export type HatLike = { readonly head: HTMLElement; };
	
	/** */
	export type Param<T = ElementAttribute> =
		// Class name list
		string |
		// Event connections
		Raw.Event |
		// Immediately invoked closure
		ElementClosure |
		// Arrays of Params
		Param<T>[] |
		// Conditionals
		false | void | null | undefined |
		// Eat promises
		Promise<void> |
		INodeLike |
		Style |
		Partial<T> |
		HatLike;
	
	/** */
	export type ShadowParam = 
		Raw.Event |
		Raw.ShadowClosure |
		// Conditionals
		false | void | null | undefined |
		// Arrays of Params
		ShadowParam[] |
		Promise<void> |
		INodeLike;
	
	/** */
	export interface ElementAttribute
	{
		accesskey: string;
		autocapitalize: boolean;
		autofocus: boolean;
		dir: string;
		draggable: boolean;
		contentEditable: boolean | string;
		enterkeyhint: string;
		name: string;
		id: string;
		class: string;
		style: string;
		spellcheck: boolean;
		tabIndex: number;
		title: string;
		data: Record<string, string | number | boolean>;
	}
	
	/** */
	export interface BaseElementAttribute extends ElementAttribute
	{
		href: string;
	}
	
	/** */
	export interface FormElementAttribute extends ElementAttribute
	{
		autocomplete: string;
		rel: string;
		action: string;
		enctype: string;
		method: string;
		noValidate: boolean;
		target: string;
	}
	
	/** */
	export interface MetaElementAttribute extends ElementAttribute
	{
		charset: string;
		content: string;
		httpEquiv: string;
		itemprop: string;
	}
	
	/** */
	export interface LinkElementAttribute extends ElementAttribute
	{
		crossorigin: boolean;
		fetchpriority: string;
		href: string;
		hreflang: string;
		imagesizes: string;
		imagesrcset: string;
		integrity: string;
		media: string;
		referrerpolicy: string;
		rel: string;
		type: string;
		sizes: string;
	}
	
	/** */
	export interface ScriptElementAttribute extends ElementAttribute
	{
		type: string;
		src: string;
		defer: boolean;
	}
	
	/** */
	export interface FrameElementAttribute extends ElementAttribute
	{
		allow: string;
		allowfullscreen: string;
		loading: string;
		referrerpolicy: string;
		src: string;
		srcdoc: string;
		sandbox: string;
	}
	
	/** */
	export interface InputElementAttribute extends ElementAttribute
	{
		type: string;
		value: string;
		disabled: boolean;
		webkitdirectory: boolean;
		multiple: boolean;
		maxLength: number;
		accept: string;
		autocapitalize: boolean;
		autocorrect: boolean;
		autocomplete: boolean;
		placeholder: string;
	}
	
	/** */
	export interface TextAreaElementAttribute extends ElementAttribute
	{
		value: string;
		disabled: boolean;
		placeholder: string;
		cols: number;
		rows: number;
	}
	
	/** */
	export interface ImageElementAttribute extends ElementAttribute
	{
		src: string;
	}
	
	/** */
	export interface AnchorElementAttribute extends ElementAttribute
	{
		href: string;
		target: string;
	}
	
	/** */
	export interface VideoElementAttribute extends ElementAttribute
	{
		src: string;
		type: string;
		autoplay: boolean;
		loop: boolean;
		playsInline: boolean;
		controls: boolean;
		muted: boolean;
	}
}

//# Style Related

declare namespace Raw
{
	/**
	 * Defines the prefix that is added to all CSS classes generated
	 * with the .css() method.
	 */
	export const enum GeneratedClassPrefix { value = "--raw--" }
	
	/** */
	export type CssParam = string | Raw.Style;
	
	/** */
	export type Style = {
		[P in keyof CSSStyleDeclaration]?: P extends keyof NumericStyleDeclaration ? 
			NumericStyleDeclaration[P] | NumericStyleDeclaration[P][] : 
			CSSStyleDeclaration[P] | CSSStyleDeclaration[P][];
	};
	
	/**
	 * 
	 */
	export type NumericStyleDeclaration = {
		animationDelay: string | 0;
		animationDuration: string | 0;
		animationIterationCount: string | 0;
		backgroundPositionX: string | 0;
		backgroundPositionY: string | 0;
		blockSize: string | 0;
		border: string | 0;
		borderBlock: string | 0;
		borderBlockEnd: string | 0;
		borderBlockEndWidth: string | 0;
		borderBlockStart: string | 0;
		borderBlockStartWidth: string | 0;
		borderBlockWidth: string | 0;
		borderBottom: string | 0;
		borderBottomLeftRadius: string | 0;
		borderBottomRightRadius: string | 0;
		borderBottomWidth: string | 0;
		borderEndEndRadius: string | 0;
		borderEndStartRadius: string | 0;
		borderInline: string | 0;
		borderInlineEnd: string | 0;
		borderInlineEndWidth: string | 0;
		borderInlineStart: string | 0;
		borderInlineStartWidth: string | 0;
		borderInlineWidth: string | 0;
		borderLeft: string | 0;
		borderLeftWidth: string | 0;
		borderRadius: string | 0;
		borderRight: string | 0;
		borderRightWidth: string | 0;
		borderSpacing: string | 0;
		borderStartEndRadius: string | 0;
		borderStartStartRadius: string | 0;
		borderTop: string | 0;
		borderTopLeftRadius: string | 0;
		borderTopRightRadius: string | 0;
		borderTopWidth: string | 0;
		borderWidth: string | 0;
		bottom: string | 0;
		columnCount: string | number;
		columnGap: string | 0;
		columnRuleWidth: string | 0;
		columnSpan: string | 0;
		columnWidth: string | 0;
		columns: string | number;
		flexGrow: string | number;
		flexShrink: string | number;
		fontSize: string | 0;
		fontSizeAdjust: string | 0;
		fontWeight: string | number;
		gridAutoColumns: string | 0;
		gridColumn: string | number;
		gridColumnEnd: string | number;
		gridColumnGap: string | 0;
		gridColumnStart: string | number;
		gridRow: string | number;
		gridRowEnd: string | number;
		gridRowStart: string | number;
		gridTemplate: string | 0;
		gridTemplateAreas: string | 0;
		gridTemplateColumns: string | 0;
		gridTemplateRows: string | 0;
		height: string | number;
		inlineSize: string | 0;
		inset: string | 0;
		insetBlock: string | 0;
		insetBlockEnd: string | 0;
		insetBlockStart: string | 0;
		insetInline: string | 0;
		insetInlineEnd: string | 0;
		insetInlineStart: string | 0;
		left: string | 0;
		letterSpacing: string | 0;
		lineHeight: string | number;
		margin: string | 0;
		marginBlock: string | 0;
		marginBlockEnd: string | 0;
		marginBlockStart: string | 0;
		marginBottom: string | 0;
		marginInline: string | 0;
		marginInlineEnd: string | 0;
		marginInlineStart: string | 0;
		marginLeft: string | 0;
		marginRight: string | 0;
		marginTop: string | 0;
		maxBlockSize: string | 0;
		maxHeight: string | 0;
		maxInlineSize: string | 0;
		maxWidth: string | 0;
		minBlockSize: string | 0;
		minHeight: string | 0;
		minInlineSize: string | 0;
		minWidth: string | 0;
		offset: string | 0;
		offsetDistance: string | 0;
		offsetPath: string | 0;
		offsetRotate: string | 0;
		opacity: string | number;
		order: string | number;
		outline: string | 0;
		outlineOffset: string | 0;
		outlineWidth: string | 0;
		padding: string | 0;
		paddingBlock: string | 0;
		paddingBlockEnd: string | 0;
		paddingBlockStart: string | 0;
		paddingBottom: string | 0;
		paddingInline: string | 0;
		paddingInlineEnd: string | 0;
		paddingInlineStart: string | 0;
		paddingLeft: string | 0;
		paddingRight: string | 0;
		paddingTop: string | 0;
		paintOrder: string | 0;
		right: string | 0;
		rowGap: string | 0;
		scale: string | 0;
		scrollMargin: string | 0;
		scrollMarginBlock: string | 0;
		scrollMarginBlockEnd: string | 0;
		scrollMarginBlockStart: string | 0;
		scrollMarginBottom: string | 0;
		scrollMarginInline: string | 0;
		scrollMarginInlineEnd: string | 0;
		scrollMarginInlineStart: string | 0;
		scrollMarginLeft: string | 0;
		scrollMarginRight: string | 0;
		scrollMarginTop: string | 0;
		scrollPadding: string | 0;
		scrollPaddingBlock: string | 0;
		scrollPaddingBlockEnd: string | 0;
		scrollPaddingBlockStart: string | 0;
		scrollPaddingBottom: string | 0;
		scrollPaddingInline: string | 0;
		scrollPaddingInlineEnd: string | 0;
		scrollPaddingInlineStart: string | 0;
		scrollPaddingLeft: string | 0;
		scrollPaddingRight: string | 0;
		scrollPaddingTop: string | 0;
		tabSize: string | 0;
		textIndent: string | 0;
		top: string | 0;
		transitionDelay: string | 0;
		transitionDuration: string | 0;
		webkitMarginAfter: string | 0;
		webkitMarginBefore: string | 0;
		webkitMarginEnd: string | 0;
		webkitMarginStart: string | 0;
		width: string | number;
		wordSpacing: string | 0;
		zIndex: string | number;
	};
}

//# Event Related

declare namespace Raw
{
	/** */
	export type Event = InstanceType<typeof Raw.Event>;
	
	/** */
	export interface EventMap extends HTMLElementEventMap
	{
		"input": InputEvent;
	}
	
	/** */
	export interface ExtendedEventMap extends EventMap
	{
		"connected": Event;
		"disconnected": Event;
		"rendered": Event;
	}
}

/**
 * Adds the CSS properties that are missing from the standard set
 * of type definitions. Any of these entries should be removed if
 * or when the definition is added upstream.
 */
interface CSSStyleDeclaration
{
	backdropFilter: string;
	container: string;
	containerType: string;
	containerName: string;
	contentVisibility: string;
	webkitAppRegion: string;
	webkitBackdropFilter: string;
	webkitBorderAfter: string;
	webkitBorderAfterColor: string;
	webkitBorderAfterStyle: string;
	webkitBorderAfterWidth: string;
	webkitBorderBefore: string;
	webkitBorderBeforeColor: string;
	webkitBorderBeforeStyle: string;
	webkitBorderBeforeWidth: string;
	webkitBorderEnd: string;
	webkitBorderEndColor: string;
	webkitBorderEndStyle: string;
	webkitBorderEndWidth: string;
	webkitBorderHorizontalSpacing: string;
	webkitBorderStart: string;
	webkitBorderStartColor: string;
	webkitBorderStartStyle: string;
	webkitBorderStartWidth: string;
	webkitBorderTopLeftRadius: string;
	webkitBorderTopRightRadius: string;
	webkitBorderVerticalSpacing: string;
	webkitBoxDecorationBreak: string;
	webkitBoxDirection: string;
	webkitBoxFlex: string;
	webkitBoxOrdinalGroup: string;
	webkitBoxOrient: string;
	webkitBoxPack: string;
	webkitBoxReflect: string;
	webkitBoxShadow: string;
	webkitBoxSizing: string;
	webkitClipPath: string;
	webkitColumnBreakAfter: string;
	webkitColumnBreakBefore: string;
	webkitColumnBreakInside: string;
	webkitColumnCount: string;
	webkitColumnGap: string;
	webkitColumnRule: string;
	webkitColumnRuleColor: string;
	webkitColumnRuleStyle: string;
	webkitColumnRuleWidth: string;
	webkitColumnSpan: string;
	webkitColumnWidth: string;
	webkitColumns: string | number;
	webkitFontFeatureSettings: string;
	webkitFontSmoothing: string;
	webkitHighlight: string;
	webkitHyphenateCharacter: string;
	webkitLineBreak: string;
	webkitLineClamp: string;
	webkitLocale: string;
	webkitLogicalHeight: string;
	webkitLogicalWidth: string;
	webkitMaskComposite: string;
	webkitMaxLogicalHeight: string;
	webkitMaxLogicalWidth: string;
	webkitMinLogicalHeight: string;
	webkitMinLogicalWidth: string;
	webkitOpacity: string | number;
	webkitPaddingAfter: string;
	webkitPaddingBefore: string;
	webkitPaddingEnd: string;
	webkitPaddingStart: string;
	webkitPerspectiveOriginX: string;
	webkitPerspectiveOriginY: string;
	webkitPrintColorAdjust: string;
	webkitRtlOrdering: string;
	webkitRubyPosition: string;
	webkitShapeImageThreshold: string;
	webkitShapeMargin: string;
	webkitShapeOutside: string;
	webkitTapHighlightColor: string;
	webkitTextCombine: string;
	webkitTextDecorationsInEffect: string;
	webkitTextEmphasis: string;
	webkitTextEmphasisColor: string;
	webkitTextEmphasisPosition: string;
	webkitTextEmphasisStyle: string;
	webkitTextFillColor: string;
	webkitTextOrientation: string;
	webkitTextSecurity: string;
	webkitTextStroke: string;
	webkitTextStrokeColor: string;
	webkitTextStrokeWidth: string;
	webkitUserDrag: string;
	webkitUserModify: string;
	webkitWritingMode: string;
	scrollbarWidth: string;
	msOverflowStyle: string;
}

const raw = new Raw((typeof document !== "undefined") as true ? document : {} as Document);

//@ts-ignore CommonJS compatibility
if (typeof module === "object") Object.assign(module.exports, { raw, Raw });

// ES module compatibility
declare module "@squaresapp/rawjs"
{
	const __export: { raw: Raw, Raw: typeof Raw };
	export = __export;
}

// The comment and + prefix is removed during npm run bundle
//+ export { raw, Raw }
