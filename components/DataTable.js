/*
NAME: DataTable
DESCRIPTION:
*/

import { useContext, useEffect } from 'react'
import { Context } from '../context/store'
import DataLoader from './DataLoader'

export default function DataTable({page}) {

  const [ store, dispatch ] = useContext(Context)

  useEffect(() => {
    console.log(store)
  }, [store])


    return (
        <>
            <DataLoader />
            <ul className="data-list">
            {store.data.map((item, i) => {
                const key = item.id || `item--${i}`
                let data = null
                if(page==='home') data = item.title
                else if(page==='new') data = item.asset_id
            
                return(
                    <li key={key} className="data-list__item">{data}</li>
                )
            })}
            </ul>
        </>
    )
}
