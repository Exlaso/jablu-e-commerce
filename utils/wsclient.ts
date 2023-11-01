'use client'
import { createClient } from "graphql-ws";


export const wsClient = createClient({
    url: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_WS_URL!,
    connectionParams:{
        headers:{
            "x-hasura-admin-secret":"AoR8ApwFZ15DretjarlEtWijPYwgL5bY3A43rQiR8DioI9lB5GpQ1N5XKp59L48A",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJKYWJsdS1pbi1lMjA0ZTNiMy0zMmQ1LTQxM2ItYmMwYi1iZmI1MDMzZWU4OTEiLCJpYXQiOjE2OTg3NDk1MDMsImV4cCI6MTY5OTM1NDMwMywiaHR0cHM6Ly9oYXN1cmEuaW8vand0L2NsYWltcyI6eyJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiIsImVtYWlsIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoiSmFibHUtaW4tZTIwNGUzYjMtMzJkNS00MTNiLWJjMGItYmZiNTAzM2VlODkxIn19.Yk3cj4RjDsE7PQIQIMP_pusgdoRXBoYHQrsxAMxaPgU",
        }
    }
  });