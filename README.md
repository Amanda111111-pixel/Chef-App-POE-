🍽️ Chef’s App

Chef’s App is a React Native restaurant management and browsing app that allows users to explore a digital food menu, view deals, search items, and (for admin users) manage menu items.
This project demonstrates state management, navigation, and user access control in React Native.
______________

# Project Purpose & Summary

This app was developed as part of a mobile application development project to showcase practical skills in building a functional, user-friendly React Native application.
The goal was to simulate a restaurant menu system that allows:

Regular users to browse dishes, view specials, and manage a personal selection of items.

Administrators to manage the menu content by adding, editing, or removing dishes.

Through this project, key learning outcomes include:

Implementing component-based architecture

Using React Hooks for state management

Designing intuitive user interfaces

Controlling access using user authentication logic

Structuring multi-screen navigation using React Navigation

_________
# Features

-> User Features

View categorized menus (Starters, Mains, Desserts, Drinks)

Search for menu items by name or description

Filter by course type

Add favorite items to a Personal Menu

View special Deals

Make simulated payments

Contact section for inquiries

-> Admin Features

Secure Admin login system

Add, remove, and edit menu items

Access restricted to authorized admin only

Admin can manage menu via the Change screen

Admin-only floating “+ Add” button for quick item additions

_____
# Navigation Overview
Screen	Description
Login	Users log in as regular or admin users
Home	Displays menu items, statistics, and filters
Search	Search and filter menu items dynamically
Deals	Shows filtered menu categories and specials
Personal	Displays items added by the user
Change	Admin-only menu management area
Contact	Shows business contact info
Payment	Simulates the checkout process

________
# Admin Credentials

To access admin-only features:

Email: jabarileeds@gmail.com  
Password: kor

🛠️ Tech Stack

Framework: React Native (Expo)

Language: TypeScript

UI Components: React Native core components (SafeAreaView, FlatList, Image, ScrollView)

Platform: Android & iOS compatible

_________
# Setup Instructions

1. Clone the Repository
git clone https://github.com/yourusername/ChefsApp.git
cd ChefsApp

2. Install Dependencies
npm install

3. Run the App
npx expo start

__________
# Changelog (Part 2 Updates)
Update	Description
🖼️ Added Pictures	Each menu item now includes a high-quality image
🔍 Filter System	Added filters by course (Starter, Main, Dessert, Drink)
🎨 Aesthetic Update	Improved spacing, colors, and layout consistency
🚫 User Permissions	Regular users can no longer add or modify items
🔐 Admin Login	Only admin can log in to modify the menu
✏️ Edit Button (Admin)	Admin can now remove or edit items directly in the Change screen
📸 Preview

(Insert screenshots of your app here, e.g., Login screen, Menu screen, Deals screen)

/assets/screenshots/login.png
/assets/screenshots/menu.png
/assets/screenshots/deals.png

💡 Future Improvements

Implement backend integration for persistent storage

Add real payment gateway

Expand filtering and sorting options

Introduce user authentication via Firebase

👩‍🎓 Author

Amanda Cele / Jabari Leeds
📧 Email: jabarileeds@gmail.com

🧑‍🍳 Project: Chef’s App (React Native)
📅 Date: November 2025