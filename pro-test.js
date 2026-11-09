import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,
  duration: '10s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<2500'],
  },
};

export default function () {
  const res = http.get('https://test.k6.io');
  check(res, {
    'status is 200 (OK)': (r) => r.status === 200,
    'response time OK (<2500ms)': (r) => r.timings.duration < 2500,
  });
  sleep(1);
}
