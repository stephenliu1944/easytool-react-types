import { isReactDOMElement } from '../../src/index';

it('isReactDOMElement', function() {
    var info = isReactDOMElement();
    expect(info).toMatchSnapshot();
});

