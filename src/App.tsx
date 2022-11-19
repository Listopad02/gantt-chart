import React from 'react';
import Tree  from "./components/Tree/Tree"

function App() {
  const treeFiles: any =
    [
        {
            name: 'hello',
            sub: [
                {
                    name: 'hello'
                },
                {
                  name: 'hello',
                  sub: [
                      {
                          name: 'hello'
                      }
                  ]
                }
            ]
        }
    ]

  return (
    <div className="App">
        <Tree data={treeFiles} />
    </div>
  );
}

export default App;
