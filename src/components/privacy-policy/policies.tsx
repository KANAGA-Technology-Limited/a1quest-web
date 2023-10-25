import MailText from '@/common/MailText';

/* eslint-disable react/no-unescaped-entities */
interface PolicyType {
  title: string;
  content: React.ReactNode;
}

export const Policies: PolicyType[] = [
  {
    title: 'Introduction',
    content: (
      <>
        A1Quest is operated by Kanaga Technology Limited ("Kanaga," "we," "us," or "our"),
        a company registered in Nigeria with its office at No. 15 Kings Avenue, Ojodu,
        Lagos. Kanaga provides Mathematics e-learning solutions for secondary students
        through its website and mobile application (referred to as "Services", "Platform"
        or "Site").
        <br />
        At Kanaga, we are committed to protecting your personal information and handling
        them with care and confidentiality, and in compliance with applicable data
        protection laws.
      </>
    ),
  },
  {
    title: 'About this policy',
    content: (
      <>
        This Privacy Policy ("Policy") describes the type of personal information we
        collect about you, the reasons for collection, the parties we may share the
        personal information with, the security measures we have in place, your rights and
        choices, and how to contact us with questions or concerns about our data
        protection practices.
        <br />
        This Policy applies to our website, mobile application, products and services and
        does not apply to any other website, mobile application, products, or services
        that are not under our control, even if you access them through our website or
        mobile application.
      </>
    ),
  },
  {
    title: 'Consent',
    content: (
      <>
        By using or accessing our Services, you agree to the you agree to the terms and
        conditions of this Privacy Policy. You have the option of withdrawing your consent
        at any time by contacting us at <MailText />.
      </>
    ),
  },
  {
    title: 'The personal information we collect about you',
    content:
      'When you access or use our Services, we may collect the following information about you; name, username, password, telephone number, address, gender, email address, country, class, profile image, government-issued identity number and document, internet protocol (IP) address, device identifiers or unique identifiers, location, other device-related information.',
  },
  {
    title: 'Why we collect your personal information',
    content: (
      <>
        We collect your personal information for the following reasons:
        <ol type='a' className='list-[lower-alpha] list-inside'>
          <li>To provide you with our Services.</li>
          <li>To create and manage your account.</li>
          <li>For user authentication.</li>
          <li>To verify your identity and/or location.</li>
          <li>To manage your relationship with us.</li>
          <li>
            To communicate with you and provide feedback on test, quizzes, assignments,
            and assessments.
          </li>
          <li>
            To improve and update course materials for better engagement and learning
            outcomes.
          </li>
          <li>
            To track and record student's progress, grades, and achievements and send
            reports.
          </li>
          <li>
            To inform you about our products, services, offers, programs and promotions.
          </li>
          <li>
            To improve our Services, Platform features and enhance your experience on our
            Platform.
          </li>
          <li>To protect against unauthorized transactions, and malicious activities.</li>
          <li>
            To send newsletters, technical notices, updates, security alerts, information
            about events and conferences, and administrative messages to you.
          </li>
          <li>
            To carry out marketing analysis and allow you to participate in surveys and
            other forms of market research and promotions.
          </li>
          <li>To manage billing and payment securely and accurately.</li>
          <li>To comply with legal and regulatory obligations.</li>
          <li>To carry out data analysis and audits.</li>
          <li>To establish, exercise and defend legal rights.</li>
          <li>
            For other purposes for which we will provide specific notice at the time of
            collection.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: 'Legal basis for the processing of your personal information',
    content: (
      <>
        Your personal information will be processed on the following lawful grounds:
        <ol type='a' className='list-[lower-alpha] list-inside'>
          <li>
            You have given consent to the processing of your personal information for one
            or more specific purposes.
          </li>
          <li>
            The processing is necessary for the performance of a contract which you are a
            party or in order to take steps at your request prior to entering into a
            contract.
          </li>
          <li>Processing is necessary for compliance with a legal obligation.</li>
          <li>
            Processing is necessary in order to protect your vital interests or those of
            another person.
          </li>
          <li>
            Processing is necessary for the performance of a task carried out in the
            public interest or in exercise of an official public mandate vested in us.
          </li>
          <li>
            For legitimate interests pursued by us or any third party we disclose your
            personal information to.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: 'How we share and disclose your personal information',
    content: (
      <>
        We may share your personal information with our employees, partners, affiliates,
        customers, service providers, vendors, contractors, law enforcement, regulatory
        and government agencies, and also with third parties that you have given
        permission to access your personal data.
        <br />
        We may also share your personal information with third parties if we plan to make
        significant changes to our business structure, like a reorganization, merger,
        sale, joint venture, assignment, transfer, change of control, or any other major
        change involving our business, assets, or stock.
      </>
    ),
  },
  {
    title: 'Transfer of personal information to a foreign country',
    content: (
      <>
        We may store and process your personal information in countries outside Nigeria,
        where we operate and also engage service providers in those countries. Your
        personal information will only be transferred to a recipient in a country that has
        adequate data protection laws, rules, contracts, a code of conduct, or
        certification mechanisms that provides adequate level of protection. If we need to
        transfer your personal information to a country without adequate data protection
        laws, we will do so under the following conditions:
        <ol type='a' className='list-[lower-alpha] list-inside'>
          <li>If you agree to the transfer.</li>
          <li>
            If the transfer is necessary for a contract between you and Kanaga, or for
            steps taken before making a contract.
          </li>
          <li>
            If the transfer benefits you, and your consent is not required, or you would
            likely consent if we asked.
          </li>
          <li>If the transfer is for public interest reasons.</li>
          <li>If the transfer is needed to establish or defend legal claims.</li>
          <li>
            If the transfer is necessary to protect your interest or that of others when
            you cannot give consent, either physically or legally.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: 'How we protect your personal information',
    content: (
      <>
        We have implemented physical, technical, administrative, and organizational
        controls to protect the integrity and confidentiality of your personal information
        and to reduce the risks of loss, misuse, unauthorized access, disclosure, and
        alteration. Some of the security safeguards we have implemented include, but are
        not limited to, data encryption, firewalls, physical access controls to our
        building and files, and only granting access to a limited number of personnel who
        need access to the information to perform their duties.
        <br />
        We run a secure security architecture across applications, software, and processes
        to secure data from outsiders and abuse from insiders, and we use advanced tools
        to secure data at rest and in transit. We comply with a management system for
        business continuity, quality management, information security, and payment cards.
        We have also taken additional measures to ensure our system complies with industry
        information security standards.
      </>
    ),
  },
  {
    title: 'How we store your personal information',
    content: (
      <>
        We retain your personal information for the duration of your relationship with us
        and for such other periods as are necessary to comply with legal and regulatory
        obligations, for fraud monitoring, detection, and prevention, to verify your
        information with relevant government agencies or institutions, and for the period
        within which a person could bring a legal claim against us.
        <br />
        We will keep your personal information for as long as it is required and in
        accordance with the purpose it is being processed for, or for tax, accounting,
        regulatory, or legal purposes. We will keep the personal information for a period
        which enables us to handle or respond to any complaints, queries or concerns
        relating to our relationship with you. We may retain your personal information for
        a longer period in the event of a complaint or if We reasonably believe there is a
        prospect of litigation in respect to our relationship with you.
        <br />
        You may notify us whenever you no longer wish to hear from us and We will keep
        minimum information upon receipt of such notice to ensure that no future contact
        is made by us. We will actively review the personal information We hold and delete
        it securely, or in some cases anonymize it, when there is no longer a legal,
        business or user need for it to be retained.
      </>
    ),
  },
  {
    title: 'Information automatically collected from your computer',
    content: (
      <>
        <ol type='a' className='list-[lower-alpha] list-inside'>
          <li>
            Log files/IP addresses: When you visit the Site, our web server automatically
            records your IP address. This IP address is not linked to any of your personal
            information. We use IP addresses to help us administer the Site and to collect
            demographic information for aggregation purposes.{' '}
          </li>
          <li>
            Other technologies including pixel tags, web beacons, and clear GIFs: These
            may be used in connection with some Site pages, downloadable mobile
            applications, and HTML-formatted email messages to measure the effectiveness
            of our communications, the success of our marketing campaigns, to compile
            statistics about usage and response rates, to personalize/tailor your
            experience while engaging with us online and offline, for fraud detection and
            prevention, for security purposes, for advertising, and to assist us in
            resolving account holders' questions regarding the use of our Platform.
          </li>
          <li>
            Aggregated and De-identified Data: Aggregated and De-identified Data are data
            that we may create or compile from various sources, including but not limited
            to accounts and transactions. This information, which does not identify
            individual account holders, may be used for our business purposes, which may
            include offering products or services, research, marketing or analyzing market
            trends, and other purposes consistent with applicable laws.
          </li>
          <li>
            Through your browser or device: Certain information is collected by most
            browsers and/or through your device, such as your Media Access Control (MAC)
            address, device type, screen resolution, operating system version, and
            internet browser type and version. We use this information to ensure Sites
            function properly, for fraud detection and prevention, and security purposes.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: 'Your choices and rights',
    content: (
      <>
        You are entitled to a confirmation from us if we are storing or processing your
        personal information. If your personal information is being stored or processed by
        us, you can exercise the following rights:
        <ol type='a' className='list-[lower-alpha] list-inside'>
          <li>
            To request information about the processing of your personal data, such as the
            purposes of processing, categories of personal information concerned,
            recipients or categories of recipients to whom the personal information have
            been or will be disclosed, the period for which the personal information will
            be stored, or the criteria used to determine that period, etc.
          </li>
          <li>
            To obtain a copy of your personal information in a commonly used electronic
            format, except to the extent that providing such data would place unreasonable
            costs on us.
          </li>
          <li>
            To correct your personal information or, if correction is not feasible or
            suitable, to delete your personal information that is inaccurate, out of date,
            incomplete, or misleading.
          </li>
          <li>
            To request deletion of your personal information without undue delay where
            your personal information is no longer necessary in relation to the purposes
            for which it was collected or processed or where we have no other lawful basis
            to retain the personal data.
          </li>
          <li>
            To restrict the processing of your personal information pending the resolution
            of a request, an objection by you, or the establishment, exercise, or defense
            of legal claims.
          </li>
          <li>
            To withdraw your consent at any time when we are relying on consent to process
            your personal data.
          </li>
          <li>To object to the processing of your personal data.</li>
          <li>
            To object to automated decision-making and processing, including profiling,
            that produces legal or similar significant effects concerning you. This right
            will not be applicable where automated decision-making is necessary for
            entering into or the performance of a contract between you and us, authorized
            by a written law that provides suitable measures to safeguard your fundamental
            rights, freedoms, and interests, or was authorized by you consent.
          </li>
          <li>
            To request the transfer of your personal information from us to a third party.
          </li>
          <li>To file a complaint with the Nigeria Data Protection Commission.</li>
        </ol>
      </>
    ),
  },
  {
    title: 'Complaints and remedies',
    content: (
      <>
        You may file a complaint with us if you believe that any provision of this Policy
        or your privacy rights have been violated or if your access to our services have
        been compromised, to enable us to take the necessary steps towards ensuring the
        security of your personal data. All complaints should be emailed to
        <MailText />
        . Please note that you can also file a complaint at Nigeria Data Protection
        Commission.
        <br />
        We also have a duty to report personal information breaches that are likely to
        result in a risk to your right and freedom to the Nigeria Data Protection
        Commission within 72 hours of being aware of such breaches. You may also seek
        redress in a court of competent jurisdiction. We would, however, appreciate the
        chance to deal with your concerns before you approach the data protection
        authorities. Kindly contact us in the first instance by sending an email to
        <MailText />.
      </>
    ),
  },
  {
    title: 'Review, updates and amendments',
    content: (
      <>
        We reserve the right to update, modify, change, or revise this Policy from time to
        time. The changes will not be retroactive, and the most current version of this
        Policy will always be on this page and will continue to govern our relationship
        with you. We advise that you check this page often, referring to the date of the
        last modification on the page.
        <br />
        It is vital that the personal information we hold about you is accurate and
        current. Please keep us informed if your personal information changes during your
        relationship with us.
      </>
    ),
  },
  {
    title: 'Contact us',
    content: (
      <>
        If you have any questions regarding this Policy or how we handle your personal
        information, please email us at <MailText />.
      </>
    ),
  },
];
