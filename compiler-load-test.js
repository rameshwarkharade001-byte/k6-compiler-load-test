import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,          // १० बॉट्स एकाच वेळी टेस्ट करतील
  duration: '15s',  // १५ सेकंद चालणार
  thresholds: {
    http_req_failed: ['rate<0.05'],
    http_req_duration: ['p(95)<3000'],
  },
};

export default function () {
  const url = 'https://ce.judge0.com/submissions?base64_encoded=false&wait=true';
  
  // बॉट्सनी पाठवायचा कोडिंग टास्क (Python Hello World / Loop)
  const payload = JSON.stringify({
    source_code: 'print("Bot Code Execution Success!")',
    language_id: 71, // Python (71)
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);
  
  check(res, {
    'status is 200 or 201': (r) => r.status === 200 || r.status === 201,
    'response contains output': (r) => r.body.includes('stdout') || r.body.includes('Bot Code'),
  });

  sleep(2);
}
