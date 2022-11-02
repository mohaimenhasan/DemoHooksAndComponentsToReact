
import React, { Component } from "react";

class MohaimenClass extends Component {
    constructor() {
        super();
        this.state = {
            newCatUrl: "",
            count: 0,
            currentVal: ""
        };
        this.increase = this.increase.bind(this);
        this.getACat = this.getACat.bind(this);
    }

    getACat = async () => {
        await fetch('https://api.thecatapi.com/v1/images/search')
            .then(val => val.json())
            .then(catResponse => {
                console.log(catResponse);
                this.setState({
                    newCatUrl: catResponse[0].url
                })
            })
    }

    increase() {
        this.setState({
            count: this.state.count + 1,
            currentVal: this.state.currentVal !== "" ? this.state.currentVal + " " + this.state.count : this.state.count
        });
    }

    async componentDidMount() {
        await this.getACat();
    }

    render() {
        return (
            <div style={{ margin: '50px' }}>
                <h1>This is MohaimenClass Component</h1>
                <h2>This shows a demo of the states -</h2>
                <h3> Adding value : </h3>
                <h2> {this.state.count}</h2>
                <button onClick={this.increase}>
                    Add
                </button>
                <h3>Past Vals: {this.state.currentVal}</h3>
                <button onClick={this.getACat}>
                    Get a Cat
                </button> <br /> <br />
                <img src={this.state.newCatUrl} alt={"random cat img"} width="500" height="600" />
            </div>
        )
    }
}

export default MohaimenClass