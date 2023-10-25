import MailText from '@/common/MailText';

/* eslint-disable react/no-unescaped-entities */
interface PolicyType {
  title: string;
  content: React.ReactNode;
}

export const Policies: PolicyType[] = [
  {
    title: 'Cookie Policy',
    content: (
      <>
        When you visit our website, we may store some information (commonly known as
        "cookies") on your computer. By clicking 'Accept All,' you consent to the use of
        ALL cookies. However, you may visit your browser privacy settings for cookies or
        our cookies setting to provide controlled consent.
      </>
    ),
  },
  {
    title: 'Cookie',
    content: (
      <>
        Cookies are small information files that use a unique identification tag and are
        stored on your device as a result of using our website or other services we
        provide to you.
        <br />
        Several cookies may be stored only for the duration of your session and expire
        when you close your browser. Other cookies are used to remember you when you
        return to our website and will be stored for a longer time. Cookies help you get
        the best out of our website and help us provide you with a more customized and
        tailored service.
      </>
    ),
  },
  {
    title: 'How we use cookies',
    content: (
      <>
        We use cookies for the following reasons:
        <ol type='a' className='list-[lower-alpha] list-inside'>
          <li>
            To ensure you do not have to re-enter your details each time you visit our
            website.
          </li>
          <li>To track how our site is used and to improve and update our content.</li>
          <li>To store your preferences.</li>
          <li>
            To customize elements of the layout and/or content of our website for you.
          </li>
          <li>
            To collect statistical information about how you use our website so that we
            can improve the platform.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: 'How to manage cookies',
    content: (
      <>
        You can refuse to accept cookies by visiting our cookie setting, and your browsers
        privacy settings for cookies. You will need to manage your cookie settings for
        each device and browser you use. If you do not accept these cookies, you may
        experience some inconvenience in your use of our website and some of our products
        and services. For example, we will not be able to recognize your device, and you
        will need to answer a challenge question each time you log on. You also may not
        receive tailored advertising or other offers from us that may be relevant to your
        interests and needs.
        <br />
        For more information, feel free to contact us at <MailText />.
      </>
    ),
  },
];
