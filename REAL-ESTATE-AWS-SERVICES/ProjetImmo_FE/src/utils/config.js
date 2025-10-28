// Dynamic API configuration
export const getApiUrl = () => {
  // First try to get from environment variable (build-time)
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // Construct from current domain
  const currentHost = window.location.hostname;
  
  // If we're on the frontend domain, construct backend URL
  const frontendSubdomain = import.meta.env.VITE_FRONTEND_SUBDOMAIN;
  const backendSubdomain = import.meta.env.VITE_BACKEND_SUBDOMAIN;
  
  if (frontendSubdomain && currentHost.includes(`${frontendSubdomain}.`)) {
    return `https://${backendSubdomain}.${currentHost.split('.').slice(1).join('.')}/api`;
  }
  
  // If we're on localhost, use local backend
  if (currentHost === 'localhost' || currentHost === '127.0.0.1') {
    return 'http://localhost:8888/api';
  }
  
  // For any other domain, construct backend URL
  const domainParts = currentHost.split('.');
  if (domainParts.length >= 2) {
    const baseDomain = domainParts.slice(1).join('.');
    return `https://${backendSubdomain}.${baseDomain}/api`;
  }
  
  throw new Error(`Unable to determine API URL for hostname: ${currentHost}`);
};

export const API_URL = getApiUrl();
