# Project Title 
# ReactJS-CallbakHook

A callback hook typically refers to the useCallback hook. useCallback is a React hook that returns a memoized callback function. It's useful for optimizing performance by ensuring that a function reference does not change unless its dependencies change. This is particularly beneficial in scenarios where you pass callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

#Parameters

callback: The function you want to memoize.
dependencies: An array of dependencies. The callback is recomputed only when one of the dependencies has changed.

#When to Use useCallback:

Performance Optimization: If you pass a function as a prop to a child component and that child component uses React.memo for performance optimization, using useCallback helps to ensure that the child component only re-renders when it truly needs to.
Stable References: When you need stable function references for other hooks or third-party libraries that depend on callback functions.
