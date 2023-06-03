/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CommissionGoalType {
  NEW_LOAN = "NEW_LOAN",
  PAYMENT_RECEIVED = "PAYMENT_RECEIVED",
}

export enum CommissionPaymentStatus {
  PAID_OUT = "PAID_OUT",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export enum CommissionType {
  FIXED_AMOUNT = "FIXED_AMOUNT",
  PERCENTAGE = "PERCENTAGE",
}

export enum DocumentType {
  ADDRESS_PROFF = "ADDRESS_PROFF",
  BANC_ACCOUNT = "BANC_ACCOUNT",
  CONTRACT_EVIDENCE = "CONTRACT_EVIDENCE",
  CREDIT_BUREAU = "CREDIT_BUREAU",
  DNI = "DNI",
  DRIVER_LICENCE = "DRIVER_LICENCE",
  JOB_APPLICATION = "JOB_APPLICATION",
  LETTER_NO_CRIMINAL_RECORD = "LETTER_NO_CRIMINAL_RECORD",
  NSS = "NSS",
  RFC = "RFC",
  SHOP_PHOTO = "SHOP_PHOTO",
}

export enum EmployeesTypes {
  LIAISON_EXECUTIVE = "LIAISON_EXECUTIVE",
  LOAN_LEAD = "LOAN_LEAD",
}

export enum LeadPaymentTypes {
  COMPENSATORY_PENDING_MONEY = "COMPENSATORY_PENDING_MONEY",
  PENDING_MONEY = "PENDING_MONEY",
}

export enum LoanState {
  APPROVED = "APPROVED",
  IN_REVIEW = "IN_REVIEW",
  PAID_OUT = "PAID_OUT",
  POSTPONED = "POSTPONED",
  REJECTED = "REJECTED",
  REQUESTED = "REQUESTED",
}

export enum PaymentState {
  PAID_OUT = "PAID_OUT",
  PARTIALLY_PAID = "PARTIALLY_PAID",
  PENDING = "PENDING",
}

export enum QueryMode {
  default = "default",
  insensitive = "insensitive",
}

export interface AddressCreateManyLocalInput {
  id?: string | null;
  street: string;
  exteriorNumber?: string | null;
  interiorNumber: string;
  postalCode: string;
  references?: string | null;
  locationId: string;
  personalDataId?: string | null;
}

export interface AddressCreateManyLocalInputEnvelope {
  data: AddressCreateManyLocalInput[];
  skipDuplicates?: boolean | null;
}

export interface AddressCreateManyLocationInput {
  id?: string | null;
  street: string;
  exteriorNumber?: string | null;
  interiorNumber: string;
  postalCode: string;
  references?: string | null;
  localId?: string | null;
  personalDataId?: string | null;
}

export interface AddressCreateManyLocationInputEnvelope {
  data: AddressCreateManyLocationInput[];
  skipDuplicates?: boolean | null;
}

export interface AddressCreateManyPersonalDataInput {
  id?: string | null;
  street: string;
  exteriorNumber?: string | null;
  interiorNumber: string;
  postalCode: string;
  references?: string | null;
  locationId: string;
  localId?: string | null;
}

export interface AddressCreateManyPersonalDataInputEnvelope {
  data: AddressCreateManyPersonalDataInput[];
  skipDuplicates?: boolean | null;
}

export interface AddressCreateNestedManyWithoutLocalInput {
  create?: AddressCreateWithoutLocalInput[] | null;
  connectOrCreate?: AddressCreateOrConnectWithoutLocalInput[] | null;
  createMany?: AddressCreateManyLocalInputEnvelope | null;
  connect?: AddressWhereUniqueInput[] | null;
}

export interface AddressCreateNestedManyWithoutLocationInput {
  create?: AddressCreateWithoutLocationInput[] | null;
  connectOrCreate?: AddressCreateOrConnectWithoutLocationInput[] | null;
  createMany?: AddressCreateManyLocationInputEnvelope | null;
  connect?: AddressWhereUniqueInput[] | null;
}

export interface AddressCreateNestedManyWithoutPersonalDataInput {
  create?: AddressCreateWithoutPersonalDataInput[] | null;
  connectOrCreate?: AddressCreateOrConnectWithoutPersonalDataInput[] | null;
  createMany?: AddressCreateManyPersonalDataInputEnvelope | null;
  connect?: AddressWhereUniqueInput[] | null;
}

export interface AddressCreateOrConnectWithoutLocalInput {
  where: AddressWhereUniqueInput;
  create: AddressCreateWithoutLocalInput;
}

export interface AddressCreateOrConnectWithoutLocationInput {
  where: AddressWhereUniqueInput;
  create: AddressCreateWithoutLocationInput;
}

export interface AddressCreateOrConnectWithoutPersonalDataInput {
  where: AddressWhereUniqueInput;
  create: AddressCreateWithoutPersonalDataInput;
}

export interface AddressCreateWithoutLocalInput {
  id?: string | null;
  street: string;
  exteriorNumber?: string | null;
  interiorNumber: string;
  postalCode: string;
  references?: string | null;
  location: LocationCreateNestedOneWithoutAddressInput;
  personalData?: PersonalDataCreateNestedOneWithoutAddressesInput | null;
}

export interface AddressCreateWithoutLocationInput {
  id?: string | null;
  street: string;
  exteriorNumber?: string | null;
  interiorNumber: string;
  postalCode: string;
  references?: string | null;
  local?: LocalCreateNestedOneWithoutAddressesInput | null;
  personalData?: PersonalDataCreateNestedOneWithoutAddressesInput | null;
}

export interface AddressCreateWithoutPersonalDataInput {
  id?: string | null;
  street: string;
  exteriorNumber?: string | null;
  interiorNumber: string;
  postalCode: string;
  references?: string | null;
  location: LocationCreateNestedOneWithoutAddressInput;
  local?: LocalCreateNestedOneWithoutAddressesInput | null;
}

export interface AddressListRelationFilter {
  every?: AddressWhereInput | null;
  some?: AddressWhereInput | null;
  none?: AddressWhereInput | null;
}

export interface AddressWhereInput {
  AND?: AddressWhereInput[] | null;
  OR?: AddressWhereInput[] | null;
  NOT?: AddressWhereInput[] | null;
  id?: StringFilter | null;
  street?: StringFilter | null;
  exteriorNumber?: StringNullableFilter | null;
  interiorNumber?: StringFilter | null;
  postalCode?: StringFilter | null;
  references?: StringNullableFilter | null;
  location?: LocationRelationFilter | null;
  locationId?: StringFilter | null;
  local?: LocalRelationFilter | null;
  localId?: StringNullableFilter | null;
  personalData?: PersonalDataRelationFilter | null;
  personalDataId?: StringNullableFilter | null;
}

export interface AddressWhereUniqueInput {
  id?: string | null;
}

export interface BoolFilter {
  equals?: boolean | null;
  not?: NestedBoolFilter | null;
}

export interface BorrowerCreateManyEmployeeInput {
  email?: any | null;
  loanFinishedCount?: number | null;
  personalDataId: string;
}

export interface BorrowerCreateManyEmployeeInputEnvelope {
  data: BorrowerCreateManyEmployeeInput[];
  skipDuplicates?: boolean | null;
}

export interface BorrowerCreateManyPersonalDataInput {
  email?: any | null;
  loanFinishedCount?: number | null;
  employeeId?: string | null;
}

export interface BorrowerCreateManyPersonalDataInputEnvelope {
  data: BorrowerCreateManyPersonalDataInput[];
  skipDuplicates?: boolean | null;
}

export interface BorrowerCreateNestedManyWithoutEmployeeInput {
  create?: BorrowerCreateWithoutEmployeeInput[] | null;
  connectOrCreate?: BorrowerCreateOrConnectWithoutEmployeeInput[] | null;
  createMany?: BorrowerCreateManyEmployeeInputEnvelope | null;
  connect?: BorrowerWhereUniqueInput[] | null;
}

export interface BorrowerCreateNestedManyWithoutPersonalDataInput {
  create?: BorrowerCreateWithoutPersonalDataInput[] | null;
  connectOrCreate?: BorrowerCreateOrConnectWithoutPersonalDataInput[] | null;
  createMany?: BorrowerCreateManyPersonalDataInputEnvelope | null;
  connect?: BorrowerWhereUniqueInput[] | null;
}

export interface BorrowerCreateNestedOneWithoutContractInput {
  create?: BorrowerCreateWithoutContractInput | null;
  connectOrCreate?: BorrowerCreateOrConnectWithoutContractInput | null;
  connect?: BorrowerWhereUniqueInput | null;
}

export interface BorrowerCreateNestedOneWithoutDocumentsInput {
  create?: BorrowerCreateWithoutDocumentsInput | null;
  connectOrCreate?: BorrowerCreateOrConnectWithoutDocumentsInput | null;
  connect?: BorrowerWhereUniqueInput | null;
}

export interface BorrowerCreateNestedOneWithoutLocalInput {
  create?: BorrowerCreateWithoutLocalInput | null;
  connectOrCreate?: BorrowerCreateOrConnectWithoutLocalInput | null;
  connect?: BorrowerWhereUniqueInput | null;
}

export interface BorrowerCreateOrConnectWithoutContractInput {
  where: BorrowerWhereUniqueInput;
  create: BorrowerCreateWithoutContractInput;
}

export interface BorrowerCreateOrConnectWithoutDocumentsInput {
  where: BorrowerWhereUniqueInput;
  create: BorrowerCreateWithoutDocumentsInput;
}

export interface BorrowerCreateOrConnectWithoutEmployeeInput {
  where: BorrowerWhereUniqueInput;
  create: BorrowerCreateWithoutEmployeeInput;
}

export interface BorrowerCreateOrConnectWithoutLocalInput {
  where: BorrowerWhereUniqueInput;
  create: BorrowerCreateWithoutLocalInput;
}

export interface BorrowerCreateOrConnectWithoutPersonalDataInput {
  where: BorrowerWhereUniqueInput;
  create: BorrowerCreateWithoutPersonalDataInput;
}

export interface BorrowerCreateWithoutContractInput {
  email?: any | null;
  documents?: DocumentCreateNestedManyWithoutBorrowerInput | null;
  personalData: PersonalDataCreateNestedOneWithoutBorrowerInput;
  loanFinishedCount?: number | null;
  local?: LocalCreateNestedManyWithoutBorrowerInput | null;
  employee?: EmployeeCreateNestedOneWithoutBorrowerInput | null;
}

export interface BorrowerCreateWithoutDocumentsInput {
  email?: any | null;
  personalData: PersonalDataCreateNestedOneWithoutBorrowerInput;
  contract?: ContractCreateNestedManyWithoutBorrowerInput | null;
  loanFinishedCount?: number | null;
  local?: LocalCreateNestedManyWithoutBorrowerInput | null;
  employee?: EmployeeCreateNestedOneWithoutBorrowerInput | null;
}

export interface BorrowerCreateWithoutEmployeeInput {
  email?: any | null;
  documents?: DocumentCreateNestedManyWithoutBorrowerInput | null;
  personalData: PersonalDataCreateNestedOneWithoutBorrowerInput;
  contract?: ContractCreateNestedManyWithoutBorrowerInput | null;
  loanFinishedCount?: number | null;
  local?: LocalCreateNestedManyWithoutBorrowerInput | null;
}

export interface BorrowerCreateWithoutLocalInput {
  email?: any | null;
  documents?: DocumentCreateNestedManyWithoutBorrowerInput | null;
  personalData: PersonalDataCreateNestedOneWithoutBorrowerInput;
  contract?: ContractCreateNestedManyWithoutBorrowerInput | null;
  loanFinishedCount?: number | null;
  employee?: EmployeeCreateNestedOneWithoutBorrowerInput | null;
}

export interface BorrowerCreateWithoutPersonalDataInput {
  email?: any | null;
  documents?: DocumentCreateNestedManyWithoutBorrowerInput | null;
  contract?: ContractCreateNestedManyWithoutBorrowerInput | null;
  loanFinishedCount?: number | null;
  local?: LocalCreateNestedManyWithoutBorrowerInput | null;
  employee?: EmployeeCreateNestedOneWithoutBorrowerInput | null;
}

export interface BorrowerListRelationFilter {
  every?: BorrowerWhereInput | null;
  some?: BorrowerWhereInput | null;
  none?: BorrowerWhereInput | null;
}

export interface BorrowerRelationFilter {
  is?: BorrowerWhereInput | null;
  isNot?: BorrowerWhereInput | null;
}

export interface BorrowerWhereInput {
  AND?: BorrowerWhereInput[] | null;
  OR?: BorrowerWhereInput[] | null;
  NOT?: BorrowerWhereInput[] | null;
  id?: StringFilter | null;
  email?: StringNullableFilter | null;
  documents?: DocumentListRelationFilter | null;
  personalData?: PersonalDataRelationFilter | null;
  contract?: ContractListRelationFilter | null;
  loanFinishedCount?: IntFilter | null;
  local?: LocalListRelationFilter | null;
  employee?: EmployeeRelationFilter | null;
  personalDataId?: StringFilter | null;
  employeeId?: StringNullableFilter | null;
}

export interface BorrowerWhereUniqueInput {
  id?: string | null;
  email?: any | null;
}

export interface ComissionPaymentConfigurationCreateManyLeadIdInput {
  id?: string | null;
  employeeType: EmployeesTypes;
  loantypeId: string;
  commissionGoalType: CommissionGoalType;
  commissionType: CommissionType;
  amount: any;
}

export interface ComissionPaymentConfigurationCreateManyLeadIdInputEnvelope {
  data: ComissionPaymentConfigurationCreateManyLeadIdInput[];
  skipDuplicates?: boolean | null;
}

export interface ComissionPaymentConfigurationCreateManyLoanTypeInput {
  id?: string | null;
  employeeType: EmployeesTypes;
  commissionGoalType: CommissionGoalType;
  commissionType: CommissionType;
  amount: any;
  employeeId?: string | null;
}

export interface ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope {
  data: ComissionPaymentConfigurationCreateManyLoanTypeInput[];
  skipDuplicates?: boolean | null;
}

export interface ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput {
  create?: ComissionPaymentConfigurationCreateWithoutLeadIdInput[] | null;
  connectOrCreate?: ComissionPaymentConfigurationCreateOrConnectWithoutLeadIdInput[] | null;
  createMany?: ComissionPaymentConfigurationCreateManyLeadIdInputEnvelope | null;
  connect?: ComissionPaymentConfigurationWhereUniqueInput[] | null;
}

export interface ComissionPaymentConfigurationCreateNestedManyWithoutLoanTypeInput {
  create?: ComissionPaymentConfigurationCreateWithoutLoanTypeInput[] | null;
  connectOrCreate?: ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput[] | null;
  createMany?: ComissionPaymentConfigurationCreateManyLoanTypeInputEnvelope | null;
  connect?: ComissionPaymentConfigurationWhereUniqueInput[] | null;
}

export interface ComissionPaymentConfigurationCreateOrConnectWithoutLeadIdInput {
  where: ComissionPaymentConfigurationWhereUniqueInput;
  create: ComissionPaymentConfigurationCreateWithoutLeadIdInput;
}

export interface ComissionPaymentConfigurationCreateOrConnectWithoutLoanTypeInput {
  where: ComissionPaymentConfigurationWhereUniqueInput;
  create: ComissionPaymentConfigurationCreateWithoutLoanTypeInput;
}

export interface ComissionPaymentConfigurationCreateWithoutLeadIdInput {
  id?: string | null;
  employeeType: EmployeesTypes;
  commissionGoalType: CommissionGoalType;
  commissionType: CommissionType;
  amount: any;
  loanType?: LoantypeCreateNestedOneWithoutComissionPaymentConfigurationInput | null;
}

export interface ComissionPaymentConfigurationCreateWithoutLoanTypeInput {
  id?: string | null;
  employeeType: EmployeesTypes;
  commissionGoalType: CommissionGoalType;
  commissionType: CommissionType;
  amount: any;
  leadId?: EmployeeCreateNestedOneWithoutComissionPaymentConfigurationInput | null;
}

export interface ComissionPaymentConfigurationListRelationFilter {
  every?: ComissionPaymentConfigurationWhereInput | null;
  some?: ComissionPaymentConfigurationWhereInput | null;
  none?: ComissionPaymentConfigurationWhereInput | null;
}

export interface ComissionPaymentConfigurationWhereInput {
  AND?: ComissionPaymentConfigurationWhereInput[] | null;
  OR?: ComissionPaymentConfigurationWhereInput[] | null;
  NOT?: ComissionPaymentConfigurationWhereInput[] | null;
  id?: StringFilter | null;
  employeeType?: EnumEmployeesTypesFilter | null;
  loantypeId?: StringFilter | null;
  commissionGoalType?: EnumCommissionGoalTypeFilter | null;
  commissionType?: EnumCommissionTypeFilter | null;
  amount?: DecimalFilter | null;
  loanType?: LoantypeRelationFilter | null;
  leadId?: EmployeeRelationFilter | null;
  employeeId?: StringNullableFilter | null;
}

export interface ComissionPaymentConfigurationWhereUniqueInput {
  id?: string | null;
}

export interface CommentCreateManyCreatedByInput {
  id?: string | null;
  text: string;
  createdById: string;
  loanPaymentId: string;
}

export interface CommentCreateManyCreatedByInputEnvelope {
  data: CommentCreateManyCreatedByInput[];
  skipDuplicates?: boolean | null;
}

export interface CommentCreateManyPaymentInput {
  id?: string | null;
  text: string;
  createdById: string;
  employeeId: string;
}

export interface CommentCreateManyPaymentInputEnvelope {
  data: CommentCreateManyPaymentInput[];
  skipDuplicates?: boolean | null;
}

export interface CommentCreateNestedManyWithoutCreatedByInput {
  create?: CommentCreateWithoutCreatedByInput[] | null;
  connectOrCreate?: CommentCreateOrConnectWithoutCreatedByInput[] | null;
  createMany?: CommentCreateManyCreatedByInputEnvelope | null;
  connect?: CommentWhereUniqueInput[] | null;
}

export interface CommentCreateNestedManyWithoutPaymentInput {
  create?: CommentCreateWithoutPaymentInput[] | null;
  connectOrCreate?: CommentCreateOrConnectWithoutPaymentInput[] | null;
  createMany?: CommentCreateManyPaymentInputEnvelope | null;
  connect?: CommentWhereUniqueInput[] | null;
}

export interface CommentCreateOrConnectWithoutCreatedByInput {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutCreatedByInput;
}

export interface CommentCreateOrConnectWithoutPaymentInput {
  where: CommentWhereUniqueInput;
  create: CommentCreateWithoutPaymentInput;
}

export interface CommentCreateWithoutCreatedByInput {
  id?: string | null;
  text: string;
  createdById: string;
  payment: LoanPaymentCreateNestedOneWithoutCommentsInput;
}

export interface CommentCreateWithoutPaymentInput {
  id?: string | null;
  text: string;
  createdById: string;
}

export interface CommentListRelationFilter {
  every?: CommentWhereInput | null;
  some?: CommentWhereInput | null;
  none?: CommentWhereInput | null;
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | null;
  OR?: CommentWhereInput[] | null;
  NOT?: CommentWhereInput[] | null;
  id?: StringFilter | null;
  text?: StringFilter | null;
  createdById?: StringFilter | null;
  payment?: LoanPaymentRelationFilter | null;
  employeeId?: StringFilter | null;
  loanPaymentId?: StringFilter | null;
}

export interface CommentWhereUniqueInput {
  id?: string | null;
}

export interface CommissionPaymentCreateManyEmployeeInput {
  id?: string | null;
  amount: any;
  loanId?: string | null;
  paymentScheduleId: string;
  status: CommissionPaymentStatus;
}

export interface CommissionPaymentCreateManyEmployeeInputEnvelope {
  data: CommissionPaymentCreateManyEmployeeInput[];
  skipDuplicates?: boolean | null;
}

export interface CommissionPaymentCreateManyLoanInput {
  id?: string | null;
  amount: any;
  paymentScheduleId: string;
  employeeId: string;
  status: CommissionPaymentStatus;
}

export interface CommissionPaymentCreateManyLoanInputEnvelope {
  data: CommissionPaymentCreateManyLoanInput[];
  skipDuplicates?: boolean | null;
}

export interface CommissionPaymentCreateNestedManyWithoutEmployeeInput {
  create?: CommissionPaymentCreateWithoutEmployeeInput[] | null;
  connectOrCreate?: CommissionPaymentCreateOrConnectWithoutEmployeeInput[] | null;
  createMany?: CommissionPaymentCreateManyEmployeeInputEnvelope | null;
  connect?: CommissionPaymentWhereUniqueInput[] | null;
}

export interface CommissionPaymentCreateNestedManyWithoutLoanInput {
  create?: CommissionPaymentCreateWithoutLoanInput[] | null;
  connectOrCreate?: CommissionPaymentCreateOrConnectWithoutLoanInput[] | null;
  createMany?: CommissionPaymentCreateManyLoanInputEnvelope | null;
  connect?: CommissionPaymentWhereUniqueInput[] | null;
}

export interface CommissionPaymentCreateOrConnectWithoutEmployeeInput {
  where: CommissionPaymentWhereUniqueInput;
  create: CommissionPaymentCreateWithoutEmployeeInput;
}

export interface CommissionPaymentCreateOrConnectWithoutLoanInput {
  where: CommissionPaymentWhereUniqueInput;
  create: CommissionPaymentCreateWithoutLoanInput;
}

export interface CommissionPaymentCreateWithoutEmployeeInput {
  id?: string | null;
  amount: any;
  paymentSchedule: PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput;
  loan?: LoanCreateNestedOneWithoutCommissionPaymentInput | null;
  status: CommissionPaymentStatus;
}

export interface CommissionPaymentCreateWithoutLoanInput {
  id?: string | null;
  amount: any;
  paymentSchedule: PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput;
  employee: EmployeeCreateNestedOneWithoutCommissionPaymentInput;
  status: CommissionPaymentStatus;
}

export interface CommissionPaymentListRelationFilter {
  every?: CommissionPaymentWhereInput | null;
  some?: CommissionPaymentWhereInput | null;
  none?: CommissionPaymentWhereInput | null;
}

export interface CommissionPaymentWhereInput {
  AND?: CommissionPaymentWhereInput[] | null;
  OR?: CommissionPaymentWhereInput[] | null;
  NOT?: CommissionPaymentWhereInput[] | null;
  id?: StringFilter | null;
  amount?: DecimalFilter | null;
  paymentSchedule?: PaymentScheduleRelationFilter | null;
  loan?: LoanRelationFilter | null;
  employee?: EmployeeRelationFilter | null;
  loanId?: StringNullableFilter | null;
  paymentScheduleId?: StringFilter | null;
  employeeId?: StringFilter | null;
  status?: EnumCommissionPaymentStatusFilter | null;
}

export interface CommissionPaymentWhereUniqueInput {
  id?: string | null;
}

export interface ContractCreateManyBorrowerInput {
  signDate: any;
  contractTypeId: string;
  loanLeadId?: string | null;
  employeeId: string;
}

export interface ContractCreateManyBorrowerInputEnvelope {
  data: ContractCreateManyBorrowerInput[];
  skipDuplicates?: boolean | null;
}

export interface ContractCreateManyEmployeeInput {
  borrowerId: string;
  signDate: any;
  contractTypeId: string;
  loanLeadId?: string | null;
}

export interface ContractCreateManyEmployeeInputEnvelope {
  data: ContractCreateManyEmployeeInput[];
  skipDuplicates?: boolean | null;
}

export interface ContractCreateManyLoanLeadInput {
  borrowerId: string;
  signDate: any;
  contractTypeId: string;
  employeeId: string;
}

export interface ContractCreateManyLoanLeadInputEnvelope {
  data: ContractCreateManyLoanLeadInput[];
  skipDuplicates?: boolean | null;
}

export interface ContractCreateNestedManyWithoutBorrowerInput {
  create?: ContractCreateWithoutBorrowerInput[] | null;
  connectOrCreate?: ContractCreateOrConnectWithoutBorrowerInput[] | null;
  createMany?: ContractCreateManyBorrowerInputEnvelope | null;
  connect?: ContractWhereUniqueInput[] | null;
}

export interface ContractCreateNestedManyWithoutEmployeeInput {
  create?: ContractCreateWithoutEmployeeInput[] | null;
  connectOrCreate?: ContractCreateOrConnectWithoutEmployeeInput[] | null;
  createMany?: ContractCreateManyEmployeeInputEnvelope | null;
  connect?: ContractWhereUniqueInput[] | null;
}

export interface ContractCreateNestedManyWithoutLoanLeadInput {
  create?: ContractCreateWithoutLoanLeadInput[] | null;
  connectOrCreate?: ContractCreateOrConnectWithoutLoanLeadInput[] | null;
  createMany?: ContractCreateManyLoanLeadInputEnvelope | null;
  connect?: ContractWhereUniqueInput[] | null;
}

export interface ContractCreateNestedOneWithoutDocumentsInput {
  create?: ContractCreateWithoutDocumentsInput | null;
  connectOrCreate?: ContractCreateOrConnectWithoutDocumentsInput | null;
  connect?: ContractWhereUniqueInput | null;
}

export interface ContractCreateNestedOneWithoutLoansInput {
  create?: ContractCreateWithoutLoansInput | null;
  connectOrCreate?: ContractCreateOrConnectWithoutLoansInput | null;
  connect?: ContractWhereUniqueInput | null;
}

export interface ContractCreateOrConnectWithoutBorrowerInput {
  where: ContractWhereUniqueInput;
  create: ContractCreateWithoutBorrowerInput;
}

export interface ContractCreateOrConnectWithoutDocumentsInput {
  where: ContractWhereUniqueInput;
  create: ContractCreateWithoutDocumentsInput;
}

export interface ContractCreateOrConnectWithoutEmployeeInput {
  where: ContractWhereUniqueInput;
  create: ContractCreateWithoutEmployeeInput;
}

export interface ContractCreateOrConnectWithoutLoanLeadInput {
  where: ContractWhereUniqueInput;
  create: ContractCreateWithoutLoanLeadInput;
}

export interface ContractCreateOrConnectWithoutLoansInput {
  where: ContractWhereUniqueInput;
  create: ContractCreateWithoutLoansInput;
}

export interface ContractCreateWithoutBorrowerInput {
  documents?: DocumentCreateNestedManyWithoutContractInput | null;
  signDate: any;
  contractType: ContractTypeCreateNestedOneWithoutContractInput;
  loanLead?: EmployeeCreateNestedOneWithoutContractLoanLeadInput | null;
  employee: EmployeeCreateNestedOneWithoutContractEmployeeInput;
}

export interface ContractCreateWithoutDocumentsInput {
  borrower: BorrowerCreateNestedOneWithoutContractInput;
  signDate: any;
  contractType: ContractTypeCreateNestedOneWithoutContractInput;
  loanLead?: EmployeeCreateNestedOneWithoutContractLoanLeadInput | null;
  employee: EmployeeCreateNestedOneWithoutContractEmployeeInput;
}

export interface ContractCreateWithoutEmployeeInput {
  borrower: BorrowerCreateNestedOneWithoutContractInput;
  documents?: DocumentCreateNestedManyWithoutContractInput | null;
  signDate: any;
  contractType: ContractTypeCreateNestedOneWithoutContractInput;
  loanLead?: EmployeeCreateNestedOneWithoutContractLoanLeadInput | null;
}

export interface ContractCreateWithoutLoanLeadInput {
  borrower: BorrowerCreateNestedOneWithoutContractInput;
  documents?: DocumentCreateNestedManyWithoutContractInput | null;
  signDate: any;
  contractType: ContractTypeCreateNestedOneWithoutContractInput;
  employee: EmployeeCreateNestedOneWithoutContractEmployeeInput;
}

export interface ContractCreateWithoutLoansInput {
  borrower: BorrowerCreateNestedOneWithoutContractInput;
  documents?: DocumentCreateNestedManyWithoutContractInput | null;
  signDate: any;
  contractType: ContractTypeCreateNestedOneWithoutContractInput;
  loanLead?: EmployeeCreateNestedOneWithoutContractLoanLeadInput | null;
  employee: EmployeeCreateNestedOneWithoutContractEmployeeInput;
}

export interface ContractListRelationFilter {
  every?: ContractWhereInput | null;
  some?: ContractWhereInput | null;
  none?: ContractWhereInput | null;
}

export interface ContractRelationFilter {
  is?: ContractWhereInput | null;
  isNot?: ContractWhereInput | null;
}

export interface ContractTypeCreateNestedOneWithoutContractInput {
  create?: ContractTypeCreateWithoutContractInput | null;
  connectOrCreate?: ContractTypeCreateOrConnectWithoutContractInput | null;
  connect?: ContractTypeWhereUniqueInput | null;
}

export interface ContractTypeCreateOrConnectWithoutContractInput {
  where: ContractTypeWhereUniqueInput;
  create: ContractTypeCreateWithoutContractInput;
}

export interface ContractTypeCreateWithoutContractInput {
  name: string;
  monthDuration: number;
  amount: any;
  maxRate: any;
}

export interface ContractTypeRelationFilter {
  is?: ContractTypeWhereInput | null;
  isNot?: ContractTypeWhereInput | null;
}

export interface ContractTypeWhereInput {
  AND?: ContractTypeWhereInput[] | null;
  OR?: ContractTypeWhereInput[] | null;
  NOT?: ContractTypeWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  monthDuration?: IntFilter | null;
  amount?: DecimalFilter | null;
  maxRate?: DecimalFilter | null;
  contract?: ContractListRelationFilter | null;
}

export interface ContractTypeWhereUniqueInput {
  id?: string | null;
}

export interface ContractWhereInput {
  AND?: ContractWhereInput[] | null;
  OR?: ContractWhereInput[] | null;
  NOT?: ContractWhereInput[] | null;
  id?: StringFilter | null;
  borrower?: BorrowerRelationFilter | null;
  borrowerId?: StringFilter | null;
  documents?: DocumentListRelationFilter | null;
  signDate?: DateTimeFilter | null;
  contractType?: ContractTypeRelationFilter | null;
  contractTypeId?: StringFilter | null;
  loanLeadId?: StringNullableFilter | null;
  employeeId?: StringFilter | null;
  loanLead?: EmployeeRelationFilter | null;
  employee?: EmployeeRelationFilter | null;
}

export interface ContractWhereUniqueInput {
  id?: string | null;
}

export interface DateTimeFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeFilter | null;
}

export interface DateTimeNullableFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeNullableFilter | null;
}

export interface DecimalFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDecimalFilter | null;
}

export interface DecimalNullableFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDecimalNullableFilter | null;
}

export interface DocumentCreateManyBorrowerInput {
  id?: string | null;
  type: DocumentType;
  contractId?: string | null;
  employeeId?: string | null;
  personalDataId?: string | null;
  loanId?: string | null;
}

export interface DocumentCreateManyBorrowerInputEnvelope {
  data: DocumentCreateManyBorrowerInput[];
  skipDuplicates?: boolean | null;
}

export interface DocumentCreateManyContractInput {
  id?: string | null;
  type: DocumentType;
  borrowerId?: string | null;
  employeeId?: string | null;
  personalDataId?: string | null;
  loanId?: string | null;
}

export interface DocumentCreateManyContractInputEnvelope {
  data: DocumentCreateManyContractInput[];
  skipDuplicates?: boolean | null;
}

export interface DocumentCreateManyEmployeeInput {
  id?: string | null;
  type: DocumentType;
  borrowerId?: string | null;
  contractId?: string | null;
  personalDataId?: string | null;
  loanId?: string | null;
}

export interface DocumentCreateManyEmployeeInputEnvelope {
  data: DocumentCreateManyEmployeeInput[];
  skipDuplicates?: boolean | null;
}

export interface DocumentCreateManyLoanInput {
  id?: string | null;
  type: DocumentType;
  borrowerId?: string | null;
  contractId?: string | null;
  employeeId?: string | null;
  personalDataId?: string | null;
}

export interface DocumentCreateManyLoanInputEnvelope {
  data: DocumentCreateManyLoanInput[];
  skipDuplicates?: boolean | null;
}

export interface DocumentCreateManyPersonalDataInput {
  id?: string | null;
  type: DocumentType;
  borrowerId?: string | null;
  contractId?: string | null;
  employeeId?: string | null;
  loanId?: string | null;
}

export interface DocumentCreateManyPersonalDataInputEnvelope {
  data: DocumentCreateManyPersonalDataInput[];
  skipDuplicates?: boolean | null;
}

export interface DocumentCreateNestedManyWithoutBorrowerInput {
  create?: DocumentCreateWithoutBorrowerInput[] | null;
  connectOrCreate?: DocumentCreateOrConnectWithoutBorrowerInput[] | null;
  createMany?: DocumentCreateManyBorrowerInputEnvelope | null;
  connect?: DocumentWhereUniqueInput[] | null;
}

export interface DocumentCreateNestedManyWithoutContractInput {
  create?: DocumentCreateWithoutContractInput[] | null;
  connectOrCreate?: DocumentCreateOrConnectWithoutContractInput[] | null;
  createMany?: DocumentCreateManyContractInputEnvelope | null;
  connect?: DocumentWhereUniqueInput[] | null;
}

export interface DocumentCreateNestedManyWithoutEmployeeInput {
  create?: DocumentCreateWithoutEmployeeInput[] | null;
  connectOrCreate?: DocumentCreateOrConnectWithoutEmployeeInput[] | null;
  createMany?: DocumentCreateManyEmployeeInputEnvelope | null;
  connect?: DocumentWhereUniqueInput[] | null;
}

export interface DocumentCreateNestedManyWithoutLoanInput {
  create?: DocumentCreateWithoutLoanInput[] | null;
  connectOrCreate?: DocumentCreateOrConnectWithoutLoanInput[] | null;
  createMany?: DocumentCreateManyLoanInputEnvelope | null;
  connect?: DocumentWhereUniqueInput[] | null;
}

export interface DocumentCreateNestedManyWithoutPersonalDataInput {
  create?: DocumentCreateWithoutPersonalDataInput[] | null;
  connectOrCreate?: DocumentCreateOrConnectWithoutPersonalDataInput[] | null;
  createMany?: DocumentCreateManyPersonalDataInputEnvelope | null;
  connect?: DocumentWhereUniqueInput[] | null;
}

export interface DocumentCreateOrConnectWithoutBorrowerInput {
  where: DocumentWhereUniqueInput;
  create: DocumentCreateWithoutBorrowerInput;
}

export interface DocumentCreateOrConnectWithoutContractInput {
  where: DocumentWhereUniqueInput;
  create: DocumentCreateWithoutContractInput;
}

export interface DocumentCreateOrConnectWithoutEmployeeInput {
  where: DocumentWhereUniqueInput;
  create: DocumentCreateWithoutEmployeeInput;
}

export interface DocumentCreateOrConnectWithoutLoanInput {
  where: DocumentWhereUniqueInput;
  create: DocumentCreateWithoutLoanInput;
}

export interface DocumentCreateOrConnectWithoutPersonalDataInput {
  where: DocumentWhereUniqueInput;
  create: DocumentCreateWithoutPersonalDataInput;
}

export interface DocumentCreateWithoutBorrowerInput {
  id?: string | null;
  type: DocumentType;
  employee?: EmployeeCreateNestedOneWithoutDocumentsInput | null;
  contract?: ContractCreateNestedOneWithoutDocumentsInput | null;
  PersonalData?: PersonalDataCreateNestedOneWithoutDocumentsInput | null;
  Loan?: LoanCreateNestedOneWithoutDocumentsInput | null;
}

export interface DocumentCreateWithoutContractInput {
  id?: string | null;
  type: DocumentType;
  borrower?: BorrowerCreateNestedOneWithoutDocumentsInput | null;
  employee?: EmployeeCreateNestedOneWithoutDocumentsInput | null;
  PersonalData?: PersonalDataCreateNestedOneWithoutDocumentsInput | null;
  Loan?: LoanCreateNestedOneWithoutDocumentsInput | null;
}

export interface DocumentCreateWithoutEmployeeInput {
  id?: string | null;
  type: DocumentType;
  borrower?: BorrowerCreateNestedOneWithoutDocumentsInput | null;
  contract?: ContractCreateNestedOneWithoutDocumentsInput | null;
  PersonalData?: PersonalDataCreateNestedOneWithoutDocumentsInput | null;
  Loan?: LoanCreateNestedOneWithoutDocumentsInput | null;
}

export interface DocumentCreateWithoutLoanInput {
  id?: string | null;
  type: DocumentType;
  borrower?: BorrowerCreateNestedOneWithoutDocumentsInput | null;
  employee?: EmployeeCreateNestedOneWithoutDocumentsInput | null;
  contract?: ContractCreateNestedOneWithoutDocumentsInput | null;
  PersonalData?: PersonalDataCreateNestedOneWithoutDocumentsInput | null;
}

export interface DocumentCreateWithoutPersonalDataInput {
  id?: string | null;
  type: DocumentType;
  borrower?: BorrowerCreateNestedOneWithoutDocumentsInput | null;
  employee?: EmployeeCreateNestedOneWithoutDocumentsInput | null;
  contract?: ContractCreateNestedOneWithoutDocumentsInput | null;
  Loan?: LoanCreateNestedOneWithoutDocumentsInput | null;
}

export interface DocumentListRelationFilter {
  every?: DocumentWhereInput | null;
  some?: DocumentWhereInput | null;
  none?: DocumentWhereInput | null;
}

export interface DocumentWhereInput {
  AND?: DocumentWhereInput[] | null;
  OR?: DocumentWhereInput[] | null;
  NOT?: DocumentWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumDocumentTypeFilter | null;
  borrower?: BorrowerRelationFilter | null;
  borrowerId?: StringNullableFilter | null;
  employee?: EmployeeRelationFilter | null;
  contract?: ContractRelationFilter | null;
  contractId?: StringNullableFilter | null;
  employeeId?: StringNullableFilter | null;
  PersonalData?: PersonalDataRelationFilter | null;
  personalDataId?: StringNullableFilter | null;
  Loan?: LoanRelationFilter | null;
  loanId?: StringNullableFilter | null;
}

export interface DocumentWhereUniqueInput {
  id?: string | null;
}

export interface EmployeeCreateManyPersonalDataInput {
  type: EmployeesTypes;
  userId: string;
  amountGivedIncreased?: boolean | null;
}

export interface EmployeeCreateManyPersonalDataInputEnvelope {
  data: EmployeeCreateManyPersonalDataInput[];
  skipDuplicates?: boolean | null;
}

export interface EmployeeCreateNestedManyWithoutPersonalDataInput {
  create?: EmployeeCreateWithoutPersonalDataInput[] | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutPersonalDataInput[] | null;
  createMany?: EmployeeCreateManyPersonalDataInputEnvelope | null;
  connect?: EmployeeWhereUniqueInput[] | null;
}

export interface EmployeeCreateNestedManyWithoutRoutesInput {
  create?: EmployeeCreateWithoutRoutesInput[] | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutRoutesInput[] | null;
  connect?: EmployeeWhereUniqueInput[] | null;
}

export interface EmployeeCreateNestedOneWithoutBorrowerInput {
  create?: EmployeeCreateWithoutBorrowerInput | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutBorrowerInput | null;
  connect?: EmployeeWhereUniqueInput | null;
}

export interface EmployeeCreateNestedOneWithoutComissionPaymentConfigurationInput {
  create?: EmployeeCreateWithoutComissionPaymentConfigurationInput | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutComissionPaymentConfigurationInput | null;
  connect?: EmployeeWhereUniqueInput | null;
}

export interface EmployeeCreateNestedOneWithoutCommissionPaymentInput {
  create?: EmployeeCreateWithoutCommissionPaymentInput | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutCommissionPaymentInput | null;
  connect?: EmployeeWhereUniqueInput | null;
}

export interface EmployeeCreateNestedOneWithoutContractEmployeeInput {
  create?: EmployeeCreateWithoutContractEmployeeInput | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutContractEmployeeInput | null;
  connect?: EmployeeWhereUniqueInput | null;
}

export interface EmployeeCreateNestedOneWithoutContractLoanLeadInput {
  create?: EmployeeCreateWithoutContractLoanLeadInput | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutContractLoanLeadInput | null;
  connect?: EmployeeWhereUniqueInput | null;
}

export interface EmployeeCreateNestedOneWithoutDocumentsInput {
  create?: EmployeeCreateWithoutDocumentsInput | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutDocumentsInput | null;
  connect?: EmployeeWhereUniqueInput | null;
}

export interface EmployeeCreateNestedOneWithoutLeadPaymentReceivedAgentInput {
  create?: EmployeeCreateWithoutLeadPaymentReceivedAgentInput | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutLeadPaymentReceivedAgentInput | null;
  connect?: EmployeeWhereUniqueInput | null;
}

export interface EmployeeCreateNestedOneWithoutLeadPaymentsReceivedLeadInput {
  create?: EmployeeCreateWithoutLeadPaymentsReceivedLeadInput | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutLeadPaymentsReceivedLeadInput | null;
  connect?: EmployeeWhereUniqueInput | null;
}

export interface EmployeeCreateNestedOneWithoutLoanInput {
  create?: EmployeeCreateWithoutLoanInput | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutLoanInput | null;
  connect?: EmployeeWhereUniqueInput | null;
}

export interface EmployeeCreateNestedOneWithoutLoanPaymentInput {
  create?: EmployeeCreateWithoutLoanPaymentInput | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutLoanPaymentInput | null;
  connect?: EmployeeWhereUniqueInput | null;
}

export interface EmployeeCreateNestedOneWithoutUserInput {
  create?: EmployeeCreateWithoutUserInput | null;
  connectOrCreate?: EmployeeCreateOrConnectWithoutUserInput | null;
  connect?: EmployeeWhereUniqueInput | null;
}

export interface EmployeeCreateOrConnectWithoutBorrowerInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutBorrowerInput;
}

export interface EmployeeCreateOrConnectWithoutComissionPaymentConfigurationInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutComissionPaymentConfigurationInput;
}

export interface EmployeeCreateOrConnectWithoutCommissionPaymentInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutCommissionPaymentInput;
}

export interface EmployeeCreateOrConnectWithoutContractEmployeeInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutContractEmployeeInput;
}

export interface EmployeeCreateOrConnectWithoutContractLoanLeadInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutContractLoanLeadInput;
}

export interface EmployeeCreateOrConnectWithoutDocumentsInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutDocumentsInput;
}

export interface EmployeeCreateOrConnectWithoutLeadPaymentReceivedAgentInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutLeadPaymentReceivedAgentInput;
}

export interface EmployeeCreateOrConnectWithoutLeadPaymentsReceivedLeadInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutLeadPaymentsReceivedLeadInput;
}

export interface EmployeeCreateOrConnectWithoutLoanInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutLoanInput;
}

export interface EmployeeCreateOrConnectWithoutLoanPaymentInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutLoanPaymentInput;
}

export interface EmployeeCreateOrConnectWithoutPersonalDataInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutPersonalDataInput;
}

export interface EmployeeCreateOrConnectWithoutRoutesInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutRoutesInput;
}

export interface EmployeeCreateOrConnectWithoutUserInput {
  where: EmployeeWhereUniqueInput;
  create: EmployeeCreateWithoutUserInput;
}

export interface EmployeeCreateWithoutBorrowerInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  user: UserCreateNestedOneWithoutEmployeeInput;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeCreateWithoutComissionPaymentConfigurationInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  user: UserCreateNestedOneWithoutEmployeeInput;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
}

export interface EmployeeCreateWithoutCommissionPaymentInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  user: UserCreateNestedOneWithoutEmployeeInput;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeCreateWithoutContractEmployeeInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  user: UserCreateNestedOneWithoutEmployeeInput;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeCreateWithoutContractLoanLeadInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  user: UserCreateNestedOneWithoutEmployeeInput;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeCreateWithoutDocumentsInput {
  type: EmployeesTypes;
  user: UserCreateNestedOneWithoutEmployeeInput;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeCreateWithoutLeadPaymentReceivedAgentInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  user: UserCreateNestedOneWithoutEmployeeInput;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeCreateWithoutLeadPaymentsReceivedLeadInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  user: UserCreateNestedOneWithoutEmployeeInput;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeCreateWithoutLoanInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  user: UserCreateNestedOneWithoutEmployeeInput;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeCreateWithoutLoanPaymentInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  user: UserCreateNestedOneWithoutEmployeeInput;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeCreateWithoutPersonalDataInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  user: UserCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeCreateWithoutRoutesInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  user: UserCreateNestedOneWithoutEmployeeInput;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeCreateWithoutUserInput {
  type: EmployeesTypes;
  documents?: DocumentCreateNestedManyWithoutEmployeeInput | null;
  personalData: PersonalDataCreateNestedOneWithoutEmployeeInput;
  loan?: LoanCreateNestedManyWithoutEmployeeInput | null;
  loanPayment?: LoanPaymentCreateNestedManyWithoutEmployeeInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutEmployeeInput | null;
  contractEmployee?: ContractCreateNestedManyWithoutEmployeeInput | null;
  contractLoanLead?: ContractCreateNestedManyWithoutLoanLeadInput | null;
  expenses?: ExpensesCreateNestedManyWithoutEmployeeInput | null;
  amountGivedIncreased?: boolean | null;
  comments?: CommentCreateNestedManyWithoutCreatedByInput | null;
  routes?: RouteCreateNestedManyWithoutEmployeesInput | null;
  borrower?: BorrowerCreateNestedManyWithoutEmployeeInput | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedCreateNestedManyWithoutLeadInput | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedCreateNestedManyWithoutAgentInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLeadIdInput | null;
}

export interface EmployeeListRelationFilter {
  every?: EmployeeWhereInput | null;
  some?: EmployeeWhereInput | null;
  none?: EmployeeWhereInput | null;
}

export interface EmployeeRelationFilter {
  is?: EmployeeWhereInput | null;
  isNot?: EmployeeWhereInput | null;
}

export interface EmployeeWhereInput {
  AND?: EmployeeWhereInput[] | null;
  OR?: EmployeeWhereInput[] | null;
  NOT?: EmployeeWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumEmployeesTypesFilter | null;
  documents?: DocumentListRelationFilter | null;
  user?: UserRelationFilter | null;
  personalData?: PersonalDataRelationFilter | null;
  loan?: LoanListRelationFilter | null;
  userId?: StringFilter | null;
  loanPayment?: LoanPaymentListRelationFilter | null;
  commissionPayment?: CommissionPaymentListRelationFilter | null;
  contractEmployee?: ContractListRelationFilter | null;
  contractLoanLead?: ContractListRelationFilter | null;
  expenses?: ExpensesListRelationFilter | null;
  personalDataId?: StringFilter | null;
  amountGivedIncreased?: BoolFilter | null;
  comments?: CommentListRelationFilter | null;
  routes?: RouteListRelationFilter | null;
  borrower?: BorrowerListRelationFilter | null;
  leadPaymentsReceivedLead?: LeadPaymentReceivedListRelationFilter | null;
  leadPaymentReceivedAgent?: LeadPaymentReceivedListRelationFilter | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationListRelationFilter | null;
}

export interface EmployeeWhereUniqueInput {
  id?: string | null;
  userId?: string | null;
}

export interface EnumCommissionGoalTypeFilter {
  equals?: CommissionGoalType | null;
  in?: CommissionGoalType[] | null;
  notIn?: CommissionGoalType[] | null;
  not?: NestedEnumCommissionGoalTypeFilter | null;
}

export interface EnumCommissionPaymentStatusFilter {
  equals?: CommissionPaymentStatus | null;
  in?: CommissionPaymentStatus[] | null;
  notIn?: CommissionPaymentStatus[] | null;
  not?: NestedEnumCommissionPaymentStatusFilter | null;
}

export interface EnumCommissionTypeFilter {
  equals?: CommissionType | null;
  in?: CommissionType[] | null;
  notIn?: CommissionType[] | null;
  not?: NestedEnumCommissionTypeFilter | null;
}

export interface EnumDocumentTypeFilter {
  equals?: DocumentType | null;
  in?: DocumentType[] | null;
  notIn?: DocumentType[] | null;
  not?: NestedEnumDocumentTypeFilter | null;
}

export interface EnumEmployeesTypesFilter {
  equals?: EmployeesTypes | null;
  in?: EmployeesTypes[] | null;
  notIn?: EmployeesTypes[] | null;
  not?: NestedEnumEmployeesTypesFilter | null;
}

export interface EnumLeadPaymentTypesFilter {
  equals?: LeadPaymentTypes | null;
  in?: LeadPaymentTypes[] | null;
  notIn?: LeadPaymentTypes[] | null;
  not?: NestedEnumLeadPaymentTypesFilter | null;
}

export interface EnumPaymentStateFilter {
  equals?: PaymentState | null;
  in?: PaymentState[] | null;
  notIn?: PaymentState[] | null;
  not?: NestedEnumPaymentStateFilter | null;
}

export interface ExpensesCreateManyEmployeeInput {
  id?: string | null;
  amountToPay: any;
  status: PaymentState;
  dueDate: any;
  payedAt: any;
  userId?: string | null;
}

export interface ExpensesCreateManyEmployeeInputEnvelope {
  data: ExpensesCreateManyEmployeeInput[];
  skipDuplicates?: boolean | null;
}

export interface ExpensesCreateNestedManyWithoutEmployeeInput {
  create?: ExpensesCreateWithoutEmployeeInput[] | null;
  connectOrCreate?: ExpensesCreateOrConnectWithoutEmployeeInput[] | null;
  createMany?: ExpensesCreateManyEmployeeInputEnvelope | null;
  connect?: ExpensesWhereUniqueInput[] | null;
}

export interface ExpensesCreateOrConnectWithoutEmployeeInput {
  where: ExpensesWhereUniqueInput;
  create: ExpensesCreateWithoutEmployeeInput;
}

export interface ExpensesCreateWithoutEmployeeInput {
  id?: string | null;
  amountToPay: any;
  status: PaymentState;
  dueDate: any;
  payedAt: any;
  userId?: string | null;
}

export interface ExpensesListRelationFilter {
  every?: ExpensesWhereInput | null;
  some?: ExpensesWhereInput | null;
  none?: ExpensesWhereInput | null;
}

export interface ExpensesWhereInput {
  AND?: ExpensesWhereInput[] | null;
  OR?: ExpensesWhereInput[] | null;
  NOT?: ExpensesWhereInput[] | null;
  id?: StringFilter | null;
  amountToPay?: DecimalFilter | null;
  status?: EnumPaymentStateFilter | null;
  dueDate?: DateTimeFilter | null;
  payedAt?: DateTimeFilter | null;
  employee?: EmployeeRelationFilter | null;
  userId?: StringNullableFilter | null;
  employeeId?: StringFilter | null;
}

export interface ExpensesWhereUniqueInput {
  id?: string | null;
}

export interface FalcoCompensatoryPaymentCreateManyLeadPaymentReceivedInput {
  id?: string | null;
  amount: any;
  createdAt?: any | null;
  updatedAt?: any | null;
}

export interface FalcoCompensatoryPaymentCreateManyLeadPaymentReceivedInputEnvelope {
  data: FalcoCompensatoryPaymentCreateManyLeadPaymentReceivedInput[];
  skipDuplicates?: boolean | null;
}

export interface FalcoCompensatoryPaymentCreateNestedManyWithoutLeadPaymentReceivedInput {
  create?: FalcoCompensatoryPaymentCreateWithoutLeadPaymentReceivedInput[] | null;
  connectOrCreate?: FalcoCompensatoryPaymentCreateOrConnectWithoutLeadPaymentReceivedInput[] | null;
  createMany?: FalcoCompensatoryPaymentCreateManyLeadPaymentReceivedInputEnvelope | null;
  connect?: FalcoCompensatoryPaymentWhereUniqueInput[] | null;
}

export interface FalcoCompensatoryPaymentCreateOrConnectWithoutLeadPaymentReceivedInput {
  where: FalcoCompensatoryPaymentWhereUniqueInput;
  create: FalcoCompensatoryPaymentCreateWithoutLeadPaymentReceivedInput;
}

export interface FalcoCompensatoryPaymentCreateWithoutLeadPaymentReceivedInput {
  id?: string | null;
  amount: any;
  createdAt?: any | null;
  updatedAt?: any | null;
}

export interface FalcoCompensatoryPaymentListRelationFilter {
  every?: FalcoCompensatoryPaymentWhereInput | null;
  some?: FalcoCompensatoryPaymentWhereInput | null;
  none?: FalcoCompensatoryPaymentWhereInput | null;
}

export interface FalcoCompensatoryPaymentWhereInput {
  AND?: FalcoCompensatoryPaymentWhereInput[] | null;
  OR?: FalcoCompensatoryPaymentWhereInput[] | null;
  NOT?: FalcoCompensatoryPaymentWhereInput[] | null;
  id?: StringFilter | null;
  amount?: DecimalFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  leadPaymentReceived?: LeadPaymentReceivedRelationFilter | null;
  leadPaymentReceivedId?: StringNullableFilter | null;
}

export interface FalcoCompensatoryPaymentWhereUniqueInput {
  id?: string | null;
}

export interface FloatFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedFloatFilter | null;
}

export interface IntFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedIntFilter | null;
}

export interface LeadPaymentReceivedCreateManyAgentInput {
  id?: string | null;
  type: LeadPaymentTypes;
  expectedAmount: any;
  paidAmount: any;
  falco: any;
  pendingFalcoAmount: any;
  createdAt?: any | null;
  updatedAt?: any | null;
  leadId: string;
}

export interface LeadPaymentReceivedCreateManyAgentInputEnvelope {
  data: LeadPaymentReceivedCreateManyAgentInput[];
  skipDuplicates?: boolean | null;
}

export interface LeadPaymentReceivedCreateManyLeadInput {
  id?: string | null;
  type: LeadPaymentTypes;
  expectedAmount: any;
  paidAmount: any;
  falco: any;
  pendingFalcoAmount: any;
  createdAt?: any | null;
  updatedAt?: any | null;
  agentId: string;
}

export interface LeadPaymentReceivedCreateManyLeadInputEnvelope {
  data: LeadPaymentReceivedCreateManyLeadInput[];
  skipDuplicates?: boolean | null;
}

export interface LeadPaymentReceivedCreateNestedManyWithoutAgentInput {
  create?: LeadPaymentReceivedCreateWithoutAgentInput[] | null;
  connectOrCreate?: LeadPaymentReceivedCreateOrConnectWithoutAgentInput[] | null;
  createMany?: LeadPaymentReceivedCreateManyAgentInputEnvelope | null;
  connect?: LeadPaymentReceivedWhereUniqueInput[] | null;
}

export interface LeadPaymentReceivedCreateNestedManyWithoutLeadInput {
  create?: LeadPaymentReceivedCreateWithoutLeadInput[] | null;
  connectOrCreate?: LeadPaymentReceivedCreateOrConnectWithoutLeadInput[] | null;
  createMany?: LeadPaymentReceivedCreateManyLeadInputEnvelope | null;
  connect?: LeadPaymentReceivedWhereUniqueInput[] | null;
}

export interface LeadPaymentReceivedCreateNestedOneWithoutPaymentsInput {
  create?: LeadPaymentReceivedCreateWithoutPaymentsInput | null;
  connectOrCreate?: LeadPaymentReceivedCreateOrConnectWithoutPaymentsInput | null;
  connect?: LeadPaymentReceivedWhereUniqueInput | null;
}

export interface LeadPaymentReceivedCreateOrConnectWithoutAgentInput {
  where: LeadPaymentReceivedWhereUniqueInput;
  create: LeadPaymentReceivedCreateWithoutAgentInput;
}

export interface LeadPaymentReceivedCreateOrConnectWithoutLeadInput {
  where: LeadPaymentReceivedWhereUniqueInput;
  create: LeadPaymentReceivedCreateWithoutLeadInput;
}

export interface LeadPaymentReceivedCreateOrConnectWithoutPaymentsInput {
  where: LeadPaymentReceivedWhereUniqueInput;
  create: LeadPaymentReceivedCreateWithoutPaymentsInput;
}

export interface LeadPaymentReceivedCreateWithoutAgentInput {
  id?: string | null;
  type: LeadPaymentTypes;
  expectedAmount: any;
  paidAmount: any;
  falco: any;
  pendingFalcoAmount: any;
  falcoCompensatoryPayments?: FalcoCompensatoryPaymentCreateNestedManyWithoutLeadPaymentReceivedInput | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  payments?: LoanPaymentCreateNestedManyWithoutLeadPaymentReceivedInput | null;
  lead: EmployeeCreateNestedOneWithoutLeadPaymentsReceivedLeadInput;
}

export interface LeadPaymentReceivedCreateWithoutLeadInput {
  id?: string | null;
  type: LeadPaymentTypes;
  expectedAmount: any;
  paidAmount: any;
  falco: any;
  pendingFalcoAmount: any;
  falcoCompensatoryPayments?: FalcoCompensatoryPaymentCreateNestedManyWithoutLeadPaymentReceivedInput | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  payments?: LoanPaymentCreateNestedManyWithoutLeadPaymentReceivedInput | null;
  agent: EmployeeCreateNestedOneWithoutLeadPaymentReceivedAgentInput;
}

export interface LeadPaymentReceivedCreateWithoutPaymentsInput {
  id?: string | null;
  type: LeadPaymentTypes;
  expectedAmount: any;
  paidAmount: any;
  falco: any;
  pendingFalcoAmount: any;
  falcoCompensatoryPayments?: FalcoCompensatoryPaymentCreateNestedManyWithoutLeadPaymentReceivedInput | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  agent: EmployeeCreateNestedOneWithoutLeadPaymentReceivedAgentInput;
  lead: EmployeeCreateNestedOneWithoutLeadPaymentsReceivedLeadInput;
}

export interface LeadPaymentReceivedListRelationFilter {
  every?: LeadPaymentReceivedWhereInput | null;
  some?: LeadPaymentReceivedWhereInput | null;
  none?: LeadPaymentReceivedWhereInput | null;
}

export interface LeadPaymentReceivedRelationFilter {
  is?: LeadPaymentReceivedWhereInput | null;
  isNot?: LeadPaymentReceivedWhereInput | null;
}

export interface LeadPaymentReceivedWhereInput {
  AND?: LeadPaymentReceivedWhereInput[] | null;
  OR?: LeadPaymentReceivedWhereInput[] | null;
  NOT?: LeadPaymentReceivedWhereInput[] | null;
  id?: StringFilter | null;
  type?: EnumLeadPaymentTypesFilter | null;
  expectedAmount?: DecimalFilter | null;
  paidAmount?: DecimalFilter | null;
  falco?: DecimalFilter | null;
  pendingFalcoAmount?: DecimalFilter | null;
  falcoCompensatoryPayments?: FalcoCompensatoryPaymentListRelationFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  leadId?: StringFilter | null;
  agentId?: StringFilter | null;
  payments?: LoanPaymentListRelationFilter | null;
  agent?: EmployeeRelationFilter | null;
  lead?: EmployeeRelationFilter | null;
}

export interface LeadPaymentReceivedWhereUniqueInput {
  id?: string | null;
}

export interface LoanCreateManyEmployeeInput {
  id?: string | null;
  weeklyPaymentAmount: any;
  previousAmountGived?: any | null;
  amountGived?: any | null;
  amountToPay?: any | null;
  signDate?: any | null;
  finishedDate?: any | null;
  updatedAt?: any | null;
  contractId: string;
  loantypeId: string;
  renovatedFromId?: string | null;
}

export interface LoanCreateManyEmployeeInputEnvelope {
  data: LoanCreateManyEmployeeInput[];
  skipDuplicates?: boolean | null;
}

export interface LoanCreateManyLoanTypeInput {
  id?: string | null;
  weeklyPaymentAmount: any;
  previousAmountGived?: any | null;
  amountGived?: any | null;
  amountToPay?: any | null;
  signDate?: any | null;
  finishedDate?: any | null;
  updatedAt?: any | null;
  contractId: string;
  employeeId: string;
  renovatedFromId?: string | null;
}

export interface LoanCreateManyLoanTypeInputEnvelope {
  data: LoanCreateManyLoanTypeInput[];
  skipDuplicates?: boolean | null;
}

export interface LoanCreateNestedManyWithoutEmployeeInput {
  create?: LoanCreateWithoutEmployeeInput[] | null;
  connectOrCreate?: LoanCreateOrConnectWithoutEmployeeInput[] | null;
  createMany?: LoanCreateManyEmployeeInputEnvelope | null;
  connect?: LoanWhereUniqueInput[] | null;
}

export interface LoanCreateNestedManyWithoutLoanTypeInput {
  create?: LoanCreateWithoutLoanTypeInput[] | null;
  connectOrCreate?: LoanCreateOrConnectWithoutLoanTypeInput[] | null;
  createMany?: LoanCreateManyLoanTypeInputEnvelope | null;
  connect?: LoanWhereUniqueInput[] | null;
}

export interface LoanCreateNestedOneWithoutAvalsInput {
  create?: LoanCreateWithoutAvalsInput | null;
  connectOrCreate?: LoanCreateOrConnectWithoutAvalsInput | null;
  connect?: LoanWhereUniqueInput | null;
}

export interface LoanCreateNestedOneWithoutCommissionPaymentInput {
  create?: LoanCreateWithoutCommissionPaymentInput | null;
  connectOrCreate?: LoanCreateOrConnectWithoutCommissionPaymentInput | null;
  connect?: LoanWhereUniqueInput | null;
}

export interface LoanCreateNestedOneWithoutDocumentsInput {
  create?: LoanCreateWithoutDocumentsInput | null;
  connectOrCreate?: LoanCreateOrConnectWithoutDocumentsInput | null;
  connect?: LoanWhereUniqueInput | null;
}

export interface LoanCreateNestedOneWithoutPaymentScheduleInput {
  create?: LoanCreateWithoutPaymentScheduleInput | null;
  connectOrCreate?: LoanCreateOrConnectWithoutPaymentScheduleInput | null;
  connect?: LoanWhereUniqueInput | null;
}

export interface LoanCreateNestedOneWithoutPaymentsInput {
  create?: LoanCreateWithoutPaymentsInput | null;
  connectOrCreate?: LoanCreateOrConnectWithoutPaymentsInput | null;
  connect?: LoanWhereUniqueInput | null;
}

export interface LoanCreateOrConnectWithoutAvalsInput {
  where: LoanWhereUniqueInput;
  create: LoanCreateWithoutAvalsInput;
}

export interface LoanCreateOrConnectWithoutCommissionPaymentInput {
  where: LoanWhereUniqueInput;
  create: LoanCreateWithoutCommissionPaymentInput;
}

export interface LoanCreateOrConnectWithoutDocumentsInput {
  where: LoanWhereUniqueInput;
  create: LoanCreateWithoutDocumentsInput;
}

export interface LoanCreateOrConnectWithoutEmployeeInput {
  where: LoanWhereUniqueInput;
  create: LoanCreateWithoutEmployeeInput;
}

export interface LoanCreateOrConnectWithoutLoanTypeInput {
  where: LoanWhereUniqueInput;
  create: LoanCreateWithoutLoanTypeInput;
}

export interface LoanCreateOrConnectWithoutPaymentScheduleInput {
  where: LoanWhereUniqueInput;
  create: LoanCreateWithoutPaymentScheduleInput;
}

export interface LoanCreateOrConnectWithoutPaymentsInput {
  where: LoanWhereUniqueInput;
  create: LoanCreateWithoutPaymentsInput;
}

export interface LoanCreateWithoutAvalsInput {
  id?: string | null;
  weeklyPaymentAmount: any;
  previousAmountGived?: any | null;
  amountGived?: any | null;
  amountToPay?: any | null;
  loanType: LoantypeCreateNestedOneWithoutLoanInput;
  signDate?: any | null;
  finishedDate?: any | null;
  documents?: DocumentCreateNestedManyWithoutLoanInput | null;
  employee: EmployeeCreateNestedOneWithoutLoanInput;
  updatedAt?: any | null;
  contract: ContractCreateNestedOneWithoutLoansInput;
  paymentSchedule?: PaymentScheduleCreateNestedManyWithoutLoanInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutLoanInput | null;
  renovatedFromId?: string | null;
}

export interface LoanCreateWithoutCommissionPaymentInput {
  id?: string | null;
  weeklyPaymentAmount: any;
  previousAmountGived?: any | null;
  amountGived?: any | null;
  amountToPay?: any | null;
  loanType: LoantypeCreateNestedOneWithoutLoanInput;
  signDate?: any | null;
  finishedDate?: any | null;
  avals?: PersonalDataCreateNestedManyWithoutLoanInput | null;
  documents?: DocumentCreateNestedManyWithoutLoanInput | null;
  employee: EmployeeCreateNestedOneWithoutLoanInput;
  updatedAt?: any | null;
  contract: ContractCreateNestedOneWithoutLoansInput;
  paymentSchedule?: PaymentScheduleCreateNestedManyWithoutLoanInput | null;
  renovatedFromId?: string | null;
}

export interface LoanCreateWithoutDocumentsInput {
  id?: string | null;
  weeklyPaymentAmount: any;
  previousAmountGived?: any | null;
  amountGived?: any | null;
  amountToPay?: any | null;
  loanType: LoantypeCreateNestedOneWithoutLoanInput;
  signDate?: any | null;
  finishedDate?: any | null;
  avals?: PersonalDataCreateNestedManyWithoutLoanInput | null;
  employee: EmployeeCreateNestedOneWithoutLoanInput;
  updatedAt?: any | null;
  contract: ContractCreateNestedOneWithoutLoansInput;
  paymentSchedule?: PaymentScheduleCreateNestedManyWithoutLoanInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutLoanInput | null;
  renovatedFromId?: string | null;
}

export interface LoanCreateWithoutEmployeeInput {
  id?: string | null;
  weeklyPaymentAmount: any;
  previousAmountGived?: any | null;
  amountGived?: any | null;
  amountToPay?: any | null;
  loanType: LoantypeCreateNestedOneWithoutLoanInput;
  signDate?: any | null;
  finishedDate?: any | null;
  avals?: PersonalDataCreateNestedManyWithoutLoanInput | null;
  documents?: DocumentCreateNestedManyWithoutLoanInput | null;
  updatedAt?: any | null;
  contract: ContractCreateNestedOneWithoutLoansInput;
  paymentSchedule?: PaymentScheduleCreateNestedManyWithoutLoanInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutLoanInput | null;
  renovatedFromId?: string | null;
}

export interface LoanCreateWithoutLoanTypeInput {
  id?: string | null;
  weeklyPaymentAmount: any;
  previousAmountGived?: any | null;
  amountGived?: any | null;
  amountToPay?: any | null;
  signDate?: any | null;
  finishedDate?: any | null;
  avals?: PersonalDataCreateNestedManyWithoutLoanInput | null;
  documents?: DocumentCreateNestedManyWithoutLoanInput | null;
  employee: EmployeeCreateNestedOneWithoutLoanInput;
  updatedAt?: any | null;
  contract: ContractCreateNestedOneWithoutLoansInput;
  paymentSchedule?: PaymentScheduleCreateNestedManyWithoutLoanInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutLoanInput | null;
  renovatedFromId?: string | null;
}

export interface LoanCreateWithoutPaymentScheduleInput {
  id?: string | null;
  weeklyPaymentAmount: any;
  previousAmountGived?: any | null;
  amountGived?: any | null;
  amountToPay?: any | null;
  loanType: LoantypeCreateNestedOneWithoutLoanInput;
  signDate?: any | null;
  finishedDate?: any | null;
  avals?: PersonalDataCreateNestedManyWithoutLoanInput | null;
  documents?: DocumentCreateNestedManyWithoutLoanInput | null;
  employee: EmployeeCreateNestedOneWithoutLoanInput;
  updatedAt?: any | null;
  contract: ContractCreateNestedOneWithoutLoansInput;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutLoanInput | null;
  renovatedFromId?: string | null;
}

export interface LoanCreateWithoutPaymentsInput {
  id?: string | null;
  weeklyPaymentAmount: any;
  previousAmountGived?: any | null;
  amountGived?: any | null;
  amountToPay?: any | null;
  loanType: LoantypeCreateNestedOneWithoutLoanInput;
  signDate?: any | null;
  finishedDate?: any | null;
  avals?: PersonalDataCreateNestedManyWithoutLoanInput | null;
  documents?: DocumentCreateNestedManyWithoutLoanInput | null;
  employee: EmployeeCreateNestedOneWithoutLoanInput;
  updatedAt?: any | null;
  contract: ContractCreateNestedOneWithoutLoansInput;
  paymentSchedule?: PaymentScheduleCreateNestedManyWithoutLoanInput | null;
  commissionPayment?: CommissionPaymentCreateNestedManyWithoutLoanInput | null;
  renovatedFromId?: string | null;
}

export interface LoanListRelationFilter {
  every?: LoanWhereInput | null;
  some?: LoanWhereInput | null;
  none?: LoanWhereInput | null;
}

export interface LoanPaymentCreateManyEmployeeInput {
  id?: string | null;
  amount: any;
  profitAmount: any;
  returnToCapital: any;
  date: any;
  percentage: any;
  loanId: string;
  leadPaymentReceivedId?: string | null;
}

export interface LoanPaymentCreateManyEmployeeInputEnvelope {
  data: LoanPaymentCreateManyEmployeeInput[];
  skipDuplicates?: boolean | null;
}

export interface LoanPaymentCreateManyLeadPaymentReceivedInput {
  id?: string | null;
  amount: any;
  profitAmount: any;
  returnToCapital: any;
  date: any;
  percentage: any;
  loanId: string;
  employeeId: string;
}

export interface LoanPaymentCreateManyLeadPaymentReceivedInputEnvelope {
  data: LoanPaymentCreateManyLeadPaymentReceivedInput[];
  skipDuplicates?: boolean | null;
}

export interface LoanPaymentCreateNestedManyWithoutEmployeeInput {
  create?: LoanPaymentCreateWithoutEmployeeInput[] | null;
  connectOrCreate?: LoanPaymentCreateOrConnectWithoutEmployeeInput[] | null;
  createMany?: LoanPaymentCreateManyEmployeeInputEnvelope | null;
  connect?: LoanPaymentWhereUniqueInput[] | null;
}

export interface LoanPaymentCreateNestedManyWithoutLeadPaymentReceivedInput {
  create?: LoanPaymentCreateWithoutLeadPaymentReceivedInput[] | null;
  connectOrCreate?: LoanPaymentCreateOrConnectWithoutLeadPaymentReceivedInput[] | null;
  createMany?: LoanPaymentCreateManyLeadPaymentReceivedInputEnvelope | null;
  connect?: LoanPaymentWhereUniqueInput[] | null;
}

export interface LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput {
  create?: LoanPaymentCreateWithoutPaymentSchedulesInput[] | null;
  connectOrCreate?: LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput[] | null;
  connect?: LoanPaymentWhereUniqueInput[] | null;
}

export interface LoanPaymentCreateNestedOneWithoutCommentsInput {
  create?: LoanPaymentCreateWithoutCommentsInput | null;
  connectOrCreate?: LoanPaymentCreateOrConnectWithoutCommentsInput | null;
  connect?: LoanPaymentWhereUniqueInput | null;
}

export interface LoanPaymentCreateOrConnectWithoutCommentsInput {
  where: LoanPaymentWhereUniqueInput;
  create: LoanPaymentCreateWithoutCommentsInput;
}

export interface LoanPaymentCreateOrConnectWithoutEmployeeInput {
  where: LoanPaymentWhereUniqueInput;
  create: LoanPaymentCreateWithoutEmployeeInput;
}

export interface LoanPaymentCreateOrConnectWithoutLeadPaymentReceivedInput {
  where: LoanPaymentWhereUniqueInput;
  create: LoanPaymentCreateWithoutLeadPaymentReceivedInput;
}

export interface LoanPaymentCreateOrConnectWithoutPaymentSchedulesInput {
  where: LoanPaymentWhereUniqueInput;
  create: LoanPaymentCreateWithoutPaymentSchedulesInput;
}

export interface LoanPaymentCreateWithoutCommentsInput {
  id?: string | null;
  amount: any;
  profitAmount: any;
  returnToCapital: any;
  date: any;
  percentage: any;
  paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput | null;
  loan: LoanCreateNestedOneWithoutPaymentsInput;
  employee: EmployeeCreateNestedOneWithoutLoanPaymentInput;
  leadPaymentReceived?: LeadPaymentReceivedCreateNestedOneWithoutPaymentsInput | null;
}

export interface LoanPaymentCreateWithoutEmployeeInput {
  id?: string | null;
  amount: any;
  profitAmount: any;
  returnToCapital: any;
  date: any;
  percentage: any;
  comments?: CommentCreateNestedManyWithoutPaymentInput | null;
  paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput | null;
  loan: LoanCreateNestedOneWithoutPaymentsInput;
  leadPaymentReceived?: LeadPaymentReceivedCreateNestedOneWithoutPaymentsInput | null;
}

export interface LoanPaymentCreateWithoutLeadPaymentReceivedInput {
  id?: string | null;
  amount: any;
  profitAmount: any;
  returnToCapital: any;
  date: any;
  percentage: any;
  comments?: CommentCreateNestedManyWithoutPaymentInput | null;
  paymentSchedules?: PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput | null;
  loan: LoanCreateNestedOneWithoutPaymentsInput;
  employee: EmployeeCreateNestedOneWithoutLoanPaymentInput;
}

export interface LoanPaymentCreateWithoutPaymentSchedulesInput {
  id?: string | null;
  amount: any;
  profitAmount: any;
  returnToCapital: any;
  date: any;
  percentage: any;
  comments?: CommentCreateNestedManyWithoutPaymentInput | null;
  loan: LoanCreateNestedOneWithoutPaymentsInput;
  employee: EmployeeCreateNestedOneWithoutLoanPaymentInput;
  leadPaymentReceived?: LeadPaymentReceivedCreateNestedOneWithoutPaymentsInput | null;
}

export interface LoanPaymentListRelationFilter {
  every?: LoanPaymentWhereInput | null;
  some?: LoanPaymentWhereInput | null;
  none?: LoanPaymentWhereInput | null;
}

export interface LoanPaymentRelationFilter {
  is?: LoanPaymentWhereInput | null;
  isNot?: LoanPaymentWhereInput | null;
}

export interface LoanPaymentWhereInput {
  AND?: LoanPaymentWhereInput[] | null;
  OR?: LoanPaymentWhereInput[] | null;
  NOT?: LoanPaymentWhereInput[] | null;
  id?: StringFilter | null;
  amount?: DecimalFilter | null;
  profitAmount?: DecimalFilter | null;
  returnToCapital?: DecimalFilter | null;
  date?: DateTimeFilter | null;
  percentage?: DecimalFilter | null;
  comments?: CommentListRelationFilter | null;
  paymentSchedules?: PaymentScheduleListRelationFilter | null;
  loan?: LoanRelationFilter | null;
  loanId?: StringFilter | null;
  employee?: EmployeeRelationFilter | null;
  employeeId?: StringFilter | null;
  leadPaymentReceived?: LeadPaymentReceivedRelationFilter | null;
  leadPaymentReceivedId?: StringNullableFilter | null;
}

export interface LoanPaymentWhereUniqueInput {
  id?: string | null;
}

export interface LoanRelationFilter {
  is?: LoanWhereInput | null;
  isNot?: LoanWhereInput | null;
}

export interface LoanWhereInput {
  AND?: LoanWhereInput[] | null;
  OR?: LoanWhereInput[] | null;
  NOT?: LoanWhereInput[] | null;
  id?: StringFilter | null;
  weeklyPaymentAmount?: DecimalFilter | null;
  previousAmountGived?: DecimalNullableFilter | null;
  amountGived?: DecimalFilter | null;
  amountToPay?: DecimalFilter | null;
  loanType?: LoantypeRelationFilter | null;
  signDate?: DateTimeFilter | null;
  finishedDate?: DateTimeNullableFilter | null;
  avals?: PersonalDataListRelationFilter | null;
  documents?: DocumentListRelationFilter | null;
  employee?: EmployeeRelationFilter | null;
  updatedAt?: DateTimeFilter | null;
  contract?: ContractRelationFilter | null;
  contractId?: StringFilter | null;
  loantypeId?: StringFilter | null;
  employeeId?: StringFilter | null;
  paymentSchedule?: PaymentScheduleListRelationFilter | null;
  commissionPayment?: CommissionPaymentListRelationFilter | null;
  renovatedFromId?: StringNullableFilter | null;
}

export interface LoanWhereUniqueInput {
  id?: string | null;
}

export interface LoantypeCreateNestedManyWithoutRoutesInput {
  create?: LoantypeCreateWithoutRoutesInput[] | null;
  connectOrCreate?: LoantypeCreateOrConnectWithoutRoutesInput[] | null;
  connect?: LoantypeWhereUniqueInput[] | null;
}

export interface LoantypeCreateNestedOneWithoutComissionPaymentConfigurationInput {
  create?: LoantypeCreateWithoutComissionPaymentConfigurationInput | null;
  connectOrCreate?: LoantypeCreateOrConnectWithoutComissionPaymentConfigurationInput | null;
  connect?: LoantypeWhereUniqueInput | null;
}

export interface LoantypeCreateNestedOneWithoutLoanInput {
  create?: LoantypeCreateWithoutLoanInput | null;
  connectOrCreate?: LoantypeCreateOrConnectWithoutLoanInput | null;
  connect?: LoantypeWhereUniqueInput | null;
}

export interface LoantypeCreateOrConnectWithoutComissionPaymentConfigurationInput {
  where: LoantypeWhereUniqueInput;
  create: LoantypeCreateWithoutComissionPaymentConfigurationInput;
}

export interface LoantypeCreateOrConnectWithoutLoanInput {
  where: LoantypeWhereUniqueInput;
  create: LoantypeCreateWithoutLoanInput;
}

export interface LoantypeCreateOrConnectWithoutRoutesInput {
  where: LoantypeWhereUniqueInput;
  create: LoantypeCreateWithoutRoutesInput;
}

export interface LoantypeCreateWithoutComissionPaymentConfigurationInput {
  id?: string | null;
  name: string;
  weekDuration: number;
  rate: number;
  weeksToRenew: number;
  overdueRate: number;
  initialAmount?: number | null;
  maximunAmount?: number | null;
  amountToIncrease?: number | null;
  increaseEveryNLoans?: number | null;
  leadsOnly?: boolean | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  loan?: LoanCreateNestedManyWithoutLoanTypeInput | null;
  routes?: RouteCreateNestedManyWithoutLoantypesInput | null;
}

export interface LoantypeCreateWithoutLoanInput {
  id?: string | null;
  name: string;
  weekDuration: number;
  rate: number;
  weeksToRenew: number;
  overdueRate: number;
  initialAmount?: number | null;
  maximunAmount?: number | null;
  amountToIncrease?: number | null;
  increaseEveryNLoans?: number | null;
  leadsOnly?: boolean | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLoanTypeInput | null;
  routes?: RouteCreateNestedManyWithoutLoantypesInput | null;
}

export interface LoantypeCreateWithoutRoutesInput {
  id?: string | null;
  name: string;
  weekDuration: number;
  rate: number;
  weeksToRenew: number;
  overdueRate: number;
  initialAmount?: number | null;
  maximunAmount?: number | null;
  amountToIncrease?: number | null;
  increaseEveryNLoans?: number | null;
  leadsOnly?: boolean | null;
  createdAt?: any | null;
  updatedAt?: any | null;
  loan?: LoanCreateNestedManyWithoutLoanTypeInput | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationCreateNestedManyWithoutLoanTypeInput | null;
}

export interface LoantypeListRelationFilter {
  every?: LoantypeWhereInput | null;
  some?: LoantypeWhereInput | null;
  none?: LoantypeWhereInput | null;
}

export interface LoantypeRelationFilter {
  is?: LoantypeWhereInput | null;
  isNot?: LoantypeWhereInput | null;
}

export interface LoantypeWhereInput {
  AND?: LoantypeWhereInput[] | null;
  OR?: LoantypeWhereInput[] | null;
  NOT?: LoantypeWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  weekDuration?: IntFilter | null;
  rate?: FloatFilter | null;
  weeksToRenew?: IntFilter | null;
  overdueRate?: FloatFilter | null;
  initialAmount?: FloatFilter | null;
  maximunAmount?: FloatFilter | null;
  amountToIncrease?: FloatFilter | null;
  increaseEveryNLoans?: IntFilter | null;
  leadsOnly?: BoolFilter | null;
  createdAt?: DateTimeFilter | null;
  updatedAt?: DateTimeFilter | null;
  loan?: LoanListRelationFilter | null;
  comissionPaymentConfiguration?: ComissionPaymentConfigurationListRelationFilter | null;
  routes?: RouteListRelationFilter | null;
}

export interface LoantypeWhereUniqueInput {
  id?: string | null;
}

export interface LocalCreateManyBorrowerInput {
  name: string;
}

export interface LocalCreateManyBorrowerInputEnvelope {
  data: LocalCreateManyBorrowerInput[];
  skipDuplicates?: boolean | null;
}

export interface LocalCreateNestedManyWithoutBorrowerInput {
  create?: LocalCreateWithoutBorrowerInput[] | null;
  connectOrCreate?: LocalCreateOrConnectWithoutBorrowerInput[] | null;
  createMany?: LocalCreateManyBorrowerInputEnvelope | null;
  connect?: LocalWhereUniqueInput[] | null;
}

export interface LocalCreateNestedOneWithoutAddressesInput {
  create?: LocalCreateWithoutAddressesInput | null;
  connectOrCreate?: LocalCreateOrConnectWithoutAddressesInput | null;
  connect?: LocalWhereUniqueInput | null;
}

export interface LocalCreateOrConnectWithoutAddressesInput {
  where: LocalWhereUniqueInput;
  create: LocalCreateWithoutAddressesInput;
}

export interface LocalCreateOrConnectWithoutBorrowerInput {
  where: LocalWhereUniqueInput;
  create: LocalCreateWithoutBorrowerInput;
}

export interface LocalCreateWithoutAddressesInput {
  name: string;
  borrower: BorrowerCreateNestedOneWithoutLocalInput;
}

export interface LocalCreateWithoutBorrowerInput {
  name: string;
  addresses?: AddressCreateNestedManyWithoutLocalInput | null;
}

export interface LocalListRelationFilter {
  every?: LocalWhereInput | null;
  some?: LocalWhereInput | null;
  none?: LocalWhereInput | null;
}

export interface LocalRelationFilter {
  is?: LocalWhereInput | null;
  isNot?: LocalWhereInput | null;
}

export interface LocalWhereInput {
  AND?: LocalWhereInput[] | null;
  OR?: LocalWhereInput[] | null;
  NOT?: LocalWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  addresses?: AddressListRelationFilter | null;
  borrower?: BorrowerRelationFilter | null;
  borrowerId?: StringFilter | null;
}

export interface LocalWhereUniqueInput {
  id?: string | null;
}

export interface LocationCreateManyRouteInput {
  id?: string | null;
  name: string;
  municipalityId: string;
}

export interface LocationCreateManyRouteInputEnvelope {
  data: LocationCreateManyRouteInput[];
  skipDuplicates?: boolean | null;
}

export interface LocationCreateNestedManyWithoutRouteInput {
  create?: LocationCreateWithoutRouteInput[] | null;
  connectOrCreate?: LocationCreateOrConnectWithoutRouteInput[] | null;
  createMany?: LocationCreateManyRouteInputEnvelope | null;
  connect?: LocationWhereUniqueInput[] | null;
}

export interface LocationCreateNestedOneWithoutAddressInput {
  create?: LocationCreateWithoutAddressInput | null;
  connectOrCreate?: LocationCreateOrConnectWithoutAddressInput | null;
  connect?: LocationWhereUniqueInput | null;
}

export interface LocationCreateOrConnectWithoutAddressInput {
  where: LocationWhereUniqueInput;
  create: LocationCreateWithoutAddressInput;
}

export interface LocationCreateOrConnectWithoutRouteInput {
  where: LocationWhereUniqueInput;
  create: LocationCreateWithoutRouteInput;
}

export interface LocationCreateWithoutAddressInput {
  id?: string | null;
  name: string;
  municipality: MunicipalityCreateNestedOneWithoutLocationInput;
  route?: RouteCreateNestedOneWithoutLocalitiesInput | null;
}

export interface LocationCreateWithoutRouteInput {
  id?: string | null;
  name: string;
  address?: AddressCreateNestedManyWithoutLocationInput | null;
  municipality: MunicipalityCreateNestedOneWithoutLocationInput;
}

export interface LocationListRelationFilter {
  every?: LocationWhereInput | null;
  some?: LocationWhereInput | null;
  none?: LocationWhereInput | null;
}

export interface LocationRelationFilter {
  is?: LocationWhereInput | null;
  isNot?: LocationWhereInput | null;
}

export interface LocationWhereInput {
  AND?: LocationWhereInput[] | null;
  OR?: LocationWhereInput[] | null;
  NOT?: LocationWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  address?: AddressListRelationFilter | null;
  municipality?: MunicipalityRelationFilter | null;
  municipalityId?: StringFilter | null;
  route?: RouteRelationFilter | null;
  routeId?: StringNullableFilter | null;
}

export interface LocationWhereUniqueInput {
  id?: string | null;
  name?: string | null;
}

export interface MunicipalityCreateNestedOneWithoutLocationInput {
  create?: MunicipalityCreateWithoutLocationInput | null;
  connectOrCreate?: MunicipalityCreateOrConnectWithoutLocationInput | null;
  connect?: MunicipalityWhereUniqueInput | null;
}

export interface MunicipalityCreateOrConnectWithoutLocationInput {
  where: MunicipalityWhereUniqueInput;
  create: MunicipalityCreateWithoutLocationInput;
}

export interface MunicipalityCreateWithoutLocationInput {
  id?: string | null;
  name: string;
  state: StateCreateNestedOneWithoutMunicipalitiesInput;
}

export interface MunicipalityListRelationFilter {
  every?: MunicipalityWhereInput | null;
  some?: MunicipalityWhereInput | null;
  none?: MunicipalityWhereInput | null;
}

export interface MunicipalityRelationFilter {
  is?: MunicipalityWhereInput | null;
  isNot?: MunicipalityWhereInput | null;
}

export interface MunicipalityWhereInput {
  AND?: MunicipalityWhereInput[] | null;
  OR?: MunicipalityWhereInput[] | null;
  NOT?: MunicipalityWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  state?: StateRelationFilter | null;
  stateId?: StringFilter | null;
  location?: LocationListRelationFilter | null;
}

export interface MunicipalityWhereUniqueInput {
  id?: string | null;
}

export interface NestedBoolFilter {
  equals?: boolean | null;
  not?: NestedBoolFilter | null;
}

export interface NestedDateTimeFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeFilter | null;
}

export interface NestedDateTimeNullableFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDateTimeNullableFilter | null;
}

export interface NestedDecimalFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDecimalFilter | null;
}

export interface NestedDecimalNullableFilter {
  equals?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
  not?: NestedDecimalNullableFilter | null;
}

export interface NestedEnumCommissionGoalTypeFilter {
  equals?: CommissionGoalType | null;
  in?: CommissionGoalType[] | null;
  notIn?: CommissionGoalType[] | null;
  not?: NestedEnumCommissionGoalTypeFilter | null;
}

export interface NestedEnumCommissionPaymentStatusFilter {
  equals?: CommissionPaymentStatus | null;
  in?: CommissionPaymentStatus[] | null;
  notIn?: CommissionPaymentStatus[] | null;
  not?: NestedEnumCommissionPaymentStatusFilter | null;
}

export interface NestedEnumCommissionTypeFilter {
  equals?: CommissionType | null;
  in?: CommissionType[] | null;
  notIn?: CommissionType[] | null;
  not?: NestedEnumCommissionTypeFilter | null;
}

export interface NestedEnumDocumentTypeFilter {
  equals?: DocumentType | null;
  in?: DocumentType[] | null;
  notIn?: DocumentType[] | null;
  not?: NestedEnumDocumentTypeFilter | null;
}

export interface NestedEnumEmployeesTypesFilter {
  equals?: EmployeesTypes | null;
  in?: EmployeesTypes[] | null;
  notIn?: EmployeesTypes[] | null;
  not?: NestedEnumEmployeesTypesFilter | null;
}

export interface NestedEnumLeadPaymentTypesFilter {
  equals?: LeadPaymentTypes | null;
  in?: LeadPaymentTypes[] | null;
  notIn?: LeadPaymentTypes[] | null;
  not?: NestedEnumLeadPaymentTypesFilter | null;
}

export interface NestedEnumPaymentStateFilter {
  equals?: PaymentState | null;
  in?: PaymentState[] | null;
  notIn?: PaymentState[] | null;
  not?: NestedEnumPaymentStateFilter | null;
}

export interface NestedFloatFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedFloatFilter | null;
}

export interface NestedIntFilter {
  equals?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
  not?: NestedIntFilter | null;
}

export interface NestedStringFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  not?: NestedStringFilter | null;
}

export interface NestedStringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  not?: NestedStringNullableFilter | null;
}

export interface PaymentScheduleCreateManyLoanInput {
  numeration: number;
  amountToPay: any;
  paidAmount: any;
  returnToCapital?: any | null;
  profit?: any | null;
  status: PaymentState;
  delayed?: boolean | null;
  dueDate: any;
  details?: string | null;
}

export interface PaymentScheduleCreateManyLoanInputEnvelope {
  data: PaymentScheduleCreateManyLoanInput[];
  skipDuplicates?: boolean | null;
}

export interface PaymentScheduleCreateNestedManyWithoutLoanInput {
  create?: PaymentScheduleCreateWithoutLoanInput[] | null;
  connectOrCreate?: PaymentScheduleCreateOrConnectWithoutLoanInput[] | null;
  createMany?: PaymentScheduleCreateManyLoanInputEnvelope | null;
  connect?: PaymentScheduleWhereUniqueInput[] | null;
}

export interface PaymentScheduleCreateNestedManyWithoutLoanPaymentsInput {
  create?: PaymentScheduleCreateWithoutLoanPaymentsInput[] | null;
  connectOrCreate?: PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput[] | null;
  connect?: PaymentScheduleWhereUniqueInput[] | null;
}

export interface PaymentScheduleCreateNestedOneWithoutCommissionPaymentInput {
  create?: PaymentScheduleCreateWithoutCommissionPaymentInput | null;
  connectOrCreate?: PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput | null;
  connect?: PaymentScheduleWhereUniqueInput | null;
}

export interface PaymentScheduleCreateOrConnectWithoutCommissionPaymentInput {
  where: PaymentScheduleWhereUniqueInput;
  create: PaymentScheduleCreateWithoutCommissionPaymentInput;
}

export interface PaymentScheduleCreateOrConnectWithoutLoanInput {
  where: PaymentScheduleWhereUniqueInput;
  create: PaymentScheduleCreateWithoutLoanInput;
}

export interface PaymentScheduleCreateOrConnectWithoutLoanPaymentsInput {
  where: PaymentScheduleWhereUniqueInput;
  create: PaymentScheduleCreateWithoutLoanPaymentsInput;
}

export interface PaymentScheduleCreateWithoutCommissionPaymentInput {
  numeration: number;
  amountToPay: any;
  paidAmount: any;
  returnToCapital?: any | null;
  profit?: any | null;
  status: PaymentState;
  delayed?: boolean | null;
  dueDate: any;
  details?: string | null;
  loan: LoanCreateNestedOneWithoutPaymentScheduleInput;
  loanPayments?: LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput | null;
}

export interface PaymentScheduleCreateWithoutLoanInput {
  numeration: number;
  amountToPay: any;
  paidAmount: any;
  returnToCapital?: any | null;
  profit?: any | null;
  status: PaymentState;
  delayed?: boolean | null;
  dueDate: any;
  details?: string | null;
  loanPayments?: LoanPaymentCreateNestedManyWithoutPaymentSchedulesInput | null;
}

export interface PaymentScheduleCreateWithoutLoanPaymentsInput {
  numeration: number;
  amountToPay: any;
  paidAmount: any;
  returnToCapital?: any | null;
  profit?: any | null;
  status: PaymentState;
  delayed?: boolean | null;
  dueDate: any;
  details?: string | null;
  loan: LoanCreateNestedOneWithoutPaymentScheduleInput;
}

export interface PaymentScheduleListRelationFilter {
  every?: PaymentScheduleWhereInput | null;
  some?: PaymentScheduleWhereInput | null;
  none?: PaymentScheduleWhereInput | null;
}

export interface PaymentScheduleRelationFilter {
  is?: PaymentScheduleWhereInput | null;
  isNot?: PaymentScheduleWhereInput | null;
}

export interface PaymentScheduleWhereInput {
  AND?: PaymentScheduleWhereInput[] | null;
  OR?: PaymentScheduleWhereInput[] | null;
  NOT?: PaymentScheduleWhereInput[] | null;
  id?: StringFilter | null;
  numeration?: IntFilter | null;
  amountToPay?: DecimalFilter | null;
  paidAmount?: DecimalFilter | null;
  returnToCapital?: DecimalFilter | null;
  profit?: DecimalFilter | null;
  status?: EnumPaymentStateFilter | null;
  delayed?: BoolFilter | null;
  dueDate?: DateTimeFilter | null;
  details?: StringNullableFilter | null;
  loan?: LoanRelationFilter | null;
  loanId?: StringFilter | null;
  loanPayments?: LoanPaymentListRelationFilter | null;
}

export interface PaymentScheduleWhereUniqueInput {
  id?: string | null;
}

export interface PersonalDataCreateManyLoanInput {
  id?: string | null;
  fullName: string;
  firstName: string;
  lastName: string;
}

export interface PersonalDataCreateManyLoanInputEnvelope {
  data: PersonalDataCreateManyLoanInput[];
  skipDuplicates?: boolean | null;
}

export interface PersonalDataCreateNestedManyWithoutLoanInput {
  create?: PersonalDataCreateWithoutLoanInput[] | null;
  connectOrCreate?: PersonalDataCreateOrConnectWithoutLoanInput[] | null;
  createMany?: PersonalDataCreateManyLoanInputEnvelope | null;
  connect?: PersonalDataWhereUniqueInput[] | null;
}

export interface PersonalDataCreateNestedOneWithoutAddressesInput {
  create?: PersonalDataCreateWithoutAddressesInput | null;
  connectOrCreate?: PersonalDataCreateOrConnectWithoutAddressesInput | null;
  connect?: PersonalDataWhereUniqueInput | null;
}

export interface PersonalDataCreateNestedOneWithoutBorrowerInput {
  create?: PersonalDataCreateWithoutBorrowerInput | null;
  connectOrCreate?: PersonalDataCreateOrConnectWithoutBorrowerInput | null;
  connect?: PersonalDataWhereUniqueInput | null;
}

export interface PersonalDataCreateNestedOneWithoutDocumentsInput {
  create?: PersonalDataCreateWithoutDocumentsInput | null;
  connectOrCreate?: PersonalDataCreateOrConnectWithoutDocumentsInput | null;
  connect?: PersonalDataWhereUniqueInput | null;
}

export interface PersonalDataCreateNestedOneWithoutEmployeeInput {
  create?: PersonalDataCreateWithoutEmployeeInput | null;
  connectOrCreate?: PersonalDataCreateOrConnectWithoutEmployeeInput | null;
  connect?: PersonalDataWhereUniqueInput | null;
}

export interface PersonalDataCreateOrConnectWithoutAddressesInput {
  where: PersonalDataWhereUniqueInput;
  create: PersonalDataCreateWithoutAddressesInput;
}

export interface PersonalDataCreateOrConnectWithoutBorrowerInput {
  where: PersonalDataWhereUniqueInput;
  create: PersonalDataCreateWithoutBorrowerInput;
}

export interface PersonalDataCreateOrConnectWithoutDocumentsInput {
  where: PersonalDataWhereUniqueInput;
  create: PersonalDataCreateWithoutDocumentsInput;
}

export interface PersonalDataCreateOrConnectWithoutEmployeeInput {
  where: PersonalDataWhereUniqueInput;
  create: PersonalDataCreateWithoutEmployeeInput;
}

export interface PersonalDataCreateOrConnectWithoutLoanInput {
  where: PersonalDataWhereUniqueInput;
  create: PersonalDataCreateWithoutLoanInput;
}

export interface PersonalDataCreateWithoutAddressesInput {
  id?: string | null;
  fullName: string;
  firstName: string;
  lastName: string;
  documents?: DocumentCreateNestedManyWithoutPersonalDataInput | null;
  phones?: PhoneCreateNestedManyWithoutPersonalDataInput | null;
  employee?: EmployeeCreateNestedManyWithoutPersonalDataInput | null;
  borrower?: BorrowerCreateNestedManyWithoutPersonalDataInput | null;
  Loan?: LoanCreateNestedOneWithoutAvalsInput | null;
}

export interface PersonalDataCreateWithoutBorrowerInput {
  id?: string | null;
  fullName: string;
  firstName: string;
  lastName: string;
  documents?: DocumentCreateNestedManyWithoutPersonalDataInput | null;
  phones?: PhoneCreateNestedManyWithoutPersonalDataInput | null;
  addresses?: AddressCreateNestedManyWithoutPersonalDataInput | null;
  employee?: EmployeeCreateNestedManyWithoutPersonalDataInput | null;
  Loan?: LoanCreateNestedOneWithoutAvalsInput | null;
}

export interface PersonalDataCreateWithoutDocumentsInput {
  id?: string | null;
  fullName: string;
  firstName: string;
  lastName: string;
  phones?: PhoneCreateNestedManyWithoutPersonalDataInput | null;
  addresses?: AddressCreateNestedManyWithoutPersonalDataInput | null;
  employee?: EmployeeCreateNestedManyWithoutPersonalDataInput | null;
  borrower?: BorrowerCreateNestedManyWithoutPersonalDataInput | null;
  Loan?: LoanCreateNestedOneWithoutAvalsInput | null;
}

export interface PersonalDataCreateWithoutEmployeeInput {
  id?: string | null;
  fullName: string;
  firstName: string;
  lastName: string;
  documents?: DocumentCreateNestedManyWithoutPersonalDataInput | null;
  phones?: PhoneCreateNestedManyWithoutPersonalDataInput | null;
  addresses?: AddressCreateNestedManyWithoutPersonalDataInput | null;
  borrower?: BorrowerCreateNestedManyWithoutPersonalDataInput | null;
  Loan?: LoanCreateNestedOneWithoutAvalsInput | null;
}

export interface PersonalDataCreateWithoutLoanInput {
  id?: string | null;
  fullName: string;
  firstName: string;
  lastName: string;
  documents?: DocumentCreateNestedManyWithoutPersonalDataInput | null;
  phones?: PhoneCreateNestedManyWithoutPersonalDataInput | null;
  addresses?: AddressCreateNestedManyWithoutPersonalDataInput | null;
  employee?: EmployeeCreateNestedManyWithoutPersonalDataInput | null;
  borrower?: BorrowerCreateNestedManyWithoutPersonalDataInput | null;
}

export interface PersonalDataListRelationFilter {
  every?: PersonalDataWhereInput | null;
  some?: PersonalDataWhereInput | null;
  none?: PersonalDataWhereInput | null;
}

export interface PersonalDataRelationFilter {
  is?: PersonalDataWhereInput | null;
  isNot?: PersonalDataWhereInput | null;
}

export interface PersonalDataWhereInput {
  AND?: PersonalDataWhereInput[] | null;
  OR?: PersonalDataWhereInput[] | null;
  NOT?: PersonalDataWhereInput[] | null;
  id?: StringFilter | null;
  fullName?: StringFilter | null;
  firstName?: StringFilter | null;
  lastName?: StringFilter | null;
  documents?: DocumentListRelationFilter | null;
  phones?: PhoneListRelationFilter | null;
  addresses?: AddressListRelationFilter | null;
  employee?: EmployeeListRelationFilter | null;
  borrower?: BorrowerListRelationFilter | null;
  Loan?: LoanRelationFilter | null;
  loanId?: StringNullableFilter | null;
}

export interface PersonalDataWhereUniqueInput {
  id?: string | null;
}

export interface PhoneCreateManyPersonalDataInput {
  number: string;
}

export interface PhoneCreateManyPersonalDataInputEnvelope {
  data: PhoneCreateManyPersonalDataInput[];
  skipDuplicates?: boolean | null;
}

export interface PhoneCreateNestedManyWithoutPersonalDataInput {
  create?: PhoneCreateWithoutPersonalDataInput[] | null;
  connectOrCreate?: PhoneCreateOrConnectWithoutPersonalDataInput[] | null;
  createMany?: PhoneCreateManyPersonalDataInputEnvelope | null;
  connect?: PhoneWhereUniqueInput[] | null;
}

export interface PhoneCreateOrConnectWithoutPersonalDataInput {
  where: PhoneWhereUniqueInput;
  create: PhoneCreateWithoutPersonalDataInput;
}

export interface PhoneCreateWithoutPersonalDataInput {
  number: string;
}

export interface PhoneListRelationFilter {
  every?: PhoneWhereInput | null;
  some?: PhoneWhereInput | null;
  none?: PhoneWhereInput | null;
}

export interface PhoneWhereInput {
  AND?: PhoneWhereInput[] | null;
  OR?: PhoneWhereInput[] | null;
  NOT?: PhoneWhereInput[] | null;
  id?: StringFilter | null;
  number?: StringFilter | null;
  personalDataId?: StringNullableFilter | null;
  personalData?: PersonalDataRelationFilter | null;
}

export interface PhoneWhereUniqueInput {
  id?: string | null;
  number?: string | null;
}

export interface RouteCreateNestedManyWithoutEmployeesInput {
  create?: RouteCreateWithoutEmployeesInput[] | null;
  connectOrCreate?: RouteCreateOrConnectWithoutEmployeesInput[] | null;
  connect?: RouteWhereUniqueInput[] | null;
}

export interface RouteCreateNestedManyWithoutLoantypesInput {
  create?: RouteCreateWithoutLoantypesInput[] | null;
  connectOrCreate?: RouteCreateOrConnectWithoutLoantypesInput[] | null;
  connect?: RouteWhereUniqueInput[] | null;
}

export interface RouteCreateNestedOneWithoutLocalitiesInput {
  create?: RouteCreateWithoutLocalitiesInput | null;
  connectOrCreate?: RouteCreateOrConnectWithoutLocalitiesInput | null;
  connect?: RouteWhereUniqueInput | null;
}

export interface RouteCreateOrConnectWithoutEmployeesInput {
  where: RouteWhereUniqueInput;
  create: RouteCreateWithoutEmployeesInput;
}

export interface RouteCreateOrConnectWithoutLoantypesInput {
  where: RouteWhereUniqueInput;
  create: RouteCreateWithoutLoantypesInput;
}

export interface RouteCreateOrConnectWithoutLocalitiesInput {
  where: RouteWhereUniqueInput;
  create: RouteCreateWithoutLocalitiesInput;
}

export interface RouteCreateWithoutEmployeesInput {
  id?: string | null;
  name: string;
  loantypes?: LoantypeCreateNestedManyWithoutRoutesInput | null;
  localities?: LocationCreateNestedManyWithoutRouteInput | null;
}

export interface RouteCreateWithoutLoantypesInput {
  id?: string | null;
  name: string;
  employees?: EmployeeCreateNestedManyWithoutRoutesInput | null;
  localities?: LocationCreateNestedManyWithoutRouteInput | null;
}

export interface RouteCreateWithoutLocalitiesInput {
  id?: string | null;
  name: string;
  employees?: EmployeeCreateNestedManyWithoutRoutesInput | null;
  loantypes?: LoantypeCreateNestedManyWithoutRoutesInput | null;
}

export interface RouteListRelationFilter {
  every?: RouteWhereInput | null;
  some?: RouteWhereInput | null;
  none?: RouteWhereInput | null;
}

export interface RouteRelationFilter {
  is?: RouteWhereInput | null;
  isNot?: RouteWhereInput | null;
}

export interface RouteWhereInput {
  AND?: RouteWhereInput[] | null;
  OR?: RouteWhereInput[] | null;
  NOT?: RouteWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  employees?: EmployeeListRelationFilter | null;
  loantypes?: LoantypeListRelationFilter | null;
  localities?: LocationListRelationFilter | null;
}

export interface RouteWhereUniqueInput {
  id?: string | null;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface StateCreateNestedOneWithoutMunicipalitiesInput {
  create?: StateCreateWithoutMunicipalitiesInput | null;
  connectOrCreate?: StateCreateOrConnectWithoutMunicipalitiesInput | null;
  connect?: StateWhereUniqueInput | null;
}

export interface StateCreateOrConnectWithoutMunicipalitiesInput {
  where: StateWhereUniqueInput;
  create: StateCreateWithoutMunicipalitiesInput;
}

export interface StateCreateWithoutMunicipalitiesInput {
  id?: string | null;
  name: string;
}

export interface StateRelationFilter {
  is?: StateWhereInput | null;
  isNot?: StateWhereInput | null;
}

export interface StateWhereInput {
  AND?: StateWhereInput[] | null;
  OR?: StateWhereInput[] | null;
  NOT?: StateWhereInput[] | null;
  id?: StringFilter | null;
  name?: StringFilter | null;
  municipalities?: MunicipalityListRelationFilter | null;
}

export interface StateWhereUniqueInput {
  id?: string | null;
}

export interface StringFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  mode?: QueryMode | null;
  not?: NestedStringFilter | null;
}

export interface StringNullableFilter {
  equals?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
  mode?: QueryMode | null;
  not?: NestedStringNullableFilter | null;
}

export interface UserCreateInput {
  id?: string | null;
  email: any;
  password: string;
  employee?: EmployeeCreateNestedOneWithoutUserInput | null;
}

export interface UserCreateNestedOneWithoutEmployeeInput {
  create?: UserCreateWithoutEmployeeInput | null;
  connectOrCreate?: UserCreateOrConnectWithoutEmployeeInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateOrConnectWithoutEmployeeInput {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutEmployeeInput;
}

export interface UserCreateWithoutEmployeeInput {
  id?: string | null;
  email: any;
  password: string;
}

export interface UserRelationFilter {
  is?: UserWhereInput | null;
  isNot?: UserWhereInput | null;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | null;
  OR?: UserWhereInput[] | null;
  NOT?: UserWhereInput[] | null;
  id?: StringFilter | null;
  email?: StringFilter | null;
  password?: StringFilter | null;
  employee?: EmployeeRelationFilter | null;
}

export interface UserWhereUniqueInput {
  id?: string | null;
  email?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
