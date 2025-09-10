# Car Booking App

Welcome to the Car Booking App! This project is designed to provide users with a seamless experience for searching, booking, and managing cars. Below is an overview of the project's structure and features.

## Project Structure

```
car-booking-app
├── src
│   ├── components
│   │   ├── CarSearch.js
│   │   ├── CarList.js
│   │   ├── CarDetailsPopup.js
│   │   ├── BookingPopup.js
│   │   ├── AddVehiclePopup.js
│   │   ├── Profile.js
│   │   ├── TeamSection.js
│   │   ├── ContactInfo.js
│   │   ├── MechanicAssignmentPopup.js
│   │   ├── ServiceReportPopup.js
│   │   ├── UserManagementPopup.js
│   │   └── RecentBookings.js
│   ├── pages
│   │   ├── HomePage.js
│   │   ├── CarsPage.js
│   │   ├── SellPage.js
│   │   ├── AboutPage.js
│   │   ├── TeamPage.js
│   │   ├── ContactPage.js
│   │   ├── ManagerPage.js
│   │   ├── ProfilePage.js
│   │   ├── MechanicPage.js
│   │   ├── AdminPage.js
│   │   └── NotFound.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Features

- **Home Page**: A user-friendly interface for searching cars based on various criteria.
- **Cars Page**: Displays available cars for booking, with links to individual car details.
- **Sell Page**: Allows users to list their cars for sale.
- **About Page**: Contains information about the project, excluding the "Our Journey" section.
- **Team Page**: Lists the co-founders: Shounak Shelke, Sahil Kanchan, and Shivam Bhosle.
- **Contact Page**: Provides contact information, including a fake Indian number and the Mumbai office address.
- **Manager Page**: Replaces the fleet owner concept with manager functionalities.
- **Profile Page**: Displays common profile information for users.
- **Mechanic Page**: Includes features for mechanics with popups for assignments and service reports.
- **Admin Page**: Features for user management with popups for admins.
- **Recent Bookings**: Displays recent bookings with specific names.
- **Popups**: Various popups for adding new vehicles, viewing car details, and managing assignments.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd car-booking-app
npm install
```

To run the application, use:

```bash
npm start
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.