import './personalData.scss'

const PersonalData = () => {
  return (
    <section>
      <div className="container">
        <div className='personal-data'>
          <h2>Process personal data</h2>
          <p>
            Data controllers need to rely on a “legal basis” in order to process personal data lawfully. It is essential to identify the appropriate legal basis as it may come with specific requirements (e.g. consent must be free, specific, informed and unambiguous) and have consequences on individuals’ rights (e.g. the right to portability only applies when the legal basis is consent or a contract).
          </p>
          <p>
            Data controllers can only process personal data in one of the following circumstances:
          </p>
          <ul>
            <li>with the consent of the individuals concerned;</li>
            <li>where there is a contractual obligation (a contract between your organisation and an individual);</li>
            <li>to meet a legal obligation under EU or national legislation;</li>
            <li>where processing is necessary for the performance of a task carried out in the public interest under EU or national legislation;</li>
            <li>to protect the vital interests of an individual;</li>
            <li>or your organisation’s legitimate interests (except if these are overridden by the interests or fundamental rights of individuals) .</li>
          </ul>

          <h5>Free</h5>

          <p>
            Consent is freely given when individuals are able to refuse and withdraw their consent with no risk of external pressure or negative consequences. Individuals must also have the right to withdraw their consent at any time; this process must be made easy for individuals to do (as easily as it was to provide it). Withdrawing consent must not affect the processing of the individual’s personal data that was done prior to this withdrawal, when consent was still valid.
          </p>
          <p>
            For example, in principle, employees will not be in a position to freely provide consent to processing carried out by their employer, as employees may feel that they are unable to refuse their employer’s request.
          </p>

          <h5>Specific</h5>

          <p>
            For consent to be valid, it must also be specific to the processing purpose. This condition is closely related to the condition of informed consent: individuals must be informed of the specific purposes in a plain and easy to understand language, so that they have a clear idea for which purposes their data is being processed. This also means that if the purposes of the processing operation change or if additional processing operations are added, individuals should be asked for their consent again. Likewise, if a processing operation has multiple purposes, consent should be given for each of them.
          </p>

          <p>
            For example, a streaming service collects their clients’ personal data to offer them tailored viewing suggestions. After some time, the streaming service decides to share their clients’ personal data with third parties so that they can send targeted advertising to the clients based on their viewing habits. As this is a new purpose, the streaming service will have to ask for their client’s consent.
          </p>

          <h5>Informed</h5>

          <p>
            When requesting consent from an individual, your organisation must ensure that this request is communicated to the individual in an intelligible and easily accessible form, using clear and plain language. Information should be given about the purposes, the identity of the controller, the categories of data, the recipients and the right to withdraw consent.
          </p>

          <h5>Unambiguous</h5>

          <p>
            For consent to be unambiguous, there should be a clear affirmative action (without pre-ticked boxes and made separately from applicable general conditions).
          </p>

          <p>
            It is recommended to refresh the consent at appropriate intervals. In addition, you must be able to demonstrate that the individual whose data is processed has given their consent, for example through a written or signed declaration, or by a deliberate action like ticking a box.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PersonalData