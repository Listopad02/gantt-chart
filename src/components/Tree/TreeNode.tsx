import { FC, useState } from 'react'
import Tree from './Tree'

const TreeNode:FC<any> = ({node}: any) => {
    const [hide, setHide] = useState(false)

  return (
    <>
        <li onClick={() => setHide(p => !p)}>{node.name}</li>
            {
        node.sub && hide && 
            <Tree data={node.sub} />
        } 
    </>
  )
}

export default TreeNode