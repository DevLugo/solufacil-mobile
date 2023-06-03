import { gql } from "@apollo/client";
import { borrowerFields, loanTypesFields, userFields } from "../fragments";

export const SCHEDULED_PAYMENTS = gql`
query payments_schedule(
  $where: PaymentScheduleWhereInput!
){
  paymentSchedulesWhere(where: $where){
    id
    numeration
    dueDate
    amountToPay
    pendingAmount
    status
    borrower{
      ...borrowerFields
    }
    loan{
      id
      loanType{
        ...loanTypesFields
      }
    }
  }
}
${loanTypesFields},
${borrowerFields}
`