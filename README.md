# react-node-type
Use for check react node type.

## Install
npm i react-node-type

## Usage
```js
import {
    isReactDOMElement,
    isReactComponentElement,
    isReactClass,
    isReactFragment,
    isReactPortal,
    isReactText,
    isReactEmpty
} from 'react-node-type';

isReactDOMElement(<p>Hellow World</p>);     // true

function MyComponent() {
    return (
        <p>Hellow World</p>
    );
}
isReactComponentElement(MyComponent);       // true

class MyClass extends Component {
    ...
}
isReactClass(MyClass);                     // true


isReactFragment(<></>);                    // true
isReactFragment(<React.Fragment></React.Fragment>); // true

var portal = ReactDOM.createPortal(
    [...],
    document.getElementById('app');
);
isReactPortal(portal);                          // true

isReactText(string | number);                   // true

isReactEmpty(null | undefined | true | false)   // true
```

## API
```js
export function isReactDOMElement(node);

export function isReactComponentElement(node);

export function isReactClass(node);

export function isReactFragment(node);

export function isReactPortal(node);

export function isReactText(node);

export function isReactEmpty(node);
```
