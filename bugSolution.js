```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Initial');

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Mounted!');
  }, []);

  useEffect(() => {
    //This effect runs whenever 'name' changes
    console.log('Name changed:', name);
  }, [name]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName('Updated')}>Update Name</button>
    </div>
  );
}
```