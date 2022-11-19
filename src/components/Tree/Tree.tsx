import { FC, useEffect, useState } from 'react'
import TreeNode from './TreeNode';



const Tree:FC<any> = ({data}: any) => {

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //           const res: any = await fetch("http://82.202.204.94/tmp/test.php", {
    //             method: 'GET',
    //             mode: 'no-cors'        
    //           })
    //           setTreeFiles(res);
    //         } catch (error) {
    //           console.log(error);
    //         }
    //     }

    //     fetchData()
    // }, [])

    
    
    return (
        <ul>
            {
                data.map((node: any) => (
                    <TreeNode node={node} />
                ))
            }
        </ul>
    )
}

export default Tree