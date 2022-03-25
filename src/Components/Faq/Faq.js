import React from "react";

const Faq = () => {
  return (
    <div>
      <h1 className="text-danger">How React Works?</h1>
      <h6>
        Answer: ReactJS is an open-source, component-based front-end library
        that is only responsible for the application's view layer. It takes a
        declarative development model that makes it simple to reason about the
        application while still concentrating on flexibility and efficiency. It
        builds basic views for each state in the project and reacts to data
        changes by updating and rendering the appropriate component.
      </h6>
      <h1 className="text-danger">How useState() Works?</h1>
      <h6>
        Answer: The useState hook is a one-of-a-kind function that accepts the
        starting state as an input and returns a two-element array. The original
        state is the first element, and the function used to update the state is
        the second. If the initial state must be calculated, we can also supply
        a function as an argument. The initial state will be set to the value
        returned by the function.
      </h6>
    </div>
  );
};

export default Faq;
