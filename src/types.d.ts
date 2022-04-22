type Transaction = {
  id: number,
  transaction_name: string,
  amount: string,
  category: string,
  transaction_vendor: string
}

type IFilterData = {
  categories: Array<String>,
  vendors: Array<String>,
  price?: [number, number]
}
