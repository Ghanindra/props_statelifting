******React Props & State Lifting Practice*********

This project contains small React practice examples to understand props, state lifting, and component-based thinking.

***What I Learned*****

- How to pass data and functions using props

- Why state should live in the parent when multiple components need it

- How children communicate with parent using callback functions

- Difference between local state and shared (lifted) state

- How to handle controlled inputs correctly

- When to update parent state:

- during typing (live update)

- on button click (submit-based update)

***Concepts Practiced*****

- Props

- State lifting

- List rendering

- Controlled inputs

- Component responsibility separation

****Practice Examples*****

-  Counter (state lifting)

- Color Picker & Display

-  Box with Text Preview

************React Hooks Learning – useEffect, useMemo, React.memo, useCallback***
***What I Learned*****
1. useEffect

Handles side effects in functional components.

Runs after render.

Can have a dependency array to control when it runs.

Can return a cleanup function to run on unmount or before next effect.

Useful for:

Fetching API data

Setting intervals or timeouts

Subscribing/unsubscribing events

2. useMemo

Memoizes a computed value.

Avoids recalculating expensive computations on every render.

Runs only when dependencies change.

Helps improve performance for heavy calculations.

3. React.memo

Memoizes a component.

Prevents unnecessary re-render when props do not change.

Useful for child components in parent re-renders.

4. useCallback
Prevents function recreation on every render.

Often used with React.memo to prevent unnecessary child re-render.

Helps performance in components that pass functions as props.

***What I Practiced*****

*** useEffect****

- Created a clock with setInterval inside useEffect.

- Added cleanup to stop the interval on unmount.

- Dynamic interval example: interval speed controlled by input state.

***useMemo****

- Calculated factorial of a number using useMemo.

- Typing in another input field did not trigger recalculation.

**** React.memo***

- Memoized a child component.

- Child re-rendered only when its props changed, not on parent state changes.

***useCallback*****

- Passed a memoized function to a React.memo child.

- Prevented child from re-rendering unnecessarily when parent state changed

