jest.dontMock('../component');

// use commonjs syntax, because es6 syntax not working with babel-jest
// for some reason
const React = require('react');
const {findDOMNode} = require('react-dom');
const {renderIntoDocument} = require ('react-addons-test-utils');

const Component = require('../component').default;

describe('Test', () => {
  it('renders into document', () => {
    const component = findDOMNode(
      renderIntoDocument(React.createElement(Component, {name: 'World'})));
    expect(component.querySelector('h1').textContent).toEqual('Hello World!');
  });
});
