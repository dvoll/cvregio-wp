/**
 * BLOCK: Atomic Blocks Post and Page Grid
 */

// Import block dependencies and components
import edit from "./components/edit";

// Import CSS
import "./style.scss";
import "./editor.scss";

// Components
// const { __ } = wp.i18n;

// Register block controls
const { registerBlockType } = wp.blocks;

// Register alignments
// const validAlignments = [ 'center', 'wide' ];

// Register the block
registerBlockType("cv-blocks/cv-stage", {
	title: "CV Landingpage Stage",
	description: "Ein Header Image Slider für die Landingpage.",
	icon: "format-image",
	category: "common",
	keywords: ["Intro", "Header", "Slider"],

	attributes: {
		items: {
			source: "query",
			default: [],
			selector: ".cv-stage-item",
			query: {
				text: {
					type: "string",
					source: "text",
					selector: ".cv-stage-item__text"
				}
			}
		}
	},

	// getEditWrapperProps( attributes ) {
	// 	const { align } = attributes;
	// 	if ( -1 !== validAlignments.indexOf( align ) ) {
	// 		return { 'data-align': align };
	// 	}
	// },

	edit,

	save: function(props) {
		const { items } = props.attributes;
		const itemList = items.map(item => {
			return (
				<div className="cv-stage-item">
					<p className="cv-stage-item__text">{item.text}</p>
					<p className="cv-stage-item__url">{item.text + "123"}</p>
					<p className="cv-stage-item__url2">{item.text + "123"}</p>
					<p className="cv-stage-item__url3">{item.text + "123"}</p>
				</div>
			);
		});
		const itemString = JSON.stringify(items);
		return (
			<section className={props.className + " alignfull"}>
				{/* {itemList} */}
				{/* <c-logger args={JSON.stringify(props)}></c-logger> */}
				<cv-stage items="itemString">{itemList}</cv-stage>
			</section>
		);
	}
});
