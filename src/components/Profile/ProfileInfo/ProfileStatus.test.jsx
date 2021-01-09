import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Hello Max"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hello Max");
    });

    test("after creation Span should be displayed", () => {
        const component = create(<ProfileStatus status="Hello Max"/>);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation Input should be displayed", () => {
        const component = create(<ProfileStatus status="Hello Max"/>);
        const instance = component.root;
        expect( () => {
            const input = instance.findByType("input");
        }).toThrow();
    });

    test("after creation Span should contains correct status", () => {
        const component = create(<ProfileStatus status="Hello Max"/>);
        const instance = component.root;
        const span = instance.findByType("span");
        expect(span.children[0]).toBe("Hello Max");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Hello Max"/>);
        const instance = component.root;
        const span = instance.findByType("span");
        span.props.onDoubleClick()
        const input = instance.findByType("input");
        expect(input.props.value).toBe("Hello Max");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="Hello Max" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    });
});