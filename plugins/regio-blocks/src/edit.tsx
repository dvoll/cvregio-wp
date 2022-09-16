import { useEffect, useState } from 'react';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { CheckboxControl, PanelBody, QueryControls } from '@wordpress/components';
import { BlockEditProps } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import apiFetch from '@wordpress/api-fetch';
import { useSelect } from '@wordpress/data';

interface NewsBlockAttributes {
	layoutType: 'row' | 'grid';
	categoryId: number;
	postsToShow: number;
	align?: 'wide' | 'full' | 'center' | 'left' | 'right';
}

interface Category {
	
		id: number;
		name: string;
		parent: number;

}

export default function edit({ attributes, setAttributes }: BlockEditProps<NewsBlockAttributes>) {

	const onCategoryChangeOld = (isChecked: boolean) => {
		setAttributes({ categoryId: isChecked ? 1 : 0 });
	};
	const onCategoryChange = (categoryId: number) => {
		setAttributes({ categoryId });
	};

	const [categories, setCategories] = useState<Category[]>([]);

	const categories2 = useSelect<any>( ( select: any ) => {
		return select( 'core' ).getEntityRecords( 'taxonomy', 'category' );
	}, [] );
	console.log('categories', categories2);

	const posts = useSelect( ( select: any ) => {
		return select( 'core' ).getEntityRecords( 'postType', 'post' );
	}, [] );
	console.log('posts', posts);

	useEffect(() => {
		apiFetch({ path: '/wp/v2/categories' }).then((categories) => {
			console.log(categories);
			setCategories(categories as Category[]);
		});
	}, []);

	return (<div {...useBlockProps()}>
		<InspectorControls>
			<PanelBody title='Inhaltsoptionen'>
				<CheckboxControl onChange={onCategoryChangeOld} value={'test'} name="Test" />
			</PanelBody>
			<QueryControls categoriesList={categories} selectedCategoryId={attributes.categoryId} onCategoryChange={onCategoryChange} />
		</InspectorControls>
		Starter Block – hello from the editor!
	</div>)
		;
}
