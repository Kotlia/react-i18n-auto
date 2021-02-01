import React, {Component} from "react";

export function translate(text: string, config: {from: string, to: string}) {
    return new Promise<string>((resolve, reject) => {
        fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${config.from}&tl=${config.to}&dt=t&q=${encodeURIComponent(text)}&ie=UTF-8&oe=UTF-8`)
            .then(res => res.json())
            .then(out => resolve(out[0][0][0]))
            .catch(reject)
    })
}
