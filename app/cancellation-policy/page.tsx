import { PolicyPage, PolicyH2 } from "@/components/policy-page";

export default function CancellationPolicyPage() {
  return (
    <PolicyPage title="Cancellation Policy" lastUpdated="May 16, 2026">
      <p>
        This Cancellation Policy explains how to cancel a MarkSpot subscription,
        when billing stops, and what happens to your account after cancellation.
      </p>

      <PolicyH2>How to Cancel</PolicyH2>
      <p>You can cancel your subscription at any time:</p>
      <ol className="list-decimal list-inside space-y-1">
        <li>Sign in to your MarkSpot account</li>
        <li>
          Go to <strong>Account Settings → Subscription → Cancel Subscription</strong>
        </li>
        <li>Confirm cancellation</li>
      </ol>
      <p>
        Alternatively, email{" "}
        <a
          href="mailto:billing@jbsandbox.co"
          className="font-medium underline"
        >
          billing@jbsandbox.co
        </a>{" "}
        with the subject line "Cancel Subscription" and the email address on
        your account. We process email cancellation requests within 1 business
        day.
      </p>

      <PolicyH2>When Billing Stops</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Cancellations take effect at the{" "}
          <strong>end of your current billing period</strong>.
        </li>
        <li>
          You retain full access to MarkSpot until the end of the period
          you've already paid for.
        </li>
        <li>No further charges will be made after cancellation.</li>
        <li>
          We do not pro-rate refunds for unused portions of a paid period.
        </li>
      </ul>

      <PolicyH2>What Happens After Cancellation</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Your annotated PDFs remain in your account for{" "}
          <strong>30 days</strong> after cancellation.
        </li>
        <li>After 30 days, account data may be permanently deleted.</li>
        <li>
          You can reactivate at any time within 30 days by signing back in and
          resubscribing — your data and history will be preserved.
        </li>
        <li>
          After 30 days, you'll need to start a new account if you wish to
          return.
        </li>
      </ul>

      <PolicyH2>Day Passes</PolicyH2>
      <p>
        Day Passes ($1, 24-hour access) cannot be canceled — they are
        one-time purchases. Access automatically expires 24 hours after
        purchase with no further action required.
      </p>

      <PolicyH2>Changing Plans</PolicyH2>
      <p>You can change between monthly and annual plans at any time:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Upgrading from monthly to annual:</strong> takes effect
          immediately, with credit applied for the unused portion of your
          monthly period.
        </li>
        <li>
          <strong>Downgrading from annual to monthly:</strong> takes effect at
          the end of your current annual period.
        </li>
      </ul>

      <PolicyH2>Contact</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          For cancellation help:{" "}
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
