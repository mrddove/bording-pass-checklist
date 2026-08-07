import type { ReactNode } from 'react'
import type { BoardingChecklist } from '../assets/data'

export type ChecklistContextType = {
  checkList: BoardingChecklist[]
  addCheckList: (item: BoardingChecklist) => void
  handleToggleComplete: (id: string) => void
  handleDelete: (id: string) => void
  handleClearList: () => void
}

export type ChecklistProviderType = {
  children: ReactNode
}
