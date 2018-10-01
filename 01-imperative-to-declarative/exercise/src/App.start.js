/*

Instructions:

Goal: Update the document title to say "Todos (todos.length)" as the data changes.

- Make a `<DocumentTitle/>` component
- Pass it a prop with the string for the title
- Use lifecycle hooks to keep it up to date with the data

Tips:

- You'll need two lifecycle hooks
- You'll need string interpolation `it looks ${like} this`
- the DOM API to update the title is `document.title = "some string"`

*/

import React, { Component, Fragment } from "react";

class DocumentTitle extends Component {
  render() {
    document.title = this.props.children;
    return null;
  }
}

// class DocumentTitle extends Component {
//   componentDidMount() {
//     this.updateDocumentTitle();
//   }

//   componentDidUpdate() {
//     this.updateDocumentTitle();
//   }

//   updateDocumentTitle() {
//     // const { incomplete } = this.props;
//     // document.title = `Todos(${incomplete})`;
//     document.title = this.props.children;
//   }

//   render() {
//     return null;
//   }
// }

class App extends Component {1
  state = {
    completed: 0,
    todos: ["Wake up", "Eat a taco", "Avoid twitter"]
  };

  render() {
    let { todos, completed } = this.state;
    let incomplete = todos.length - completed;

    return (
      <Fragment>
        {/*<DocumentTitle incomplete={incomplete} />*/}
        {/*<DocumentTitle>{`Todos(${incomplete}`}<div /></DocumentTitle>*/}
        <DocumentTitle>{`Todos(${incomplete})`}</DocumentTitle>
        <div className="app">
          <h1>Todos ({incomplete})</h1>

          <form
            onSubmit={event => {
              let todo = event.target.elements[0].value;
              event.preventDefault();
              event.target.reset();
              this.setState(state => {
                return { todos: state.todos.concat([todo]) };
              });
            }}
          >
            <input type="text" /> <button type="submit">Add</button>
          </form>

          <ul>
            {todos.map(todo => (
              <li>
                <label>
                  <input
                    type="checkbox"
                    onChange={event => {
                      let checked = event.target.checked;
                      this.setState(state => {
                        return {
                          completed: checked
                            ? state.completed + 1
                            : state.completed - 1
                        };
                      });
                    }}
                  />{" "}
                  {todo}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default App;
