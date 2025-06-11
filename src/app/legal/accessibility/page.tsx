import LegalPageLayout from "@/components/LegalPageLayout";
import Head from "next/head";

const AccessibilityStatementPage = () => {
  return (
    <>
      <Head>
        <title>Accessibility Statement | DissolvaGum</title>
        <meta name="description" content="Read the accessibility statement for DissolvaGum, the world's first dissolvable, eco-friendly chewing gum. Learn about our commitment to accessibility and inclusion." />
        <meta property="og:title" content="Accessibility Statement | DissolvaGum" />
        <meta property="og:description" content="Read the accessibility statement for DissolvaGum, the world's first dissolvable, eco-friendly chewing gum. Learn about our commitment to accessibility and inclusion." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://dissolvagum.com/legal/accessibility" />
        <meta property="og:site_name" content="DissolvaGum" />
        <meta name="robots" content="index, follow" />
      </Head>
      <LegalPageLayout title="Accessibility Statement">
        <p>DissolvaGum is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>

        <h2>Measures to Support Accessibility</h2>
        <p>DissolvaGum takes the following measures to ensure accessibility of our website:</p>
        <ul>
          <li>Include accessibility as part of our mission statement.</li>
          <li>Integrate accessibility into our procurement practices.</li>
          <li>Provide continual accessibility training for our staff.</li>
          <li>Assign clear accessibility targets and responsibilities.</li>
        </ul>

        <h2>Feedback</h2>
        <p>We welcome your feedback on the accessibility of DissolvaGum. Please let us know if you encounter accessibility barriers:</p>
        <ul>
          <li>Phone: 279-245-3465</li>
          <li>Email: <a href="mailto:team@dissolvagum.com">team@dissolvagum.com</a></li>
        </ul>
        <p>We try to respond to feedback within 5 business days.</p>

        <h2>Technical Specifications</h2>
        <p>Accessibility of DissolvaGum Website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:</p>
        <ul>
          <li>HTML</li>
          <li>WAI-ARIA</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <p>These technologies are relied upon for conformance with the accessibility standards used.</p>

        <h2>Limitations and Alternatives</h2>
        <p>Despite our best efforts to ensure accessibility of DissolvaGum Website, there may be some limitations. Below is a description of known limitations, and potential solutions. Please contact us if you observe an issue not listed below.</p>
        <p>Known limitations for DissolvaGum Website:</p>
        <ul>
          <li><strong>3D Product Viewer:</strong> The interactive 3D product viewer on product pages may not be fully accessible to screen reader users or those who rely on keyboard navigation. We are working to provide alternative image galleries and detailed descriptions for all products. Please contact us if you need assistance.</li>
          <li><strong>Complex Animations:</strong> Some animations, while designed to be decorative, might be distracting for some users. We are working on providing mechanisms to pause or disable non-essential animations.</li>
        </ul>

        <h2>Assessment Approach</h2>
        <p>DissolvaGum assessed the accessibility of DissolvaGum Website by the following approaches:</p>
        <ul>
          <li>Self-evaluation</li>
          <li>Regular code reviews focusing on semantic HTML and ARIA attributes</li>
        </ul>
        <p>This statement was created on May 7, 2025.</p>
      </LegalPageLayout>
    </>
  );
};

export default AccessibilityStatementPage;

