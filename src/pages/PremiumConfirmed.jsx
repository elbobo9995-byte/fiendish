import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import './PremiumConfirmed.css';

function randomTxnId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

const RECEIPT_ROWS = [
  { key: 'Plan',             val: 'Fiendish Premium' },
  { key: 'Payment Method',  val: 'Soul (Personal)' },
  { key: 'Status',          val: 'Collected' },
  { key: 'Effective',       val: 'Immediately and in perpetuity' },
];

export default function PremiumConfirmed() {
  const [txnId] = useState(randomTxnId);

  return (
    <div className="confirmed">
      <div className="confirmed__inner">

        <CheckCircle size={56} strokeWidth={1.75} className="confirmed__icon" />

        <div className="confirmed__heading">
          <h1 className="confirmed__headline">Payment Received.</h1>
          <p className="confirmed__subheadline">Welcome to Fiendish Premium.</p>
        </div>

        <div className="confirmed__receipt">
          {RECEIPT_ROWS.map((row) => (
            <div key={row.key} className="confirmed__receipt-row">
              <span className="confirmed__receipt-key">{row.key}</span>
              <span className="confirmed__receipt-val">{row.val}</span>
            </div>
          ))}
          <div className="confirmed__receipt-row">
            <span className="confirmed__receipt-key">Transaction ID</span>
            <span className="confirmed__receipt-val confirmed__txn-id">{txnId}</span>
          </div>
        </div>

        <div className="confirmed__body">
          <p>
            Your Premium features are now active. Your soul has been received, logged, and filed. You will not notice anything different. This is expected. If you do notice something different, this is also expected. Please do not contact support regarding the difference.
          </p>
          <p className="confirmed__address-note">
            A confirmation has been sent to an address you are not aware of.
          </p>
        </div>

        <Link to="/browse" className="btn btn-primary btn-lg confirmed__cta">
          Start Browsing
        </Link>

      </div>
    </div>
  );
}
