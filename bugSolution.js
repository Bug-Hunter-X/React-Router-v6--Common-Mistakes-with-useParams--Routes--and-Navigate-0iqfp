To fix the `useParams` issue, ensure your routes are enclosed within the `<Routes>` component.  For example:
```javascript
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return <div>Component ID: {id}</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/component/:id" element={<MyComponent />} />
        <Route path="/*" element={<Navigate replace to="/component/1" />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```
For nested routes, maintain proper nesting in your `Routes` component to ensure correct path matching. For Navigate, always ensure that the `to` prop is a valid path or path relative to the current location. Always use `replace` prop appropriately for intended behavior.
Fixing the redirect after login would also require adding a conditional rendering based on the logged in status and only redirect after successful authentication.