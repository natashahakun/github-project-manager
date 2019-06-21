import React from 'react';
import renderer from 'react-test-renderer';
import { mockStore } from './testConfig';
import { Provider } from 'react-redux';
import App from './App';

let store;

beforeEach(() => {
    store = mockStore({ 
        ui: {
            loading: false
        }, 
        user: {},
        getState: jest.fn(() => ({})),
        dispatch: jest.fn()
    });
});

describe('App', () => {
    it('renders correctly', () => {
        const tree = renderer
        .create(
            <Provider store={store}>
            <App />
            </Provider>
        )
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
