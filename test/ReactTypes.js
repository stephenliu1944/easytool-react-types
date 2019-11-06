import { isDOMElement } from '../src/index';

it('isDOMElement', function() {
    var info = isDOMElement();
    expect(info).toMatchSnapshot();
});
