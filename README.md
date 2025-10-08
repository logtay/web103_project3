# WEB103 Project 3 - *Music Events Board*

Submitted by: **Taylor Femat**

About this web app: **This application caters to music lovers in the San Diego area. From the main page, users can select a venue that they are interested in. Each venue has its own page, where users can see events that are coming soon to that location. Additionally, using the Events page, the user can see all events at all locations. They can also filter by location to see relevant events. Each event has a title and lists the date and time of the event.**

Time spent: **10** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.* 
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort *or* filter events by location.
- [ ] Events display a countdown showing the time remaining before that event
  - [ ] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/logtay/web103_project3/blob/main/WEB103_Project3.gif?raw=true' title='Video Walkthrough' width='' alt='Video Walkthrough' />



<!-- Replace this with whatever GIF tool you used! -->
GIF created with [Kap](https://getkap.co/) for macOS


## Notes

It did take me a while to get my tables to populate in Render. Even having gone over the lab and getting that to work more than once, I did have to restart this project a few times. I am not sure if there was a minor typo or something that was causing errors. I really struggled to find the source of my issue, even using dev tools. In the end I just started over until I got it right. This took up a lot of time on the project. Another area where I struggled was working with the front end. I spent a lot of time trying to do my own visual interface with the polygons like the example, but I wasn't familiar with it so it wasn't something that I could really get to work in a way that I liked. In the end I made my own visual interface. I think if I would have had more time I would have been able to create a more robust front end, but I ran out of time in the end. I think having so much of the layout was sort predetermined, unlike previous projects, made it harder for me to make it my own which is something I really enjoyed about other projects. 

## License

Copyright [2025] [Taylor Femat]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
