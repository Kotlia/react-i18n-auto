import React, { Component } from "react";
import { translate } from "./Translate";

export function Translator(config: {from: string, to: string | undefined}) {

    const from = config.from || "en"
    const to = config.to || window.navigator.language.slice(0, 2)

    return class Translate extends Component {
        state = {
            text: undefined
        }


        componentDidMount() {
            translate(this.props.children!!.toString(), {from: from, to: to})
                .then(out =>  this.setState({text: out}))
        }


        render() {
            return this.state.text || this.props.children
        }
    }
}
