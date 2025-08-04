

const Research = () => {
  return (
    <section className="py-10 w-[80%] lg:w-[60%] mx-auto">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Research</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Research Interests */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Research Funding and Impact</h2>
            <p className="text-sm text-muted-foreground">
              Since 2016, I have secured over S$16 million in competitive research funding from agencies 
              such as the National Research Foundation (NRF), Monetary Authority of Singapore (MAS), 
              Ministry of Education (MoE), HTX Singapore, and industry partners including UPS, DSO, and 
              ONE. My research has advanced fields such as nonstationary time series, large-scale complex 
              data analysis, AI forecasting, and quantum computing for finance and fintech.
            </p>
            <p className="text-sm text-muted-foreground">
              I have authored 45 publications and hold 2 patents. The majority of my work appears in top-tier 
              journals in statistics, econometrics, and energy with impact factor ≥ 3.0, SJR above 2, and H-index above 100.
            </p>
            <h2 className="text-2xl font-bold mb-6 mt-8">Research Interests</h2>
            <ul className="list-disc text-sm text-muted-foreground list-inside space-y-2">
              <li>AI Forecasting and Optimization</li>
              <li>
                Deep Learning & Quantum Computing for Quantitative Finance/FinTech/RegTech: 
                Portfolio Liquidation; NLP and Sentiments; Market Making; Crypto blockchains
              </li>
              <li>
                Time Series Analysis: Nonstationary Time Series; Functional Time Series, Networks 
                and Spatial-Temporal Data
              </li>
              <li>Energy Data Analytics: Modeling and Inference</li>
              <li>
                Data-Oriented Analytics in Precision Medicine, Citation Analysis & Research Metrics,
                Patent Valuation, eXplainable AI
              </li>
            </ul>
          </section>

          {/* Research Grants and Projects */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Research Grants and Projects</h2>
            <ol className="list-decimal text-sm text-muted-foreground list-inside space-y-2">
              <li>HTX grant on AI-Driven Analysis Of Human Performance. Status: PI. Duration: 1 October 2025 to 31 March 2027.</li>
              <li>White Space Project Quantum speed-up in FinTech Algorithms and Optimization funded under the Financial Sector Development Fund (FSDF), by the Monetary Authority of Singapore and the Asian Institute of Digital Finance. Status: PI. Duration: 1 March 2024 to 30 June 2025.</li>
              <li>National Research Foundation grant on Computer science approaches to quantum computing for finance. Status: Co-I. Duration: 1 April 2022 to 31 May 2025.</li>
              <li>National Research Foundation grant on aidF's Upstream Research Programme. Subproject UP#5: Credit recovery efficiency analytics. Status: PI. Duration: 1 July 2020 to 30 June 2025 (Co-I from 1 Jan 2023 – 30 June 2023).</li>
              <li>NUS GAP Project funding. A Data-Driven Bunker Planner System. Status: Co-I. Duration: 1 January 2023 to 31 December 2023. (SG Patent Application No. 10202203430W)</li>
              <li>NUS FoS-FASS joint grant. Regime-Switching Markov Decision Process with Applications in Digital FinTech. Status: PI. Duration: 1 January 2023 to 30 June 2024.</li>
              <li>NUS Tier 1 RGF Grant Deep State Space Models for Non-stationary Time Series. Status: PI. Duration: March 2022 – Dec 2024.</li>
              <li>Research grant on Personalised Heat Strain Modelling In Uncompensable Conditions awarded by DSO. Status: PI. Duration: Dec 2020 – June 2022.</li>
              <li>NUS-SGX Project on Ai and Data-driVen Incentive SystEm (ADVISE). Duration: September 2019 – March 2021.</li>
              <li>NUS-UPS Research Project on AI Powered Forecasting. Status: PI. Duration: September-November 2019.</li>
              <li>NUS Tier 1 RGF Grant on Data-driven adaptive count time series modelling with applications to non-stationary crime data and dengue fever data. Status: PI. Duration: July 2019 - June 2020.</li>
              <li>NUS Tier 1 RGF Grant on Sentiment Analytics and Predictive Analytics in Digital Economy. Status: PI. Duration: Jan 2019- Dec 2019.</li>
              <li>Research grant by NSCC (National Supercomputing Centre Singapore): AI and Data Driven Analytics on Complex data in Financial Markets: Limit order book, cryptocurrency and blockchain, and sentiment analysis. Status: PI. Duration: January 2019 – December 2019.</li>
              <li>HU-NUS Joint Research Project 2018. Augmented Intelligence in Digital Society, Status: Lead PI in NUS. Duration: 15 November 2018 – 14 February 2020.</li>
              <li>Research grant by Risk Management Institute: Sentiment Analysis of Financial News with AI and Data Science. Status: PI. Duration: August 2018 – July 2021.</li>
              <li>NUS Tier 1 RGF Grant associated with the Research Fellow (RF) position to be co-funded by the Research Scholarship Block (RSB) and the MOE Co-funding Scheme (CFS) ("RSB-funded RF") on Augmented machine learning and network analysis with applications to cryptos and blockchains. Status: PI. Duration: July 2018 – June 2021.</li>
              <li>Research grant issued by Institute of Data Science: Power of Web Text Data and Functional Data in Trend Forecast, Decision Making and Managerial Improvement. Status: PI. Duration: June 2017 – May 2019.</li>
              <li>NUS Tier 1 RGF Grant on Functional Time Series Data Analysis: High Dimensionality, Non-stationarity and Sparsity. Status: PI. Duration: Oct 2016- Sep 2019.</li>
              <li>Research grant on Statistical Models for estimating personalised heat strain in soldiers engaged in high intensity physical activities awarded by DSO. Status: PI. Duration: April 2016- October 2018.</li>
              <li>Research grant on Individualised Heat Strain Modelling awarded by DSO IDP (Internally Directed Project). Status: Co-PI (PI: Dr. Seng Kok Yong, DSO National Laboratories, Singapore). Duration: February 2014 – September 2014.</li>
              <li>Research grant on Equity Market Microstructure and High Frequency Trading in Singapore awarded by Financial Sector Development Fund of MAS. Status: Collaborator (PI: Dr. Sergey Ivliev, Perm State University, Russia). Duration: December 2012 to December 2013.</li>
              <li>Research grant 71273007 awarded by National Natural Science Foundation of China (中国国家自然科学基金委员会) on Open economy yield curve modeling and applications: RMB appreciation and the financial crisis. Status: Collaborator (PI: Associate Professor Niu Linlin, Xiamen University, China). Duration: January 2013 to December 2016.</li>
              <li>NUS Tier 1 RGF Grant on Realized Covariance: Modeling and Application. Status: Principal Investigator. Duration: November 2011 to October 2014.</li>
              <li>RMI Research Grant (awarded by MAS/NUS) on Adaptive Risk Management. Status: Co-Principal Investigator (PI: Professor Xia Yingcun). Duration: July 2009 to October 2010.</li>
              <li>RMI Research Grant (awarded by MAS/NUS) on Adaptive Time Series Models for Irregularly Spaced and Ultra-High Frequency Financial Data. Status: Principal Investigator. Duration: May 2009 to April 2011.</li>
              <li>NUS Start-Up Grant on Accounting for Non-stationary of Heavy-Tailed Time Series. Status: Principal Investigator. Duration: July 2007 to June 2010.</li>
            </ol>
          </section>

          {/* Publications */}
          <section id="publications">
            <h2 className="text-2xl font-bold mb-4">Publications</h2>
            <ol className="list-decimal text-sm text-muted-foreground list-inside space-y-2">
              <li>Rong, G., Chen, Y., Ma, F. and Koch, T. (2025). Interdisciplinary Trends; Critical Years; Interdisciplinary Citations; Citation Analysis. Reviewed by Journal of Informetrics (Impact Factor: 3.4, SJR: 1.321).</li>
              <li>Chen, Y., Griffin, P., Recchia, P., Zhou, L. and Zhang, H. (2025) Hybrid Quantum Neural Networks with Amplitude Encoding: Advancing Recovery Rate Predictions. Reviewed by Financial Innovation (Impact Factor: 6.9, SJR: 1.287).</li>
              <li>Chen, Y., Horst, U., and Tran, H.H. (2025). Portfolio liquidation under transient price impact. Accepted by Applied Mathematical Finance. <a
                  href="https://doi.org/10.1080/1350486X.2025.2537932"
                  className="text-blue-600 hover:underline">doi.org/10.1080/1350486X.2025.2537932</a></li>
              <li>Chen, Y., Horst, U., and Tran, H.H. (2025). Optimal Trade Execution Under Endogenous Order Flow. Accepted by Operations Research (Impact Factor: 2.2, SJR: 2.56).</li>
              <li>Han, X., Zhu, Y., Zhang, Y., and Chen, Y. (2025). Policy Impact on the Global COVID-19 Pandemic and Unemployment Outcomes: A Large-Scale Mixed Frequency Spatial Approach. Accepted by Economic Modelling (Impact Factor: 3.875, SJR: 1.417).</li>
              <li>Xu, X., Peng, H., and Chen, Y. (2025). Deep Switching State Space Model for Nonlinear Time Series Forecasting with Regime Switching. Accepted by International Journal of Forecasting (Impact Factor: 7.9. SJR 2.428). <a
                  href="https://doi.org/10.1016/j.ijforecast.2025.05.001"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.ijforecast.2025.05.001</a></li>
              <li>Zhou, L., Chen, Y., Peng, H. and Koch, T. (2025), Is Innovation Slowing Down? Insights from the AIMS Framework of Patent Values. Accepted by Expert Systems With Applications.</li>
              <li>Chen, Y., Grith, M. and Lai, H. (2024), Neural Tangent Kernel in Implied Volatility Forecasting: A Nonlinear Functional Autoregression Approach. Accepted by Journal of Business & Economic Statistics.</li>
              <li>Trimborn, S., Peng, H. and Chen, Y. (2024). Influencer detection meets network autoregression — Influential regions in the bitcoin blockchain, Journal of Empirical Finance, Volume 78, 101529, ISSN 0927-5398, <a
                  href="https://doi.org/10.1016/j.jempfin.2024.101529"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.jempfin.2024.101529</a>.</li>
              <li>Chen, Y., Giudici, P., Liu, K. and Raffinetti, E. (2024). Measuring fairness in credit ratings, Expert Systems with Applications, Volume 258, 125184, <a
                  href="https://doi.org/10.1016/j.eswa.2024.125184"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.eswa.2024.125184</a>.</li>
              <li>Iwasaki, H., Chen, Y. and Tu, J. (2023). Topic Tones of Analyst Reports and Stock Returns: A Deep Learning Approach. International Review of Finance. Accepted.</li>
              <li>Xu, X., Zhang, Y., Liu, Y., Goto, Y., Taniguchi, M., and Chen, Y. (2023) Long-memory Log-linear Zero-inflated Generalized Poisson Autoregression for Covid-19 Pandemic Modeling. Statistica Sinica. <a
                  href="https://doi.org/10.5705/ss.202022.0148"
                  className="text-blue-600 hover:underline">https://doi.org/10.5705/ss.202022.0148</a></li>
              <li>Chen, Y., Koch, T., Zakiyeva, N., Liu, K., Xu, Z., Chen, C. H., Nakano, J. and Honda, K. (2023). Article's Scientific Prestige: measuring the impact of individual articles in the Web of Science. Journal of Informetrics, Vol. 17 (1). <a
                  href="https://doi.org/10.1016/j.joi.2023.101379"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.joi.2023.101379</a></li>
              <li>Lai, W. T., Chen, R. B., Chen, Y. and Koch, T. (2022). Variational Bayesian Inference for Network Autoregression Models. Computational Statistics and Data Analysis, Vol. 169, 107406. <a
                  href="https://doi.org/10.1016/j.csda.2021.107406"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.csda.2021.107406</a></li>
              <li>Xu, X., Chen, Y., Zhang, G. and Koch, T. (2022). Modeling functional time series and mixed-type predictors with partially functional autoregression. Journal of Business & Economic Statistics. <a
                  href="https://doi.org/10.1080/07350015.2021.2011299"
                  className="text-blue-600 hover:underline">https://doi.org/10.1080/07350015.2021.2011299</a></li>
              <li>Liu, P., Chen, Y. and Teo, C. P. (2021). Limousine Service Management: Capacity Planning with Predictive Analytics and Optimization. INFORMS Journal on Applied Analytics, 245–328. <a
                  href="https://doi.org/10.1287/inte.2021.1079"
                  className="text-blue-600 hover:underline">https://doi.org/10.1287/inte.2021.1079</a></li>
              <li>Xu, X., Chen, Y. and Kou, S. (2021). Discussion on "Text Selection". Journal of Business & Economic Statistics, 39(4), 883–887. <a
                  href="https://doi.org/10.1080/07350015.2021.1942890"
                  className="text-blue-600 hover:underline">https://doi.org/10.1080/07350015.2021.1942890</a></li>
              <li>Xu, X., Chen, Y., Goude, Y. and Yao, Q. (2021). Day-ahead Probabilistic Forecasting for French Half-hourly Electricity Loads and Quantiles for Curve-to-Curve Regression. Accepted by Applied Energy.</li>
              <li>Chen, Y., Koch, T., Zakiyeva, N. and Zhu, B. (2020). Modeling and Forecasting the Dynamics of the Natural Gas Transmission Network in Germany with the Demand and Supply Balance Constraint. Applied Energy, Vol. 278, 115597. <a
                  href="https://doi.org/10.1016/j.apenergy.2020.115597"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.apenergy.2020.115597</a></li>
              <li>Xu, X., Chen, Y., Chen, C. W. S. and Lin, X. (2020). Adaptive Log-Linear Zero-Inflated Generalized Poisson Autoregressive Model with Applications to Crime Counts Data. Annals of Applied Statistics, Vol. 14, 1493–1515. <a
                  href="https://doi.org/10.1214/20-AOAS1360"
                  className="text-blue-600 hover:underline">https://doi.org/10.1214/20-AOAS1360</a></li>
              <li>Chen, Y., Koch, T., Lim, K. G., Xu, X. and Zakiyeva, N. (2020). A review study of functional autoregressive models with application to energy forecasting. WIREs Computational Statistics. <a
                  href="https://doi.org/10.1002/wics.1525"
                  className="text-blue-600 hover:underline">https://doi.org/10.1002/wics.1525</a></li>
              <li>Zhu, Y., Han, X. and Chen, Y. (2020). Bayesian estimation and model selection of threshold spatial Durbin model. Economics Letters, Vol. 188, March 2020, 108956. <a
                  href="https://doi.org/10.1016/j.econlet.2020.108956"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.econlet.2020.108956</a></li>
              <li>Chen, Y., Giudici, P., Misheva, B. H. and Trimborn, S. (2020). Lead Behaviour in Bitcoin Markets. Risks, 8(1):4. <a
                  href="https://doi.org/10.3390/risks8010004"
                  className="text-blue-600 hover:underline">https://doi.org/10.3390/risks8010004</a></li>
              <li>Chen, Y., Koch, T. and Xu, X. (2020). Day-Ahead High-Resolution Forecasting of Natural Gas Demand and Supply in Germany with a Hybrid Model. Applied Energy, Vol. 262, 15 March 2020, 114486. <a
                  href="https://doi.org/10.1016/j.apenergy.2019.114486"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.apenergy.2019.114486</a></li>
              <li>Lin, L. Ch., Chen, Y., Pan, G. and Spokoiny, V. (2019). Efficient and semi-positive definite pre-averaging realized covariance estimator. Accepted by Statistica Sinica. http://www3.stat.sinica.edu.tw/ss_newpaper/SS-2017-0489_na.pdf DOI: 10.5705/ss.202017.0489</li>
              <li>Chen, Y., Chua, W. S. and Härdle, W. K. (2019). Forecasting Limit Order Book Liquidity Supply-Demand Curves with Functional AutoRegressive Dynamics. Quantitative Finance, 19(9):1473–1489. <a
                  href="https://doi.org/10.1080/14697688.2019.1622290"
                  className="text-blue-600 hover:underline">https://doi.org/10.1080/14697688.2019.1622290</a></li>
              <li>Chen, Y., Marron, J. S. and Zhang, J. (2019). Modeling Seasonality and Serial Dependence of Electricity Price Curves with Warping Functional Autoregressive Dynamics. Annals of Applied Statistics, 13(3):1590–1616. <a
                  href="https://doi.org/10.1214/18-AOAS1234"
                  className="text-blue-600 hover:underline">https://doi.org/10.1214/18-AOAS1234</a></li>
              <li>Lim, K. G., Chen, Y. and Yap, N. (2019). Intraday Information from S&P 500 Index Futures Options. Journal of Financial Markets, 42:29–55. <a
                  href="https://doi.org/10.1016/j.finmar.2018.10.001"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.finmar.2018.10.001</a></li>
              <li>Chen, Y., Niu, L., Chen, R. B. and He, Q. (2019). Sparse-Group Independent Component Analysis with Application to Yield Curves Prediction. Computational Statistics and Data Analysis, 133:76–89. <a
                  href="https://doi.org/10.1016/j.csda.2018.08.027"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.csda.2018.08.027</a></li>
              <li>Guo, J. and Chen, Y. (2019). An L2-norm based ANOVA test for the equality of weakly dependent functional time series. Statistics and Its Interface, 12(1):167–180. <a
                  href="https://doi.org/10.4310/SII.2019.V12.N1.A14"
                  className="text-blue-600 hover:underline">https://doi.org/10.4310/SII.2019.V12.N1.A14</a></li>
              <li>Chen, Y., Härdle, W. K., He, Q. and Majer, P. (2018). Risk Related Brain Regions Detection and Individual Risk Classification with 3D Image FPCA. Statistics and Risk Modeling, 35(3-4):89–110. <a
                  href="https://doi.org/10.1515/STRM-2017-0011"
                  className="text-blue-600 hover:underline">https://doi.org/10.1515/STRM-2017-0011</a></li>
              <li>Chen, Y., Han, Q. and Niu, L. (2018). Forecasting the Term Structure of Option Implied Volatility: The Power of an Adaptive Method. Journal of Empirical Finance, 49:157–177. <a
                  href="https://doi.org/10.1016/j.jempfin.2018.09.006"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.jempfin.2018.09.006</a></li>
              <li>Chen, Y., Chua, W. S. and Koch, T. (2018). Forecasting day-ahead high-resolution natural-gas demand and supply in Germany. Applied Energy, 228:1091–1110. <a
                  href="https://doi.org/10.1016/j.apenergy.2018.06.137"
                  className="text-blue-600 hover:underline">https://doi.org/10.1016/j.apenergy.2018.06.137</a></li>
              <li>Chen, Y. and Li, B. (2017). An Adaptive Functional Autoregressive Forecast Model to Predict Electricity Price Curves. Journal of Business & Economic Statistics, 35(3):371–388. <a
                  href="https://doi.org/10.1080/07350015.2015.1092976"
                  className="text-blue-600 hover:underline">https://doi.org/10.1080/07350015.2015.1092976</a></li>
              <li>Xu, M., Li, J. and Chen, Y. (2017). Varying Coefficient Functional Autoregressive Model with Application to the US Treasuries. Journal of Multivariate Analysis, 159:168–183. <a
                  href="https://doi.org/10.1016/j.jmva.2017.05.003"
                  className="text-blue-600 hover:underline">
                  https://doi.org/10.1016/j.jmva.2017.05.003</a></li>
              <li>Niu, L., Xu, X. and Chen, Y. (2017). An Adaptive Approach to Forecasting Three Key Macroeconomic Variables for Transitional China. Economic Modelling, 66:201–213. <a
                  href="https://doi.org/10.1016/j.econmod.2017.07.001"
                  className="text-blue-600 hover:underline"
                  >https://doi.org/10.1016/j.econmod.2017.07.001</a></li>
              <li>Weisman, O., Pelphrey, K. A., Leckman, J. F., Feldman, R., Lu, Y., Chong, A., Chen, Y., Monakhov, M., Chew, S. H. and Ebstein, R. P. (2015). The Association between 2D:4D Ratio and Cognitive Empathy is Contingent on a Common Polymorphism in the Oxytocin Receptor Gene (OXTR rs53576). Psychoneuroendocrinology, 58:23–32. <a
                  href="https://doi.org/10.1016/j.psyneuen.2015.04.007"
                  className="text-blue-600 hover:underline">
                  https://doi.org/10.1016/j.psyneuen.2015.04.007</a></li>
              <li>Chen, Y. and Spokoiny, V. (2015). Modeling Nonstationary and Leptokurtic Financial Time Series. Econometric Theory, 31(4):703–728. <a
                  href="https://doi.org/10.1017/S0266466614000528"
                  className="text-blue-600 hover:underline"
                > https://doi.org/10.1017/S0266466614000528</a></li>
              <li>Chen, R. B., Chen, Y. and Härdle, W. K. (2014). TVICA—Time Varying Independent Component Analysis and Its Application to Financial Data. Computational Statistics & Data Analysis, 74:95–109.</li>
              <li>Chen, Y. and Niu, L. (2014). Adaptive Dynamic Nelson-Siegel Term Structure Model with Applications. Journal of Econometrics, 180(1):98–115.</li>
              <li>Chen, Y., Li, B. and Niu, L. (2013). A Local Vector Autoregressive Framework and its Applications to Multivariate Time Series Monitoring and Forecasting. Statistics and Its Interface, 6(4):499–509.</li>
              <li>Chen, Y. and Lu, J. (2012). Value at Risk Estimation. In Handbook of Computational Finance, 307–333. Springer, Berlin, Heidelberg.</li>
              <li>Chen, Y. and Li, B. (2011). Forecasting Yield Curves in an Adaptive Framework. Central European Journal of Economic Modelling and Econometrics, 3(4):237–259.</li>
              <li>Chen, Y., Härdle, W. K. and Pigorsch, U. (2010). Localized Realized Volatility Modelling. Journal of the American Statistical Association, 105(492):1376–1393.</li>
              <li>Chen, Y., Härdle, W. and Spokoiny, V. (2010). GHICA—Risk Analysis with GH Distributions and Independent Components. Journal of Empirical Finance, 17(2):255–269.</li>
              <li>Chen, Y., Härdle, W. and Jeong, S. O. (2008). Nonparametric Risk Management with Generalized Hyperbolic Distributions. Journal of the American Statistical Association, 103(483):910–923.</li>
              <li>Chen, Y., Härdle, W. and Spokoiny, V. (2007). Portfolio Value at Risk Based on Independent Component Analysis. Journal of Computational and Applied Mathematics, 205(1):594–607.</li>
              <li>Chen, Y., Härdle, W. and Schultz, R. (2005). Prognose mit nichtparametrischen Verfahren. In Prognoserechnung (pp. 113–124).</li>
            </ol>
          </section>

          {/* Selected Working Papers */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Selected Working Papers in Quantum Computing, FinTech, RegTech, Energy, Precision Medicine</h2>
            <ol className="list-decimal text-sm text-muted-foreground list-inside space-y-2">
              <li>Chen, Y., Koch, T., Peng, H. and Zhang, H. (2025). Benchmarking of Quantum and Classical Computing in Large-Scale Dynamic Portfolio Optimization Under Market Frictions. <a
                  href="https://arxiv.org/abs/2502.05226"
                  className="text-blue-600 hover:underline">https://arxiv.org/abs/2502.05226</a></li>
              <li>Lu, J., Peng, H. and Chen, Y. (2025). Neural Quantum Digital Twins for Many-Body Quantum Criticality Simulation and Optimal Annealing Schedule Design. arXiv:2505.15662</li>
              <li>Koch, T., Bernal Neira, D. E., Chen, Y., Cortiana, G., Egger, D. J., Heese, R., Hegade, N. N., Gomez Cadavid, A., Huang, R., Itoko, T., Kleinert, T., Maciel Xavier, P., Mohseni, N., Montanez-Barrera, J. A., Nakano, K., Nannicini, G., O'Meara, C., Pauckert, J., Proissl, M., Ramesh, A., Schicker, M., Shimada, N., Takeori, M., Valls, V., Van Bulck, D., Woerner, S., & Zoufal, C. Quantum Optimization Benchmarking Library: The Intractable Decathlon. <a
                  href="https://arxiv.org/abs/2504.03832"
                  className="text-blue-600 hover:underline">https://arxiv.org/abs/2504.03832</a></li>
              <li>Wang, J., Chen, Y., and Giudici, P. (2025) Group Shapley with Robust Significance Testing and Its Application to Bond Recovery Rate Prediction. <a
                  href="https://arxiv.org/abs/2501.03041"
                  className="text-blue-600 hover:underline">https://arxiv.org/abs/2501.03041</a></li>
              <li>Liu, Y., Chen, Y., Pan, G., Wang, W., Liao, W. C., Thian, Y. L., Chee, C.E. and Anastassiades, C. P. (2021). Spectral Machine Learning for Pancreatic Mass Imaging Classification. arXiv preprint arXiv:2105.00728.</li>
              <li>Chen, Y., Wang, Z., Zhang, G. and Zhou, C. (2021) Optimal Execution with Hidden Orders Under Self-Exciting Dynamics. <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3932957"
                  className="text-blue-600 hover:underline">https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3932957</a></li>
              <li>Chen, Y., Horst, U. and Tran, H.H. (2020) Optimal Trade Execution Strategy and Implementation with Deterministic Market Impact Parameters. <a
                  href="https://arxiv.org/abs/1912.06426"
                  className="text-blue-600 hover:underline">https://arxiv.org/abs/1912.06426</a></li>
              <li>Zhang, G. and Chen, Y. (2020) Reinforcement Learning for Optimal Market Making with the Presence of Rebate. <a
                  href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3646753"
                  className="text-blue-600 hover:underline">https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3646753</a></li>
            </ol>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Research 