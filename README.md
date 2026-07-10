# BiCo Bites: https://bi-co-bites.vercel.app/

Your live guide to dining at Bryn Mawr & Haverford

A student-built web app that brings transparency and community to the Bi-Co dining experience. Students can rate dishes, check line status, discover events, and reduce food waste, all in one place.

Built for Protothon 2026.

---

Recognition: 

Winner Tri-co Protothon 2026

----

## The Problem

Students at Bryn Mawr and Haverford have no easy way to know what's actually good on the menu today, how long the dining hall line is, or how much food gets wasted each week. Dining decisions are made blind, and a lot of good food ends up in the trash.

## The Solution

BiCo Bites gives students a real-time hub to:
- Rate and review dishes across New Dorm, Erdman, and Haverford Dining Center
- Check current line status before heading to the dining hall
- Vote in bi-weekly polls on what dishes should be added
- See top-rated (and worst-rated) dishes
- Discover dining events and international bar features
- Track and reduce food waste through an admin dashboard
- Sign up to volunteer, delivering excess food to local shelters

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + React Router |
| Styling | Custom CSS |
| Backend | Firebase (Firestore + Authentication) |
| Demo Data | Mock data (`mockData.js`) for reliable presentation |
| Hosting | Firebase Hosting |

---

## Pages

1. **Home** – line status, top dishes, upcoming events
2. **Menu** – browse dishes by dining hall, meal, allergens, and sustainability info
3. **Ratings** – rate dishes, vote in polls, see top rated and lowest rated dishes
4. **Volunteer** – sign up for shelter food deliveries
5. **Admin Dashboard** – waste tracking and menu management
6. **Login** – sign in / sign up

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR-USERNAME/dining-hall-app.git
cd dining-hall-app

# Install dependencies
npm install

# Run locally
npm start
```

App runs at `http://localhost:3000`

---

## Project Structure

```
src/
├── firebase.js          # Firebase config
├── mockData.js          # Demo data (menus, ratings, events, etc.)
├── services/             # Firebase backend functions
│   ├── authService.js
│   ├── menuService.js
│   ├── ratingsService.js
│   ├── wasteService.js
│   ├── eventsService.js
│   ├── pollService.js
│   └── volunteerService.js
├── pages/                # Main app pages
│   ├── HomePage.js
│   ├── MenuPage.js
│   ├── RatingsPage.js
│   ├── VolunteerPage.js
│   └── AdminPage.js
├── components/           # Shared UI components
└── App.js                # Routing
```

---

## Team

- Huda Imran
- Birwa Tahir
- Yumna Fatima Dar
- Aiman Fatima

---

## Future Steps

- Full Firebase integration for live data across all pages
- Push notifications for line status and events
- Social sharing of favorite dishes
- Partnership with dining services for real waste-tracking data
- Expansion to other colleges and universities

---
