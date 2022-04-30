# :trophy: Philly Codefest 2022,  WINNER - Philly Codefest 2022 Student Team Award :trophy:

### Link - https://devpost.com/software/winter-arch
### Demo - https://youtu.be/FHMPoXEN0qk
## Inspiration
Philadelphia is facing the greatest public health crisis in a century. Every neighborhood in the city is being hit hard by an epidemic of opioid use and overdose. Across all racial and ethnic groups, the number of deaths from drug overdose is higher than the number of deaths from homicide. Fatal overdoses in the first six months of 2021 rose by nearly 10% compared to the same time period last year, putting Philadelphia on track to be the center of the crisis. 
As students, in this city of brotherly love we felt the need to device a solution using our skillset to address the problem. 

## What it does
You’re in recovery from opioid addiction, and your walk to work takes you down the same streets where you used to buy heroin. The drug’s calling to you, still. Just then, your phone buzzes, with a message that reads like a text from an old friend:
“Hey, I know you’re near a risky area. You can do this.”
It’s from a notification from Hygia. 
It is one of the many features that the app has to help the user recover from their addiction. 
The app uses machine learning techniques to give the user an alert for the next month, on how susceptible the user is to an overdose. It has an interactive map of resources like nearby buildings with Narcan, pharmacies, and hospitals that the user can use in times of need. 
It also has a medicine logger that one can use to upload their daily doses of medicine, and it will remind them when it's time to take it. 
Hygia, also curates articles that make you feel good! Our web crawler scans through hundreds of health-related news articles and provides the user with only the ones that are helpful and has a positive sentiment.
Finally, Hygia also has an emergency card that is curated to 

## How we built it
We had to design the app keeping in mind the sensitive issue that we are working with. We wanted to give the users a positive user experience, where UX and UI is the key player. We have the responsibility to guide our users through app features and help them recover, without adding any stress due to usability issues from the app design. Since these patients aren’t feeling well, to begin with, it’s important to make the experience as easy and calming as possible. Starting with colors, we decided to choose a pastel color pallet that represents neutrality, relaxation, and calm. We wanted the user to have all the information interactive dashboard(home screen), at the same time not overwhelm the user.  So, we chose a home screen design inspired by the widget design from the phone's default home screen to avoid the user feeling a change to a different app. 
The front-end app is built using React-Native, which is a cross-platform library. It allows us to maximize audience by not being limited to the type of device the user uses. 
Back End:
Firebase: We used the Firebase real-time database to store data for the medical logs and used their authentication feature for login and signup.
Features: 
- Medical Logs: The medical logs allows the user to insert and keep record of the medication they’re prescribed to, number of pills per day and when the pills are taken. This allows the user to stay updated and cautious of their medicine intake.
- Lapse Notification: We take the user's location and then we see if they are in a high risk area(that we have gathered using [link]() ), then we send a reaffirming notification letting the user to stay strong!
- Map: The Resource Map provides locations of pharmacies where Narcan, an opioid overdose emergency medicine, and other Resource centers. Google Maps API was used to get the name, address, and coordinates of the locations. ReactNative was used to create the Map feature itself. 

-  Hygia-API: We are using our API built using the Fast-API, Docker, Postgre-sql and hosting it on heroku. 
The API is responsible for the following features: News and Substance Overuse Risk Score(SORS). 
1. News: We are scrapping the news from Google News, using news-API  and then storing it in a Postgres database. Then we are running random forest classification to classify the news into three categories: Positive, Neutral and Negative. The API returns a JSON file with the top 10 positive articles.  Test it: [link](https://hygia12.herokuapp.com/news)
2.  Substance Overuse Risk Score(SORS) : It is a metric that we designed in accordance to this research paper [link](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0241083#sec014).  We have used data from the Optum© Clinformatics® Data Mart, which comprises de-identified US healthcare claims for beneficiaries of a large, national commercial insurance provider. At any given time, The database contains individual-level information on inpatient and outpatient diagnoses and procedures, as well as records of outpatient prescription dispensing. Data from October 2015 to September 2020 were used in the analysis. After gathering the individual-level data, we ran an elastic net regression model and calculated the equation. 
The equation we used = (e^(intercept + (co-ef * value) + .......))/(1 - e^((intercept + (co-ef * value) + .......)))
Intercept = -11.5
Upon back testing, we found our model was accurate 81-84% cases. 

## Challenges we ran into

1- We wanted to build something for the Philly codefest centered around the city. Coming up with the idea that would benefit the people of the city was our first challenge.

2- Finding data specific for our work was not easy. Extensive research had to be done to find data for the predictor and the resource map.

3 - Working together with 6 people with different skills and backgrounds towards the goal and keeping tract of everyone’s progress was a big challenege.

## Accomplishments that we're proud of
Achievements:
Contributing back to a city that has taken care of gave us a major sense accomplishment. 
Using multiple technologies to develop a cross-platform mobile application with machine learning capabilities and subject specific UI/UX design.
Planning ahead for what is next for the app and how the features integrated in the app can be expanded and improved.
Finishing such a wide scale project within limited time during coops and classes.
Managing source code developed by 6 people to integrate successfully.

## What we learned
A significant reason, among many others like genetics and other external factors, as to why and how people experience addiction has to do with the level of disconnectedness they experience with their loved ones and other people. We decided to create an app that provides recovering opioid users with the help they rightfully deserve. Our app includes a Resource map, emergency contacts of the user, medical logs and more. Six of us with unique skillets and different ideas regarding each feature learned how to get together and work for a better cause. With every other brilliant feature we pursued, we encountered new errors, bugs, and issues from which we had to bounce back with new creative solutions. With the time constraint along with being stuffed with classes and internships, every single one of us learned to push ourselves to the limit and beyond to make this vision come true.

## What's next for Hygia

The resource map is being planned to be expanded by obtaining the required data for the rest of Pennsylvania at first and then the country. 

Risk notification is currently based on narcotic hotspots around the city of Philadelphia. Obtaining more data will enable Hyjia to enable the notification for a more expanded area.

We are planning on extending the Medical Logs to include other health information like doctor’s visits, blood reports and hospital visits which will enable the users to keep a record of their information which can connect to hospitals and other centres which treat recovering addicts.

Expanding on the SORS score predictor by adding more attributes like doctor’s information, hospital information, and prescription rates to factor in substance abuse resulting from overprescription of painkillers. 

We are planning to implement telehealth by connecting with hospitals and resource centres to reduce patient in-care time. Implementation of a 24 hours helpline via text and call can help provide our users with emotional support during times of need.
