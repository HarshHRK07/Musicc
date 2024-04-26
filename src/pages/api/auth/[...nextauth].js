import { serialize } from 'cookie';

// Dummy user data (replace with your actual user data)
let users = [
  { id: 1, username: 'user', password: 'password' }
];

// Your authentication logic
const authenticateUser = (username, password) => {
  return users.find(user => user.username === username && user.password === password);
};

// API route handler for login
export default function loginHandler(req, res) {
  if (req.method === 'POST') {
    const { action, username, password } = req.body;

    if (action === 'login') {
      const user = authenticateUser(username, password);
      
      if (user) {
        // Set user session
        req.session.user = { id: user.id, username: user.username };
        setSessionCookie(res, 'token', user.id);
        res.status(200).json({ success: true, message: 'Login successful' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } else if (action === 'signup') {
      if (!users.find(user => user.username === username)) {
        // Create new user
        const newUser = { id: users.length + 1, username, password };
        users.push(newUser);
        // Set user session
        req.session.user = { id: newUser.id, username: newUser.username };
        setSessionCookie(res, 'token', newUser.id);
        res.status(200).json({ success: true, message: 'Signup successful' });
      } else {
        res.status(400).json({ success: false, message: 'Username already exists' });
      }
    } else {
      res.status(400).json({ success: false, message: 'Invalid action' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

// Middleware to serialize session cookie
export function setSessionCookie(res, name, value) {
  const cookie = serialize(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/'
  });
  res.setHeader('Set-Cookie', cookie);
}
