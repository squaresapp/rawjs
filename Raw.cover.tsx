
declare namespace JSX
{
	interface IntrinsicElements
	{
		red: E;
	}
}

namespace Cover
{
	/** */
	export function coverCustomElement()
	{
		document.body.append(
			<red></red>
		);
	}
	
	/** */
	export function coverRawConnectedEvent()
	{
		raw.div(
			<red>
			</red>
		);
		
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
		
		debugger;
	}
	
	//@ts-ignore
	if (typeof module === "object") Object.assign(module.exports, { Cover });
}
