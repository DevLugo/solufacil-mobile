import { gql } from '@apollo/client';

export const locationFields = gql`
  fragment locationFields on Location {
    id
    name
    municipalityId
    state{
      name
    }
    municipality{
      name 
    }
  }
`;

export const addressFields = gql`
  fragment addressFields on Address {
      street
      exteriorNumber
      interiorNumber
      postalCode
      location{
        ...locationFields
      }
      locationId
      references
  }
  ${locationFields}
`;


export const personalDataFields = gql`
  fragment personalDataFields on PersonalData {
    fullName
    firstName
    lastName
    addresses{
      ...addressFields
    }
    phones{
      number
    }
  }
  ${addressFields}
  `
;

export const userFields = gql`
  fragment userFields on User {
    id
    email
    lastLogin
    createdAt
    updatedAt
    employee{
      personalData{
        ...personalDataFields
      }
    }
  }
${personalDataFields}
`;

export const borrowerFields = gql`
  fragment borrowerFields on Borrower {
    id
   	personalData{
      ...personalDataFields
    }
  }
${personalDataFields}
  `;

export const loanTypesFields = gql`
  fragment loanTypesFields on Loantype {
    id
    name
    weekDuration
    rate
    overdueRate
    createdAt
    updatedAt
  }
`;
export const employeeFields = gql`
  fragment employeeFields on Employee {
    id
    user{
      ...userFields
    }
  }
  ${userFields}
`;
export const commentFields = gql`
  fragment commentFields on Comment {
    id
    text
  }
`;
export const loanPaymentFields = gql`
  fragment loanPaymentFields on LoanPayment {
    id
    amount
    date
    comments{
      ...commentFields
    }
    employee{
      id
      user{
        ...userFields
      }
    }
    updatedAt
    createdAt
  }
  ${userFields}
  ${commentFields}
`;
export const loanFields = gql`
  fragment loanFields on Loan {
    id
    status
    payments{
      ...loanPaymentFields
    }
    weeklyPaymentAmount
    amountToPay
    pendingAmount
    employee{
      ...employeeFields
    }
    totalPaidAmount
    paymentSchedule{
      id
    }
    updatedAt
    createdAt
  }
  ${employeeFields}
  ${loanPaymentFields}
`;
