import { createContext, useContext, useState } from 'react'
import checkListData, { type BoardingChecklist } from '../assets/data'
import type {
  ChecklistContextType,
  ChecklistProviderType,
} from './contextTypes'

const ChecklistContext = createContext<ChecklistContextType | null>(null)

function ChecklistProvider({ children }: ChecklistProviderType) {
  const [checkList, setCheckList] = useState<BoardingChecklist[]>(checkListData)

  function addCheckList(newCheckList: BoardingChecklist) {
    setCheckList((prevCheckList) => [...prevCheckList, newCheckList])
  }

  function handleToggleComplete(id: string) {
    setCheckList((prevCheckList) =>
      prevCheckList.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item,
      ),
    )
  }

  return (
    <ChecklistContext.Provider
      value={{
        checkList,
        addCheckList,
        handleToggleComplete,
      }}
    >
      {children}
    </ChecklistContext.Provider>
  )
}

function useCheckList() {
  const context = useContext(ChecklistContext)
  if (!context) {
    throw new Error('useCheckList must be used within a ChecklistProvider')
  }
  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { ChecklistProvider, useCheckList }
