---
title: "Atlas API Gateway"
description: "A high-performance API gateway built in Go, featuring rate limiting, authentication, and intelligent request routing."
publishedDate: 2026-03-20
category: "backend"
featured: true
url: ""
github: "https://github.com/cync/atlas-gateway"
tech:
  - "Go"
  - "Redis"
  - "Docker"
  - "gRPC"
  - "PostgreSQL"
  - "Prometheus"
---

## Overview

Atlas is a lightweight API gateway designed for microservices architectures. It handles authentication, rate limiting, request routing, and observability with minimal overhead.

### Key Features

- **JWT-based authentication** with role-based access control
- **Token bucket rate limiting** with Redis backend
- **Intelligent request routing** with circuit breaker pattern
- **Prometheus metrics** for monitoring and alerting
- **Graceful degradation** under load

### Architecture

Built in Go for maximum performance, Atlas uses a plugin-based architecture that allows custom middleware to be injected at any point in the request lifecycle.

### Performance

- 50k requests/second on a single instance
- < 5ms p99 latency overhead
- 10MB binary size
