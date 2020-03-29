/**
 * Inspector Controls
 */

// Setup the block
import { PanelBody, ToggleControl, TextControl } from '@wordpress/components';
import { Component } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';
import Autocomplete, { AutocompleteSuggestion } from '../../components/base/Autocomplete';
import { AssociateFull } from './edit';
import PanelListItem from '../../components/base/PanelListItem';

interface RelatedAssociatesInspectorProps {
    associates: AssociateFull[];
    selectedAssociates: AssociateFull[];
    onAssociateSelect: (id: number) => void;
    onAssociateChange: (id: number, associate: AssociateFull) => void;
    onAssociateRemove: (id: number) => void;
}

/**
 * Create an Inspector Controls wrapper Component
 */
class RelatedAssociatesInspector extends Component<RelatedAssociatesInspectorProps> {
    constructor(props: RelatedAssociatesInspectorProps) {
        super(props);
        this.handleAutocompletetSelect = this.handleAutocompletetSelect.bind(this);
        this.handleItemRoleChange = this.handleItemRoleChange.bind(this);
        this.handleItemCheckedChange = this.handleItemCheckedChange.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    private ListItem = (props: {
        id: string | number;
        title: string;
        checked: boolean;
        onDelete: (id: string | number) => void;
        onCheck: (id: string | number, checked: boolean) => void;
        role: string;
        onRoleChange: (id: string | number, role: string) => void;
    }) => {
        const { id, title, checked, onDelete, onCheck, role, onRoleChange } = props;
        return (
            <PanelListItem title={title} onDelete={() => onDelete(id)}>
                <ToggleControl
                    label="ist Ansprechpartner"
                    help={checked ? 'Ist kein Ansprechpartner' : 'Kein Ansprechpartner.'}
                    checked={checked}
                    onChange={value => onCheck(id, value)}
                />
                <TextControl
                    value={role}
                    onChange={value => onRoleChange(id, value)}
                    label="Rolle"
                    placeholder="Mitarbeiter, Leitung, ..."
                />
            </PanelListItem>
        );
    };

    private handleAutocompletetSelect(item: AutocompleteSuggestion) {
        console.log(item);
        this.props.onAssociateSelect(+item.value);
        // clears autosuggest input field
        return true;
    }

    private handleItemRoleChange(id: number | string, value: string) {
        const changedAsscoiate = this.props.selectedAssociates.find(associate => associate.id === id);
        if (!changedAsscoiate) return;
        changedAsscoiate.roles = [{ name: value, label: value }];
        this.props.onAssociateChange(+id, changedAsscoiate);
    }

    private handleItemCheckedChange(id: number | string, value: boolean) {
        const changedAsscoiate = this.props.selectedAssociates.find(associate => associate.id === id);
        if (!changedAsscoiate) return;
        changedAsscoiate.isContact = value;
        this.props.onAssociateChange(+id, changedAsscoiate);
    }

    private handleItemDelete(id: number | string) {
        this.props.onAssociateRemove(id ? +id : -1);
    }

    render() {
        const { associates, selectedAssociates } = this.props;

        const associatesOptions: AutocompleteSuggestion[] = associates.map(associate => ({
            name: `${associate.firstname} ${associate.lastname}`,
            value: associate.id || '',
        }));

        return (
            <InspectorControls>
                <PanelBody title="Mitarbeiter">
                    <Autocomplete
                        id="associates-autocomplete"
                        label="Suche"
                        placeholder="Namen eingeben"
                        suggestions={associatesOptions}
                        filter={(input, itemName) => RegExp(`^(\\w+\\s)*${input}`, 'i').test(itemName)}
                        onSelectShouldClear={this.handleAutocompletetSelect}
                    />
                    <div className="associate-panel-list">
                        {selectedAssociates.map(associate => (
                            <this.ListItem
                                key={associate.id}
                                id={associate.id || ''}
                                checked={!!associate.isContact}
                                title={`${associate.firstname} ${associate.lastname}`}
                                role={associate.roles[0]?.label || ''}
                                onCheck={this.handleItemCheckedChange}
                                onDelete={this.handleItemDelete}
                                onRoleChange={this.handleItemRoleChange}
                            />
                        ))}
                    </div>
                </PanelBody>
            </InspectorControls>
        );
    }
}

export default RelatedAssociatesInspector;
