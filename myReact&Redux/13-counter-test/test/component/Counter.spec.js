import expect from "expect";
import jest from "jest-mock";
import React from "react";
import {shallow,configure} from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import Counter from "../../components/Counter";

configure({adapter:new Adapter()});

function setup(counter=0){
    const spy=jest.fn();
    spy();
    const actions={
        // increment:expect.createSpy(),
        // decrement:expect.createSpy(),
        // incrementIfOdd:expect.createSpy(),
        // incrementAsync:expect.createSpy()

        increment:expect(spy),
        decrement:expect(spy),
        incrementIfOdd:expect(spy),
        incrementAsync:expect(spy)
    };

    const component=shallow(
        <Counter counter={counter}{...actions} />
    );

    return {
        component,
        actions,
        buttons:component.find('button'),
        p:component.find('p')
    }
}

describe('components',()=>{
    describe('Counter',()=>{
        it('should display count'),()=>{
            const {p}=setup();
            expect(p.text()).toMatch(/^Clicked:0 times/);
        };

        it('first button should call increment',()=>{
            const {buttons,actions}=setup();
            buttons.at(0).simulate('click');
            expect(actions.increment).toHaveBeenCalled();
        });

        it('second button should call decrement',()=>{
            const {buttons,actions}=setup(43);
            buttons.at(1).simulate('click');
            expect(actions.decrement).toHaveBeenCalled();
        });

        it('third button should call incrementIfOdd',()=>{
            const {buttons,actions}=setup();
            buttons.at(2).simulate('click');
            expect(actions.incrementIfOdd).toHaveBeenCalled();
        });

        it('fourth button should call incrementAsync',()=>{
            const {buttons,actions}=setup();
            buttons.at(3).simulate('click');
            expect(actions.incrementAsync).toHaveBeenCalled();
        });
    })
})