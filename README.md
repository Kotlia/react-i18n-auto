# react-i18n-auto

> A simple react component to automatically translate string component with Google Translate API - without API Key!.



### Quick Example

```javascript
import React, { Component } from "react"
import Translator, { translate } from 'react-i18n-auto'

export default class Page extends Component {

    render() {
    
        const T = Translator({from: "en"});   // {from: "en", to: "ja"} => Force language to be converted to.
        
        console.log(translate("Hello, world", { from: "en", to: "fr" }));  // => "Bonjour le monde"
        
        return (
            <>
                <T>Hello, world</T>  // Text enclosed by "T" (in this case) will be translated.
            </>
        );
        
    }
    
}
```



### Docs

**Translator({ from: *string*, to: *string | undefined* })**

Creates translator.

> from:	Language code of the original language.  
> to:	Force language to be converted to. By default, text will be translated to the browser language. (```navigator.languages```)
