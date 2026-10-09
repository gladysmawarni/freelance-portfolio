# The Problem
---

**Gustave is a startup project focused on making restaurant discovery more intuitive through conversational search.**

The goal is to allow people to describe the type of restaurant they want in a normal sentence, rather than having to manually combine filters across multiple platforms.

For example, instead of selecting separate filters for cuisine, atmosphere, price, and dietary requirements, a user could simply say:

> "I'm looking for a Chinese restaurant with a cozy atmosphere that's suitable for a family dinner in Soho."

Or:

> "I want somewhere in Central London for a casual dinner, with good vegetarian options and a nice atmosphere, but not too expensive."

The system then interprets these preferences and searches for restaurants that best match the overall request.

This approach is particularly useful because restaurant preferences are often difficult to express through traditional filters. Users may care about subjective characteristics such as cozy, romantic, casual, family-friendly, lively, or quiet, which are not always represented as structured filters on restaurant platforms.

# Data Source
---

To support this conversational recommendation system, the first step was to build a comprehensive restaurant dataset.

The initial data was collected by scraping restaurant reviews and recommendations from publications such as Condé Nast Traveller and Time Out. These sources were used to identify restaurants considered worth visiting across the UK.

Review example:
![Review example](./projects/gustave/example.png)

From these sources, I extracted information including:
Restaurant name, Address, Review content, Source URL

The collected data was then stored in **Firebase**, providing a structured database that could be enriched with additional information.

# Data Enrichment
---

The scraped reviews provided useful qualitative information, but additional structured data was needed to create a more complete restaurant profile.

The restaurant records were therefore enriched using automated script that fetch **Google Maps API and web search** data.

This allowed the system to collect additional information such as:
- Location and coordinates
- Ratings
- Price level
- Opening hours
- Restaurant links
- Dietary options
- Other relevant restaurant details

Combining the original editorial reviews with structured data created a richer representation of each restaurant.

Final firebase data structure:
![Firebase structure](./projects/gustave/firebase.png)

# Vector Search with Pinecone
---

Once the restaurant data had been cleaned and enriched, the next step was making it searchable based on meaning rather than exact keywords.

The restaurant information was converted into embeddings and stored in **Pinecone**, a vector database.

This allows Gustave to identify restaurants that are semantically relevant to a user's request.

For example, a user does not necessarily need to search for the exact words "cozy family-friendly Chinese restaurant." Instead, the system can interpret the meaning of the request and retrieve restaurants whose descriptions, reviews, and attributes are relevant to those preferences.

This is important for Gustave because the goal is not simply to build another restaurant search engine. The goal is to allow users to describe what they want naturally and let the system handle the search process.

Pinecone data example:
![Pinecone structure](./projects/gustave/pinecone.png)

And now our data is ready!

# Location-Based Filtering
---

Another challenge was making sure recommendations were relevant to the user's location.

A restaurant might be a strong semantic match for a user's preferences, but it would not be useful if it was hundreds of kilometres away. To address this, Gustave also uses the user's location when searching for restaurants.

The user's latitude and longitude are used as the reference point, while each restaurant has its own latitude and longitude collected during the data-enrichment stage.

To determine which restaurants are nearby, the system calculates the geographical distance between the user and each restaurant using **Haversine/geodesic distance**. This allows the system to estimate the distance between two points based on their latitude and longitude and filter restaurants within a defined radius.

This means that a request such as:

> *"Find me a cozy Chinese restaurant suitable for a family dinner."*

is not only matched based on the restaurant's cuisine and characteristics, but also limited to restaurants that are reasonably close to the user.

After this location-based filtering, the remaining restaurants can be passed to the semantic search system in Pinecone. This reduces the search space and ensures that recommendations are both relevant to the user's preferences and geographically practical.

There are therefore two different types of similarity used in the system:

- **Geographical distance:** Haversine/geodesic distance is used to determine how physically close a restaurant is to the user.
- **Semantic similarity:** Vector similarity in Pinecone is used to determine how closely a restaurant's information matches the meaning of the user's request.


# Chatbot Logic
---

The chatbot provides the conversational interface between the user and the restaurant database.

When a user submits a request, Gustave processes the query and uses it to retrieve relevant restaurants from the vector database.

The workflow is as the following:
![Workflow](./projects/gustave/workflow.png)

# Technical Architecture
---

After defining the chatbot workflow, I implemented the recommendation logic as a backend function.

The function is responsible for connecting the conversational layer with the restaurant database. It takes the user's request, queries **Pinecone** for the most relevant restaurants, and then passes the retrieved restaurant information together with the user's query to **GPT**.

The LLM uses this context to generate a natural-language response containing restaurant recommendations relevant to the user's preferences.


# Backend Deployment
---

Once the recommendation function was working, I deployed it as a backend service using **Google Cloud Run**.

The application was packaged in a **Docker container**, allowing the same application environment to be deployed consistently and run independently from the frontend.

The deployed Cloud Run service acts as the API layer between the website and the recommendation system.

# Webflow Integration
---

The frontend was built in **Webflow** by another designer, while the recommendation logic runs separately on Cloud Run.

To connect the two, I used **Webflow's custom JavaScript code** to call the Cloud Run backend.

The overall architecture is:

> Webflow frontend → JavaScript API request → Google Cloud Run → Python recommendation function → User location + Haversine/geodesic distance → Nearby restaurant filtering → Pinecone semantic search → Relevant restaurant data → GPT → Restaurant recommendation → Webflow chatbot

This architecture keeps the AI and database logic on the backend while allowing the Webflow frontend to provide the user-facing conversational experience.

App preview:
![App preview](./projects/gustave/app-preview.png)