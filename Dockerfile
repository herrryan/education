# ==========================================
# Stage 1: Build the Docusaurus static site
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

# Install build dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy configuration and source files
COPY tsconfig.json ./
COPY docusaurus.config.ts sidebars.ts ./
COPY docs/ docs/
COPY blog/ blog/
COPY src/ src/
COPY static/ static/

# Compile production static site
RUN npm run build

# ==========================================
# Stage 2: Serve with lightweight Nginx
# ==========================================
FROM nginx:1.27-alpine AS runner

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy production nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static files from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Configure health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
