config:
  target: 'http://localhost:5000'
  phases:
    - duration: 60
      arrivalRate: 50
scenarios:
  - flow:
      - post:
          url: '/api/message'
          json:
            message: 'Load test message'
            sender: 'User1'
            receiver: 'User2'
