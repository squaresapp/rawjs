
/**
 * 
 */
interface HutElements
{
	a(...params: Hut.Param<Hut.AnchorElementAttribute>[]): HTMLAnchorElement;
	abbr(...params: Hut.Param[]): HTMLElement;
	address(...params: Hut.Param[]): HTMLElement;
	area(...params: Hut.Param[]): HTMLAreaElement;
	article(...params: Hut.Param[]): HTMLElement;
	aside(...params: Hut.Param[]): HTMLElement;
	audio(...params: Hut.Param[]): HTMLAudioElement;
	b(...params: Hut.Param[]): HTMLElement;
	base(...params: Hut.Param<Hut.BaseElementAttribute>[]): HTMLBaseElement;
	bdi(...params: Hut.Param[]): HTMLElement;
	bdo(...params: Hut.Param[]): HTMLElement;
	blockquote(...params: Hut.Param[]): HTMLQuoteElement;
	body(...params: Hut.Param[]): HTMLBodyElement;
	br(...params: Hut.Param[]): HTMLBRElement;
	button(...params: Hut.Param[]): HTMLButtonElement;
	canvas(...params: Hut.Param[]): HTMLCanvasElement;
	caption(...params: Hut.Param[]): HTMLTableCaptionElement;
	cite(...params: Hut.Param[]): HTMLElement;
	code(...params: Hut.Param[]): HTMLElement;
	col(...params: Hut.Param[]): HTMLTableColElement;
	colgroup(...params: Hut.Param[]): HTMLTableColElement;
	data(...params: Hut.Param[]): HTMLDataElement;
	datalist(...params: Hut.Param[]): HTMLDataListElement;
	dd(...params: Hut.Param[]): HTMLElement;
	del(...params: Hut.Param[]): HTMLModElement;
	details(...params: Hut.Param[]): HTMLDetailsElement;
	dfn(...params: Hut.Param[]): HTMLElement;
	dialog(...params: Hut.Param[]): HTMLDialogElement;
	dir(...params: Hut.Param[]): HTMLDirectoryElement;
	div(...params: Hut.Param[]): HTMLDivElement;
	dl(...params: Hut.Param[]): HTMLDListElement;
	dt(...params: Hut.Param[]): HTMLElement;
	em(...params: Hut.Param[]): HTMLElement;
	embed(...params: Hut.Param[]): HTMLEmbedElement;
	fieldset(...params: Hut.Param[]): HTMLFieldSetElement;
	figcaption(...params: Hut.Param[]): HTMLElement;
	figure(...params: Hut.Param[]): HTMLElement;
	font(...params: Hut.Param[]): HTMLFontElement;
	footer(...params: Hut.Param[]): HTMLElement;
	form(...params: Hut.Param[]): HTMLFormElement;
	frame(...params: Hut.Param[]): HTMLFrameElement;
	frameset(...params: Hut.Param[]): HTMLFrameSetElement;
	h1(...params: Hut.Param[]): HTMLHeadingElement;
	h2(...params: Hut.Param[]): HTMLHeadingElement;
	h3(...params: Hut.Param[]): HTMLHeadingElement;
	h4(...params: Hut.Param[]): HTMLHeadingElement;
	h5(...params: Hut.Param[]): HTMLHeadingElement;
	h6(...params: Hut.Param[]): HTMLHeadingElement;
	head(...params: Hut.Param[]): HTMLHeadElement;
	header(...params: Hut.Param[]): HTMLElement;
	hgroup(...params: Hut.Param[]): HTMLElement;
	hr(...params: Hut.Param[]): HTMLHRElement;
	i(...params: Hut.Param[]): HTMLElement;
	iframe(...params: Hut.Param<Hut.FrameElementAttribute>[]): HTMLIFrameElement;
	img(...params: Hut.Param<Hut.ImageElementAttribute>[]): HTMLImageElement;
	input(...params: Hut.Param<Hut.InputElementAttribute>[]): HTMLInputElement;
	ins(...params: Hut.Param[]): HTMLModElement;
	kbd(...params: Hut.Param[]): HTMLElement;
	label(...params: Hut.Param[]): HTMLLabelElement;
	legend(...params: Hut.Param[]): HTMLLegendElement;
	li(...params: Hut.Param[]): HTMLLIElement;
	link(...params: Hut.Param<Hut.LinkElementAttribute>[]): HTMLLinkElement;
	main(...params: Hut.Param[]): HTMLElement;
	map(...params: Hut.Param[]): HTMLMapElement;
	mark(...params: Hut.Param[]): HTMLElement;
	marquee(...params: Hut.Param[]): HTMLMarqueeElement;
	menu(...params: Hut.Param[]): HTMLMenuElement;
	meta(...params: Hut.Param<Hut.MetaElementAttribute>[]): HTMLMetaElement;
	meter(...params: Hut.Param[]): HTMLMeterElement;
	nav(...params: Hut.Param[]): HTMLElement;
	noscript(...params: Hut.Param[]): HTMLElement;
	object(...params: Hut.Param[]): HTMLObjectElement;
	ol(...params: Hut.Param[]): HTMLOListElement;
	optgroup(...params: Hut.Param[]): HTMLOptGroupElement;
	option(...params: Hut.Param[]): HTMLOptionElement;
	output(...params: Hut.Param[]): HTMLOutputElement;
	p(...params: Hut.Param[]): HTMLParagraphElement;
	param(...params: Hut.Param[]): HTMLParamElement;
	picture(...params: Hut.Param[]): HTMLPictureElement;
	pre(...params: Hut.Param[]): HTMLPreElement;
	progress(...params: Hut.Param[]): HTMLProgressElement;
	q(...params: Hut.Param[]): HTMLQuoteElement;
	rp(...params: Hut.Param[]): HTMLElement;
	rt(...params: Hut.Param[]): HTMLElement;
	ruby(...params: Hut.Param[]): HTMLElement;
	s(...params: Hut.Param[]): HTMLElement;
	samp(...params: Hut.Param[]): HTMLElement;
	script(...params: Hut.Param<Hut.ScriptElementAttribute>[]): HTMLScriptElement;
	section(...params: Hut.Param[]): HTMLElement;
	select(...params: Hut.Param[]): HTMLSelectElement;
	slot(...params: Hut.Param[]): HTMLSlotElement;
	small(...params: Hut.Param[]): HTMLElement;
	source(...params: Hut.Param[]): HTMLSourceElement;
	span(...params: Hut.Param[]): HTMLSpanElement;
	strong(...params: Hut.Param[]): HTMLElement;
	style(...params: Hut.Param[]): HTMLStyleElement;
	sub(...params: Hut.Param[]): HTMLElement;
	summary(...params: Hut.Param[]): HTMLElement;
	sup(...params: Hut.Param[]): HTMLElement;
	table(...params: Hut.Param[]): HTMLTableElement;
	tbody(...params: Hut.Param[]): HTMLTableSectionElement;
	td(...params: Hut.Param[]): HTMLTableCellElement;
	template(...params: Hut.Param[]): HTMLTemplateElement;
	textarea(...params: Hut.Param[]): HTMLTextAreaElement;
	tfoot(...params: Hut.Param[]): HTMLTableSectionElement;
	th(...params: Hut.Param[]): HTMLTableCellElement;
	thead(...params: Hut.Param[]): HTMLTableSectionElement;
	time(...params: Hut.Param[]): HTMLTimeElement;
	title(...params: Hut.Param[]): HTMLTitleElement;
	tr(...params: Hut.Param[]): HTMLTableRowElement;
	track(...params: Hut.Param[]): HTMLTrackElement;
	u(...params: Hut.Param[]): HTMLElement;
	ul(...params: Hut.Param[]): HTMLUListElement;
	video(...params: Hut.Param<Hut.VideoElementAttribute>[]): HTMLVideoElement;
	wbr(...params: Hut.Param[]): HTMLElement;
	
	new(): HutElements;
}

class Hut extends (() => Object as any as HutElements)()
{
	/** */
	static readonly elements = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "video", "wbr",
	];
	
	/**
	 * 
	 */
	constructor(private readonly provider: Hut.INodeProvider = {})
	{
		super();
		
		for (const name of Hut.elements)
		{
			Object.defineProperty(this, name, {
				value: (...params: Hut.Param[]) =>
				{
					const element = 
						provider.createElement?.(name) ||
						document.createElement(name);
					
					return this.apply(element as HTMLElement, params);
				}
			});
		}
		
		if (this.provider.createText)
		{
			const fn = this.provider.createText;
			this.text = (...strings: any[]) => fn(strings.join("")) as Text;
		}
	}
	
	/**
	 * A function that creates a new DOM Text node, but which may be overridden
	 * in the constructor to return a different but compatible value.
	 */
	text(strings: TemplateStringsArray): Text
	text(...strings: string[]): Text
	text(...strings: any[])
	{
		return new Text(strings.join(""));
	}
	
	/**
	 * Creates a new Hut context from the specified Element or series of Elements.
	 */
	get<T extends Element | Hut.HatLike>(e: T, ...others: Element[]): (...params: Hut.Param[]) => T;
	get<T extends ShadowRoot>(e: T, ...others: Element[]): (...params: Hut.ShadowParam[]) => T;
	get<T>(...elements: T[]): any
	{
		return (...params: Hut.Param[]) =>
		{
			for (const e of elements)
			{
				if (Hut.is.element(e) || Hut.is.shadow(e))
					this.apply(e as Element, params);
				
				else if (Hut.is.element((e as any as Hut.HatLike).head))
					this.apply((e as any as Hut.HatLike).head, params);
			}
			
			return elements[0] || null;
		};
	}
	
	/** */
	static readonly is = Object.freeze({
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
			return !!c && (c as ShadowRoot).nodeType === 11 && Hut.is.element(c.host);
		},
	});
	
	/**
	 * 
	 */
	shadow(...params: Hut.ShadowParam[]): Hut.Param
	{
		return e =>
		{
			const shadow = e.shadowRoot || e.attachShadow({ mode: "open" });
			this.apply(shadow, params as Hut.Param[]);
		};
	}
	
	/** */
	private apply(e: Element | ShadowRoot, params: Hut.Param[])
	{
		if (this.cssPropertySet === null)
		{
			const propertyNames: string[] = [];
			
			for (const key in document.documentElement.style)
				propertyNames.push(key);
			
			this.cssPropertySet = new Set(propertyNames);
		}
		
		// CAUTION: This code is *very* performance sensitive. It uses
		// constructor checks instead of instanceof and typeof in an effort
		// to squeeze out maximum performance. Be careful of changing
		// this code without  having full knowledge of what you're doing.
		for (let i = -1, length = params.length; ++i < length;)
		{
			const param = params[i];
			if (!param)
				continue;
			
			if (Hut.is.node(param))
			{
				e.append(param);
			}
			else if (Array.isArray(param))
			{
				this.apply(e, param);
			}
			else switch (param.constructor)
			{
				case Hut.Event:
				{
					if (e)
					{
						const he = param as Hut.Event;
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
				break; case Hut.Sheet:
				{
					(param as Hut.Sheet).apply(e as HTMLElement);
				}
				break; case String:
				{
					// Note that ShadowRoots cannot accept string parameters.
					(e as Element).classList.add(param as string);
				}
				break; case Object:
				{
					const el = e as any;
					
					for (const [name, value] of Object.entries(param))
					{
						// JavaScript numbers that are specified in the width and height properties
						// are injected as HTML attributes rather than assigned as CSS properties.
						if (value && 
							(name === "width" || name === "height") &&
							typeof value === "number")
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
						else if (this.cssPropertySet.has(name))
						{
							this.setProperty(el, name, value);
						}
					}
				}
				break; case Function:
				{
					if (Hut.is.element(e) || Hut.is.shadow(e))
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
	on<K extends keyof Hut.ExtendedEventMap>(
		type: K,
		listener: (this: HTMLElement, ev: Hut.ExtendedEventMap[K]) => any,
		options?: boolean | EventListenerOptions): Hut.Event;
	/** */
	on<K extends keyof Hut.EventMap>(
		remoteTarget: Node | Window,
		type: K,
		listener: (this: HTMLElement, ev: Hut.EventMap[K]) => any,
		options?: boolean | EventListenerOptions): Hut.Event;
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
		
		const hev = new Hut.Event(target, type, handler, options);
		
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
			});
		}
		
		return hev;
	}
	
	//# Connection Events
	
	/** */
	private maybeInstallRootObserver()
	{
		if (this.hasInstalledRootObserver)
			return;
		
		this.hasInstalledRootObserver = true;
		
		new MutationObserver(() =>
		{
			const invokations: [Element | ShadowRoot, boolean][] = [];
			
			for (let i = this.awaitingConnection.length; i-- > 0;)
			{
				const tuple = this.awaitingConnection[i];
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
			
		}).observe(document.body, { childList: true, subtree: true });
	}
	
	private hasInstalledRootObserver = false;
	private readonly awaitingConnection: [Element | ShadowRoot, boolean][] = [];
	
	//# Style Related
	
	/** */
	css(...components: (string | Hut.Style)[])
	{
		return new Hut.Sheet(this, components);
	}
	
	/** */
	private setProperty(
		styleable: { style: CSSStyleDeclaration },
		property: string,
		value: string | number,
		selectorOfContainingRule = "")
	{
		const [, selectorImportant] = this.trimImportant(selectorOfContainingRule);
		const [v, valueImportant] = this.trimImportant(String(value));
		let n = property.replace(/[A-Z]/g, char => "-" + char.toLowerCase());
		
		if (n.slice(0, 6) === "webkit" || n.slice(0, 3) === "moz" || n.slice(0, 2) === "ms")
			n = "-" + n;
		
		styleable.style.setProperty(n, v, selectorImportant || valueImportant);
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
	
	private index = 0;
	
	/** */
	animation(animationName: string, style: Record<number, Hut.Style>): Hut.Style
	{
		if (this.animationsWritten.includes(animationName))
			return { animationName };
		
		this.animationsWritten.push(animationName);
		const css: string[] = [];
		
		for (const [keyframe, styles] of Object.entries(style))
		{
			css.push(keyframe + "% { ");
			
			for (const [propertyName, propertyValue] of Object.entries(styles))
				css.push(propertyName + ": " + propertyValue + ";");
			
			css.push(" } ");
		}
		
		const animationBody = css.join("");
		const fullCss  = ["@", "@-webkit-", "@-moz-"].map(s =>
			s + `keyframes ${animationName} { ${animationBody} }`).join("");
		
		const styleTag = this.style("animation-sheet", new Text(fullCss));
		styleTag.classList.add(animationName);
		document.head.append(styleTag);
		
		return { animationName };
	}
	
	private readonly animationsWritten: string[] = [];
	private cssPropertySet: Set<string> | null = null;
	
	/** */
	static readonly Sheet = class Sheet
	{
		/** */
		constructor(
			hut: Hut,
			components: (string | Hut.Style)[])
		{
			this._ = { hut, components, sheet: null };
			this.class = "c" + (this._.hut.index++);
		}
		
		/** @internal */
		readonly _: {
			readonly hut: Hut;
			readonly components: readonly (string | Hut.Style)[];
			sheet: CSSStyleSheet | null;
		};
		
		/** */
		readonly class: string;
		
		/** */
		readonly cssRules: CSSStyleRule[] = [];
		
		/**
		 * Installs the CSS rules defined within this Sheet instance globally,
		 * instead of being scoped to a particular HTML element.
		 */
		async apply(): Promise<void>;
		/**
		 * Installs the CSS rules defined within this Sheet instance on
		 * the element provided.
		 */
		async apply(e: Element | ShadowRoot): Promise<void>;
		async apply(e?: Element | ShadowRoot)
		{
			const groups: { selector: string, styles: Hut.Style[] }[] = [{ selector: "", styles: [] }];
			
			for (let i = -1; ++i < this._.components.length;)
			{
				const cur = this._.components[i];
				const last = i > 0 && this._.components[i - 1];
				
				if (typeof cur === "string" && typeof last === "object")
					groups.push({ selector: "", styles: [] });
				
				const group = groups[groups.length - 1];
				
				if (typeof cur === "string")
					group.selector += cur;
				else
					group.styles.push(cur);
			}
			
			let sheet: CSSStyleSheet;
			{
				const cls = "hut-style-sheet";
				const target = Hut.is.shadow(e) ? e : document.head;
				const children = Array.from(target.childNodes);
				const existing = children.find((e) => (e as HTMLElement).classList.contains(cls));
				
				if (existing instanceof HTMLStyleElement)
				{
					sheet = existing.sheet!;
				}
				else
				{
					const styleTag = document.createElement("style");
					styleTag.className = cls;
					target.append(styleTag);
					
					// At least in Chrome, the .sheet property of a <style> element
					// is null immediately after the element is attached to the shadow
					// root element, and so in this case we need to wait for the next
					// turn of the event loop before accessing the .sheet property.
					if (e instanceof ShadowRoot)
						await new Promise(r => setTimeout(r));
					
					sheet = styleTag.sheet!;
				}
			}
			
			this._.sheet = sheet;
			const cssRules: CSSStyleRule[] = [];
			
			for (const group of groups)
			{
				const selectorParts = group.selector.split("&");
				let selector = group.selector;
				
				if (e instanceof HTMLElement)
				{
					if (selector.startsWith("*"))
					{
						selector = "." + this.class + " " + selector;
					}
					else if (selector !== ":root")
					{
						[selector] = this._.hut.trimImportant(
							selectorParts.length === 1 ?
								"." + this.class + group.selector :
								selectorParts.join("." + this.class));
					}
				}
				
				const idx = sheet.insertRule(selector + "{}");
				const cssRule = sheet.cssRules.item(idx) as CSSStyleRule;
				cssRules.push(cssRule);
				
				for (const stylesObject of group.styles)
				{
					for (let [n, v] of Object.entries(stylesObject))
					{
						if (typeof v === "number")
							v = String(v || 0);
						
						if (typeof v === "string")
							this._.hut.setProperty(cssRule, n, v, group.selector);
					}
				}
			}
			
			if (e instanceof HTMLElement)
				e.classList.add(this.class);
		}
		
		/**
		 * Removes the CSS rules contained within this Sheet instance
		 * from the CSS DOM.
		 */
		remove()
		{
			const sheet = this._.sheet;
			if (!sheet)
				return;
			
			for (let i = sheet.cssRules.length; i-- > 0;)
			{
				const rule = sheet.cssRules.item(i);
				if (rule && this.cssRules.includes(rule as CSSStyleRule))
					sheet.deleteRule(i);
			}
			
			this.cssRules.length = 0;
		}
	}
}

declare namespace Hut
{
	/**
	 * A class that can be passed to the Hut constructor in order to
	 * provide a way to override the functions that are called to construct
	 * DOM objects. 
	 */
	export interface INodeProvider
	{
		createElement?: (tagName: string) => IHTMLElementLike;
		createGlobalStyleSheet?: () => CSSStyleSheet;
		createText?: (textContent: string) => INodeLike;
	}
	
	/** */
	export type ElementClosure = ((e: HTMLElement) => Param | Param[]);
	
	/** */
	export type ShadowClosure = ((e: ShadowRoot) => Param | Param[]);
	
	/** */
	export type HatLike = { readonly head: HTMLElement; };
}

//# Element Related

declare namespace Hut
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
	 * hut.js compatible IHTMLElementLike.
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
	 * A class that describes the minimal set of members that need to
	 * be implemented on fake CSSStyleSheet objects in order to create
	 * a custom hut.js compatible ICSSStyleSheetLike.
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
	 * a custom hut.js compatible ICSSStyleRuleLike.
	 */
	export interface ICSSStyleRuleLike
	{
		readonly style: {
			setProperty(name: string, value: string, important?: string): void;
		}
	}
	
	/** */
	export type Param<T = ElementAttribute> =
		// Single class name
		string |
		// Event connections
		Hut.Event |
		// Mini CSS style sheet, contains a small group of rules
		Hut.Sheet |
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
		Hut.Event |
		Hut.Sheet |
		Hut.ShadowClosure |
		false | void |
		Promise<any> |
		INodeLike;
	
	/** */
	export interface ElementAttribute
	{
		name: string;
		id: string;
		class: string;
		style: string;
		contentEditable: boolean | string;
		spellcheck: boolean;
		tabIndex: number;
		data: Record<string, string | number | boolean>;
	}
	
	/** */
	export interface BaseElementAttribute extends ElementAttribute
	{
		href: string;
	}
	
	/** */
	export interface MetaElementAttribute extends ElementAttribute
	{
		content: string;
	}
	
	/** */
	export interface LinkElementAttribute extends ElementAttribute
	{
		rel: string;
		type: string;
		href: string;
		media: string;
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
		src: string;
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

declare namespace Hut
{
	/** */
	export type Sheet = InstanceType<typeof Hut.Sheet>;
	
	/** */
	export type Style = {
		[P in keyof CSSStyleDeclaration]?: P extends keyof NumericStyleDeclaration ? 
			NumericStyleDeclaration[P] : 
			CSSStyleDeclaration[P]
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
		width: string | number;
		wordSpacing: string | 0;
		zIndex: string | number;
	};
}

//# Event Related

declare namespace Hut
{
	/** */
	export type Event = InstanceType<typeof Hut.Event>;
	
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
	webkitMarginAfter: string | 0;
	webkitMarginBefore: string | 0;
	webkitMarginEnd: string | 0;
	webkitMarginStart: string | 0;
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

//@ts-ignore
if (typeof module === "object") Object.assign(module.exports, { Hut });
