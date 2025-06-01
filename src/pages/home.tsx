const Home = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* sidebar */}
        <aside className="md:w-1/5 flex-shrink-0">
          <img
            src="info/chenying.jpg"
            className="w-full rounded-lg shadow"
          />
          <h1 className="mt-4 text-xl font-bold">YING CHEN (陈颖)</h1>
          <h2 className="mt-1 text-lg font-semibold uppercase tracking-wide">
            assoc professor
          </h2>
          <div className="mt-4 text-xs text-gray-600 space-y-2">
            <p className="text-xs">
              Department of Mathematics<br /><br />
              National University of Singapore,<br />
              Department of Mathematics,<br />
              Block S17, Level 4, 10 Lower Kent Ridge Road,<br />
              Singapore, 119076
            </p>
            <p className="text-xs">
              +65 6601 3976 (Work)<br />
              <a
                href="mailto:matcheny@nus.edu.sg"
                className="text-blue-600 hover:underline"
              >
                matcheny@nus.edu.sg
              </a>
              <br />
              <a href="https://orcid.org/0000-0002-2577-7348" className="text-blue-600 hover:underline">0000-0002-2577-7348</a>
            </p>
          </div>
        </aside>

        {/* main content */}
        <main className="md:w-4/5 space-y-12">
          {/* Bio */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Bio</h2>
            <div className="prose max-w-none space-y-4">
              <p className="text-sm text-muted-foreground">
                Dr. Ying Chen is a financial statistician and data scientist. She
                develops modelling, methods and algorithms customized for
                nonstationary, high-frequency and large-dimensional complex data
                in finance and energy. Her current research includes AI
                forecasting and optimization, quantum computing in finance,
                credit modelling and rating, citation analysis and research
                metrics, etc. Dr. Chen is Associate Professor in the Department
                of Mathematics, Director of Centre for Quantitative Finance, PI
                of the Asian Institute of Digital Finance. She is also the
                Program Director of the MSc in Quantitative Finance and the MQF
                program and holds Joint Appointments in the Risk Management
                Institute at NUS. She is Council Member of the International
                Statistical Institute (2023–2027) and Chair-elect of the Asian
                Regional Section of IASC.
              </p>
              <p className="text-sm text-muted-foreground">
                Dr. Chen was Academic Director of the Digital FinTech PhD
                program at AIDF and Joint Appointee in the Department of
                Statistics & Applied Probability (2019–2021). She also holds a
                Courtesy Appointment in the Department of Economics (2018–2021)
                at NUS and is Faculty in the NUS Graduate School for Integrative
                Sciences and Engineering since 2016.
              </p>
              <p className="text-sm text-muted-foreground">
                She is Associate Editor of four journals (Statistica Sinica,
                Statistics and Its Interface, Digital Finance, …) and was
                Scientific Secretary (2017–2019) and Executive Committee member
                of IASC (2017–2022). She served on the Advisory Board of the
                Institute of Statistical Mathematics, Japan (2018–2022).
              </p>
            </div>
          </section>

          {/* Download CV */}
          <section>
            <a
              href="https://bpb-us-w2.wpmucdn.com/blog.nus.edu.sg/dist/5/10939/files/2024/12/CV_YingChen_20241212.pdf"
              className="text-2xl font-bold mb-4"
            >
              Download CV
            </a>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <ul className="list-disc text-sm text-muted-foreground list-inside space-y-2">
              <li>B.Sc. in Economics (1998) Renmin University of China 中国⼈民⼤学, China</li>
              <li>M.A. in Economics and Management Science (2002) Humboldt-Universität zu Berlin, Germany</li>
              <li>M.Sc. in Statistics (2005) Humboldt-Universität zu Berlin and Freie Universität Berlin, Germany</li>
              <li>Ph.D. in Statistics (2007) Summa Cum Laude Humboldt-Universität zu Berlin. Supervisors: 
                Prof. Dr. Wolfgang Härdle (Humboldt-Universität zu Berlin, haerdle@wiwi.hu-berlin.de) and Prof. Dr. Vladimir Spokoiny 
                (Weierstraß-Institut für Angewandte Analysis und Stochastik, spokoiny@wias-berlin.de)</li>
            </ul>
          </section>

          {/* Professional Activities */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Professional Activities</h2>
            <ul className="list-disc text-sm text-muted-foreground list-inside space-y-2">
              <li>Chairperson Elected (2023-2025) and Board of Director ordinary member of the Asian Regional Section (ARS) of the International Association for Statistical Computing (IASC)</li>
              <li>Scientific Secretary (July 2017-June 2019, July 2023 – June 2025) and Executive Committee Member (July 2017 – June 2023) of the International Association for Statistical Computing (IASC)</li>
              <li>Council Member of the International Statistical Institute for the period 2023 – 2027.</li>
              <li>Scientific Programme Committee Member of the 64th ISI World Statistics Congress (WSC2023) in Ottawa, Canada on 16–20 July 2023.</li>
              <li>Organizing Committee member of Artificial Intelligence for FinTech (AI4FinTech) at Association for the Advancement of Artificial Intelligence (AAAI) 2023 Summer Symposium Series, Singapore on 17-19 July 2023.</li>
              <li>Regular member of the Advisory Board of Institute of Statistical Mathematics, Japan from 1 April 2018 to 31 March 2022</li>
              <li>Advisor of the EU FIN-TECH project, under the EU's Horizon2020 funding scheme, led by Prof. Paolo Giudici (<a href="https://www.fintech-ho2020.eu/" className="text-blue-600 hover:underline">https://www.fintech-ho2020.eu/</a>)</li>
              <li>Scientific committee member of eXplainable Artificial Intelligence in Healthcare Management (xAIM) project under review by EU</li>
              <li>ISI Elected Member since March 2016 – Board of Director ordinary member of the Asian Regional Section (ARS) of the International Association for Statistical Computing (IASC)</li>
              <li>Associate Editor of Statistica Sinica (August 1, 2017 to July 31, 2023), Statistics and Its Interface, Digital Finance and Computational Statistics</li>
            </ul>
          </section>

          {/* Patents */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Patents</h2>
            <ol className="list-decimal text-sm text-muted-foreground list-inside space-y-2">
              <li>PCT Patent Application No.: PCT/SG2023/050193 Title: A Data-Driven Bunker Planner System. TTI Ref: 2021-391-02.</li>
              <li>SG Patent Application No. 10202402748U. Title: Quantum-Ready Decentralized Investment Platform Using Distributed Ledger Technology for Optimized Portfolio Management. TTI Ref: 2024-280-01.</li>
            </ol>
          </section>
        </main>
      </div>
    </section>
  )
}

export default Home