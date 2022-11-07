1....The AuthContext provides the implementation for authenticating users. A typical caller instantiates this class and starts the login process. The caller then obtains an array of Callback objects, which contains the information required by the authentication plug-in module. The caller requests information from the user....

2..Context-API is not designed for often refreshed or changed data. • There could be more difficult maintenance in more complex frontend applications, especially if we have custom solutions and helpers and for changes which happing per seconds for that react context is not optimized for high frequency changes and solution for that is using a tool called Redux

3..Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.

Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions

4..The rules hook rules are\

1. Only call Hooks at the top level

Do not call Hooks inside loops, conditions, or nested functions. Hooks should always be used at the top level of the React functions. This rule ensures that Hooks are called in the same order each time a components renders.







2.. only call hooks from react functions
You cannot call Hooks from regular JavaScript functions. Instead, you can call Hooks from React function components. Hooks can also be called from custom Hooks.

3..Hooks cannot be conditional and 

4,..Extra rule for useEffect : always add everthing you refer to inside of useEffect() as a dependency
