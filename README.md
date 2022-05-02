# OSIRIS
# :trophy: Dragon Hacks 2022,  WINNER - Best Overall Prize, Best Environmental Hack :trophy:
## Inspiration
Sustainability in agriculture is increasing in importance as the industry is impacted by rising production costs, fluctuating product costs and/or prices, goal to reduce carbon footprint from the farms and food security requirements, as well customer demand for better quality/healthier products. Meeting this challenge requires farming companies to cut costs, increase production, reduce their carbon footprint, and become more effective. 
.
## What it does
Our app is equipped with detailed information based on robust machine learning models trained from trusted datasets on how to make better decisions, maximize productivity, and reduce the farm’s carbon footprint.
The crop disease detection feature on Orisis assists the farmers to upload a photo of their crops and the convolutional neural network trained informs the user what disease the crop is suffering from. If detected at an early stage, the farmer can decide specific preventive measures and medicines which will not only prevent the disease from spreading across the plantation but also save the farming enterprise from incurring heavy losses and destruction of food. 
The crop pest detection feature is also trained using a convolutional neural network, and it takes in a photo input to predict what type of pest infestation the crop has. With this result, the farmer knows specific preventive measure to enforce, like the exact pesticide or insecticide to buy for treatment.
Integrating an Arduino Mega board with humidity, temperature, rainfall, and salinity sensors, users will be We were able to predict the quality of soil and the random forest classifier we use to build a crop recommendation system gives the user which crops would best grow there. This decreases chances of crop destruction and increases chances of profit for the farming enterprise.
Our app is focused to make farming sustainable, we will estimate how much carbon emission per acre the plantation emit according to the crops grown and recommend ways to reduce that. 
Our news crawler filters through, 15000+ news articles to provide the farmers with effective articles that they can use to make informed decisions. 

## How we built it
Plant disease detection and infestation:  We are running a fast-API on our server, that take an image as input and runs it through our two of our pre-trained CNN model to return the name of the disease and its remedies that the user can take to prevent it, it also returns the name of pest that the plant is infested with. 
Crop recommendation: We're launching our random forest model on a fast-API server, that takes the user-specific data from the sensors stored on our cloud and return the most effect crop and why it will be better for the land. 
News: We have launched our news API using fast-API on our server that crawls through the internet and returns related articles for the farmer.
The API severs has been deployed with dockers to maximize efficiency. 
Sensors: We have a vast array of sensor: temperature, humidity, water content of the soil, salinity of the soil. The data is then uploaded to our cloud using Arduino. When the user enters his user-specific code, we fetch the sensor data from our cloud. Using this data, we are also informing the user about what type of crop he should be planting for the next season. 
App: we have built the front-end of the application using react-native for cross-device functionality. 

## Challenges we ran into
24 hour hackathons are challenging, building an app from scratch and dealing with the errors. 
Our biggest challenge was the time given for the hackathon being just 24 hours. 
1. We couldn’t get some of the sensors we needed to perfect the project like the pH sensor. 
2. Finding data specific for our work was not easy. Extensive research had to be done to find data for the detectors and the recommendation system.
3. On top of that, our team has been using heroku for deployment for the past 1 year but we were not aware that heroku stopped github integration from april 15th. As a result, we had to alter the operations involved with deploying our machine learning model APIs. 

## Accomplishments that we're proud of
1.	Working between four people across platforms, we were worried about how source control would work but we were able to use Github to make separate branches for each team member and work effectively.
2.	This project assisted us in learning and implementing different machine learning algorithms and mlOps which helped us solve our problem and the goals we set out for the app.
3.	To complete the application with all the intended features within a very short period of 24 hours was a major challenge and the entire team feels like this has been a great accomplishment. 

## What's next for Osiris
1.	Add sensors for pH level, nitrogen, phosphorous and potassium levels in soil.
2.	Acquire a dataset which has a wider range which can cover more pests, diseases, and crops. 
3.	Expand soil types to include soil from everywhere around the world. (Maybe even Mars who’s gonna ask)
4.	Develop marketplace for used farm machinery
