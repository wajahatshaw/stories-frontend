export interface BookListProps {
  name: string;
  writtenBy: string;
  publishedOn: string;
}

export interface FirebaseAuthError extends Error {
  code: string
  message: string
}

export interface ICard {
  id?: string
  cardBrand?: string
  last4?: string
  expMonth?: string
  expYear?: string
  cardholderName?: string | null
  fingerprint?: string
  customerId?: string | null
  merchantId?: string
  referenceId?: string | null
  enabled?: boolean
  cardType?: string
  prepaidType?: string
  bin?: string
  version?: bigint
  cardCoBrand?: string
  default: boolean
}