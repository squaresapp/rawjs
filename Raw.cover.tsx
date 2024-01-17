
interface RedElementAttribute extends Raw.ElementAttribute
{
	a: number;
	b: string;
}

declare namespace JSX
{
	interface IntrinsicElements
	{
		red: E<RedElementAttribute>;
	}
}

namespace Cover
{
	/** */
	export function coverCustomElement()
	{
		const e = <red a={1} b="string"></red>;
		document.body.append(e);
		
		return [
			() => (e as any).a === 1,
			() => (e as any).b === "string",
		];
	}
	
	/** */
	export function coverRawConnectedEvent()
	{
		raw.div(<red></red>);
		
		raw.get(document.body)(
			raw.section(
				raw.on("connected", () =>
				{
					console.log("connected");
				})
			)
		);
	}
	
	/** */
	export function coverRawUseClassAttributeDirectly()
	{
		const e1 = raw.div({ class: "a b c" });
		const e2 = <div class="x y z"></div>;
		
		return [
			() => e1.classList.contains("a") && e1.classList.contains("b") && e1.classList.contains("c"),
			() => e2.classList.contains("x") && e2.classList.contains("y") && e2.classList.contains("z"),
		];
	}
	
	/** */
	export function coverRawStyleAttach()
	{
		raw.style("DIV", {
			width: "100px",
			height: "100px",
			border: "10px solid green"
		}).attach();
		
		raw.get(document.body)(raw.div());
	}
	
	/** */
	export function coverRawShadow()
	{
		raw.style("DIV", { borderRadius: "20px" });
		
		raw.get(document.body)(
			raw.div(
				"shadow-container",
				{
					border: "10px solid red",
					padding: "10px",
				},
				raw.shadow(
					raw.style(
						"DIV",
						{
							backgroundColor: "yellow"
						},
					),
					raw.div(
						"shadow-element-1",
						{
							width: "100px",
							height: "100px",
							border: "10px solid green"
						}
					)
				),
				raw.shadow(
					raw.div(
						"shadow-element-2",
						{
							width: "100px",
							height: "100px",
							border: "10px solid blue"
						}
					)
				)
			)
		);
	}
	
	/** */
	export function coverRawCssDeduplication()
	{
		const insert = () =>
		{
			document.body.append(
				raw.div(
					raw.css(" P", { color: "red" }),
					raw.p(raw.text`para1`),
					raw.p(raw.text`para2`),
				)
			);
		};
		
		insert();
		insert();
	}
	
	/** */
	export function coverRawArrayValues()
	{
		const div = raw.div(
			{
				width: ["error", "100%"]
			}
		);
		
		document.body.append(div);
		return () => div.style.width === "100%";
	}
	
	/** */
	export function coverRawJSXCompatibility()
	{
		document.body.append(
			raw.div(
				<a href="#">This is <b>bold</b> text.</a>
			)
		);
	}
	
	/** */
	export function coverTemplateStrings()
	{
		function blue(text: string) { return "<b>" + text + "</b>"; }
		function red(text: string) { return "<r>" + text + "</r>"; }
		
		raw.text`
			We need a new ${blue("media channel")} where you can
			have your ${blue("cake")} and ${red("eat")} it ${red("too")}.
		`;
		
		function br()
		{
			return raw.br();
		}
		
		const text = raw.text`
			Here is some text. And a line break ${br()}
		`;
	}
	
	/** */
	export function coverBackgroundImageInPseudo()
	{
		const div = raw.div(
			raw.css(":before", {
				content: `""`,
				backgroundImage: "linear-gradient(red, blue)",
			}),
		);
		
		document.body.append(div);
	}
	
	//@ts-ignore
	if (typeof module === "object") Object.assign(module.exports, { Cover });
}
