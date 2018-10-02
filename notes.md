# lecture notes

## day one

### 1

- declarative code removes variable of time, imperative doesn't
  - react: ui is just a function of state
  - e.g. old cars had knobs to cool/heat, newer cars allow you to set temperature directly
- unix philosophy is to do one thing and do it well but also to share a common interface (e.g. pass a string, return a string) -> is react & rails a potential problem?
- why children in solution rather than explicitly passing title variable

### 2

- HOCs
  - function returns class that wraps component `function higherOrderComp() { return class App extends Component { ... } }`
  - composition happens at definition time (static): e.g. `export default withThing(withOtherThing(App))`
  - harmful things about mixins and HOCs: implicit dependencies and namespace collisions
  - most useful when doing static analysis
- render props
  - best for dynamic composition (using ternaries)
  - look ugly but more composable
- combine the two
- `hoistStatics` from `hoist-static-props`

### 3

- in other frameworks that use string templates (e.g. ember), it's harder to compose
- "compound components" (`React.cloneElement`) is great for nesting components that would not exist outside of that context (e.g. tables, grid, etc); use render prop instead if the app needs to know what's going on (explicit)
- `React.Children.map` is similar to `this.props.children.map` but you don't have to provide keys
  - `React.Children.count()` tells you how many
  - `.forEach`
  - `.toArray()`
- if parent needs to use child as data (e.g. dropdown needing children as label on the initial render) can't use context API

### 05 wia-aria

- best practices
  - when page changes, focus should move (most react routers don't do this by default)
  - use this for reference: https://www.w3.org/WAI/
  - https://webaim.org/ does a11y audits
- `tabIndex='-1'` (or any number below 0) removes element from tabbable list
- `onKeyDown` when checking for enter key, `onKeyUp` when space bar
- screen readers - NVDA for Firefox is free, Jaws (sp?) for Edge costs about $1000, and something for Safari that isn't often used
- buttons that are dropdowns needs to be given a role of listbox (`aria-haspopup` as well)
- generating unique ids will make server rendering not work right, use idx to create ids
- recap: focus management, keyboard interaction, aria roles

### 06 get snapshot before update

- diff the dom, helpful in this case in a `componentDidUpdate` check for managing focus or another DOM API that React doesn't render to
- similar to `componentWillUpdate`, but one would have to assign to the component instance previously which is harder for react to track and concurrently render

### 07 getDerivedStateFromProps

- switched from `componentWillReceiveProps` because react is unable to reliably replay state changes, but `static` method of gDSFP allows that
- instead of doing this, one could just add a key based on id (e.g. contact id for lecture example), and react knows that if the key changes the component has changed
- ryan has only needed it for
