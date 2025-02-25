// Protect specific routes
export default {
  publicRoutes: ["/", "/auth/signin", "/auth/signup"], // Routes that don't require authentication
};

// Optional: Ensure Next.js recognizes this as middleware
export const config = {
  matcher: ["/((?!_next).*)"], // Apply to all routes except static files
};
