import type { ReactNode } from 'react'
import type { BoardingChecklist } from '../assets/data'

export type ChecklistContextType = {
  sortBy: string
  checkList: BoardingChecklist[]
  addCheckList: (item: BoardingChecklist) => void
  handleToggleComplete: (id: string) => void
  handleDelete: (id: string) => void
  handleClearList: () => void
  handleSortList: (value: string) => void
}

export type ChecklistProviderType = {
  children: ReactNode
}
