/* eslint-disable react/no-unescaped-entities */
import MailText from '@/common/MailText';

interface TermType {
  title: string;
  content: React.ReactNode;
}

export const Terms: TermType[] = [
  {
    title: 'Introduction',
    content: (
      <>
        A1Quest ("we," "us," or "our”) is owned and operated by Kanaga Technology Limited
        ("Kanaga"). Kanaga is a company duly registered in Nigeria, with its address at
        No. 15 Kings Avenue, Ojodu, Lagos State, Nigeria. <br />
        A1Quest offers mathematics e-learning solutions for secondary students through its
        website and mobile application, referred to as the "Platform," "Services," or
        "Site." <br />
        These Terms of Use ("Terms") and any supplementary terms, policies, rules, and
        guidelines establish an agreement between you and A1Quest, superseding all prior
        written agreements. They govern your access to and use of our Services. "You,"
        "Your," or "User" refer to the individual visiting, accessing, browsing, or using
        our Platform.
        <br />
        Please carefully review these Terms before using the Platform, and feel free to
        reach out to us if you have any questions.
      </>
    ),
  },
  {
    title: 'Acceptance',
    content: (
      <>
        By accessing and using the Platform, you agree to be bound by these Terms. If you
        do not agree with these Terms, please do not use this Platform.
      </>
    ),
  },
  {
    title: 'Age Restriction',
    content: (
      <>
        <b>3.1.</b> The content on this Platform is made for persons between the ages of
        10 and 18, secondary school students, and other categories of persons. All users
        of this Platform below 18 ("Minor") must have a parent or legal guardian complete
        the registration and subscription process and provide consent for the user to
        access and use the Platform. <br />
        <b>3.2.</b> By using the Platform, You represent and warrant that you have the
        legal right and capacity to agree to these Terms. If you are under the age of 18,
        you confirm that you have obtained parental or guardian consent to use the
        Platform. <br />
        <b>3.3.</b> As the Parent/Guardian, You are solely responsible for the following:
        <div className='px-5'>
          3.3.1. Subscribing to the Platform on behalf of the Minor. <br />
          3.3.2. Providing accurate and complete registration information. <br />
          3.3.3. Supervising and monitoring the Minor's activities on the Platform. <br />
          3.3.4. Ensuring that the Minor's use of the Platform complies with these Terms.
        </div>
        <b>3.4.</b> Verification of the identity of the Parent/Guardian and their
        relationship with the Minor may be necessary. Failure to comply with this
        requirement may lead to the denial of access to the Platform, including the
        suspension or termination of Your account.
      </>
    ),
  },
  {
    title: 'Services Overview',
    content:
      'This Platform allows users to access mathematics solution materials such as lessons, quizzes, tests, assignments, and other learning resources. Once users complete the registration process and subscribe to access specific content, such content and related materials will be made available to them. Users will also receive notifications about any new features available on the Platform, along with the necessary steps or conditions for activating these features, when applicable.',
  },
  {
    title: 'Content',
    content: (
      <>
        <b>5.1.</b> Audio clips, video clips, study guides, e-books, quizzes, assessments,
        assignments, games, interactive simulations, news articles, photographs, images,
        and illustrations are collectively referred to as the "Content,” on this Site.
        They are intended for your personal and non-commercial use. The Content, is
        protected by copyright and is either owned by A1Quest or controlled by the party
        credited as the content provider. <br />
        <b>5.2.</b> You agree to not engage in the following:
        <div className='px-5'>
          5.2.1. Use any Content accessible through the Platform in a manner that
          infringes upon our copyrights, trademarks, patents, trade secrets, or other
          proprietary rights. <br />
          5.2.2. Upload files that contain viruses, malware, worms, corrupted files, or
          any other software or programs that might harm the operation of our systems.
          <br />
          5.2.3. Alter or erase copyright management information, such as author
          attributions, legal notices, or other indications of the moral or intellectual
          property rights of A1Quest or that of others, as well as proprietary
          designations or source labels for software or other materials contained in an
          uploaded file on the Platform. <br />
          5.2.4. Use automated tools or processes to manipulate the platform's traffic,
          access, copy, or monitor its content, or attempt to obtain content, documents,
          or information through any means not explicitly provided by the platform. <br />
          5.2.5. Engage in actions that impede or hinder other Users from using and
          enjoying the Platform. <br />
          5.2.6. Violate any code of conduct, guidelines specific to a particular Service
          or Product, or any applicable laws or regulations. <br />
          5.2.7. Use, download, copy, or provide (whether for a fee or not) to any
          individual or entity any directory of Users of the Services, user information,
          or any part thereof.
        </div>
        <b>5.3.</b> We maintain the right to review posts, feedback, and updates submitted
        to this Platform by any User and to eliminate any materials posted for prohibited
        purposes, along with suspending the respective User. <br />
        <b>5.4.</b> The Site may contain hyperlinks to third-party websites and resources
        ("Linked Content"). It should be noted that A1Quest exercises no control,
        endorsement, sponsorship, recommendation, or liability for any of the Linked
        Content. Therefore, we are not responsible for the accessibility of these external
        resources, content, services, or privacy practices. If you have any concerns about
        any of the Linked Content, please direct your inquiries to the respective website
        or source. Please confirm if there will be any linked content, now or in the
        future.
      </>
    ),
  },
  {
    title: 'Registration and Security',
    content: (
      <>
        To access the Content on this Site, you need to register and create your login
        information. You are responsible for keeping your password confidential. If you
        become aware of any unauthorised account access or suspect a security breach,
        including password loss, theft, or unauthorised disclosure, kindly contact us at{' '}
        <MailText />
      </>
    ),
  },
  {
    title: 'Fees',
    content: (
      <>
        Your subscription to the Platform or Services will be activated when you pay by
        the means provided on the Platform. Our prices are subject to change, and in the
        event that the listed price for a product has changed, you will be notified prior
        to processing your order. You agree to pay all applicable taxes related to your
        use of our Services.
      </>
    ),
  },
  {
    title: 'User Conduct',
    content: (
      <>
        You agree to access and use our Service for only lawful purposes. You are
        responsible for knowing and adhering to all applicable laws, statutes, rules, and
        regulations when using our Service. including these Terms and our Privacy Policy.
      </>
    ),
  },
  {
    title: 'Account Closure and Suspension',
    content: (
      <>
        <b>9.1.</b> Your account may be suspended, restricted, or terminated, and our
        Services may be suspended or your account closed without any liability under the
        following circumstances:
        <div className='px-5'>
          9.1.1. In response to a request from you. <br />
          9.1.2. If you inform us of the loss or theft of your device, or if your PIN or
          password has been compromised, we will suspend or close your account. <br />
          9.1.3. If there are grounds to suspect that your account is being used for
          fraudulent, negligent, or illegal activities. <br />
          9.1.4. If necessary to comply with legal requirements or regulatory obligations,
          we may close your account, restrict account activity, or suspend access. <br />
          9.1.5. If we have valid reasons to believe that you are violating our terms,
          attempting to compromise our systems, unreasonably disrupting our services, or
          acting in a manner that safeguards our interests, we may close your account.
          <br />
          9.1.6. Entering an incorrect PIN or password on three (3) consecutive occasions
          will result in your account access being locked. You can request access
          restoration by contacting customer service and verifying your identity with a
          customer service representative.
        </div>
        <b>9.2.</b> We will not be responsible for any direct, indirect, incidental, or
        specific damages arising from your actions or omissions, or those of any third
        party for whom you bear responsibility.
      </>
    ),
  },
  {
    title: 'Intellectual Property',
    content: (
      <>
        A1Quest and/or its licensors own the intellectual property rights to all Content,
        trade names, logos, and other intellectual property on the Platform. We do not
        grant you any right, licence, title, or interest in any of the intellectual
        property rights or Content, other than those expressly mentioned in this
        Agreement. Therefore, you are not authorized to copy, reverse engineer, decompile,
        disassemble, modify, republish, or create derivative works from the Content on
        other websites without obtaining our permission. You must seek our permission to
        use any of the Content or intellectual property rights.
      </>
    ),
  },
  {
    title: 'Notices',
    content: (
      <>
        <b>11.1.</b> The address you provide to us in the registration form serves as your
        designated address for receiving notifications and serving legal documents. It is
        your responsibility to promptly inform us of any changes to your physical, postal,
        email address, or telephone number. <br />
        <b>11.2.</b> We may send notifications to the email address specified in the
        registration form. These communications will be deemed to have been received by
        you unless proven otherwise. Any correspondence sent to you via postal mail will
        be considered delivered within seven (7) days of the mailing date. Similarly, any
        correspondence sent to you via fax or email will be deemed delivered on the day it
        was transmitted. <br />
        <b>11.3.</b> Please send any legal notices to us at our chosen address below:{' '}
        <br />
        Company Address: No. 15 Kings Avenue, Ojodu, Lagos State, Nigeria. <br />
        Phone number:+234 000 0000 000 <br />
        Email: <MailText />
      </>
    ),
  },
  {
    title: 'Representatives and Warranties',
    content: (
      <>
        ALL CONTENT IS PROVIDED "AS IS” WITHOUT WARRANTY, EXPRESS OR IMPLIED, INCLUDING,
        WITHOUT LIMITATION, WARRANTIES OF TITLE OR IMPLIED WARRANTIES OF MERCHANTABILITY
        OR FITNESS FOR A PARTICULAR PURPOSE. YOU HEREBY ACKNOWLEDGE THAT USE OF THE SITE
        IS AT YOUR SOLE RISK. <br />
        WE EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES AND CONDITIONS, INCLUDING ANY IMPLIED
        WARRANTY OR CONDITION OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
        AVAILABILITY, SECURITY, TITLE, AND NON-INFRINGEMENT OF INTELLECTUAL PROPERTY
        RIGHTS, WITHOUT LIMITING THE GENERALITY OF THE FOREGOING. WE MAKE NO WARRANTY THAT
        OUR PLATFORM AND SERVICES WILL MEET YOUR REQUIREMENTS OR THAT OUR PLATFORM WILL
        REMAIN FREE FROM ANY INTERRUPTION, BUGS, INACCURACIES, OR ERROR-FREE <br />
        YOUR USE OF OUR SERVICES IS AT YOUR OWN RISK, AND YOU ALONE WILL BE RESPONSIBLE
        FOR ANY DAMAGE THAT RESULTS IN LOSS OF DATA OR DAMAGE TO YOUR COMPUTER SYSTEM. NO
        ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM OUR WEBSITE,
        APPLICATION, OR OUR SERVICES WILL CREATE ANY WARRANTY OR CONDITION NOT EXPRESSLY
        STATED. <br />
        By using our Service, you represent and warrant that you have the capacity and
        authority to provide the information you submit, that it is accurate and complete,
        and that you hereby authorise use of all or any part of such information for any
        purposes in connection with this competition.
      </>
    ),
  },
  {
    title: 'Idemnity',
    content: (
      <>
        <b>13.1.</b> You agree to indemnify and hold A1Quest, its subsidiaries,
        affiliates, licensors, content providers, service providers, employees, agents,
        officers, directors, and contractors (the Indemnified Parties) harmless from any
        breach of these Terms by you. <br />
        <b>13.2.</b> You agree that the Indemnified Parties will have no liability in
        connection with any such breach, and you agree to indemnify any and all resulting
        losses, damages, judgements, awards, costs, expenses, and attorneys’ fees of the
        Indemnified Parties. <br />
        <b>13.3.</b> You agree to indemnify and hold the indemnified parties harmless from
        and against any claims brought by third parties arising out of your use of our
        service.
      </>
    ),
  },
  {
    title: 'Limitation of Liability',
    content: (
      <>
        A1Quest, ITS SUBSIDIARIES, AFFILIATES, LICENSORS, SERVICE PROVIDERS, CONTENT
        PROVIDERS, AND EMPLOYEES, AGENTS, OFFICERS, AND DIRECTORS WILL NOT BE LIABLE FOR
        ANY INCIDENTAL, DIRECT, INDIRECT, PUNITIVE, ACTUAL, CONSEQUENTIAL, SPECIAL,
        EXEMPLARY, OR OTHER DAMAGES, INCLUDING LOSS OF REVENUE OR INCOME, PAIN AND
        SUFFERING, EMOTIONAL DISTRESS, OR SIMILAR DAMAGES, EVEN IF A1QUEST HAS BEEN
        ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
      </>
    ),
  },
  {
    title: 'Termination',
    content: (
      <>
        <b>15.1.</b> You may terminate this agreement and your account by giving us
        notice. Upon verification, your account will be terminated. <br />
        <b>15.2.</b> We may terminate this agreement to you in the following
        circumstances:
        <br />
        <div className='px-5'>
          15.2.1. If necessary to comply with legal requirements or regulatory
          obligations, we may close your account, restrict account activity, or suspend
          access.
          <br />
          15.2.2. If we have valid reasons to believe that you are violating our terms,
          attempting to compromise our systems, unreasonably disrupting our services, or
          acting in a manner that safeguards our interests, we may close your account.
          <br />
          15.2.3. If the information you provide, or if we have reasonable grounds to
          suspect that the information you provide is untrue, incorrect, or breaches these
          Terms or any Additional Terms,
          <br />
        </div>
        <b>15.3.</b> Any suspension or termination will not release you from your
        responsibilities to us, which include any payment obligations, and you will not be
        eligible for a reimbursement of any payments.
      </>
    ),
  },
  {
    title: 'Cookies',
    content:
      'Cookies are small data files that are downloaded to your computer or mobile device. It allows us to recall your account log-in details, IP addresses, site traffic, number of visits, and date and time of visits. You can read our Cookie Policy.',
  },
  {
    title: 'Privacy Policy',
    content:
      'Please read our Privacy Policy to understand how we use your personal data and the steps we take to protect it',
  },
  {
    title: 'Breach of Terms',
    content: (
      <>
        <b>18.1.</b> In the event of a breach of these Terms, we retain the authority to
        take appropriate measures to address the violation. This may include suspending or
        restricting your access to the Platform, blocking computers associated with your
        IP address from accessing the Platform, contacting your internet service provider
        to request access restrictions, and initiating legal action against you. <br />
        <b>18.2.</b> We maintain the right to investigate any suspected violations of
        these Terms and to fully cooperate with law enforcement authorities or court
        orders that request or mandate the disclosure of the identity of any individual
        who is believed to have posted materials that contravene THESE TERMS.
        <br />
        BY ACCEPTING THESE TERMS, YOU WAIVE AND HOLD HARMLESS A1QUEST FROM ANY CLAIMS
        RESULTING FROM ANY ACTION TAKEN BY A1QUEST DURING OR AS A RESULT OF ITS
        INVESTIGATIONS AND/OR FROM ANY ACTIONS TAKEN AS A CONSEQUENCE OF INVESTIGATIONS BY
        EITHER A1QUEST OR LAW ENFORCEMENT AUTHORITIES.
      </>
    ),
  },
  {
    title: 'Governing Laws',
    content:
      'These Terms are governed by the laws of the Federal Republic of Nigeria. You agree to submit to the jurisdiction of Nigerian courts for resolution of disputes.',
  },
  {
    title: 'General',
    content: (
      <>
        <b>20.1.</b> These Terms supersede any previous written or oral agreements between
        you and Kanga regarding the Service. <br />
        <b>20.2.</b> Any feedback, comments, or suggestions you provide to us are entirely
        voluntary, and we reserve the right to use such feedback, comments, or suggestions
        in any way we deem appropriate, with no obligation to you.
        <br />
        <b>20.3.</b> If any part of these Terms is unlawful, void, or unenforceable, that
        part will be deemed severable and will not affect the validity and enforceability
        of any remaining provisions. <br />
        <b>20.4.</b> Our failure to enforce any right or provision of these Terms will not
        be deemed a waiver of such right or provision. <br />
        <b>20.5.</b> For the purposes of these Terms, ‘force majeure’ means any
        circumstances not foreseeable at the date of these Terms and not within reasonable
        control of A1Quest, including any action taken by a governmental or public
        authority of any kind, any civil commotion or disorder, riot, invasion, war,
        threat of war, preparation for war, any accident, fire, explosion, storm, flood,
        earthquake, pandemic, epidemic, or any other natural physical disaster. If and to
        the extent that A1Quest is prevented or delayed by force majeure, A1Quest shall
        notify you specifying the nature, extent, effect, and likely duration of the
        circumstances constituting the force majeure and shall be relieved of any
        liability for failure to carry out its undertakings during such a force majeure
        event.
      </>
    ),
  },
  {
    title: 'Reviews, Updates and Ammendments',
    content:
      'We reserve the right to update, modify, change, or revise this from time to time. The changes will not be retroactive, and the most current version of the Terms will always be on this page and will continue to govern our relationship with you. We advise that you check this page often, referring to the date of the last modification on the page. By continuing to use our services after the changes become effective, you agree to be bound by the revised Terms.',
  },
  {
    title: 'Complaints',
    content: (
      <>
        If you have any complaints about us or our Service, you can contact us at{' '}
        <MailText />
      </>
    ),
  },
];
