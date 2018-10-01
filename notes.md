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
