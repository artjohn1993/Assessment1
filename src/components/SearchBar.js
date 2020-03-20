import React from 'react';

class SearchBar extends React.Component {
    state = { data : '' }


    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.data)
    }
    
    onChange = event => {
        this.setState({ data: event.target.value});
        this.props.onChange(event.target.value)
    }
    

    render() {
        return (
            <div className="ui segment" onSubmit={this.onFormSubmit} >
                <form className="ui form">
                    <div className="field">
                        <label>Search by email</label>
                        <input onChange={this.onChange} type="text" />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;