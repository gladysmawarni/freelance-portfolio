>Note: The project shown in this portfolio is a small-scale replica of the work I did. The original is business-owned and can’t be disclosed.

# The Problem
---
**The company needed macroeconomic data from the IMF and World Bank on a regular basis, but it was being collected manually, with no consistent way to store it or keep it up to date.**

Scopes:
- An automated pipeline to pull the data on a schedule and load it into their database (Snowflake)
- Clean, reliable, tested data structured for analysis, not raw API dumps
- A quick overview in Power BI so teams could compare countries and indicators without touching the data layer

**The solution:** An ELT pipeline that moves IMF and World Bank data through Snowflake and dbt into a tested star schema, powering a Power BI dashboard for cross-country macroeconomic comparison.


# Tech Stack
---
- **Extract & Load:** Python (IMF SDMX API, World Bank API)
- **Warehouse:** Snowflake
- **Transformation:** dbt, SQL
- **Visualization:** Power BI, DAX



# Architecture
---
> IMF + World Bank APIs → Python → Snowflake `RAW` → dbt staging → dbt intermediate → dbt marts → Power BI


```
IMF SDMX API        World Bank API
      │                    │
      └────────┬───────────┘
               ▼
   Python extract / load
               ▼
      Snowflake  RAW
               ▼
   dbt  staging        (clean + standardize)
               ▼
   dbt  intermediate   (combine + calculate)
               ▼
   dbt  marts          (star schema)
               ▼
   Power BI dashboard
```

| Layer | What happens |
|---|---|
| **Extract / Load** | Python pulls data from both APIs with error handling and rate limiting, then lands it untouched in `RAW` with a `_LOADED_AT` audit column. |
| **Staging** | Renames columns, casts types, filters out aggregates (e.g. "World"), creates surrogate keys, and flags forecast years with `is_forecast`. |
| **Intermediate** | Unions IMF and World Bank into one long table and calculates year-over-year change. |
| **Marts** | Star schema: `fact_macro_indicator` plus `dim_country`, `dim_indicator`, and `dim_date`. Tested and documented. |
| **Power BI** | Reads the marts through a read-only role, with DAX measures for benchmarking. |

**Access is split by role:** `LOADER` for Python, `TRANSFORMER` for dbt, and `REPORTER` (read-only on marts) for Power BI.


# Data Model
---

![dbt project structure and lineage](/projects/macro/dbt.png)

Data moves through four layers, each with one job: `RAW` holds data untouched, `staging` cleans it, `intermediate` combines it, and `marts` serve it.

## Tested and Documented

- **Tests:** `unique`, `not_null`, `relationships`, and `accepted_values` on keys and attributes, plus source freshness checks on `_LOADED_AT`
- **Grain:** defined for every model and enforced with tests
- **Docs:** column descriptions and a lineage graph from source to dashboard, with the Power BI report registered as a dbt exposure


# Power BI Dashboard
---

The dashboard is a quick-view layer, not the end goal. The company needed the data in Snowflake for other uses, and Power BI gives teams a fast way to check it without touching the data layer. It connects through the read-only `REPORTER` role to the star schema, so it can never alter the data.

![Overview page with KPI cards and trend lines](/projects/macro/powerbi.png)

KPI cards compare each country's **latest value** against its **long-run average** for GDP growth, inflation, and unemployment. Trend lines show real GDP growth and inflation over time, with forecast years clearly separated from actuals.

![Country comparison](/projects/macro/powerbi2.png)
**Country Comparison**
- Bar chart: average value by country, so countries can be compared on the same indicator
- Ribbon chart: ranks countries by year-over-year change over the last 5 years