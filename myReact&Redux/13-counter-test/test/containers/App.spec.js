import expect from 'expect';
import {mount} from 'enzyme';
import React from 'react';
import {Provider} from 'react-redux';
import App from "../../containers/App";
import configStore from "../../store/configureStore";

function setup(initialState){
    const store=configStore(initialState);
    const app=mount(
        <Provider store={store}>
            <App/>
            </Provider>
    )
    return {
        app,
        buttons:app.find('button'),
        p:app.find('p')
    }
}

describe('Containers',()=>{
    describe('App',()=>{
        it('should display initial count',()=>{
            const {p}=setup();
            expect(p.text()).toMatch(/^Clicked:0 times/);
        });

        it('should display updated count after increment button click',()=>{
            const {butons,p}=setup();
            buttons.at(0).simulate('click');
            expect(p.text()).toMatch(/Clicked:1 times/)
        });

        it('should display updated count after decrement button click',()=>{
            const {butons,p}=setup();
            buttons.at(1).simulate('click');
            expect(p.text()).toMatch(/Clicked:-1 times/)
        });

        it('shouldnt change if even and if even button clicked',()=>{
            const {butons,p}=setup();
            buttons.at(2).simulate('click');
            expect(p.text()).toMatch(/Clicked:0 times/)
        });

        it('should change if odd and if odd button clicked',()=>{
            const {butons,p}=setup({counter:1});
            buttons.at(2).simulate('click');
            expect(p.text()).toMatch(/Clicked:2 times/)
        });
    })
})