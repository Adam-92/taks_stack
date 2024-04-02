import { useCallback, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { defaultParams } from "../../api/getTags"
import { DefaultParams } from "../../types/types"

export const useTable = () => {
  
  const [searchParams, setSearchParams ] = useSearchParams()

  const params: DefaultParams = useMemo(
    () => ({   
      ...defaultParams,
      order: searchParams.get('order') ?? "",
      page: searchParams.get('page') ?? "1",
      pagesize: searchParams.get('pagesize')  ??  ""
   }),
    [searchParams],
  ); 
  
  const newRowsNumber = useCallback((value: string) => setSearchParams({
    ...params,
    pagesize: value
  }),[params, setSearchParams])


  const onChangePage = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
    setSearchParams({
      ...params,
      page: page.toString()
    })
  },[params, setSearchParams])


  const changeOrder = useCallback(() => {
    const paramOrder = searchParams.get('order')
    if(paramOrder === "asc"){
      setSearchParams({
        ...params,
        order: "desc"
      })
    }else {
      setSearchParams({
        ...params,
        order: "asc"
      })
    }
  },[params, searchParams, setSearchParams])

    
  return { params, changeOrder, newRowsNumber, onChangePage }
}
