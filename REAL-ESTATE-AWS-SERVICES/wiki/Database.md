# Database

## How It Works

The application uses **MariaDB** as its primary database, storing all user data, property listings, and user preferences. The database is designed with a relational structure that supports the real estate application's core functionality.

### Database Structure

The database contains four main tables that work together:

**User Management**:
- `user` table stores account information (id, name, email, encrypted password)
- Each user can have multiple favorite properties

**Property Data**:
- `maison` table contains property listings with detailed information
- Each property belongs to a specific region
- Properties include geographic coordinates for map display

**Geographic Organization**:
- `region` table defines geographic areas (Montreal, Terrebonne, etc.)
- Properties are linked to regions for filtering and organization

**User Preferences**:
- `maison_liked_by_user` table manages the many-to-many relationship between users and their favorite properties

### Relationships

The database uses foreign keys to maintain data integrity:
- Properties link to regions via `region_id_region`
- User favorites link users to properties via `user_id_user` and `maison_id_maison`

### Data Flow

When a user interacts with the application:

1. **Browsing Properties**: Database returns all properties with region information
2. **Searching**: Queries filter properties by criteria (price, rooms, area)
3. **Adding Favorites**: New record created in `maison_liked_by_user` table
4. **Viewing Favorites**: Join query returns user's saved properties

### Key Features

**Property Search**: The database supports efficient searching by:
- Price range
- Number of rooms/bedrooms/bathrooms
- Geographic area
- Property size

**User Authentication**: Secure password storage using BCrypt encryption

**Geographic Data**: Latitude/longitude coordinates enable map-based property display

### Sample Data

The database comes pre-populated with:
- 6 regions (Montreal, Terrebonne, Longueuil, etc.)
- 25 sample properties with realistic data
- Test user accounts for development
