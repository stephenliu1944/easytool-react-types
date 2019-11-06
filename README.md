# @easytool/react-types
This package use to check React element type.

## Install
npm install @easytool/react-types

## Usage
```js
import {
    isDOMElement,
    isComponentElement,
    isClass,
    isFragment,
    isPortal,
    isText,
    isEmpty
} from '@easytool/react-types';

isDOMElement(<p>Hellow World</p>);     // true

function MyComponent() {
    return (
        <p>Hellow World</p>
    );
}
isComponentElement(MyComponent);       // true

class MyClass extends Component {
    ...
}
isClass(MyClass);                     // true

isFragment(<></>);                    // true
isFragment(<React.Fragment></React.Fragment>); // true

var portal = ReactDOM.createPortal(
    [...],
    document.getElementById('app');
);
isPortal(portal);                          // true

isText(string | number);                   // true

isEmpty(null | undefined | true | false)   // true
```

## API
```js
export function isDOMElement(object);

export function isComponentElement(object);

export function isClass(object);

export function isText(object);

export function isEmpty(object);
/**
 * extends react-is lib below
 */
export function isFragment(object);

export function isPortal(object);

export function isElement(object);

export function isConcurrentMode(object);

export function isContextConsumer(object);

export function isContextProvider(object);

export function isForwardRef(object);

export function isLazy(object);

export function isMemo(object);

export function isPortal(object);

export function isProfiler(object);

export function isStrictMode(object);

export function isSuspense(object);
```
