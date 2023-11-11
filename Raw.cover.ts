
namespace Cover
{
	/** */
	export function coverRaw()
	{
		const raw = new Raw({
			createElement(tagName)
			{
				return document.createElement(tagName);
			},
			createGlobalStyleSheet()
			{
				return {} as CSSStyleSheet;
			}
		});
	}
	
	/** */
	export function coverRawConnectedEvent()
	{
		const raw = new Raw();
		
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
		const raw = new Raw();
		
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
		const raw = new Raw();
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
		const raw = new Raw();
		
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
		const raw = new Raw();
		const div = raw.div(
			{
				width: ["error", "100%"]
			}
		);
		
		document.body.append(div);
		return () => div.style.width === "100%";
	}
	
	//@ts-ignore
	if (typeof module === "object") Object.assign(module.exports, { Cover });
}
