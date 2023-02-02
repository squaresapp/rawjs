
namespace Cover
{
	/** */
	export function coverHut()
	{
		const hut = new Hut({
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
	export function coverHutConnectedEvent()
	{
		const hut = new Hut();
		
		hut.get(document.body)(
			hut.section(
				hut.on("connected", () =>
				{
					console.log("connected");
				})
			)
		);
	}
	
	/** */
	export function coverHutShadow()
	{
		const hut = new Hut();
		hut.css("DIV", { borderRadius: "20px" }).apply();
		
		hut.get(document.body)(
			hut.div(
				"shadow-container",
				{
					border: "10px solid red",
					padding: "10px",
				},
				hut.shadow(
					hut.css(
						"DIV",
						{
							backgroundColor: "yellow"
						},
					),
					hut.div(
						"shadow-element-1",
						{
							width: "100px",
							height: "100px",
							border: "10px solid green"
						}
					)
				),
				hut.shadow(
					hut.div(
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
	
	//@ts-ignore
	if (typeof module === "object") Object.assign(module.exports, { Cover });
}
