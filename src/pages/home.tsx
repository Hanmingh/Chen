import { Link } from "react-router-dom";
import Linkedin from "../assets/utils/linkedin.svg";

const Home = () => {
  return (
    <section className="py-10 w-[80%] lg:w-[60%] mx-auto">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* sidebar */}
        <aside className="md:w-1/5 flex-shrink-0">
          <img
            src="info/chenying.jpg"
            className="w-full rounded-lg shadow"
          />
          <h1 className="mt-4 text-xl font-bold">YING CHEN <br/>陈颖</h1>
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
              <br />
              <a href="https://www.linkedin.com/in/ying-chen-940a9969/" className="inline-block hover:opacity-75">
                <img src={Linkedin} alt="LinkedIn" className="w-4 h-4 mt-2" />
              </a>
            </p>
          </div>
        </aside>

        {/* main content */}
        <main className="md:w-4/5 space-y-12">
          {/* Bio */}
          <section>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="prose max-w-none space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">
                  I am currently an Associate Professor in the Department of Mathematics at the National 
                  University of Singapore (NUS), a position I have held since January 2019. I serve as the Director 
                  of the Centre for Quantitative Finance, and Program Director of two master's programs in 
                  Quantitative Finance, including a joint program with Shanghai Jiao Tong University (SJTU). I 
                  also hold joint and courtesy appointments across several departments and institutes at NUS.
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                I have maintained a strong international presence through event organization and academic 
                leadership. I am invited to deliver IASC President's Invited Talk at the 65th ISI World 
                Statistics Congress on 6-9 Oct, 2025 in the Netherland.
              </p>
              <p className="text-sm text-muted-foreground">
                I have organized:
              </p>
              <ul className="list-disc text-sm text-muted-foreground list-inside ml-4 space-y-1">
                <li>Three one-month thematic programs on time series at NUS's Institute for Mathematical Sciences</li>
                <li>The AAAI 2023 Inaugural Summer Symposium on AI for FinTech in Singapore</li>
                <li>Workshops and conferences at leading institutions, including ETH Zurich, Zuse Institute Berlin, and Cambridge</li>
              </ul>
              <p className="text-sm text-muted-foreground">
                I currently serve as an elected Council Member (2023–2027) of the International Statistical 
                Institute (ISI) and am Chairperson (2025–2027) and Board Member of the Asian Regional 
                Section (ARS) of the International Association for Statistical Computing (IASC). I was also a 
                member of the Advisory Board of the Institute of Statistical Mathematics (ISM) in Japan 
                (2018–2022).
              </p>
              <p className="text-sm text-muted-foreground">
                As Academic Director of the Asian Institute of Digital Finance (AIDF), I established strategic 
                partnerships with Columbia University's Center for Digital Finance and Technologies, ETH 
                Zurich's FinsureTech Hub, and NUS AIDF—all recognized for leadership in FinTech and 
                digital innovation. In 2023, I also launched the industry co-education scheme for the AIDF 
                PhD program, culminating in a formal partnership with GIC, Singapore's sovereign wealth 
                fund.
              </p>
              <p className="text-sm text-muted-foreground">
                I currently lead two master's programs in quantitative finance: the NUS MQF and the joint 
                MQF-SJTU, which together serve approximately 300 students, with an annual intake of 135 
                and 45, respectively.
              </p>
              <p className="text-sm text-muted-foreground">
                Through the Centre for Quantitative Finance, I coordinate an annual international conference, 
                regular biweekly seminars, and academic–industry collaborations, and I host visiting scholars 
                and exchange students.
              </p>
            </div>
          </section>

          {/* Download CV */}
          <section>
            <a
              href="/CV_YingChen_20250801.pdf"
              className="text-2xl font-bold mb-4"
              target="_blank"
              rel="noopener noreferrer"
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

          {/* Career */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Career</h2>
            <ul className="list-disc text-sm text-muted-foreground list-inside space-y-2">
              <li>Associate Professor in Department of Mathematics, National University of Singapore, Singapore, since January 2019</li>
              <li>Director at the Centre for Quantitative Finance (CQF) from 1 July 2024 to 30 June 2026 (Interim from 15 January 2024 to 30 June 2024) and ex-officio member of the Management Board of the CQF.</li>
              <li>Academic Director at the Asian Institute of Digital Finance (AIDF) for PhD in Digital Financial Technology Programme, July 2022 to April 2024</li>
              <li>Joint Appointee in Risk Management Institute, National University of Singapore, Singapore, 1 July 2019 to 30 June 2027</li>
              <li>Associate Professor in Department of Statistics and Data Science, National University of Singapore, Singapore, January 2014 to December 2018, then Joint Appointment from January 2019 to December 2026.</li>
              <li>Program Director of MSc in Quantitative Finance (NUS-SJTU MQF) form 1 July 2023.</li>
              <li>Program Co-director of Data Science and Economics (DSE) cross-disciplinary program (XDP) form 1 March 2021 to 30 June 2023.</li>
              <li>Courtesy appointment in Department of Economics, April 1, 2018 to March 31, 2026</li>
              <li>Graduate Committee member of the Asian Institute of Digital Finance (AIDF)</li>
              <li>EXCO member and affiliated researcher in the Institute of Data Science (IDS).</li>
              <li>Affiliated researcher in Institute of Operations Research and Analytics (IORA).</li>
              <li>Faculty member in NUS Graduate School for Integrative Sciences and Engineering, Singapore, since July 2016</li>
              <li>Assistant Professor in Department of Statistics and Applied Probability, National University of Singapore, Singapore, July 2007 – December 2013</li>
              <li>Wissenschaftliche Mitarbeiterin at Humboldt-Universität zu Berlin, Germany, October 2002 - January 2007 and Weierstraß-Institut für Angewandte Analysis undStochastik (WIAS), Germany, June 2005 - January 2007</li>
            </ul>
          </section>

          {/* Professional Activities */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Professional Activities</h2>
            <ul className="list-disc text-sm text-muted-foreground list-inside space-y-2">
              <li>Chairperson (2025-2027) and Board of Director ordinary member of the Asian Regional Section (ARS) of the International Association for Statistical Computing (IASC)  Scientific Secretary (July 2017-June 2019, July 2023 – June 2025) and
              Executive Committee Member (July2017 – June 2023) of IASC</li>
              <li>Council Member of the International Statistical Institute (7 Associations with over
                4500 members from over 100 countries) for the period 2023 – 2027.</li>
              <li>Conference Ambassador initiated by the Singapore Exhibition & Convention 
              Bureau™ (SECB) from 1 August 2023 to 31 December 2025.</li>
              <li>Finance cluster chair for INFORMS International Meeting 2025 in Singapore.</li>
              <li>Scientific Programme Committee Member of the 64th ISI World Statistics Congress
              (WSC2023) in Ottawa, Canada on 16–20 July 2023.</li>
              <li>Regular member of the Advisory Board of Institute of Statistical Mathematics, Japan
              from 1 April 2018 to 31 March 2022</li>
              <li>Advisor of the EU FIN-TECH project, under the EU's Horizon2020 funding scheme,
              led by <a href="https://www.fintech-ho2020.eu/" className="text-blue-600 hover:underline">Prof. Paolo Giudici</a></li>
              <li>Scientific committee member of eXplainable Artificial Intelligence in Healthcare
              Management (xAIM) project under review by EU</li>
              <li>ISI Elected Member since March 2016</li>
              <li>Member of <a href="https://www.cost.eu/cost-action/" className="text-blue-600 hover:underline">EU COST Action: CA19130</a> - Fintech and Artificial Intelligence in Finance - Towards a transparent financial industry</li>
              <li>Co-Editor of Journal of Data Science, Statistics and Visualization (JDSSV, 2024-)</li>
              <li>Guest editor of Earth, Planets and Space (EPS) for a special issue on advanced AI-based 
              analysis of earthquake-related data (2025-2026).</li>
              <li>Associate Editor of Statistica Sinica (August 1, 2017 to July 31, 2023), Statistics and Its
              Interface, Digital Finance.</li>
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