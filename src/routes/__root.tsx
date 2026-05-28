import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-cinema text-xs text-primary mb-4">ERROR · 404</div>
        <h1 className="font-display text-7xl">Lost in the estate</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for has been moved or doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full gradient-royal px-6 py-3 text-xs font-cinema text-white shadow-glow"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl">Something didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Please try again, or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full gradient-royal px-5 py-2.5 text-xs font-cinema text-white"
          >
            TRY AGAIN
          </button>
          <a href="/" className="rounded-full border border-border bg-background px-5 py-2.5 text-xs font-cinema">
            HOME
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}

