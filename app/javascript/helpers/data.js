
export const summaryTabs = [
  ['Not Signed', '/admin/rebate_forms'],
  ['Signed', '/admin/rebate_forms/signed'],
  ['Processed', '/admin/rebate_forms/processed'],
  ['Batched', '/admin/batches'],
  ['Declined', '/admin/rebate_forms/declined']
];

export const incomeRows = [
  [
    'nz_superannuation',
    'NZ Superannuation'
  ],
  [
    'other_superannuation',
    'Other superannuation'
  ],
  [
    'interest_dividends',
    'Interest or dividends'
  ],
  [
    'wages_salary',
    'Wages or salary'
  ],
  [
    'work_and_income_benefits',
    'Work and Income Benefits'
  ],
  [
    'business_profit',
    'Business profit (NET)'
  ],
  [
    'rental_income',
    'Rental income'
  ],
  [
    'overseas_income',
    'Overseas income (in $NZ)'
  ],
];

export const conditionalsFields = [
  {
    id: 'previous_address',
    label: 'Address',
    fullWidth: true
  },
  {
    id: 'settlement_date',
    label: 'Settlement date',
    type: 'date'
  },
  {
    id: 'rates_paid',
    label: 'Rates paid this rating year',
    type: 'number'
  },
  {
    id: 'rates_rebate_received',
    label: 'Rates rebate received?',
    type: 'radio'
  },
];
export const customerDetailFields = [
  {
    id: 'full_name',
    label: 'Name',
  },
  {
    id: 'total_rates',
    label: 'Total rates',
    type: 'number',
    step: 0.01
  },
  {
    id: 'location',
    label: 'Address',
    fullWidth: true
  },
  {
    id: 'email',
    label: 'Email (optional)',
    type: 'email',
  },
  {
    id: 'phone_number',
    label: 'Phone',
    type: 'tel',
  },
  {
    id: 'spouse_or_partner',
    label: 'Partner or joint homeowner',
    type: 'radio'
  },
  {
    id: 'dependants',
    label: 'Dependants',
    type: 'number',
    placeholder: '0',
  },
  {
    id: '50%_claimed_expenses',
    label: 'Mostly used for business',
    type: 'radio'
  },
  {
    id: 'occupation',
    label: 'Occupation',
  },
  {
    id: 'lived_in_property_1_July',
    label: 'Lived in property 1 July 2018',
    type: 'radio'
  },
  {
    id: 'moved_within_rating_year',
    label: 'Moved within rating year',
    type: 'radio'
  }
];

export const income_less_than_5kField = {
  id: 'income_less_than_5k',
  label: 'How did you support yourself on less than $5000?'
};
