# Backend

## How It Works

The backend is a **Spring Boot REST API** that serves as the brain of the real estate application. It manages user authentication, property data, and user favorites through a clean service-oriented architecture.

### Core Architecture

The application follows a **layered architecture**:
- **Controllers** handle HTTP requests and responses
- **Services** contain business logic
- **Repositories** manage database operations
- **Entities** represent database tables

### Authentication Flow

When a user tries to log in:
1. Frontend sends email/password to `/api/user/signIn`
2. `UserService` looks up the user by email
3. BCrypt compares the provided password with the stored hash
4. If valid, returns the user's ID (Long) for session management
5. If invalid, returns null

Registration works similarly but creates a new user with an encrypted password.

### Property Management

Properties are stored as `Maison` entities with detailed information (address, rooms, price, coordinates). The API provides:

- **Public access** to browse all properties (`/api/maisons/getAll`)
- **Search functionality** by various criteria (area, rooms, price)
- **Detailed views** of individual properties

### Favorites System

Users can like/unlike properties through the `MaisonLikedByUser` relationship:
- **Add favorite**: `PUT /api/maisonLiked/addLike/{idUser}/{idMaison}`
- **Remove favorite**: `DELETE /api/maisonLiked/removeLike/{idUser}/{idMaison}`
- **View favorites**: `GET /api/maisonLiked/getAllMaisonLiked/{idUser}`

### Security Implementation

The application uses **Spring Security** with:
- **Public endpoints**: Sign-in, sign-up, property browsing, region data
- **Protected endpoints**: User data, favorites management
- **CORS configuration**: Allows frontend domain only
- **Password encryption**: BCrypt hashing

### Database Integration

**MariaDB** stores all data with JPA/Hibernate:
- Relationship mapping (User ↔ MaisonLikedByUser ↔ Maison)
- Geographic data support (latitude/longitude for map display)

### Key Endpoints

```
Authentication:
POST /api/user/signIn - Login (returns user ID)
POST /api/user/signUp - Register (returns boolean)

Properties:
GET /api/maisons/getAll - List all properties
GET /api/maisons/getById/{idMaison} - Get specific property
GET /api/maisons/getByPrice/{price} - Search by price

Favorites:
PUT /api/maisonLiked/addLike/{idUser}/{idMaison} - Add to favorites
DELETE /api/maisonLiked/removeLike/{idUser}/{idMaison} - Remove from favorites
```

### Data Flow Example

When a user browses properties:
1. Frontend calls `GET /api/maisons/getAll`
2. `MaisonController` receives request
3. `MaisonService.searchAllMaisons()` is called
4. `MaisonRepository.findAll()` queries database
5. Results are serialized to JSON and returned
6. Frontend displays property cards
