import React from "react";
import {
    render,
    unmountComponentAtNode
} from "react-dom";
import {
    act
} from "react-dom/test-utils";
import Categories from "./../components/Categories";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders user data", async () => {
    const fakeJokeCategories = {
        one: "animal",
        two: "career",
        three: "dev"
    };

    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeJokeCategories)
        })
    );

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        render( < Categories / > , container);
    });

    expect(container.querySelector("summary").textContent).toBe(fakeJokeCategories.one);
    expect(container.querySelector("strong").textContent).toBe(fakeJokeCategories.two);
    expect(container.textContent).toContain(fakeJokeCategories.three);

    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
});