# Frontend

## How It Works

The frontend is a **React Single Page Application (SPA)** that provides the user interface for browsing properties, managing accounts, and interacting with the backend API. It communicates with the backend through RESTful API calls.

### Core Architecture

The application uses a **component-based architecture**:
- **Pages**: Main application views (Gallery, Map, Profile, etc.)
- **Components**: Reusable UI elements
- **Services**: API communication layer
- **State Management**: React hooks and session storage

### User Experience Flow

When a user visits the application:
1. **Homepage** displays property gallery and navigation
2. **Property browsing** allows viewing all listings with search/filter
3. **Map view** shows properties geographically using Mapbox GL
4. **Authentication** enables user registration and login
5. **Favorites** let users save and manage preferred properties

### API Integration

The frontend communicates with the backend through a centralized `apiService.js`:

```javascript
const API_URL = "https://projetImmo-backend.manac.duckdns.org/api";

// Fetch all properties
export const getAllHouses = async () => {
    const result = await axios.get(`${API_URL}/maisons/getAll`);
    return result.data;
};

// User authentication
export const signIn = async (credentials) => {
    const result = await axios.post(`${API_URL}/user/signIn`, credentials);
    return result.data; // Returns user ID
};
```

### Authentication System

The authentication works as follows:
1. **Login**: User enters email/password → API returns user ID
2. **Session Storage**: User ID stored in browser session
3. **Protected Routes**: Check session storage for authentication
4. **Logout**: Clear session storage and redirect to home

### Property Display

Properties are displayed in multiple formats:
- **Gallery View**: Grid layout with property cards
- **Map View**: Interactive map with property markers
- **Search Results**: Filtered property listings

### Favorites Management

Users can manage their favorite properties:
- **Add to Favorites**: Heart icon on property cards
- **Remove from Favorites**: Toggle heart icon
- **Favorites Page**: Dedicated view of saved properties
- **Persistent Storage**: Favorites saved to user account

### Responsive Design

The application adapts to different screen sizes:
- **Desktop**: Full-featured layout with sidebar navigation
- **Tablet (In Progress)**: Optimized grid layouts
- **Mobile (In Progress)**: Stacked layouts with touch-friendly interactions

### State Management

The application uses React's built-in state management:
- **useState**: Component-level state
- **useEffect**: Side effects and API calls
- **Session Storage**: User authentication persistence
- **Props**: Component communication

### Error Handling

The frontend handles various error scenarios:
- **Network Errors**: API connection failures
- **Authentication Errors**: Invalid login attempts
- **Loading States**: User feedback during API calls
- **Validation**: Form input validation

### Performance Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Efficient property image loading
- **Caching**: Browser caching for static assets
- **Lazy Loading (Can be improved)**: Components loaded on demand
