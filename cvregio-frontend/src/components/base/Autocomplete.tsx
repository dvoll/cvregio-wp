import React, { Component } from 'react';

import './Autocomplete.scss';
import { BaseControl } from '@wordpress/components';

export interface AutocompleteSuggestion {
    name: string;
    value: number | string;
}

interface AutocompleteProps {
    suggestions: AutocompleteSuggestion[];
    noSuggestionText?: string;
    id: string;
    label?: string;
    placeholder?: string;
    filter?: (input: string, item: string) => boolean;
    onSelectShouldClear?: (item: AutocompleteSuggestion) => boolean;
}

interface AutocompleteState {
    activeSuggestion: number;
    filteredSuggestions: AutocompleteSuggestion[];
    showSuggestions: boolean;
    userInput: string;
}

class Autocomplete extends Component<AutocompleteProps, AutocompleteState> {
    readonly state: AutocompleteState = {
        // The active selection's index
        activeSuggestion: 0,
        // The suggestions that match the user's input
        filteredSuggestions: [],
        // Whether or not the suggestion list is shown
        showSuggestions: false,
        // What the user has entered
        userInput: '',
    };

    onChange = (e: any) => {
        const { suggestions = [], filter } = this.props;
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(suggestion => {
            if (filter) {
                return filter(userInput, suggestion.name);
            }
            return suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
        });

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value,
        });
    };

    onClick = (e: any) => {
        const { index } = e.currentTarget.dataset;
        if (!index) {
            return;
        }
        const item = this.state.filteredSuggestions[+index];
        let { name } = item;

        if (this.props.onSelectShouldClear && this.props.onSelectShouldClear({ name: item.name, value: item.value })) {
            name = '';
        }
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: name,
        });
    };

    onKeyDown = (e: any) => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        // User pressed the enter key
        if (e.keyCode === 13) {
            const item = filteredSuggestions[activeSuggestion];
            let input = item.name;
            if (
                this.props.onSelectShouldClear &&
                this.props.onSelectShouldClear({ name: item.name, value: item.value })
            ) {
                input = '';
            }
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: input,
            });
        }
        // User pressed the up arrow
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const { onChange, onClick, onKeyDown } = this;
        const { noSuggestionText = 'Nichts gefunden', id, label, placeholder } = this.props;
        const { activeSuggestion, filteredSuggestions, showSuggestions, userInput } = this.state;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="autocomplete__suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            // Flag the active suggestion with a class
                            if (index === activeSuggestion) {
                                className = 'autocomplete__suggestion--active';
                            }

                            return (
                                /* eslint-disable */
                                <li
                                    className={`autocomplete__suggestion ${className}`}
                                    key={suggestion.value}
                                    onClick={onClick}
                                    data-index={index}
                                >
                                    {suggestion.name}
                                </li>
                                /* eslint-enable */
                            );
                        })}
                    </ul>
                );
            }
        }

        return (
            <React.Fragment>
                <div className="autocomplete">
                    <BaseControl id={id} label={label}>
                        <input
                            id={id}
                            className="autocomplete__input"
                            type="text"
                            onChange={onChange}
                            onKeyDown={onKeyDown}
                            value={userInput}
                            placeholder={placeholder}
                        />
                        {suggestionsListComponent}
                    </BaseControl>
                </div>
                <p
                    className={`autocomplete-hint ${
                        showSuggestions && userInput && !filteredSuggestions.length ? 'autocomplete-hint--visible' : ''
                    }`}
                >
                    <em>{noSuggestionText}</em>
                </p>
            </React.Fragment>
        );
    }
}

export default Autocomplete;
