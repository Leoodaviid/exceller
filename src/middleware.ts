import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  adminRoutes,
} from "../routes";


const { auth } = NextAuth(authConfig);

function isPublicRoute(pathname: string) {
  return publicRoutes.some((route) => {
    if (route.endsWith("/:path*")) {
      return pathname.startsWith(route.replace("/:path*", ""));
    }
    return pathname === route;
  });
}

function isAdminRoute(pathname: string) {
  return adminRoutes.some((route) => pathname.startsWith(route));
}

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const userRole = req.auth?.user?.role;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublic = isPublicRoute(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isAdmin = isAdminRoute(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (isAdmin) {
    if (!isLoggedIn || userRole !== "ADMIN") {
      return Response.redirect(new URL("/auth/login", nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublic) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return;
});

export const config = {
    runtime: 'nodejs',
  matcher: [ "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|site.webmanifest|images/|icons/|og/|fonts/|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|woff2?|ttf|eot)$).*)",],
};
