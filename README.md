# Unexpected Re-render in React's useEffect Hook

This repository demonstrates a subtle bug related to React's `useEffect` hook and its empty dependency array.  While an empty dependency array (`[]`) is typically used to ensure an effect runs only once on mount, it can lead to unexpected re-renders if the effect references variables that change after the initial render. The example demonstrates this issue and provides a solution.

## Bug
The `bug.js` file contains a component with a `useEffect` hook that logs 'Mounted!' upon initial render. However, if you add a state variable and use it inside the effect's body, the effect may re-run unexpectedly even with an empty dependency array if the state variable changes.

## Solution
The `bugSolution.js` demonstrates a solution which properly handles the dependencies to prevent the unexpected re-render.