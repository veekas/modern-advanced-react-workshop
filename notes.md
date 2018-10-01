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
