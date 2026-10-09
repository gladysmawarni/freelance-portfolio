
[GitHub](https://github.com/gladysmawarni/portfolio-analyst)

# The Problem
---

**Portfolio Analyst is a project focused on making stock portfolio analysis more accessible and less time-consuming.**

The goal is to allow users to upload their existing stock portfolio and automatically get a broader view of their investments without having to manually collect and analyse data from multiple financial sources.

Instead of looking up each stock individually and checking its price, performance, financial metrics, technical indicators, and other information, a user can simply upload their portfolio and let the application analyse it.

The system can then bring together information about the user's holdings and provide different views of the portfolio, from overall performance and allocation to individual stock analysis.

# Tech Stack
---
> **Overall stack: Python · Streamlit · Pandas · NumPy · yFinance · Plotly · OpenAI API**

The application was built primarily with Python, using Streamlit for the interactive interface and several data and financial analysis libraries to process the uploaded portfolio and retrieve market information.

- **yFinance** - Used to retrieve financial and market data for the stocks in the user's portfolio, including prices and historical market information.
- **Plotly** - Used to create interactive charts and visualisations, allowing users to explore portfolio performance and other financial metrics.
- **OpenAI API** - Used to add AI-powered analysis to the application, allowing GPT to interpret the portfolio data and generate additional insights based on the available financial information.


# 1. Portfolio Upload & Setup
---
The first step is to upload an Excel file containing the user's stock portfolio. The application reads the uploaded file and displays the portfolio information for the user to review.

Before starting the analysis, the user can add new assets or update existing portfolio information if needed. Once the portfolio is ready, the user can click the Analyze button to start the analysis process.

![Portfolio setup](./projects/PA/1st.png)


# 2. Portfolio Analysis
---
Once the user clicks Analyze, the application processes the portfolio and calculates a range of financial and technical indicators for the assets.

The analysis includes:
- **Moving Averages** — to examine price trends over different time periods.
- **Volatility** — to measure how much an asset's price fluctuates.
- **P/E Ratio** — to provide a valuation metric based on a company's share price relative to its earnings.
- **Beta** — to measure an asset's sensitivity to movements in the broader market.
- **Sharpe Ratio** — to evaluate risk-adjusted performance.
- **RSI (Relative Strength Index)** — to identify potential overbought or oversold conditions.
- **MACD (Moving Average Convergence Divergence)** — to analyse momentum and potential changes in price trends.

Each indicator is presented alongside an interactive chart, allowing the user to visually explore the historical data and understand how the different metrics change over time.

Example of moving averages chart:
![Chart](./projects/PA/2nd.png)


# 3. AI-Powered Portfolio Recommendations
---

After the portfolio analysis is completed, the application uses the calculated financial and technical indicators to generate AI-powered recommendations for each asset.

Rather than looking at each indicator separately, the recommendation combines all the previous signals to provide a summary of the asset's strengths, risks, and momentum.

The resulting recommendation includes:
- **Key strengths & risks** — A summary of the most relevant signals from the financial and technical indicators.
- **Momentum signals** — Highlights indicators such as RSI and MACD that can provide additional context around current price momentum.
- **Recommendation & rationale** — A final AI-generated recommendation accompanied by an explanation of which indicators contributed to it.

This turns the numerical analysis from the previous step into a more accessible summary, allowing users to quickly understand what the different indicators may suggest about each holding.

![Analysis](./projects/PA/3rd.png)


# 4. Potential Investment Analysis
---
The final feature allows users to evaluate a potential new investment before adding it to their portfolio.

The user can select or enter a ticker, such as NVDA, and the application analyses the new asset alongside the user's existing holdings.

The AI considers the existing portfolio's characteristics and the potential investment's financial and technical indicators to provide a broader view of how the asset could fit into the portfolio.

The analysis includes:
- **Existing portfolio overview** — Identifies key strengths, risks, and signals across the current holdings.
- **New asset analysis** — Evaluates the potential investment using indicators such as volatility, beta, Sharpe ratio, RSI, MACD, and moving averages.
- **Portfolio fit** — Considers whether the new asset adds diversification or increases concentration in an existing sector or risk profile.
- **Action by ticker** — Provides an explanation of how the AI interprets each existing holding in the context of the potential investment.
- **Potential allocation** — Provides an illustrative allocation framework based on the characteristics of the portfolio and the new asset.
- **Risk considerations** — Highlights factors such as high volatility, beta, overbought conditions, or concentration risk that could affect the potential addition.

The feature can also provide suggested target ranges and monitoring points, helping the user explore how a potential investment could change the overall portfolio before deciding whether to add it.

![Potential investment analysis](./projects/PA/4th.png)