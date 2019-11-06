import * as ReactIs from 'react-is';

/* 
    $$typeof: Symbol(react.element)
    key: "1"
    props: {onClick: ƒ, children: Array(2)}
    ref: null
    type: "div"
    _owner: FiberNode {tag: 1, key: null, elementType: ƒ, type: ƒ, stateNode: _class, …}
    _store: {validated: false}
    _self: null
    _source: null
*/
export function isDOMElement(object) {
    return object && typeof object.type === 'string';
}

/* 
    $$typeof: Symbol(react.element)
    key: "1"
    props: {name: "stephen", children: Array(3)}
    ref: null
    type: ƒ MyComponent(props)
    _owner: FiberNode {tag: 1, key: null, elementType: ƒ, type: ƒ, stateNode: _class, …}
    _store: {validated: false}
    _self: null
    _source: null
*/
export function isComponentElement(object) {
    return object && typeof object.type === 'function';
}

/* 
    $$typeof: Symbol(react.element)
    key: null
    props: {name: "stephen", onClick: ƒ, children: Array(3)}
    ref: null
    type: ƒ _class()
    _owner: FiberNode {tag: 1, key: null, elementType: ƒ, type: ƒ, stateNode: _class, …}
    _store: {validated: false}
    _self: null
    _source: null
*/
export function isClass(object) {
    return isComponentElement(object) && object.type.name === '_class';
}

export function isText(object) {
    return typeof object === 'string' || typeof object === 'number';
}

export function isEmpty(object) {
    return object === null || object === undefined || typeof object === 'boolean';
}

/* 
    $$typeof: Symbol(react.element)
    key: "1"
    props: {children: Array(3)}
    ref: null
    type: Symbol(react.fragment)
    _owner: FiberNode {tag: 1, key: null, elementType: ƒ, type: ƒ, stateNode: _class, …}
    _store: {validated: false}
    _self: null
    _source: null 
*/
export function isFragment(object) {
    return ReactIs.isFragment(object);
}

/* 
    $$typeof: Symbol(react.portal)
    children: (3) [{…}, {…}, {…}]
    containerInfo: div#app2
    implementation: null
    key: null
*/
export function isPortal(object) {
    return ReactIs.isPortal(object);
}

export function isElement(object) {
    return ReactIs.isElement(object);
}

export function isConcurrentMode(object) {
    return ReactIs.isConcurrentMode(object);
}

export function isContextConsumer(object) {
    return ReactIs.isContextConsumer(object);
}

export function isContextProvider(object) {
    return ReactIs.isContextProvider(object);
}

export function isForwardRef(object) {
    return ReactIs.isForwardRef(object);
}

export function isLazy(object) {
    return ReactIs.isLazy(object);
}

export function isMemo(object) {
    return ReactIs.isMemo(object);
}

export function isProfiler(object) {
    return ReactIs.isProfiler(object);
}

export function isStrictMode(object) {
    return ReactIs.isStrictMode(object);
}

export function isSuspense(object) {
    return ReactIs.isSuspense(object);
}