import { PolicyPage, PolicyH2 } from "@/components/policy-page";

export default function TermsPage() {
  return (
    <PolicyPage title="Terms of Service" lastUpdated="[INSERT DATE]">
      <p>
        Welcome to JBSandbox. By accessing or using MarkSpot or any other
        service operated by JBSandbox ("we," "us," "our"), you agree to
        these Terms of Service.
      </p>

      <PolicyH2>1. Who We Are</PolicyH2>
      <p>
        JBSandbox is a software studio that provides browser-based productivity
        tools. Our flagship product is MarkSpot, a web-based PDF editor.
      </p>

      <PolicyH2>2. Accounts</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>To use most features, you'll need to create an account.</li>
        <li>
          You are responsible for maintaining the security of your account
          credentials.
        </li>
        <li>You must be at least 18 years old to create an account.</li>
        <li>One account per person; sharing accounts is prohibited.</li>
      </ul>

      <PolicyH2>3. Subscriptions and Billing</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          We offer Day Passes ($1, 24-hour access), Monthly subscriptions
          ($5/month), and Annual subscriptions ($50/year).
        </li>
        <li>
          Monthly and annual subscriptions automatically renew at the end of
          each billing period until canceled.
        </li>
        <li>We will charge your payment method on file for each renewal.</li>
        <li>Day Passes are one-time charges and do not renew.</li>
        <li>
          See our Refund Policy and Cancellation Policy for more details.
        </li>
      </ul>

      <PolicyH2>4. Acceptable Use</PolicyH2>
      <p>You agree not to:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Use MarkSpot to upload or annotate any unlawful content.</li>
        <li>
          Reverse-engineer, decompile, or attempt to extract source code.
        </li>
        <li>
          Use MarkSpot to violate the intellectual property rights of others.
        </li>
        <li>Use the service to send spam or commit fraud.</li>
        <li>
          Resell access to MarkSpot without our written permission.
        </li>
      </ul>

      <PolicyH2>5. Your Content</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          You retain ownership of all PDFs and annotations you upload to
          MarkSpot.
        </li>
        <li>
          You grant us a limited license to process your content solely to
          provide the service.
        </li>
        <li>We do not view, sell, or share your uploaded content.</li>
        <li>
          See our Privacy Policy for full details on data handling.
        </li>
      </ul>

      <PolicyH2>6. Intellectual Property</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          The MarkSpot software, JBSandbox brand, and all related materials
          are owned by JBSandbox.
        </li>
        <li>
          These Terms do not grant you any rights to our trademarks, logos, or
          proprietary technology.
        </li>
      </ul>

      <PolicyH2>7. Service Availability</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          We strive for high uptime but do not guarantee uninterrupted service.
        </li>
        <li>
          We may modify, suspend, or discontinue any feature with reasonable
          notice.
        </li>
      </ul>

      <PolicyH2>8. Limitation of Liability</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>MarkSpot is provided "as is" without warranty of any kind.</li>
        <li>
          To the maximum extent allowed by law, JBSandbox is not liable for
          indirect, incidental, or consequential damages.
        </li>
        <li>
          Our total liability is limited to the amount you've paid us in the
          12 months preceding the claim.
        </li>
      </ul>

      <PolicyH2>9. Termination</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>
          You may terminate your account at any time by canceling your
          subscription.
        </li>
        <li>
          We may terminate accounts that violate these Terms with or without
          notice.
        </li>
      </ul>

      <PolicyH2>10. Changes to Terms</PolicyH2>
      <ul className="list-disc list-inside space-y-1">
        <li>We may update these Terms from time to time.</li>
        <li>
          Material changes will be communicated via email or in-app notice.
        </li>
        <li>
          Continued use after changes constitutes acceptance of the updated
          Terms.
        </li>
      </ul>

      <PolicyH2>11. Governing Law</PolicyH2>
      <p>
        These Terms are governed by the laws of the State of [INSERT YOUR
        STATE], United States, without regard to conflict-of-law principles.
      </p>

      <PolicyH2>12. Contact</PolicyH2>
      <p>
        For questions about these Terms:{" "}
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
