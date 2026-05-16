import { PolicyPage, PolicyH2 } from "@/components/policy-page";

export default function RefundPolicyPage() {
  return (
    <PolicyPage title="Refund Policy" lastUpdated="May 16, 2026">
      <p>
        This Refund Policy applies to all purchases made through JBSandbox,
        including subscriptions to MarkSpot.
      </p>

      <PolicyH2>Day Pass ($1, 24-hour access)</PolicyH2>
      <p>
        The Day Pass is a one-time charge providing access to MarkSpot for 24
        hours from the moment of purchase. Day Passes are non-refundable once
        issued, as access is granted immediately upon purchase. Day Passes do
        not auto-renew.
      </p>

      <PolicyH2>Monthly Subscription ($5/month)</PolicyH2>
      <p>
        You may request a refund within <strong>7 days</strong> of your initial
        subscription if MarkSpot does not work as described. After the initial
        7-day window, monthly subscription fees are non-refundable. Renewal
        charges are not eligible for refund — you may cancel at any time to
        prevent future charges (see our Cancellation Policy).
      </p>

      <PolicyH2>Annual Subscription ($50/year)</PolicyH2>
      <p>
        You may request a refund within <strong>14 days</strong> of your
        initial annual subscription if MarkSpot does not work as described.
        After the initial 14-day window, annual subscription fees are
        non-refundable. Renewal charges are not eligible for refund — you may
        cancel at any time to prevent future renewals.
      </p>

      <PolicyH2>Disputing a Charge</PolicyH2>
      <p>
        Before disputing a charge with your card issuer, please email us at{" "}
        <a
          href="mailto:billing@jbsandbox.co"
          className="font-medium underline"
        >
          billing@jbsandbox.co
        </a>{" "}
        with the subject line "Refund Request" and include the email address
        used at signup and the date of charge. We respond to all refund
        requests within 2 business days.
      </p>

      <PolicyH2>Chargeback Policy</PolicyH2>
      <p>
        If you initiate a chargeback without first contacting us, we reserve
        the right to terminate your account and refuse future service.
      </p>

      <PolicyH2>Contact</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          For refund questions:{" "}
          <a
            href="mailto:billing@jbsandbox.co"
            className="font-medium underline"
          >
            billing@jbsandbox.co
          </a>
        </li>
        <li>
          For technical issues:{" "}
          <a
            href="mailto:support@jbsandbox.co"
            className="font-medium underline"
          >
            support@jbsandbox.co
          </a>
        </li>
      </ul>
    </PolicyPage>
  );
}
