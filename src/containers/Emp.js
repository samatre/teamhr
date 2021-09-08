import React, { Component } from 'react';

class Emp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isActive: true
        };
    }

    onDismiss = (event) => {
        console.log(this.state.isActive)
        this.setState({ isActive: false });
    };

    render() {
        console.log(this.state.isActive);
        const [{ role: currRole, roleStart: startedOn }] = this.props.roles.filter(r => r.roleEnd === '');
        return (
            <div className={`tc ${this.state.isActive ? 'bg-light-green' : 'bg-light-red'} dib br3 pa3 ma2 grow bw2 shadow-5`}>
                <img alt='Emp' src={`https://robohash.org/${this.props.id}?size=200x200`} />
                <div>
                    <h2>{this.props.name}</h2>
                    <h3>{currRole}</h3>
                    <p className='f7'>From {startedOn}</p>
                    <h3>{this.state.isActive ? 'Active' : 'Dismissed'}</h3>
                    {/* <button disabled={!this.state.isActive} onClick={this.onDismiss} type="button">
                        Dismiss
                    </button> */}
                </div>
            </div>
        );
    }
}

export default Emp;