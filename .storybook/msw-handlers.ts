import { http, HttpResponse } from 'msw';

export const mswHandlers = [
  http.get('https://api.example.com/health', () =>
    HttpResponse.json({ ok: true }),
  ),
];
