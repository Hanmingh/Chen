const Teaching = () => {
  return (
    <section className="py-10 w-[80%] lg:w-[60%] mx-auto">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Teaching</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Supervision and Academic Mentorship</h2>
            <p className="text-sm text-muted-foreground mb-2">
                I currently supervise 6 PhD students, 4 research fellows, 2 research associates, and 1 research 
                assistant. Since 2007, I have supervised 17 PhD students, two of whom received the Best 
                Graduate Researcher Award in our department. My PhD and postdoctoral alumni have gone on 
                to hold prestigious academic and industry positions, including:
            </p>
            <ul className="list-disc text-sm text-muted-foreground list-inside ml-4 space-y-1">
                <li>Assistant Professors at Waseda University, City University of Hong Kong, and mainland Chinese universities</li>
                <li>Research Fellow at Zuse Institute Berlin</li>
                <li>Faculty and Professional Leadership at SMU, SUSS, Future-Moves Group, Octagon Advisors, and Gucci (China)</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">
                To date, I have also supervised 7 research fellows, 5 of whom became Assistant Professors in 
                Asia and Europe.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Teaching and Curriculum Development</h2>
            <p className="text-sm text-muted-foreground mb-2">
                Since joining NUS in 2007, I have proposed nine new modules (four core undergraduate and 
                five graduate electives) and taught fourteen different modules across undergraduate and 
                graduate levels. These courses focus on quantitative methods and are often delivered to large 
                classes, with a median enrollment of 79 and a maximum of 461 students.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Teaching Modules</h2>
            <ol className="list-decimal text-sm text-muted-foreground list-inside space-y-2">
              <li>DSE4211/QF4211 Digital Currencies, SEM2 AY2024-2025. (core UG)</li>
              <li>DSA5205 Data Science in Quantitative Finance, SEM1 AY2020-2023; Special Term2 AY2023-2024</li>
              <li>QF5208 AI and Fintech, SEM2 AY2019/20.</li>
              <li>QF5210 Financial Time Series, SEM1 AY2019-2023, AY2024-2025, AY2025-2026. (core G)</li>
              <li>QF5203 Risk Management, SEM2 AY2018/19. (core G)</li>
              <li>FE5225 Machine Learning and Fintech, SEM2 AY2018/19.</li>
              <li>ST4245 Statistical Methods for Finance, SEM1 AY2018/19.</li>
              <li>FE5209 Financial Econometrics, SEM1 AY2015-2023. (core G)</li>
              <li>DSC2008 Business Analytics: Data and Decisions (Co-teach with Associate Prof. QUEK Ser Aik at NUS Business School, SEM1 AY 2011/12, AY 2012/13-2017/18. core UG)</li>
              <li>ST5218 Advanced Statistical Methods in Finance, SEM2 AY 2010/11, SEM2 AY2016/17.</li>
              <li>ST5209 Analysis of Time Series Data: SEM2 AY2009/10</li>
              <li>ST3233 Applied Time Series Analysis: SEM1 AY2009/10</li>
              <li>ST3240 Multivariate Statistical Analysis, SEM2 AY 2007/08</li>
              <li>ST4232 Nonparametric Statistics, SEM1 AY 2007/08</li>
              <li>Lectures and tutorials on Statistics of Financial Markets in Humboldt-Universität zu Berlin</li>
            </ol>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Teaching