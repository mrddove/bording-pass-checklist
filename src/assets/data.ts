export type BoardingChecklist = {
  id: string
  quantity: number
  name: string
  isPacked: false
}

export default [
  {
    id: 'item-001',
    quantity: 2,
    name: 'Passports',
    isPacked: false,
  },
  {
    id: 'item-002',
    quantity: 12,
    name: 'Socks',
    isPacked: false,
  },
  {
    id: 'item-003',
    quantity: 1,
    name: 'Toothbrush',
    isPacked: false,
  },
  {
    id: 'item-004',
    quantity: 2,
    name: 'Boarding passes',
    isPacked: true,
  },
] as BoardingChecklist[]
