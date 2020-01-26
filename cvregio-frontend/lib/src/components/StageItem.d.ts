/// <reference types="react" />
import { BlockEditProps } from '@wordpress/blocks';
import { ComponentType } from '@wordpress/element';
export interface StageItemAttributes {
    title: string;
    description: string;
    brightness: number;
    url: string;
}
export interface StageItemProps extends BlockEditProps<StageItemAttributes> {
    isEdit: boolean;
}
export declare type StageItemBackendComponentType = ComponentType<BlockEditProps<StageItemAttributes>>;
declare const StageItem: ComponentType<StageItemProps>;
export default StageItem;
