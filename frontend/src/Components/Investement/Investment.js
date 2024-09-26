import React from 'react';

class Investment extends React.Component {
  render() {
    return (
      <div>
        <h2>Bank Details</h2>
        <table>
          <thead>
            <tr>
              <th>Bank Name</th>
              <th>Account Type</th>
              <th>Minimum Amount</th>
              <th>Maximum Amount</th>
              <th>Period</th>
              <th>Interest Rate (General)</th>
              <th>Interest Rate (Senior Citizens)</th>
              <th>Premature Withdrawals</th>
              <th>Loan</th>
              <th>Nomination</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SBI</td>
              <td>Term deposit</td>
              <td>Rs.1,000</td>
              <td>Rs.1.5 lakh</td>
              <td>5 - 10 years</td>
              <td>6.50% p.a.</td>
              <td>7.00% p.a.</td>
              <td>Not Available</td>
              <td>Not Available</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>HDFC Bank</td>
              <td>Special term deposit</td>
              <td>Rs.1,000</td>
              <td>Rs.1.5 lakh</td>
              <td>5 - 10 years</td>
              <td>6.50% p.a.</td>
              <td>7.00% p.a.</td>
              <td>Not Available</td>
              <td>Not Available</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>ICICI Bank</td>
              <td>Term deposit</td>
              <td>Rs.1,000</td>
              <td>Rs.1.5 lakh</td>
              <td>5 - 10 years</td>
              <td>6.50% p.a.</td>
              <td>7.00% p.a.</td>
              <td>Not Available</td>
              <td>Not Available</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>Axis Bank</td>
              <td>Term deposit</td>
              <td>Rs.1,000</td>
              <td>Rs.1.5 lakh</td>
              <td>5 - 10 years</td>
              <td>6.50% p.a.</td>
              <td>7.00% p.a.</td>
              <td>Not Available</td>
              <td>Not Available</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>Bank of Baroda</td>
              <td>Term deposit</td>
              <td>Rs.1,000</td>
              <td>Rs.1.5 lakh</td>
              <td>5 - 10 years</td>
              <td>6.50% p.a.</td>
              <td>7.00% p.a.</td>
              <td>Not Available</td>
              <td>Not Available</td>
              <td>Available</td>
            </tr>
            <tr>
              <td>Punjab National Bank</td>
              <td>Term deposit</td>
              <td>Rs.1,000</td>
              <td>Rs.1.5 lakh</td>
              <td>5 - 10 years</td>
              <td>6.50% p.a.</td>
              <td>7.00% p.a.</td>
              <td>Not Available</td>
              <td>Not Available</td>
              <td>Available</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default  Investment;