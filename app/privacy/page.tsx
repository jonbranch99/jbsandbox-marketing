import { PolicyPage, PolicyH2 } from "@/components/policy-page";

export default function PrivacyPage() {
  return (
    <PolicyPage title="Privacy Policy" lastUpdated="May 16, 2026">
      <p>
        This Privacy Policy explains how JBSandbox collects, uses, and protects
        your information when you use our services, including MarkSpot.
      </p>

      <PolicyH2>1. What We Collect</PolicyH2>
      <p>
        <strong>Account Information:</strong>
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Email address</li>
        <li>Name (if provided)</li>
        <li>Password (stored encrypted)</li>
      </ul>
      <p>
        <strong>Payment Information:</strong>
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Payment processing is handled by Stripe (stripe.com).
        </li>
        <li>We do not store credit card numbers on our servers.</li>
        <li>
          Stripe provides us with the last 4 digits of your card and your
          billing address for invoicing only.
        </li>
      </ul>
      <p>
        <strong>Usage Information:</strong>
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Pages viewed, features used, and approximate session duration
        </li>
        <li>
          Browser type, device type, and IP address (for security and analytics)
        </li>
      </ul>
      <p>
        <strong>Content You Upload:</strong>
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>PDFs you upload to MarkSpot for editing</li>
        <li>Annotations you create</li>
      </ul>

      <PolicyH2>2. How We Use Your Information</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>To provide and improve MarkSpot</li>
        <li>To process subscription payments</li>
        <li>
          To send service-related emails (account confirmations, billing
          receipts, important service notices)
        </li>
        <li>To respond to support requests</li>
        <li>To comply with legal obligations</li>
      </ul>

      <PolicyH2>3. How We Share Information</PolicyH2>
      <p>
        We do <strong>not</strong> sell your personal information. We share
        data only with:
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          <strong>Stripe</strong> — for payment processing
        </li>
        <li>
          <strong>Email service providers</strong> — to send transactional
          emails
        </li>
        <li>
          <strong>Analytics services</strong> — to understand site usage in
          aggregated, anonymized form
        </li>
        <li>
          <strong>Legal authorities</strong> — only when required by law
        </li>
      </ul>

      <PolicyH2>4. Uploaded PDF Content</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          Your uploaded PDFs are stored securely and accessible only to you.
        </li>
        <li>
          We do not view, scan, or use your PDFs to train AI models.
        </li>
        <li>You can delete uploaded PDFs at any time from your account.</li>
        <li>Deleted PDFs are permanently removed within 30 days.</li>
      </ul>

      <PolicyH2>5. Cookies and Tracking</PolicyH2>
      <p>We use cookies for:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Keeping you signed in</li>
        <li>Remembering your preferences</li>
        <li>Aggregated analytics</li>
      </ul>
      <p>
        You can disable cookies in your browser, though some features may not
        work properly.
      </p>

      <PolicyH2>6. Your Rights</PolicyH2>
      <p>You have the right to:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Access the data we hold about you</li>
        <li>Correct inaccurate data</li>
        <li>Delete your account and associated data</li>
        <li>Export your data</li>
      </ul>
      <p>
        To exercise any of these rights, email{" "}
        <a
          href="mailto:support@jbsandbox.co"
          className="font-medium underline"
        >
          support@jbsandbox.co
        </a>
        .
      </p>

      <PolicyH2>7. Data Security</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>All data is encrypted in transit (HTTPS) and at rest.</li>
        <li>
          Account passwords are hashed using industry-standard algorithms.
        </li>
        <li>We follow industry-standard security practices.</li>
        <li>
          No system is 100% secure, but we work to protect your data.
        </li>
      </ul>

      <PolicyH2>8. Children's Privacy</PolicyH2>
      <p>
        MarkSpot is not intended for users under 18. We do not knowingly
        collect personal information from children.
      </p>

      <PolicyH2>9. International Users</PolicyH2>
      <p>
        If you're outside the United States, your data may be processed in the
        United States. By using MarkSpot, you consent to this transfer.
      </p>

      <PolicyH2>10. Changes to This Policy</PolicyH2>
      <p>
        We may update this Privacy Policy from time to time. Material changes
        will be communicated via email or in-app notice.
      </p>

      <PolicyH2>11. Contact</PolicyH2>
      <p>
        For privacy questions:{" "}
        <a
          href="mailto:support@jbsandbox.co"
          className="font-medium underline"
        >
          support@jbsandbox.co
        </a>
      </p>
    </PolicyPage>
  );
}
