import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Research = () => {
  return (
    <section className="py-10 w-[80%] lg:w-[60%] mx-auto">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Research</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Research Interests */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Research Interests</h2>
            <ul className="list-disc text-sm text-muted-foreground list-inside space-y-2">
              <li>AI forecasting and optimization</li>
              <li>
                Deep learning & quantum computing for quantitative
                finance/fintech/regtech: portfolio liquidation; NLP and sentiments;
                market making; crypto blockchains
              </li>
              <li>
                Time series analysis: nonstationary & functional time series;
                networks & spatial-temporal data
              </li>
              <li>Energy data analytics: modeling and forecasting</li>
              <li>
                Data-oriented analytics in precision medicine, citation analysis
                & research metrics, patent valuation, explainable AI
              </li>
            </ul>
          </section>

          {/* Active Projects */}
          <section>
            <h2 className="text-2xl font-bold mb-4 mt-10">Active Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Fuelture',
                  description: 'Quantum-Ready AI-Powered Bunker Procurement for SME Shipping Companies ',
                  link: '/research/fuelture'
                },
              ].map((project, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link to={`${project.link}`} className="text-blue-600 hover:underline text-sm">
                        Learn more
                    </Link>
                </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Publications */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Publications</h2>
            <ol className="list-decimal text-sm text-muted-foreground list-inside space-y-2">
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
        </div>
      </div>
    </section>
  )
}

export default Research 