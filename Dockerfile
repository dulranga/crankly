FROM node:20-slim AS base

# Install dependencies including dev for build
FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# build app
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3011
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set correct permissions
# Make sure cache folder exists
RUN mkdir -p .next/cache/images && chown -R nextjs:nodejs .next

# copy only what's needed to run
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3011

# server.js is created by next build from the standalone output
CMD [ "node", "server.js"]