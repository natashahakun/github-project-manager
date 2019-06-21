import React from 'react';
import renderer from 'react-test-renderer';
import { mockStore } from '../../testConfig';
import { Provider } from 'react-redux';
import Login from './Login';

let store;

beforeEach(() => {
  store = mockStore({});
});

describe('Login', () => {
    it('renders correctly', () => {
        const tree = renderer
        .create(
            <Provider store={store}>
            <Login />
            </Provider>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});