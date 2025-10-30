type Product = {
  id: number
  title: string
  price: number
}

type DiscountedProduct = Product & {
  discountValue?: number
  dateOfEnd?: string
}

const item: DiscountedProduct = {
  id: 102,
  title: "Milk",
  price: 2000,
  discountValue: 2,
  dateOfEnd: "23.09.2025"
}