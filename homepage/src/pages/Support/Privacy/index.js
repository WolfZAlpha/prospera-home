/** 
=========================================================
* PROSPERA DEFI PLATFORM - v1.0.0
=========================================================

* Copyright 2024 PROSPERA DEFI (https://www.prosperadefi.com/)

* Design and Coded by Z

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the PROSPERA DEFI PLATFORM.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// PROSPERA DEFI PLATFORM React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// PROSPERA DEFI PLATFORM React examples
import DefaultNavbar from "components/DefaultNavbar";
import Footer from "components/footer";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

function Privacy() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.prosperaico.com",
          label: "join ico",
          color: "pros",
        }}
        sticky
      />
      <MKBox component="section" pt={20} pb={12}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item xs={12}>
              <Card>
                <MKBox
                  variant="gradient"
                  bgColor="dark"
                  borderRadius="lg"
                  coloredShadow="dark"
                  p={3}
                  mt={-3}
                  mx={2}
                >
                  <MKTypography variant="h3" color="white">
                    Privacy Policy
                  </MKTypography>
                  <MKTypography variant="body2" color="white" opacity={0.8}>
                    Effective as of: March 12, 2024
                  </MKTypography>
                </MKBox>
                <MKBox pb={6} px={6}>
                  <MKTypography variant="h5" mt={6} mb={3}>
                    About this Privacy Policy
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    This Privacy Policy describes the privacy practices of Prospera and its
                    affiliates (collectively, &quot;we,&quot; &quot;us,&quot; and &quot;our&quot;),
                    and how we collect, use, and disclose personal data on our platforms, including
                    our main website https://www.prosperadefi.com and our ICO website
                    https://www.prosperaico.com (collectively, the &quot;Services&quot;). We may
                    update this Privacy Policy from time to time as detailed below. You should not
                    use the Services if you have any objections to our Privacy Policy, which is
                    binding upon all users of the Services. If you have a question about how your
                    personal data is being used, you can contact us through the methods provided in
                    the &quot;Contact Us&quot; section at the end of this Privacy Policy.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    Our Privacy Approach
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    First, here are a few key points about Prospera&apos;s privacy practices:
                  </MKTypography>
                  <MKBox component="ul" my={3} ml={6}>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Our Services are designed to provide a platform for decentralized finance
                        solutions and blockchain-related activities, focusing on financial freedom
                        and empowerment.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        To provide you with our Services, we collect information directly from you,
                        your use of the Services, and public sources, such as blockchains.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        We respect the privacy of our users. User data is stored securely, and we do
                        not sell personal information.
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    What Do We Mean by &quot;personal data&quot;?
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Personal data is information that identifies, relates to, describes, is capable
                    of being associated with, or could reasonably be linked, directly or indirectly,
                    with a particular individual or household. Personal data that is publicly
                    available, processed in connection with journalistic purposes or expression,
                    aggregated, or de-identified is not considered personal data for the purposes of
                    this Privacy Policy.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    What Personal Data Do We Collect and How Do We Collect It?
                  </MKTypography>
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    Information you provide us:
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Personal data you may provide to us through the Services includes:
                  </MKTypography>
                  <MKBox component="ul" my={3} ml={6}>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Account and contact data, such as your first and last name, organization
                        name (if applicable), biography (if you choose to add one), email and
                        mailing address, Ethereum public address, phone number, profile picture, and
                        username.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Interests, usage, and connections, including information about how you use
                        the Services, such as the types of content you engage with, content you
                        share, features you use, actions you take, and people or accounts you
                        interact and connect with.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Marketing data, such as your preferences for receiving our marketing
                        communications, and details about your engagement with them.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Communications, such as when you contact us with questions or feedback.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Transaction information. For conducting any transactions through the
                        Service, we work with third-party electronic wallet extensions such as
                        MetaMask and WalletConnect. Your interactions with these third-party
                        electronic wallet extensions are governed by their own privacy policies.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Blockchain addresses, including account information from third-party wallet
                        providers, and the associated crypto holdings and transaction data.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Other data not specifically listed here, which we will use as described in
                        this Privacy Policy or as otherwise disclosed at the time of collection.
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    Third-party sources:
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    We may combine personal data we receive from or about you with information we
                    obtain from other sources, such as:
                  </MKTypography>
                  <MKBox component="ul" my={3} ml={6}>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Public sources, including blockchains and social media companies.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Marketing partners, such as companies that have entered into joint marketing
                        relationships with us.
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    Automatic data collection:
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    We, our service providers, and our business partners may automatically log
                    information about you, your computer or mobile device, and your interaction over
                    time with the Services, our communications, and other online services, such as:
                  </MKTypography>
                  <MKBox component="ul" my={3} ml={6}>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Device data, such as device IP address (and derived location), device name,
                        browser type and settings, telecommunications provider, operating system,
                        the date and time of Services use, and interactions with the Services.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Online activity data, such as information about your use of and actions on
                        the Services, including pages or screens you viewed, how long you spent on a
                        page or screen, navigation paths between pages or screens, information about
                        your activity on a page or screen, frequency, and length of access.
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKTypography variant="body2" color="text">
                    This information may be collected on our Services using cookies, browser web
                    storage (also known as locally stored objects, or &quot;LSOs&quot;), web
                    beacons, third-party software development kits (&quot;SDKs&quot;), and similar
                    technologies described below.
                  </MKTypography>

                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    Cookies and similar technologies:
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    We may use the following technologies:
                  </MKTypography>
                  <MKBox component="ul" my={3} ml={6}>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Session and third-party cookies, which are text files that websites store on
                        a visitor&apos;s device to uniquely identify the visitor&apos;s browser or
                        to store information or settings in the browser for the purpose of helping
                        you navigate between pages efficiently, remembering your preferences,
                        enabling functionality, helping us understand user activity and patterns.
                        Our website may include cookies from third-party services like Google
                        Analytics.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Local storage technologies, like HTML5, that provide cookie-equivalent
                        functionality but can store larger amounts of data, including on your device
                        outside of your browser in connection with specific applications.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Web beacons, also known as pixel tags or clear GIFs, which are used to
                        demonstrate that a webpage or email was accessed or opened, or that certain
                        content was viewed or clicked.
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    Job Applicant Information:
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    When you apply for employment with us, we may collect certain personal data from
                    you for the purpose of evaluating your candidacy for a particular position. The
                    information collected for these purposes may include:
                  </MKTypography>
                  <MKBox component="ul" my={3} ml={6}>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Information you provide in connection with your application.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Information about you that is publicly available.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Health information, including disability information (if applicable).
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Information that you authorize us to collect via third parties, including
                        former employers or references.
                      </MKTypography>
                    </MKBox>
                  </MKBox>
                  <MKTypography variant="body2" color="text">
                    We only use your personal data to assess your skills and experience in relation
                    to the applicable job requirements. We may also use your personal data to
                    contact you during the hiring process.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    How Do We Use Personal Data?
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    We use personal data for the following purposes or as otherwise described at the
                    time of collection:
                  </MKTypography>
                  <MKBox component="ul" my={3} ml={6}>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Services delivery, including to operate the Services and our business,
                        maintain and improve the Services and the Services&apos; features, create
                        and maintain your account, facilitate user connections, process your
                        transactions, communicate with you, and provide support.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Research and development, including creating and using anonymous,
                        aggregated, or de-identified information for our business purposes,
                        analyzing the effectiveness of our Services, and adding features to our
                        Services.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Support and maintenance, including using third-party analytics services to
                        automatically log certain information about your device and interactions
                        with the Services.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Compliance and protection, including protecting our, your, or others&apos;
                        rights, privacy, safety, or property, enforcing the Terms of Service,
                        auditing our internal processes, and complying with applicable laws.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Direct marketing, including sending you marketing communications as
                        permitted by law.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Interest-based advertising, including engaging advertising partners to serve
                        online ads based on your interaction with the Services.
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    How Do We Share Personal Data?
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    We may share personal data with:
                  </MKTypography>
                  <MKBox component="ul" my={3} ml={6}>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Service providers, including companies and individuals that provide services
                        on our behalf or help us operate the Services or our business.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Professional advisors, including lawyers, auditors, bankers, and insurers.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Authorities and others, including law enforcement, government authorities,
                        and private parties as we believe necessary.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Business transferees, including acquirers and other relevant participants in
                        business transactions.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Third-party platforms and social media networks, if you have enabled
                        features or functionality that connect the Services to a third-party
                        platform or social media network.
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    Public Posting Areas and Community Chat Features
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    Please note that any personal data you include in public posting areas or
                    community chat features on the platform is available to anyone with access to
                    the platform. Be extremely careful when disclosing any personal data in these
                    areas.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    Third-Party Links
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    The Services may contain links to social media websites and other online
                    services operated by third parties. We do not control these third-party websites
                    or services and are not responsible for their actions. We encourage you to
                    review their privacy policies.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    Children&apos;s Personal Data
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    The Services are not intended for use by children under 16 years of age. If we
                    learn that we have collected personal data from a child under 16 without the
                    verifiable consent of the child&apos;s parent or guardian, we will delete it.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    Security and Data Retention
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    We employ reasonable technical, organizational, and physical safeguards to
                    protect personal data. However, no security measures are failsafe, and we cannot
                    guarantee the security of your personal data. We will retain your personal data
                    for as long as needed to fulfill the purpose for which it was collected.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    International Data Transfers
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    We are headquartered in the United States with employees, affiliates, and
                    service providers in other countries. If you choose to provide us with personal
                    data, we may transfer that data across borders in accordance with local law.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    Your Privacy Choices
                  </MKTypography>
                  <MKBox component="ul" my={3} ml={6}>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Update or delete: You can contact us to update or correct your personal data
                        or to delete your account.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Disconnect social media companies: You may disconnect your social media
                        accounts from Prospera at any time.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Opt-out of marketing communications: You may opt out of marketing-related
                        communications by following the opt-out or unsubscribe instructions in the
                        communication.
                      </MKTypography>
                    </MKBox>
                    <MKBox component="li">
                      <MKTypography variant="body2" color="text">
                        Online tracking opt-out: There are various ways to limit online tracking,
                        such as blocking cookies in your browser, using privacy plug-ins, or opting
                        out of interest-based advertising.
                      </MKTypography>
                    </MKBox>
                  </MKBox>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    Jurisdiction-Specific Disclosures
                  </MKTypography>
                  <MKTypography variant="body2" color="text" fontWeight="bold">
                    Privacy Rights for the European Economic Area, the United Kingdom, and
                    Switzerland
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    If you are located in the EEA, U.K., or Switzerland, you have certain rights
                    under the GDPR and equivalent laws, including the right to access, correct, or
                    delete your personal data and the right to lodge a complaint with your local
                    data protection authority.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    Changes to this Privacy Policy
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    We reserve the right to modify this Privacy Policy at any time. If we make
                    material changes to this Privacy Policy, we will notify you by updating the date
                    and posting it on the website.
                  </MKTypography>

                  <MKTypography variant="h5" mt={6} mb={3}>
                    Contact Us
                  </MKTypography>
                  <MKTypography variant="body2" color="text">
                    You can reach us by email at contact@prosperadefi.com.
                  </MKTypography>
                </MKBox>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <MKBox pt={6} px={1} mt={6}>
        <Footer content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Privacy;
