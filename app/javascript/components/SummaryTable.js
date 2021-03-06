import React from 'react';
import { map } from 'lodash';

import { SummaryRow } from './SummaryRow';

export function SummaryTable({rebateForms, checked, checkIt, declined}) {
  return (
    <div className="pure-u-1">
      <table className="pure-table pure-table-bordered rebate-results-table">
        <thead>
          <tr>
            {checkIt && <th></th>}
            <th>Name</th>
            <th>{checkIt ? 'Valuation ID' : 'Address'}</th>
            {checkIt && <th>Application ID</th>}
            {declined && <th>Declined by</th>}
            <th></th>
          </tr>
        </thead>
        <tbody className='rebate-results-table-body'>
          { map(rebateForms, (rebateForm, key) => SummaryRow({
            rebateForm,
            key,
            checked,
            checkIt,
            declined
          }))}
        </tbody>
      </table>
    </div>
  );
}
