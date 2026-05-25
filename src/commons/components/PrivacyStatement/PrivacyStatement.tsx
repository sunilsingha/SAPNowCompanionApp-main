import { Icon } from '@value-experience-design/libella';
import { easeOut, motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

import classes from './PrivacyStatement.module.css';

interface PrivacyStatementProps {
  onCloseClick: () => void;
}

export const PrivacyStatement = ({ onCloseClick }: PrivacyStatementProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className={classes.privacyWrap}
      variants={privacyVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className={classes.privacyTitle}>
        <span>{t('learning.create-profile.privacy-title')}</span>
        <button onClick={onCloseClick}>
          <Icon src="decline" />
        </button>
      </div>
      <span>
        <strong>SAP PRIVACY STATEMENT </strong>
        <br />
        <br />
        This Privacy Statement was updated on May 17, 2025. We have created this Privacy Statement to demonstrate the
        firm commitment of SAP (hereinafter &quot;We&quot;, &quot;SAP&quot;, &quot;Us&quot; or &quot;Our&quot;) to the
        individual`s right to data protection and privacy. It outlines how SAP processes information that can be used to
        directly or indirectly identify an individual (hereinafter “Personal Data”). Processing in the context of this
        Privacy Statement means any collection, use, transmission, disclosure, erasure or any other similar operation
        based on Personal Data (hereinafter “Processing” or “Process”).
        <br />
        <br />
        <strong>A. GENERAL INFORMATION</strong>
        <br />
        <br />
        <strong>Who is the responsible SAP entity</strong>
        <br />
        <br />
        The controller of this web application is SAP, SAP Industries and Experiences. You can reach SAP Group’s data
        protection officer any time at privacy[@]sap.com.
        <br />
        This Privacy Statement applies to the collection and processing of personal data:
        <br />
        <ul>
          <li>during the central operation of this website and other globally operated SAP business activities by</li>
          <li>
            <strong>SAP SE</strong>, Dietmar-Hopp-Allee 16 Walldorf 69190, Germany if you are in a member state of the
            EU or the EWR or in any of the countries of Andorra, Faroe Islands, Guernsey, Isle of Man, Jersey,
            Switzerland, or the United Kingdom or by
          </li>
          <li>
            <strong>SAP America Inc.</strong>, 3809 West Chester Pike, Suite 200, Newtown Square, PA 19073, USA if you
            are in any other country, or
          </li>
          <li>
            a<strong> specific SAP group entity</strong> as may be stated in the Additional Country and Regional
            Specific Provisions at the end of this privacy statement.
          </li>
          <li>
            in the context of a pre-contractual or contractual business relationship with you or your employer by a
            local <strong>SAP group entity</strong>{' '}
          </li>
          <li>
            in the context of a registration form when a <strong>specific SAP group entity</strong> is directly
            collecting personal data for the purpose of registering to a service or event and is therefore presented as
            the relevant controller on this registration page or website by referencing to this privacy statement. Where
            a registration form is presented on this website, the controller may vary depending on the actual offering
            or the purpose of the data collection, but it is in any case displayed on the individual registration form’s
            privacy statement.
          </li>
        </ul>
        <br />
        You can reach SAP Group’s data protection officer any time at privacy[@]sap.com.
        <br />
        The controller of https://lets-go25-ui.cfapps.eu10.hana.ondemand.com/learning/quiz/welcome is SAP, SAP
        Industries and Experiences. You can reach SAP Group’s data protection officer at privacy[@]sap.com.
        <br />
        <br />
        <strong>For what purposes does SAP process your Personal Data and based on what legal basis?</strong>
        <br />
        <br />
        Depending on the applicable law, the Processing of Personal Data is subject to a justification, sometimes
        referred to as legal basis. <br />
        <br />
        <strong>SAP’s compliance with statutory obligations</strong>
        <br />
        <br />
        <ul>
          <li>
            SAP processes your Personal Data for the purpose of ensuring an adequate level of technical and
            organizational security of SAP’s products, services, online events, facilities, and premises. For this, SAP
            will take the measures necessary to verify or maintain the quality and safety of a product or service which
            is owned, manufactured by or for, or controlled by SAP. This may comprise the use of Personal Data for
            sufficient identification and authorization of designated users, internal quality control through auditing,
            analysis, and research, debugging to identify and repair errors that impair existing or intended
            functionality, account and network security, replication for loss prevention, detecting security incidents,
            protection against malicious, deceptive, fraudulent, or illegal activity, and prosecuting those responsible
            for such kind of activity. We may further process your name, likeness, and other contact or compliance
            related data when you visit a local SAP affiliate or lab in the context of access management and video
            surveillance to protect the security and safety of Our locations and assets.
          </li>
          <li>
            SAP processes Personal Data (name, surname, country, IP address) to the extent necessary to fulfil sanctions
            and embargo requirements under European Economic Area (“EEA”) laws to which SAP is subject, and laws and
            regulations extraterritorial to the EEA (based on SAP’s legitimate interest).
          </li>
          <li>
            If necessary, SAP uses Personal Data to prevent or prosecute criminal activities such as any form of
            cybercrime, the illegal use of Our products and services or fraud, to assert Our rights or defend SAP
            against legal claims.
          </li>
          <li>
            To comply with data protection and privacy laws (e.g. to respond to your data subject request)and unfair
            competition laws. Depending on the country in which the relevant SAP Group company operates, SAP may process
            Personal Data necessary to accommodate your data protection and privacy choices for the receipt of such
            information and, when necessary to ensure compliance, exchange such information with the other entities of
            the SAP Group.
          </li>
        </ul>
        <br />
        When ensuring compliance, SAP processes your Personal Data if and to the extend necessary to fulfill legal
        requirements under European Union or EU Member State law to which SAP is subject, and laws and regulations
        extraterritorial to the EU (legitimate interest to comply with extraterritorial laws and regulations).
        <br />
        <br />
        <strong>SAP’s Web Services</strong>
        <br />
        <br />
        SAP processes your Personal Data to operate web presences, web offerings, or online events (“Web Services”)
        <br />
        <ul>
          <li>
            to provide the Web Services and functions, create and administer your online account, updating, securing,
            troubleshooting the service, providing support, improving, and developing the Web Services, answering and
            fulfilling your requests or instructions.
          </li>
          <li>
            to manage and ensure the security of Our Web Services and prevent and detect security threats, fraud or
            other criminal or malicious activities and as reasonably necessary to enforce the Web Services terms, to
            establish or preserve a legal claim or defense, to prevent fraud or other illegal activities, including
            attacks on Our information technology systems.
          </li>
          <li>
            to create specific user profiles that may be specific to a single Web Service of SAP, but also allows you to
            access SAP’s other Web Services. It is your choice whether or not to use any of these additional Web
            Service. If you do, SAP will make your Personal Data available to such other Web Service to provide you with
            initial access. Kindly note that without your consent for SAP to create such user profiles, SAP will not be
            able to offer such services to you where your consent is a statutory requirement that SAP can provide these
            services to you.
          </li>
          <li>
            to process information that relates to your visit to Our Web Services to improve your user experience,
            identify your individual demand and to personalize the way We provide you with the information you are
            looking for. For this purpose, We collect information regardless of whether you register with a user profile
            or not.
          </li>

          <li>
            to create your user profile for the Sapphire Learning & Certification Lab experience. Through the user
            profile you can share Personal Data about you with other users, such as your name, photo, social media
            accounts, postal or email address, telephone number, personal interests, skills, and basic information about
            your company. The user profiles serve to personalize the interactions between the users (for example, by way
            of messaging or follow functionality) and to allow SAP to foster the collaboration and quality of
            communication through such offerings. The profile settings of the relevant Web Services allow you to
            determine which information you want to share.
          </li>

          <li>
            to share basic participant information (your name, company, and email address) with other participants of
            the same event, seminar, or webinar to promote the interaction between the participants and stimulate the
            communication and the exchange of ideas.
          </li>
        </ul>
        <br />
        When operating SAP’s Web Services, SAP processes your Personal Data if and to the extent,
        <ul>
          <li>SAP obtained your consent, if required by law, to process your Personal Data for this purpose,</li>
          <li>necessary to fulfill (pre-)contractual obligations with you,</li>
          <li>necessary to fulfill legal requirements applicable to SAP,</li>
          <li>necessary to pursue SAP’s legitimate interest to efficiently perform or manage SAP’s Web Services and</li>
          <li>
            business operation and assert or defend itself against legal claims. We believe that SAP’s interest in
            pursuing these business purposes is legitimate and thereby not outweighed by your personal rights and
            interest to refrain processing for such purpose. In any of these cases, We duly factor into Our balancing
            test: the business purpose reasonably pursued by SAP in the given case, the categories, amount and
            sensitivity of Personal Data that is necessarily being processed, the level of protection of your Personal
            Data which is ensured by means of Our general data protection policies, guidelines, and processes, and the
            rights you have in relation to the processing activity.
          </li>
        </ul>
        <br />
        <br />
        <strong>SAP’s business relationships</strong>
        <br />
        <br />
        SAP processes Personal Data to pursue its business relationships with customers, partners, and others to fulfill
        pre-contractual and contractual business relations. This may include satisfying requests, processing orders,
        delivering an ordered product or service, or engaging in any other relevant action to establish, fulfill and
        maintain Our business relationships. <br />
        <ul>
          <li>
            <u>Products and services</u> may include any of SAP’s on-prem and cloud software products, web services,
            apps, online-forums, webinars and events, non-marketing related newsletters, white papers, tutorials,
            trainings, as well as other offerings like contests or sweepstakes. When you purchase or intend to purchase
            products or services from SAP on behalf of a corporate customer or are otherwise associated as contact
            person for the business relationship between SAP and a corporate customer or partner (“Customer Contact”),
            SAP will use your Personal Data for this purpose. More specifically, SAP may use your Personal Data to
            confirm your opening of an account, manage the contract execution, send you disclosures as may be required
            by law, notice of payments, and other information about Our products and services. SAP may respond to
            related inquiries, provide you with necessary support and process your feedback. In the context of your or
            your employers use of Our products or services, SAP may communicate with you by post, email, live chat,
            contact forms, phone or any other medium to resolve your, a user’s, or a customer’s question or complaint or
            to investigate suspicious transactions. In case of telephone calls or chat sessions, SAP may record such
            calls or chat sessions to improve the quality of SAP’s services after informing you accordingly during that
            call and, subject to applicable law, receiving your prior consent before the recording begins.
          </li>
          <br />

          <li>
            <u>Customer Satisfaction:</u> Within an existing business relationship between you or your employer and SAP,
            SAP processes your Personal Data to help Us understand how satisfied you are with the functionality and
            quality of Our products and services, to provide you with relevant information on Our latest product
            announcements, software updates or upgrades, events, special offers, and other information about SAP’s
            software and services that is relevant and useful to you.
          </li>
          <br />

          <li>
            <u>To keep you up to date:</u> Within an existing business relationship between you or your employer and
            SAP, SAP processes your Personal Data to inform you about SAP’s products or services which are similar or
            relate to products and services you or your employer have already purchased or used. SAP will inform you by
            email or phone about such news only as far as it is allowed by law, or if SAP has collected such information
            in the context of the business relationship. You are entitled to object to SAP’s use for this purpose at any
            time by selecting the opt-out option at the bottom of each marketing related approach. We aim to keep
            customers and prospects updated on upcoming events and SAP’s latest products and services. Further, We also
            desire to keep Our customers and partners satisfied with Our products and services and therefore ask them on
            a regular basis for their feedback. If possible, We may contact you to discuss further your interest in SAP
            services and offerings.
          </li>
          <br />

          <li>
            <u>Feedback requests and surveys:</u> To the extent allowed by applicable law, SAP may contact you for
            feedback regarding the improvement of the relevant material, product, or service. SAP may also invite you to
            participate in questionnaires and surveys. These will generally be designed so you can participate without
            having to provide information that identifies you as a participant. If you nonetheless provide your Personal
            Data, SAP will use it for the purpose stated in the questionnaire or survey or to improve its products and
            services.
          </li>
          <br />

          <li>
            <u>Personalized Content:</u> SAP processes information about your interactions with SAP across its various
            business areas and its offerings (your or your employers prior and current use of SAP products or services,
            your participation in and use of SAP’s web offerings, events, white papers, free trials or newsletters) to
            provide you with the requested products and services and to improve Our personal communications with you.
            This data may also be used to efficiently operate SAP’s business, which also includes: the automation and
            aggregation of data to support various analytic and statistical efforts, performance and predictive
            analytics and exploratory data science to support your customer journey and to fulfill such requests. To the
            extent permitted by law, SAP may combine and use such information in an aggregated manner to help Us
            understand your interests and business demands, develop Our business insight and marketing strategies, and
            to create, develop, deliver, and improve Our personalized communications with you. It may also be used by
            SAP to display relevant content on SAP owned or third party websites.
          </li>
          <br />

          <li>
            <u>Advertising ID’s:</u> SAP may create a hashed user ID to provide to third party operated social networks
            or other web offerings (such as Twitter, LinkedIn, Facebook, Instagram or Google). This information is then
            matched against the third party’s own user database to display to you more relevant SAP content.
          </li>
        </ul>
        <br />
        When pursuing business relationships including engaging in direct marketing and sales activities, SAP may
        process your Personal Data if and to the extend
        <ul>
          <li>
            it is covered by your consent, provided your consent is required by law for SAP to process your Personal
            Data for this purpose,
          </li>
          <li>
            if necessary to fulfill (pre-)contractual obligations with the company or other legal body you represent as
            a customer contact (legitimate interest to efficiently perform or manage SAP’s business operation), to
            maintain Our business relationships with you or your employer, to ensure your satisfaction as a user or
            customer contact, to map the relevant group internal structures and bundle relevant business activities at
            central sources within the SAP Group to operate them uniformly and to provide you with information about
            other SAP products and services as indicated by your interest or demand, which may also comprise the
            combination about you from different sources (profiling) (legitimate interest to maintain and operate
            intelligent and sustainable business processes in a group structure optimized for the division of labor and
            in the best interest of Our employees, customers, partners, and shareholders and to operate sustainable
            business relationship with SAP customers and partners). SAP may provide you with this information to your
            postal address to pursue Our legitimate interest to address customers, prospects and targets for the purpose
            of advertising Our products and services, to your email address for the purpose of direct marketing of
            similar products or services provided that We (i) received your email address in connection with the
            purchase of Our products or services, (ii) you did not object to the use of your email address for direct
            advertising and (iii) and We inform you in every approach that you may object to Our use of your email
            address for marketing purposes at any time, and by other electronic means (e.g., telephone, MMS) to the
            extent permitted under applicable law, generally either explicit or presumed consent.
          </li>
          <li>
            the contract or pre-contractual relation relates to a company or other legal body and if SAP processes your
            Personal Data as Customer Contact to fulfill (pre-) contractual obligations with your employer (legitimate
            interest to efficiently perform or manage SAP’s business operation)
          </li>
          <li>
            {' '}
            to maintain Our business relationships with you, ensure your satisfaction as a user or customer
            representative, and provide you with information about other SAP products and services as indicated by your
            interest or demand (legitimate interest to operate sustainable business relationship with SAP customers and
            partners).
          </li>
        </ul>
        <br />
        <br />
        <strong>SAP’s Sapphire Learning & Certification Lab experience</strong>
        <br />
        <br />
        We require your Personal Data to provide you with a personalized and seamless on-site learning experience. This
        includes identifying you as a unique participant using your Sapphire registration data, enabling personalized
        learning journeys, tracking your quiz and activity scores, and, if you choose, creating a customized avatar
        based on your facial features to enhance the interactive experience.
        <br />
        When SAP processes your Personal Data for the above purposes if and to the extend
        <br />
        <ul>
          <li>SAP obtained your consent, if required by law, to process your Personal Data for this purpose,</li>
          <li>necessary to fulfill (pre-)contractual obligations with you,</li>
          <li>necessary to fulfill legal requirements applicable to SAP,</li>
          <li>
            necessary to pursue SAP’s legitimate interest in providing an engaging, tailored, and meaningful enablement
            experience at SAP Sapphire.
          </li>
        </ul>
        <br />
        <br />
        <strong>What categories of Personal Data does SAP process?</strong>
        <br />
        <br />
        SAP processes the following categories of Personal Data: Profile photo (temporary, used exclusively for avatar
        generation), AI-generated avatar (visual image only; no biometric identifiers, name (first name and/or last name
        will be transferred from conference app to avatar app for registration purposes), chosen username associated
        with the avatar (e.g. including leaderboard participation/association, participation metadata (first name and
        first initial of last name will be displayed if user leaderboard activity)and voluntary external sharing data
        (social media posts)features.
        <br />
        If SAP processes special categories of Personal Data under applicable law, SAP will ask you for your consent in
        a specific declaration.
        <br />
        <br />
        <strong>From What Types of Third Parties does SAP obtain Personal Data?</strong>
        <br />
        <br />
        SAP generally aims to collect Personal Data directly from you. If you are obliged by statutory law or
        contractual requirements to provide Personal Data to SAP and you fail to provide such Personal Data, then kindly
        note that SAP may not be able to provide you with the respective service and/or business relationship.If you or
        applicable law allows Us to do so, We may obtain Personal Data also from third parties which may include:
        <br />
        <ul>
          <li>your employer in the context of its business relationship with SAP and/or the SAP Group ,</li>
          <li>Third Parties you directed to share your Personal Data with SAP,</li>
        </ul>
        <br />
        When We collect Personal Data from third parties, established internal controls aim to ensure that the third
        party source was permitted to provide this information to SAP and that We may use it for this purpose. SAP will
        treat this Personal Data according to this Privacy Statement and any additional restrictions imposed by the
        third party that provided the Personal Data to SAP or by applicable national law.
        <br />
        <br />
        <strong>How long does SAP store your Personal Data?</strong>
        <br />
        <br />
        SAP may retain your Personal Data for additional periods if necessary for compliance with legal obligations to
        process your Personal Data or if the Personal Data is needed by SAP to assert or defend itself against legal
        claims. SAP will retain your Personal Data until the end of the relevant retention period or until the claims in
        question have been settled. SAP does only store your Personal Data for as long as it is required:
        <br />
        <ul>
          <li>
            for SAP to comply with statutory obligations to retain Personal Data, resulting inter alia e.g. from
            applicable export, finance, tax or commercial laws.
          </li>
          <li>to process your Personal Data for this purpose and SAP obtained your consent, if required by law.</li>
        </ul>
        <br />
        <br />
        <strong>Who are the recipients of your Personal Data?</strong>
        <br />
        <br />
        Your Personal Data will be transferred to or accessed by the following categories of third parties to process
        your Personal Data:
        <br />
        <ul>
          <li>
            <strong>SAP Group entities:</strong> Other entities of the SAP Group may also receive or gain access to
            Personal Data either when rendering group internal services centrally and on behalf of SAP SE and the other
            SAP group entities or when Personal Data is transferred to them on a respective legal basis. In these cases,
            these entities may process the Personal Data for the same purposes and under the same conditions as outlined
            in this Privacy Statement. The current list of SAP Group entities can be found here.
          </li>
          <li>
            <strong>Service providers:</strong> The avatars are generated through a third-party AI tool (Google Vertex
            AI- Google Gemini) using a profile photo taken by the user via photo booth onsite at the conference (i.e. no
            virtual version available)
          </li>
        </ul>
        <br />
        <br />
        <strong>What are your data protection rights and how can you exercise them?</strong>
        <br />
        <br />
        SAP honors your statutory rights when it comes to the Processing of your Personal Data. To the extent provided
        by applicable data protection laws, you have the right to: <br />
        <ul>
          <li>access your Personal Data that we have on you, or have it updated.</li>
          <li>
            Data portability of the Personal Data you provided to SAP, if SAP uses your Personal Data based on your
            consent or to perform a contract with you. In this case, please contact skillup@sap.com and specify the
            information or processing activities to which your request relates, the format in which you would like to
            receive the Personal Data, and whether it should be sent to you or another recipient. SAP will carefully
            consider your request and discuss with you how it can best be fulfilled.
          </li>
          <li>
            Delete your Personal Data we hold about you. Please note, however, that SAP can or will delete your Personal
            Data only if there is no statutory obligation or prevailing right of SAP to retain it. If you request from
            SAP to delete your Personal Data, you may not be able to continue to use any SAP service that requires SAP’s
            use of your Personal Data.
          </li>
          <li>
            Right to object against SAP further processing your Personal Data, if and to the extent SAP is processing
            your Personal Data based on its Legitimate Interest. When you object to SAP’s processing of your Personal
            Data, SAP will carefully review your objection and cease further use of the relevant information, subject to
            SAP’s compelling legitimate grounds for continued use of the Personal Data, which may override your interest
            in objecting, or if SAP requires the information for the establishment, exercise, or defense of legal
            claims.
          </li>
          <li>
            Right to object to direct marketing or to apply profiling in relation to direct marketing. When you object
            to SAP’s processing of your Personal Data for direct marketing purposes, SAP will immediately cease to
            process your personal data for such purposes.
          </li>
          <li>
            Revoke consent, wherever SAP is processing your Personal Data based on your consent, you may at any time
            withdraw your consent by unsubscribing or giving Us respective notice of withdrawal. In case of withdrawal,
            SAP will not process Personal Data subject to this consent any longer unless legally required or permitted
            to do so (e.g. if your Personal Data is needed by SAP to assert or defend against legal claims). In case SAP
            is required or permitted to retain your Personal Data for other legal reasons your Personal Data will be
            restricted from further processing and only retained for the term required by law or fulfil the other
            purpose. However, any withdrawal has no effect on past processing of Personal Data by SAP up to the point in
            time of your withdrawal. Furthermore, if your use of an SAP offering requires your prior consent, SAP will
            no longer be able to provide the relevant service, offer or event to you after your revocation.
          </li>
          <li>
            Not to be subject to a decision based solely automated means, if the decision produces legal effects
            concerning you or significantly affects you in a similar way.
          </li>
          <li>
            You can request from SAP to restrict your Personal Data from further processing in any of the following
            events:
            <ul>
              <li>
                you state the Personal Data about you is incorrect, subject to the time SAP requires to check the
                accuracy of the relevant Personal Data,{' '}
              </li>
              <li>
                there is no legal basis for SAP to process your Personal Data and you demand SAP to restrict your
                Personal Data from further processing,
              </li>
              <li>
                SAP no longer requires your Personal Data, but you state you require SAP to retain such data to claim or
                exercise legal rights or to defend against third party claims, or
              </li>
              <li>
                in case you object to the processing of your Personal Data by SAP based on SAP’s legitimate interest,
                subject to the time required for SAP to determine whether it has a prevailing interest or legal
                obligation in processing your Personal Data.
              </li>
            </ul>
          </li>
          <li>
            Lodge a complaint to the competent supervisory authority if you are not satisfied with how SAP is processing
            your Personal Data. Your competent supervisory authority can be found in the country specific section.
          </li>
        </ul>
        <br />
        Depending on applicable local data protection laws, your rights may be subject to deviations, limitations, or
        exceptions as set out in the country specific section “B. Additional Country and Regional Specific Provisions”.
        Please be aware, that SAP honors your statutory rights when it comes to the Processing of your Personal Data to
        the extent provided by applicable data protection laws.
        <br />
        <br />
        <strong>How you can exercise your data protection rights.</strong>
        <br />
        <br />
        Please direct any requests to exercise your rights to skillup@sap.com. SAP will take steps to ensure it verifies
        your identity to a reasonable degree of certainty before it will process the data protection right you want to
        exercise. When feasible, SAP will match Personal Data provided by you in submitting a request to exercise your
        rights with information already maintained by SAP. This could include matching two or more data points you
        provide when you submit a request with two or more data points that are already maintained by SAP. SAP will
        decline to process requests that are manifestly unfounded, excessive, fraudulent, represented by third parties
        without duly representing respective authority or are otherwise not required by local law.
        <br />
        <br />
        <strong>Can you use SAP’s services if you are a minor?</strong>
        <br />
        <br />
        In general, profile creation in the Learning & Certification Lab at Sapphire is not directed to users below the
        age of 16 years, or equivalent minimum age in the relevant jurisdiction. If you are younger than 16 or the
        equivalent minimum age in the relevant jurisdiction, you cannot register with and use this Sapphire on-site
        experience.
        <br />
        <br />
        <strong>B. ADDITONAL COUNTRY AND REGIONAL SPECIFIC PROVISIONS</strong>
        <br />
        <br />
        <strong>
          Where SAP is subject to privacy requirements in the EU/EEA or a country with national laws equivalent to the
          GDPR
        </strong>
        <br />
        <br />
        <strong>1. Who is the relevant Data Protection Authority?</strong>
        <br />
        <br />
        You may find the contact details of your competent data protection supervisory authority here. SAP’s lead data
        protection supervisory authority is the Landesbeauftragter für den Datenschutz und die Informationsfreiheit
        Baden-Württemberg and can be reached at Lautenschlagerstraße 20, 70173 Stuttgart/Germany.
        <br />
        <br />
        <strong>2. How does SAP justify international data transfers?</strong>
        <br />
        <br />
        As a global group of companies, SAP has group affiliates and uses third party service providers also in
        countries outside the EEA. SAP may transfer your Personal Data to countries outside the EEA as part of SAP’s
        international business operations. If We transfer Personal Data from a country in the EU or the EEA to a country
        outside the EEA and for which the EU Commission has not issued an adequacy decision, SAP uses the EU standard
        contractual clauses to contractually require the data importer to ensure a level of data protection consistent
        with the one in the EEA to protect your Personal Data. You may obtain a copy (redacted to remove commercial or
        irrelevant information) of such standard contractual clauses by sending a request to privacy[@]sap.com. You may
        also obtain more information from the European Commission on the international dimension of data protection
        here.
        <br />
        <br />
        <strong>Where SAP is subject to privacy requirements in the United States of America.</strong>
        <br />
        <br />
        Where SAP is subject to the requirements of the California Consumer Privacy Act of 2018 (CCPA), as amended by
        the California Privacy Rights Acts of 2020 (CPRA), from hereon referred to as “CCPA”, or where other US State
        laws have similar requirements, the following applies:
        <br />
        <u>You have the right to:</u>
        <br />
        <ul>
          <li>
            Know what personal information the business has collected about the consumer, including the categories of
            personal information, the categories of sources from which the personal information is collected, the
            business or commercial purpose for collecting, selling, or sharing personal information, the categories of
            third parties to whom the business discloses personal information, and the specific pieces of personal
            information the business has collected about the consumer.
          </li>
          <li>
            Delete personal information that the business has collected from the consumer, subject to certain
            exceptions.
          </li>
          <li>Correct inaccurate personal information that a business maintains about a consumer.</li>
          <li>Opt-out of the sale or sharing of their personal information by the business (where applicable).</li>
          <li>
            Limit the use or disclosure of sensitive personal information by the business (subject to certain
            exceptions, where applicable).
          </li>
          <li>Receive non-discriminatory treatment for the exercise of these rights.</li>
          <li>Appeal any denial of your request to exercise these rights.</li>
        </ul>
        <br />
        <br />
        <strong>How you can exercise your Data Protection Rights.</strong>
        <br />
        <br />
        To exercise these rights, or to limit the Sharing of your Personal Information, please contact us at
        skillup@sap.com or via post to Dietmar-Hopp-Allee 16, 69190 Walldorf, Germany, In accordance with the
        verification process set forth under US relevant state law (as appropriate), SAP may require a more stringent
        verification process for deletion requests (or for Personal Data that is considered sensitive or valuable) to
        minimize the harm that might be posed to you by unauthorized access or deletion of your Personal Data. If SAP
        must request additional information from you outside of information that is already maintained by SAP, SAP will
        only use it to verify your identity so you can exercise your data protection rights, or for security and
        fraud-prevention purposes. You can designate an authorized agent to submit requests to exercise your data
        protection rights to SAP. The agent must submit authorization to act on your behalf and, where required by
        relevant law, the agent must be appropriately registered.
        <br />
        <strong>Financial Incentives.</strong> SAP does not offer financial incentives in return for your consent to
        share your personal information, nor limit service offerings where you opt-out of such sharing (unless sharing
        is practically necessary to perform the relevant service).
        <br />
        <strong>New Jersey’s Daniel’s Law.</strong> SAP does not disclose on the Internet or otherwise make available
        information that is subject to a Daniel’s Law request.
        <br />
        <strong>Children’s Privacy.</strong> Given that the Sapphire Learning & Certification Lab experience is not
        directed to users under 16 years of age, SAP does not sell or share the personal information of any minors under
        16. If you are a parent or guardian and believe SAP collected information about your child, please contact SAP.
        SAP will take steps to delete the information as soon as possible.
        <br />
        <br />
        <strong>Where SAP is subject to privacy requirements in Singapore.</strong>
        <br />
        <br />
        Where SAP is subject to the requirements of the Singapore’s Personal Data Protection Act (PDPA), the following
        applies:
        <br />
        <ul>
          <li>
            You can request from SAP personal data about you that is in the possession or under the control of SAP and
            information about the ways in which such personal data has been or may have been used or disclosed by SAP
            within a year prior to this request. Please be informed that SAP is not obliged to accede to your request if
            any exceptions under the PDPA apply.
          </li>
          <li>
            You may submit a request to have inaccurate/incomplete personal data corrected in our systems.Please be
            informed that SAP is not obliged to accede to your request if any exceptions under the PDPA apply.
          </li>
          <li>
            Revoke consent, wherever SAP is processing your Personal Data based on your consent, you may at any time
            withdraw your consent by unsubscribing or giving Us respective notice of withdrawal. In case of withdrawal,
            SAP will not process Personal Data subject to this consent any longer unless legally required or permitted
            to do so (e.g. if your Personal Data is needed by SAP to assert or defend against legal claims). In case SAP
            is required or permitted to retain your Personal Data for other legal reasons your Personal Data will be
            restricted from further processing and only retained for the term required by law or fulfil the other
            purpose. However, any withdrawal has no effect on past processing of Personal Data by SAP up to the point in
            time of your withdrawal. Furthermore, if your use of an SAP offering requires your prior consent, SAP will
            no longer be able to provide the relevant service, offer or event to you after your revocation.
          </li>
          <li>
            Lodge a complaint to the Personal Data Protection Commission (PDPC) if you are not satisfied with how SAP is
            processing your Personal Data. SAP has appointed a Data Protection Officer for Singapore. Written inquiries,
            requests or complaints to our Data Protection Officer can be send via post to Mapletree Business City, 30
            Pasir Panjang Rd, #03-32, Singapore 117440 or email to privacy[@]sap.com with the subject “Data Protection
            Officer” or can be reached via phone +65 6664 6868.
          </li>
        </ul>
        <br />
        <br />
        <strong>Where SAP is subject to privacy requirements in South Korea.</strong>
        <br />
        <br />
        Where SAP is subject to the requirements of the South Korea Personal Information Protection Act (“PIPA”), the
        following applies:
        <br />
        Your personal data may be processed globally. When personal data is processed across country borders, SAP
        complies with laws on the transfer of personal data between countries to keep your personal data protected. Your
        personal data may be transferred to, accessed or processed by the categories of third parties as described
        above.
        <br />
        How can you exercise your data protection rights?
        <br />
        SAP has appointed a local Chief Privacy Officer for South Korea. Please direct any enquiries or requests via
        email at skillup@sap.com or via phone at +82-2-2194-2279.
        <br />
        <br />
        <strong>Where SAP is subject to privacy requirements in Canada.</strong>
        <br />
        <br />
        Your Personal Data may be processed globally. If personal data is processed across provincial/territorial or
        international borders, SAP complies with laws of the transfer of Personal Data between countries to keep your
        personal data protected. It may, however, based on the laws of such countries be subject to access by local law
        enforcement.
        <br />
        <br />
        <strong>Where SAP is subject to privacy requirements of Mexico.</strong>
        <br />
        <br />
        Where SAP is subject to the requirements of the Mexican Federal Law for the Protection of Personal Data Held by
        Private Parties of 2010, the following applies:
        <br />
        You have the right to file a complaint with the National Institute of Transparency Access to Information and
        Protection of Personal Data (INAI) to assert any disagreement related to the processing of your Personal Data by
        SAP.
        <br />
        SAP reserves the right to change, modify, add or remove portions of this Privacy Statement at its sole
        discretion. In such case, SAP shall maintain available a complete version of SAP’s Privacy Statement. SAP will
        notify you of any change or modification to this Privacy Statement via the respective communication channel We
        have with you, e.g., at Our website.
        <br />
        <br />
        <strong>Where SAP is subject to privacy requirements in India.</strong>
        <br />
        <br />
        Where SAP is subject to the requirements of the Digital Personal Data Protection Act, 2023 (‘DPDPA’) the
        following applies:
        <br />
        As part of a global group of companies operating internationally, SAP has affiliates (the SAP Group) and third
        party service providers outside of the Indian region and will transfer your Personal Data to countries outside
        the India region, subject to any restrictions as may be notified by the Central Government in this regard.
        <br />
        You have the right to:
        <br />
        <ul>
          <li>
            request from SAP at any time access to information about which Personal Data SAP processes about you and, if
            necessary, the correction, completion, update or deletion of such Personal Data. Please note, however, that
            SAP can or will delete your Personal Data only if there is no statutory obligation or prevailing right of
            SAP to retain it. If you request from SAP to delete your Personal Data, you may not be able to continue to
            use any SAP service that requires SAP’s use of your Personal Data.
          </li>
          <li>
            Wherever SAP is processing your Personal Data based on your consent, you may at any time withdraw your
            consent by unsubscribing or giving Us respective notice of withdrawal. In case of withdrawal, SAP will not
            process Personal Data subject to this consent any longer unless legally required to do so. In case SAP is
            required to retain your Personal Data for legal reasons, your Personal Data will be restricted from further
            processing and only retained for the term required by law. However, any withdrawal has no effect on past
            processing of Personal Data by SAP up to the point in time of your withdrawal.
          </li>
          <li>
            request from SAP the right to have readily available means of grievance redressal provided by SAP in respect
            of any act or omission of SAP regarding the performance of SAP’s obligations in relation to your Personal
            Data or your exercise of rights in relation thereto.
          </li>
          <li>
            nominate, any other individual, who shall, in the event of your death or incapacity, exercise your data
            protection rights.
          </li>
        </ul>
        <br />
        Please direct any requests/queries to exercise your rights to skillup@sap.com. In India, after exhausting the
        opportunity of redressing the right of grievance, you may lodge a complaint to the Data Protection Board of
        India.
        <br />
        <br />
        <strong>Where SAP is subject to privacy requirements in the Kingdom of Saudi Arabia (KSA).</strong>
        <br />
        <br />
        Where SAP is subject to the requirements of the Personal Data Protection Law (PDPL) the following applies:
        <br />
        <ul>
          <li>
            SAP processes your Personal Data by using electronic means for collecting, storing and other processing as
            described above.
          </li>
          <li>
            SAP destroys your Personal Data by using electronic means as appropriate for the purposes described above.
          </li>
          <li>
            Your Personal Data will be held and stored by SAP or the SAP Group which may be located in another country
            outside of Saudi Arabia for our general business purposes including outsourcing and data processing.
          </li>
          <li>Depending on the purpose, Personal Data may be shared regularly or occasionally.</li>
          <li>
            Compensation can only be claimed if the courts determined that you were harmed by material or moral damage
            as a result of any violation stipulated in the PDPL and its Implementing Regulations.
          </li>
        </ul>
        <br />
        If SAP does not comply with the PDPL you can file a complaint to the contact provided under section A of this
        document.
        <br />
        If you are not satisfied with how we process your complaint you can file a complaint at the competent authority:
        <br />
        Saudi Data and Artificial Intelligence Authority (SDAIA), Digital City, Riyadh, 12382, Kingdom of Saudi Arabia,
        Website: sdaia.gov.sa
        <br />
        <br />
        <strong>Where SAP is subject to privacy requirements in Indonesia.</strong>
        <br />
        <br />
        <strong>
          Where SAP is subject to the requirements of the Personal Data Protection Law (PDPL) the following applies:
        </strong>
        <br />
        <br />
        <ul>
          <li>
            PT. SAP Indonesia processes your Personal Data, either by itself or on behalf of the SAP Group, with its
            main office located at WTC II, 9th Floor, Metropolitan Complex, Jl. Jend. Sudirman Kav. 29-31, Jakarta
            12920, Indonesia.
          </li>
          <li>
            Your Personal Data may be stored and processed by the SAP Group in countries outside your jurisdiction for
            general business purposes. This will occur only when necessary or appropriate to achieve the purposes set
            out in this Privacy Statement.
          </li>
          <li>
            We implement reasonable technical and organizational measures to safeguard your Personal Data from misuse,
            interference, loss, unauthorized access, modification, or disclosure.
          </li>
        </ul>
        <br />
        To the extent provided by applicable data protection laws, you have the right to:
        <br />
        <ul>
          <li>
            Access and obtain a copy of your Personal Data being processed, subject to the requirements of the law.
          </li>
          <li>
            Request the rectification or completion of inaccurate or incomplete Personal Data processed for specified
            purposes, as permitted by applicable law.
          </li>
          <li>Request for the deletion of your Personal Data, under certain lawful circumstances.</li>
          <li>
            Withdraw your consent for the processing of your Personal Data at any time. The withdrawal of consent will
            not affect the lawfulness of processing based on consent before its withdrawal.
          </li>
          <li>
            Object to any decision-making process based solely on automated processing, including profiling, that
            produces legal effects concerning you or significantly impacts you.
          </li>
          <li>
            Object to or restrict the processing of your Personal Data where legitimate grounds exist, subject to
            applicable legal provisions.
          </li>
          <li>
            Lodge a complaint with the relevant data protection authority in Indonesia if you believe that your rights
            regarding the processing of your Personal Data have been infringed. You also have the right to claim damages
            if there are proven violations against regulations on the protection of your Personal Data, unless otherwise
            agreed upon or unless otherwise prescribed by law.
          </li>
          <li>
            Obtain a copy of your personal data in a structured, commonly used, and machine-readable format, as
            permitted by law.
          </li>
        </ul>
        <br />
        To exercise your rights, including requesting access to and/or copies of your Personal Data, submitting
        objections, or seeking verification and correction of your Personal Data, please contact us via email at
        skillup@sap.com.
        <br />
      </span>
    </motion.div>
  );
};

const privacyVariants = {
  hidden: { y: 1000 },
  visible: {
    y: 0,
    transition: { duration: 0.3, ease: easeOut },
  },
};
