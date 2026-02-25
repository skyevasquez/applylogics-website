FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app

# Copy built artifacts and startup script
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server-start.mjs ./server-start.mjs
# Install only production deps needed for runtime (srvx is a transitive dep)
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production

CMD ["node", "server-start.mjs"]
